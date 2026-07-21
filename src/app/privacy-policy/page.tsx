import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abdullah Hashim Company | Privacy Policy",
  description: "Learn how Abdullah Hashim Company collects, uses, and protects your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="py-[120px]">
      <div className="container mx-auto">
        {/* Page Title */}
        <h1 className="mb-[120px] text-[#1E1E1E] text-center text-[2.5rem] font-bold">Privacy Policy</h1>

        {/* Content */}
        <div className="flex flex-col gap-[50px]">
          {/* 1. Introduction */}
          <div className="policy-section">
            <h2 className="policy-heading">Privacy Policy</h2>
            <div className="flex flex-col gap-3">
              <p className="policy-text">
                Abdullah Hashim Company (hereinafter referred to as “the Company”, “we”, “us”, or “our”) is one of the
                leading automotive agencies in the Kingdom of Saudi Arabia, specializing in vehicle sales, leasing,
                maintenance, and related services.We represent global automotive brands and provide a wide range of
                mobility solutions, including car sales (new and used), spare parts, after-sales services, extended
                warranty programs, insurance facilitation, and financing support through authorized partners.
              </p>
              <p className="policy-text">
                Protecting your personal data and respecting your privacy are central to our business values and in line
                with the Saudi Personal Data Protection Law (PDPL) and its implementing regulations.
              </p>
            </div>
          </div>

          {/* 2. Information We Collect */}
          <div className="policy-section">
            <h2 className="policy-heading">2. Purpose</h2>
            <div className="flex flex-col gap-3">
              <p className="policy-text">
                This Privacy Notice explains how Abdullah Hashim Company collects, uses, stores, and shares your
                personal data in connection with our products and services.It also outlines your rights and how you can
                exercise them. We ensure that all personal data is processed lawfully, fairly, and transparently, in
                accordance with PDPL and other applicable Saudi regulatory requirements.{" "}
              </p>
            </div>
          </div>

          {/* 3. How We Use Your Information */}
          <div className="policy-section">
            <h2 className="policy-heading">3. What Personal Data We Collect and How We Collect It</h2>
            <div className="flex flex-col">
              <span className="policy-text">
                We collect personal data directly from you when you interact with us, such as when you:
              </span>
              <ul className="pl-6 flex flex-col">
                {[
                  "Purchase or lease a vehicle.",
                  "Book a test drive or schedule vehicle service.",
                  "Visit our showrooms, service centers, or website.",
                  "Contact our sales or customer service teams.",
                  "Participate in marketing or satisfaction surveys.",
                  "Communicate through email, phone, WhatsApp, or social media.",
                  "Engage with our digital platforms, online booking forms, or mobile applications.",
                  "We may also receive information indirectly from third parties such as authorized dealers, financing partners, insurance providers, and publicly available sources.",
                  "Categories of Personal Data",
                ].map((item, i) => (
                  <li key={i} className="policy-list-item">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="overflow-x-auto mt-[24px]">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#131313]">
                      {["Category", "Details"].map((header) => (
                        <th key={header} className="cookie-th">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        type: "Stock Products",
                        details: "Full name, gender, nationality, date and place of birth, National ID/IQAMA, passport number, driving license number, signature, and photo identification.",
                      },
                      {
                        type: "Contact Information",
                        details: "Home or business address, email address, phone number, and national address.",
                      },
                      {
                        type: "Financial Information",
                        details: "Vehicle purchase details, payment information, financing data, insurance coverage, and related financial transactions.",
                      },
                      {
                        type: "Transaction Data",
                        details: "Vehicle purchase agreements, maintenance contracts, warranty records, parts orders, and service invoices.",
                      },
                      {
                        type: "Sensitive Data",
                        details: "Biometric or health data where legally required (e.g., driver fitness certificates or accident claims).",
                      },
                      {
                        type: "Employment & Education Data",
                        details: "Occupation, employer, and employment details (only when required for credit or lease applications).",
                      },
                      {
                        type: "Family & Relationship Data",
                        details: "Emergency contacts, authorized drivers, or vehicle co-owners.",
                      },
                      {
                        type: "Interaction Data",
                        details: "Call recordings, chat transcripts, customer feedback, and social media interactions.",
                      },
                      {
                        type: "Video Surveillance Data",
                        details: "CCTV recordings from showrooms, service centers, and parking areas.",
                      },
                      {
                        type: "Device & Geolocation Data",
                        details: "IP address, GPS location (for connected vehicles or mobile apps), and technical identifiers.",
                      },
                      {
                        type: "Cookies & Online Activity Data",
                        details: "Login details, browsing preferences, pages visited, time spent, and clicks on our website.",
                      },
                      {
                        type: "Marketing Preferences",
                        details: "Subscription status and communication preferences.",
                      },
                      {
                        type: "Other Information",
                        details: "Any data you provide via forms, applications, or direct communications.",
                      },
                    ].map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-[#EFEFEF]" : "bg-[#E8E8E8]"}>
                        {[row.type, row.details].map((cell, cellIdx) => (
                          <td key={cellIdx} className={`cookie-td ${idx % 2 === 0 ? "bg-[#EFEFEF]" : "bg-[#E8E8E8]"}`}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
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
            <h2 className="policy-heading">5. How We Use Your Personal Data</h2>
            <div className="flex flex-col">
              <span className="policy-text">We use your personal data for purposes such as:</span>
              <ul className="pl-6 flex flex-col">
                {[
                  "Processing vehicle purchases, leasing, maintenance, and warranty claims.",
                  "Facilitating vehicle registration and insurance issuance.",
                  "Managing customer accounts and service history.",
                  "Scheduling test drives, maintenance appointments, and service reminders.",
                  "Handling customer inquiries, complaints, and feedback.",
                  "Providing after-sales support and recall notifications.",
                  "Managing payment transactions and financing requests through authorized partners.",
                  "Conducting customer satisfaction and quality assurance surveys.",
                  "Complying with legal, tax, and regulatory obligations.",
                  "Protecting against fraud, theft, and misuse of vehicles or data.",
                  "Sending promotional offers and product updates (with your consent).",
                  "Improving customer experience through data analytics and website enhancements.",
                ].map((item, i) => (
                  <li key={i} className="policy-list-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 6. Data Retention */}
          <div className="policy-section">
            <h2 className="policy-heading">6. With whom do we share your personal data</h2>
            <div className="flex flex-col">
              <span className="policy-text">Your personal data may be shared with:</span>
              <ul className="pl-6 flex flex-col">
                {[
                  <><strong>Authorized Dealers and Branches:</strong> For vehicle sales, maintenance, and warranty support.</>,
                  <><strong>Financial Institutions:</strong> For lease, installment, or financing arrangements.</>,
                  <><strong>Insurance Companies:</strong> For vehicle coverage and claims management.</>,
                  <><strong>Service Providers:</strong> IT hosting, CRM, logistics, and marketing partners who support our operations under strict confidentiality agreements.</>,
                  <><strong>Regulatory or Government Authorities:</strong> Upon lawful request or when required for licensing, taxation, or compliance.</>,
                  <><strong>Legal and Professional Advisors:</strong> For compliance, audit, or dispute resolution.</>,
                  <><strong>Vehicle Manufacturers:</strong> For warranty, recall, and product quality assurance.</>,
                  <><strong>Law Enforcement:</strong> When required for accident investigation or fraud prevention.</>,
                  <><strong>With Your Consent:</strong> For any additional sharing beyond the above cases.</>,
                ].map((item, i) => (
                  <li key={i} className="policy-list-item">
                    {item}
                  </li>
                ))}
              </ul>
              <span className="policy-text mt-2">
                All third parties are required to handle your data in compliance with applicable privacy and security standards.
              </span>
            </div>
          </div>

          {/* 7. Your Rights */}
          <div className="policy-section">
            <h2 className="policy-heading">7. Data Retention</h2>
            <p className="policy-text">
              We retain your personal data only for as long as necessary to fulfill the purpose for which it was
              collected and as required by law.Retention periods vary depending on the service type, contractual
              obligations, or regulatory requirements (e.g., warranty, taxation, or safety recalls).When the retention
              period expires, we will securely delete or anonymize your data to prevent re-identification.
            </p>
          </div>

          {/* 8. Security */}
          <div className="policy-section">
            <h2 className="policy-heading">8. Marketing and Communication</h2>
            <p className="policy-text">
              We may contact you about new vehicles, promotions, maintenance offers, or customer events that may
              interest you.You may withdraw your consent at any time by contacting us or using the unsubscribe link in
              our communications.We will retain your preference record to ensure we respect your choice in the future.
            </p>
          </div>

          {/* 9. Updates to This Privacy Policy */}
          <div className="policy-section">
            <h2 className="policy-heading">9. How We Keep Your Data Secure</h2>
            <div className="flex flex-col">
              <span className="policy-text">
                Abdullah Hashim Company implements advanced administrative, technical, and physical safeguards to ensure your data remains confidential and secure. These include:
              </span>
              <ul className="pl-6 flex flex-col">
                {[
                  "Data encryption and access controls.",
                  "Regular vulnerability assessments and monitoring.",
                  "Secure storage within Saudi Arabia (or approved regions with equivalent protection).",
                  "Employee training on data protection and privacy.",
                  "Strict confidentiality obligations for all service providers.",
                ].map((item, i) => (
                  <li key={i} className="policy-list-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 10. Contact Us */}
          <div className="policy-section">
            <h2 className="policy-heading">10. International Data Transfers</h2>
            <p className="policy-text">
              If your personal data needs to be shared outside the Kingdom, it will only be done in accordance with PDPL
              requirements.We ensure that any such transfer is made to countries with adequate data protection laws or
              through approved contractual safeguards ensuring equivalent privacy protection.
            </p>
          </div>

          <div className="policy-section">
            <h2 className="policy-heading">11. Your Rights</h2>
            <div className="flex flex-col">
              <span className="policy-text">Under PDPL, you have the following rights:</span>
              <ul className="pl-6 flex flex-col">
                {[
                  <><strong>Right to Be Informed</strong> about how your data is collected and used.</>,
                  <><strong>Right to Access</strong> your personal data.</>,
                  <><strong>Right to Request a Copy</strong> of your personal data.</>,
                  <><strong>Right to Correct</strong> inaccurate or incomplete data.</>,
                  <><strong>Right to Delete</strong> your personal data when no longer required or unlawfully processed.</>,
                  <><strong>Right to Withdraw Consent</strong> at any time.</>,
                  <><strong>Right to File a Complaint</strong> with the Saudi Data and Artificial Intelligence Authority (SDAIA) if you believe your rights have been violated.</>,
                ].map((item, i) => (
                  <li key={i} className="policy-list-item">
                    {item}
                  </li>
                ))}
              </ul>
              <span className="policy-text mt-2">
                We will process all valid requests within 30 days, extendable once with notification if additional time is required.
              </span>
            </div>
          </div>
          <div className="policy-section">
            <h2 className="policy-heading">12. Protection of Minors and Legally Incompetent Persons</h2>
            <p className="policy-text">
              Our services are intended for adults and legally competent individuals.If we process data of minors (e.g.,
              as beneficiaries of vehicle insurance), it must be provided or approved by a parent or legal guardian.
            </p>
          </div>
          <div className="policy-section">
            <h2 className="policy-heading">13. Your Responsibilities</h2>
            <p className="policy-text">
              You are responsible for ensuring the accuracy of the information you provide and for informing us promptly
              of any changes.If you share personal data of other individuals (such as a co-driver or guarantor), you
              must ensure that they are aware of this Privacy Notice.
            </p>
          </div>
          <div className="policy-section">
            <h2 className="policy-heading">14. Social Media and Public Platforms</h2>
            <p className="policy-text">
              We advise you not to share sensitive or personal information on our social media pages (Instagram, X,
              YouTube, etc.), as these platforms are publicly accessible.
            </p>
          </div>
          <div className="policy-section">
            <h2 className="policy-heading">15. Updates to This Privacy Notice</h2>
            <p className="policy-text">We advise you not to share sensitive or personal information on our social media pages (Instagram, X, YouTube, etc.), as these platforms are publicly accessible.</p>
          </div>
                  {/* 9. Contact Us */}
          <div className="policy-section">
            <h2 className="policy-heading">9. Contact Us</h2>
            <div className="flex flex-col">
              <span className="policy-text">
                If you have any questions, requests, or concerns regarding this Privacy Notice or your data rights,
                please contact our Data Protection Officer (DPO) at:
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
