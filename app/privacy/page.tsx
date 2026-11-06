import type { Metadata } from "next";
import { Doc } from "@/components/doc";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Maharshi Pty Ltd collects, uses, and protects information in connection with the Birrung digital signage application.",
  alternates: { canonical: "/privacy" },
  openGraph: { title: "Privacy Policy", url: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <Doc eyebrow="Legal" title="Privacy Policy" path="/privacy">
      <p>Effective Date: 30 April 2026 Published by: Maharshi Pty Ltd T/A Birrung (ABN: 24 635 272 365)</p>
      <p>
        <strong>Jurisdiction:</strong> New South Wales, Australia
        <br />
        <strong>Contact:</strong> info@birrung.com.au
      </p>

      <h2>1. Introduction</h2>
      <p>
        Maharshi Pty Ltd (ABN: 24 635 272 365) (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and disclose information in connection with the Birrung digital signage application (&quot;App&quot;) available on the Google Play Store and compatible Smart TV and Android platforms.
      </p>
      <p>
        This Privacy Policy complies with the Australian Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs), as well as applicable international privacy laws including the General Data Protection Regulation (GDPR) where applicable to users in the European Economic Area.
      </p>
      <p>
        By using the Application, you acknowledge that you have read and understood this Privacy Policy and consent to the practices described herein.
      </p>

      <h2>2. Scope and Application</h2>
      <p>This Privacy Policy applies to:</p>
      <ul>
        <li>All users of the Birrung Application, whether individuals or business entities;</li>
        <li>All versions of the Application available on Google Play Store, Smart TV platforms, Android media players, Android TV boxes, Android media sticks, and compatible Android-powered display devices;</li>
        <li>All geographic regions in which the Application is made available, including Australia and internationally.</li>
      </ul>
      <p>
        This Privacy Policy does not apply to third-party services or websites that may be linked from within the Application. We encourage you to review the privacy policies of any third-party services you use.
      </p>

      <h2>3. Information We Collect</h2>
      <h3>3.1 Information You Provide to Us</h3>
      <p>When you register for or use the Application, we may collect:</p>
      <ul>
        <li>Account registration information such as name and email address (for account holders only);</li>
        <li>Business name and contact details (for business accounts);</li>
        <li>Payment information processed securely through Google Play billing (we do not store payment card details);</li>
        <li>Communications you send to us, including support requests or feedback.</li>
      </ul>
      <h3>3.2 Information We Do NOT Collect</h3>
      <p>
        The Birrung Application is a B2B digital signage tool and is NOT designed to collect personal information from end viewers of digital signage displays. Specifically, we do NOT collect:
      </p>
      <ul>
        <li>Government-issued identification numbers (e.g. passport numbers, driver licence numbers, Tax File Numbers);</li>
        <li>Date of birth or age information of display viewers;</li>
        <li>Sensitive personal information such as health, financial, racial, or biometric data;</li>
        <li>Location data from viewers of digital signage displays;</li>
        <li>Personal information of children under the age of 13.</li>
      </ul>
      <h3>3.3 Automatically Collected Technical Information</h3>
      <p>
        When the Application is in use, we may automatically collect limited technical data to maintain service quality, including:
      </p>
      <ul>
        <li>Device model, device type (Smart TV, Android media player, Android TV box, Android media stick, or other display unit), operating system version, and Android version;</li>
        <li>Application version number;</li>
        <li>Crash reports and error logs (used solely for debugging and improving the Application);</li>
        <li>Network connectivity status (online/offline) for synchronisation purposes;</li>
        <li>Content playback logs (e.g. which content items were displayed and at what time — for reporting to account holders only).</li>
      </ul>
      <p>This technical information is associated with your device or account and is not used to build advertising profiles.</p>

      <h2>4. How We Use Information</h2>
      <p>We use the information we collect for the following purposes:</p>
      <ul>
        <li>To provide, operate, and maintain the Application and its features across all supported Device types;</li>
        <li>To manage your account and process transactions;</li>
        <li>To send administrative communications such as account confirmations, updates, and support responses;</li>
        <li>To diagnose technical issues, fix bugs, and improve Application performance across Smart TVs, Android media players, and other supported Devices;</li>
        <li>To generate aggregated, anonymised usage analytics that inform product development;</li>
        <li>To comply with our legal obligations under Australian law and applicable international regulations;</li>
        <li>To protect the security and integrity of the Application and our systems.</li>
      </ul>
      <p>
        We will not use your information for direct marketing without your express consent, and you may withdraw consent at any time.
      </p>

      <h2>5. Legal Basis for Processing (GDPR — EEA Users)</h2>
      <p>For users in the European Economic Area, we process personal data on the following legal grounds:</p>
      <ul>
        <li><strong>Contractual Necessity:</strong> Processing required to provide you with the Application and related services;</li>
        <li><strong>Legitimate Interests:</strong> Processing for fraud prevention, security, and service improvement;</li>
        <li><strong>Legal Obligation:</strong> Processing required to comply with applicable laws;</li>
        <li><strong>Consent:</strong> Where we have obtained your express consent for specific processing activities.</li>
      </ul>

      <h2>6. Disclosure of Information</h2>
      <h3>6.1 We Do Not Sell Your Data</h3>
      <p>We do not sell, rent, or trade your personal information to third parties for their marketing or commercial purposes.</p>
      <h3>6.2 Service Providers</h3>
      <p>
        We may share limited information with trusted third-party service providers who assist us in operating the Application, subject to confidentiality obligations. These include:
      </p>
      <ul>
        <li>Cloud hosting and infrastructure providers;</li>
        <li>Analytics and crash reporting services (e.g. Firebase Crashlytics, Sentry);</li>
        <li>Payment processing via Google Play Store;</li>
        <li>Customer support platforms.</li>
      </ul>
      <h3>6.3 Legal Requirements</h3>
      <p>
        We may disclose information where required by law, court order, or regulatory authority, including to comply with Australian law enforcement requests or equivalent international obligations.
      </p>
      <h3>6.4 Business Transfers</h3>
      <p>
        In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will provide notice of such transfers and the choices available to you.
      </p>

      <h2>7. International Data Transfers</h2>
      <p>
        Maharshi Pty Ltd is based in Australia. The Application is available globally, and information may be stored or processed in countries outside your own, including Australia and countries where our third-party providers operate.
      </p>
      <p>
        Where we transfer personal data internationally, we take steps to ensure appropriate safeguards are in place consistent with the Australian Privacy Act and, where applicable, GDPR requirements.
      </p>

      <h2>8. Data Retention</h2>
      <p>
        We retain personal information only for as long as necessary to fulfil the purposes for which it was collected, or as required by law. Specifically:
      </p>
      <ul>
        <li>Account information is retained for the duration of your account and for a reasonable period thereafter for legal and administrative purposes;</li>
        <li>Technical logs and crash reports are retained for up to 12 months;</li>
        <li>Content playback records are retained for up to 24 months for reporting purposes.</li>
      </ul>
      <p>
        Upon account deletion, we will delete or anonymise your personal information within a reasonable timeframe, unless retention is required by law.
      </p>

      <h2>9. Data Security</h2>
      <p>
        We implement industry-standard technical and organisational measures to protect your information against unauthorised access, disclosure, alteration, or destruction. These include:
      </p>
      <ul>
        <li>Encryption of data in transit using TLS/HTTPS;</li>
        <li>Access controls limiting staff access to personal data on a need-to-know basis;</li>
        <li>Regular security reviews and vulnerability assessments;</li>
        <li>Secure third-party providers subject to data processing agreements.</li>
      </ul>
      <p>
        However, no method of electronic transmission or storage is 100% secure. In the event of a data breach affecting your rights, we will notify you and relevant regulators as required by law.
      </p>

      <h2>10. Your Privacy Rights</h2>
      <h3>10.1 Australian Users</h3>
      <p>Under the Australian Privacy Act and Australian Privacy Principles, you have the right to:</p>
      <ul>
        <li>Access personal information we hold about you;</li>
        <li>Request correction of inaccurate or incomplete information;</li>
        <li>Make a complaint to the Office of the Australian Information Commissioner (OAIC) at www.oaic.gov.au.</li>
      </ul>
      <h3>10.2 EEA Users (GDPR)</h3>
      <p>If you are located in the European Economic Area, you additionally have the right to:</p>
      <ul>
        <li>Request erasure of your personal data (right to be forgotten);</li>
        <li>Object to or restrict processing of your personal data;</li>
        <li>Request data portability;</li>
        <li>Lodge a complaint with your local data protection authority.</li>
      </ul>
      <h3>10.3 How to Exercise Your Rights</h3>
      <p>
        To exercise any of your rights, please contact us at info@birrung.com.au. We will respond within 30 days of receiving your request.
      </p>

      <h2>11. Children&apos;s Privacy</h2>
      <p>
        The Birrung Application is designed for business users and is not directed at, or intended for use by, children under the age of 13 (or the applicable age of digital consent in your jurisdiction).
      </p>
      <p>
        We do not knowingly collect personal information from children. If we become aware that we have inadvertently collected information from a child, we will take immediate steps to delete such information.
      </p>

      <h2>12. Google Play Store and Third-Party Platforms</h2>
      <p>
        The Application is distributed through the Google Play Store and is compatible with Smart TVs, Android media players, Android TV boxes, Android media sticks, and other compatible Android-powered display devices. Google may collect certain information in connection with your download and use of the Application in accordance with Google&apos;s own Privacy Policy, available at <a href="https://policies.google.com/privacy">https://policies.google.com/privacy</a>.
      </p>
      <p>
        We are not responsible for the data practices of Google or any other third-party platform. We encourage you to review their respective privacy policies.
      </p>

      <h2>13. Cookies and Tracking Technologies</h2>
      <p>
        The Birrung Application itself does not use cookies. However, if you access our website or web-based management portal, we may use cookies and similar tracking technologies to improve your browsing experience.
      </p>
      <p>
        You may control cookie preferences through your browser settings. Disabling cookies may affect some functionality of web-based services associated with the Application.
      </p>

      <h2>14. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or the Application&apos;s features. We will notify you of material changes by:
      </p>
      <ul>
        <li>Posting the updated Policy within the Application;</li>
        <li>Updating the effective date at the top of this document;</li>
        <li>Sending an email notification to registered account holders where required by law.</li>
      </ul>
      <p>
        Your continued use of the Application after the effective date of any changes constitutes your acceptance of the updated Privacy Policy.
      </p>

      <h2>15. Contact and Complaints</h2>
      <p>If you have any questions, concerns, or complaints about this Privacy Policy or our privacy practices, please contact our Privacy Officer:</p>
      <p>
        <strong>Company:</strong> Maharshi Pty Ltd
        <br />
        <strong>ABN:</strong> 24 635 272 365
        <br />
        <strong>Privacy Officer Email:</strong> info@birrung.com.au
        <br />
        <strong>Technical Support:</strong> info@birrung.com.au
        <br />
        <strong>Country:</strong> Australia
      </p>
      <p>If you are not satisfied with our response, Australian users may lodge a complaint with the Office of the Australian Information Commissioner (OAIC):</p>
      <p>
        <strong>OAIC Website:</strong> <a href="https://www.oaic.gov.au">www.oaic.gov.au</a>
        <br />
        <strong>OAIC Phone:</strong> 1300 363 992
      </p>
    </Doc>
  );
}
