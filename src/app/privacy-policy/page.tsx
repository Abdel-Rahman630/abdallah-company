import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abdullah Hashim Company | Privacy Policy",
  description:
    "Learn how Abdullah Hashim Company collects, uses, and protects your personal data.",
};

export default function PrivacyPolicyPage() {
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
          Privacy Policy
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
                &ldquo;our&rdquo;) is committed to protecting your privacy and handling your
                personal data with transparency and care.
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
                This Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you visit our website, in
                accordance with the Saudi Personal Data Protection Law (PDPL)
                and other applicable regulations.
              </p>
            </div>
          </div>

          {/* 2. Information We Collect */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <h2
              style={{
                color: "#1E1E1E",
                fontSize: "2rem",
                fontWeight: 700,
              }}
            >
              2. Information We Collect
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
                We may collect personal information that you voluntarily provide
                to us, such as your name, email address, phone number, and any
                other details you submit through our contact or subscription
                forms.
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
                We also automatically collect certain technical data when you
                visit our website, including your IP address, browser type,
                device information, and pages visited, to help us improve our
                services.
              </p>
            </div>
          </div>

          {/* 3. How We Use Your Information */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <h2
              style={{
                color: "#1E1E1E",
                fontSize: "2rem",
                fontWeight: 700,
              }}
            >
              3. How We Use Your Information
            </h2>
            <p
              style={{
                color: "#666",
                fontSize: "1rem",
                fontWeight: 400,
                lineHeight: "1.75",
              }}
            >
              We use the information we collect to respond to your inquiries,
              send newsletters and updates you have subscribed to, improve our
              website and services, comply with legal obligations, and protect
              the rights and safety of our users and the Company.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
