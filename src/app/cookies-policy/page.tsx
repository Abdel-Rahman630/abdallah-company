import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abdullah Hashim Company | Cookies Policy",
  description:
    "Learn how Abdullah Hashim Company uses cookies and similar technologies on our website.",
};

export default function CookiesPolicyPage() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        {/* Page Title */}
        <h1 className="mb-[120px] text-[#1E1E1E] text-center text-[2.5rem] font-bold">
          Cookies Policy
        </h1>

        {/* Content */}
        <div className="flex flex-col gap-[50px]">

          {/* 1. Introduction */}
          <div className="policy-section">
            <h2 className="policy-heading">1. Introduction</h2>
            <div className="flex flex-col gap-3">
              <p className="policy-text">
                Abdullah Hashim Company (&ldquo;the Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or
                &ldquo;our&rdquo;) uses cookies and similar technologies on our website to provide
                you with the best possible experience, analyze site usage, and
                personalize content.
              </p>
              <p className="policy-text">
                This Cookies Policy explains what cookies are, how we use them,
                and how you can manage your cookie preferences in accordance with
                the Saudi Personal Data Protection Law (PDPL) and other
                applicable regulations.
              </p>
            </div>
          </div>

          {/* 2. What Are Cookies? */}
          <div className="policy-section">
            <h2 className="policy-heading">2. What Are Cookies?</h2>
            <div className="flex flex-col gap-3">
              <p className="policy-text">
                Cookies are small text files stored on your device (computer,
                tablet, or smartphone) when you visit a website.
              </p>
              <p className="policy-text">
                They help us recognize your browser, remember your preferences,
                and improve how our website functions and performs.
              </p>
            </div>
          </div>

          {/* 3. Types of Cookies We Use */}
          <div className="policy-section">
            <h2 className="policy-heading">3. Types of Cookies We Use</h2>
            <p className="policy-text">
              We use the following categories of cookies on our website:
            </p>

            {/* Cookies Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#131313]">
                    {["Type", "Details", "Examples"].map((header) => (
                      <th key={header} className="cookie-th">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      type: "Strictly Necessary Cookies",
                      details:
                        "Home or business address, email address, phone number, and national address.",
                      examples: "Login sessions, load-balancing cookies",
                    },
                    {
                      type: "Performance and Analytics Cookies",
                      details:
                        "Collect anonymous data about how visitors use our website (e.g., pages visited, time spent). Used to improve website performance and user experience.",
                      examples: "Google Analytics, Hotjar",
                    },
                    {
                      type: "Functionality Cookies",
                      details:
                        "Allow the website to remember your preferences such as language, region, and user settings.",
                      examples: "Language preference, saved login details",
                    },
                    {
                      type: "Advertising and Targeting Cookies",
                      details:
                        "Track browsing habits to display relevant advertisements based on your interests. These may be set by us or by third-party advertising networks.",
                      examples: "Google Ads, Facebook Pixel",
                    },
                    {
                      type: "Social Media Cookies",
                      details:
                        "Enable sharing content directly through social-media platforms and measure engagement.",
                      examples: "LinkedIn, Instagram share buttons",
                    },
                  ].map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-[#EFEFEF]" : "bg-[#E8E8E8]"}>
                      {[row.type, row.details, row.examples].map((cell, cellIdx) => (
                        <td
                          key={cellIdx}
                          className={`cookie-td ${idx % 2 === 0 ? "bg-[#EFEFEF]" : "bg-[#E8E8E8]"}`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 4. How We Use Cookies */}
          <div className="policy-section">
            <h2 className="policy-heading">4. How We Use Cookies</h2>
            <div className="flex flex-col">
              <span className="policy-text">We use cookies to:</span>
              <ul className="pl-6 flex flex-col">
                {[
                  "Ensure secure website operation and functionality.",
                  "Remember your settings and preferences.",
                  "Analyze user traffic and improve website performance.",
                  "Deliver personalized offers and advertisements.",
                  "Understand customer behavior to enhance user experience.",
                ].map((item, i) => (
                  <li key={i} className="policy-list-item">
                    {item}
                  </li>
                ))}
              </ul>
              <span className="policy-text mt-2">
                We do not use cookies to collect sensitive personal data such as financial or identification information.
              </span>
            </div>
          </div>

          {/* 5. Managing Your Cookie Preferences */}
          <div className="policy-section">
            <h2 className="policy-heading">5. Managing Your Cookie Preferences</h2>
            <div className="flex flex-col">
              <span className="policy-text">You have full control over how cookies are used:</span>
              <ul className="pl-6 flex flex-col">
                <li className="policy-list-item">
                  <strong>Consent Banner:</strong> Upon your first visit, you will see a cookie-consent banner allowing you to accept or manage cookie categories.
                </li>
                <li className="policy-list-item">
                  <strong>Browser Settings:</strong> You can delete or block cookies by changing your browser settings. However, some website features may not function properly if you disable essential cookies.
                </li>
              </ul>
            </div>
          </div>

          {/* 6. Legal Basis for Using Cookies */}
          <div className="policy-section">
            <h2 className="policy-heading">6. Legal Basis for Using Cookies</h2>
            <div className="flex flex-col">
              <span className="policy-text">We rely on:</span>
              <ul className="pl-6 flex flex-col">
                <li className="policy-list-item">
                  Legitimate Interest: for strictly necessary cookies essential for security and functionality.
                </li>
                <li className="policy-list-item">
                  Consent: for analytics, advertising, and social-media cookies. You can withdraw your consent at any time via the cookie-settings tool on our website.
                </li>
              </ul>
            </div>
          </div>

          {/* 7. Retention of Cookie Data */}
          <div className="policy-section">
            <h2 className="policy-heading">7. Retention of Cookie Data</h2>
            <div className="flex flex-col">
              <span className="policy-text">Cookies remain on your device for varying periods:</span>
              <ul className="pl-6 flex flex-col">
                <li className="policy-list-item">
                  <strong>Session cookies</strong> are deleted automatically when you close your browser.
                </li>
                <li className="policy-list-item">
                  <strong>Persistent cookies</strong> remain until they expire or are deleted manually. We regularly review and update our cookie list to ensure compliance.
                </li>
              </ul>
            </div>
          </div>

          {/* 8. Updates to This Cookies Policy */}
          <div className="policy-section">
            <h2 className="policy-heading">8. Updates to This Cookies Policy</h2>
            <p className="policy-text">
              This Cookies Policy was last updated in October 2025. We may update it from time to time to reflect regulatory or operational changes. Updated versions will be published on our website, and your continued use of our services will constitute acceptance of any revisions.
            </p>
          </div>

          {/* 9. Contact Us */}
          <div className="policy-section">
            <h2 className="policy-heading">9. Contact Us</h2>
            <div className="flex flex-col">
              <span className="policy-text">
                If you have any questions, requests, or concerns regarding this Privacy Notice or your data rights, please contact our Data Protection Officer (DPO) at:
              </span>
              <ul className="pl-6 flex flex-col">
                <li className="policy-list-item">
                  <a href="mailto:dpo@ahcl.com.sa" className="policy-link">
                    dpo@ahcl.com.sa
                  </a>
                </li>
                <li className="policy-list-item">
                  <a
                    href="https://maps.google.com/?q=Abdullah+Hashim+Company+Head+Office+Jeddah+Saudi+Arabia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="policy-link"
                  >
                    Abdullah Hashim Company Head Office - Jeddah, Kingdom of Saudi Arabia
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
