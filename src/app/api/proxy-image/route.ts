import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const urlParam = req.nextUrl.searchParams.get("url");
  if (!urlParam) {
    return new NextResponse("Missing url param", { status: 400 });
  }

  try {
    const parsedUrl = new URL(urlParam);
    
    // Parse the allowed API domain from environment
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "";
    let apiDomain = "";
    try {
      if (apiUrl) {
        apiDomain = new URL(apiUrl).hostname;
      }
    } catch {
      // Ignore if apiUrl is not a valid URL
    }

    const ALLOWED_DOMAINS = [
      "localhost",
      "127.0.0.1",
      apiDomain,
      "admin.ahcl.com.sa",
      "ahcl.com.sa"
    ].filter(Boolean);

    if (!ALLOWED_DOMAINS.includes(parsedUrl.hostname)) {
      return new NextResponse("Forbidden: Domain not allowed", { status: 403 });
    }

    if (parsedUrl.protocol !== "http:" && parsedUrl.protocol !== "https:") {
      return new NextResponse("Forbidden: Protocol not allowed", { status: 403 });
    }

    const res = await fetch(parsedUrl.toString(), {
      headers: {
        // Some servers require a User-Agent
        "User-Agent": "Mozilla/5.0",
      },
      // Don't cache on the edge, we want fresh images
      cache: "no-store",
    });

    if (!res.ok) {
      return new NextResponse("Failed to fetch image", { status: res.status });
    }

    const contentType = res.headers.get("content-type") || "image/jpeg";
    const arrayBuffer = await res.arrayBuffer();

    return new NextResponse(arrayBuffer, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "public, max-age=86400",
      },
    });
  } catch {
    return new NextResponse("Failed to proxy image", { status: 500 });
  }
}
