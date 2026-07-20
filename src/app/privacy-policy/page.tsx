import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abdullah Hashim Company | Privacy Policy",
  description:
    "Learn how Abdullah Hashim Company collects, uses, and protects your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        {/* Page Title */}
        <h1 className="mb-[120px] text-[#1E1E1E] text-center text-[2.5rem] font-bold">
          Privacy Policy
        </h1>

        {/* Content */}
        <div className="flex flex-col gap-[50px]">

          {/* 1. Introduction */}
          <div className="policy-section">
            <h2 className="policy-heading">1. Introduction</h2>
            <div className="flex flex-col gap-3">
              <p className="policy-text">
                Abdullah Hashim Company (&ldquo;the Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or
                &ldquo;our&rdquo;) is committed to protecting your privacy and handling your
                personal data with transparency and care.
              </p>
              <p className="policy-text">
                This Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you visit our website, in
                accordance with the Saudi Personal Data Protection Law (PDPL)
                and other applicable regulations.
              </p>
            </div>
          </div>

          {/* 2. Information We Collect */}
          <div className="policy-section">
            <h2 className="policy-heading">2. Information We Collect</h2>
            <div className="flex flex-col gap-3">
              <p className="policy-text">
                We may collect personal information that you voluntarily provide
                to us, such as your name, email address, phone number, and any
                other details you submit through our contact or subscription
                forms.
              </p>
              <p className="policy-text">
                We also automatically collect certain technical data when you
                visit our website, including your IP address, browser type,
                device information, and pages visited, to help us improve our
                services.
              </p>
            </div>
          </div>

          {/* 3. How We Use Your Information */}
          <div className="policy-section">
            <h2 className="policy-heading">3. How We Use Your Information</h2>
            <div className="flex flex-col">
              <span className="policy-text">We use the information we collect to:</span>
              <ul className="pl-6 flex flex-col">
                {[
                  "Respond to your inquiries and support requests.",
                  "Send newsletters and updates you have subscribed to.",
                  "Improve our website and services.",
                  "Comply with legal obligations.",
                  "Protect the rights and safety of our users and the Company.",
                ].map((item, i) => (
                  <li key={i} className="policy-list-item">{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* 4. Legal Basis for Processing */}
          <div className="policy-section">
            <h2 className="policy-heading">4. Legal Basis for Processing</h2>
            <div className="flex flex-col">
              <span className="policy-text">We process your personal data based on:</span>
              <ul className="pl-6 flex flex-col">
                <li className="policy-list-item">
                  <strong>Consent:</strong> When you voluntarily provide your data through forms or subscriptions.
                </li>
                <li className="policy-list-item">
                  <strong>Contractual Necessity:</strong> To fulfill obligations under a contract with you.
                </li>
                <li className="policy-list-item">
                  <strong>Legitimate Interest:</strong> To improve our services and ensure website security.
                </li>
                <li className="policy-list-item">
                  <strong>Legal Obligation:</strong> To comply with applicable Saudi laws and regulations.
                </li>
              </ul>
            </div>
          </div>

          {/* 5. Sharing Your Information */}
          <div className="policy-section">
            <h2 className="policy-heading">5. Sharing Your Information</h2>
            <div className="flex flex-col">
              <span className="policy-text">We do not sell your personal data. We may share it with:</span>
              <ul className="pl-6 flex flex-col">
                <li className="policy-list-item">
                  <strong>Service Providers:</strong> Third parties who assist us in operating our website or conducting our business, subject to confidentiality agreements.
                </li>
                <li className="policy-list-item">
                  <strong>Legal Authorities:</strong> When required by law or to protect our legal rights.
                </li>
                <li className="policy-list-item">
                  <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets.
                </li>
              </ul>
            </div>
          </div>

          {/* 6. Data Retention */}
          <div className="policy-section">
            <h2 className="policy-heading">6. Data Retention</h2>
            <p className="policy-text">
              We retain your personal data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, or as required by applicable law. Once no longer needed, your data will be securely deleted or anonymized.
            </p>
          </div>

          {/* 7. Your Rights */}
          <div className="policy-section">
            <h2 className="policy-heading">7. Your Rights</h2>
            <div className="flex flex-col">
              <span className="policy-text">Under the Saudi PDPL and applicable regulations, you have the right to:</span>
              <ul className="pl-6 flex flex-col">
                {[
                  "Access the personal data we hold about you.",
                  "Request correction of inaccurate or incomplete data.",
                  "Request deletion of your data where legally permissible.",
                  "Withdraw your consent at any time without affecting prior processing.",
                  "Lodge a complaint with the relevant regulatory authority.",
                ].map((item, i) => (
                  <li key={i} className="policy-list-item">{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* 8. Security */}
          <div className="policy-section">
            <h2 className="policy-heading">8. Security</h2>
            <p className="policy-text">
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          {/* 9. Updates to This Privacy Policy */}
          <div className="policy-section">
            <h2 className="policy-heading">9. Updates to This Privacy Policy</h2>
            <p className="policy-text">
              This Privacy Policy was last updated in October 2025. We may update it from time to time to reflect regulatory or operational changes. Updated versions will be published on our website, and your continued use of our services will constitute acceptance of any revisions.
            </p>
          </div>

          {/* 10. Contact Us */}
          <div className="policy-section">
            <h2 className="policy-heading">10. Contact Us</h2>
            <div className="flex flex-col">
              <span className="policy-text">
                If you have any questions, requests, or concerns regarding this Privacy Policy or your data rights, please contact our Data Protection Officer (DPO) at:
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
