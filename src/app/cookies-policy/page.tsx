import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abdullah Hashim Company | Cookies Policy",
  description:
    "Learn how Abdullah Hashim Company uses cookies and similar technologies on our website.",
};

export default function CookiesPolicyPage() {
  return (
    <section style={{ padding: "80px 0" }}>
      <div className="container mx-auto">
        {/* Page Title */}
        <h1
          style={{
            marginBottom: "80px",
            color: "#1E1E1E",
            textAlign: "center",
            fontSize: "2.5rem",
            fontWeight: 700,
          }}
        >
          Cookies Policy
        </h1>

        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
          {/* 1. Introduction */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <h2
              style={{
                color: "#1E1E1E",
                fontSize: "2rem",
                fontWeight: 700,
              }}
            >
              1. Introduction
            </h2>
            <div>
              <p
                style={{
                  color: "#666",
                  fontSize: "1rem",
                  fontWeight: 400,
                  lineHeight: "1.75",
                }}
              >
                Abdullah Hashim Company (&ldquo;the Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or
                &ldquo;our&rdquo;) uses cookies and similar technologies on our website to provide
                you with the best possible experience, analyze site usage, and
                personalize content.
              </p>
              <p
                style={{
                  color: "#666",
                  fontSize: "1rem",
                  fontWeight: 400,
                  lineHeight: "1.75",
                  marginTop: "12px",
                }}
              >
                This Cookies Policy explains what cookies are, how we use them,
                and how you can manage your cookie preferences in accordance with
                the Saudi Personal Data Protection Law (PDPL) and other
                applicable regulations.
              </p>
            </div>
          </div>

          {/* 2. What Are Cookies? */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <h2
              style={{
                color: "#1E1E1E",
                fontSize: "2rem",
                fontWeight: 700,
              }}
            >
              2. What Are Cookies?
            </h2>
            <div>
              <p
                style={{
                  color: "#666",
                  fontSize: "1rem",
                  fontWeight: 400,
                  lineHeight: "1.75",
                }}
              >
                Cookies are small text files stored on your device (computer,
                tablet, or smartphone) when you visit a website.
              </p>
              <p
                style={{
                  color: "#666",
                  fontSize: "1rem",
                  fontWeight: 400,
                  lineHeight: "1.75",
                  marginTop: "12px",
                }}
              >
                They help us recognize your browser, remember your preferences,
                and improve how our website functions and performs.
              </p>
            </div>
          </div>

          {/* 3. Types of Cookies We Use */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <h2
              style={{
                color: "#1E1E1E",
                fontSize: "2rem",
                fontWeight: 700,
              }}
            >
              3. Types of Cookies We Use
            </h2>
            <p
              style={{
                color: "#666",
                fontSize: "1rem",
                fontWeight: 400,
                lineHeight: "1.75",
              }}
            >
              We use the following categories of cookies on our website:
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
