import type { Metadata } from "next";
import { Doc } from "@/components/doc";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "How the Birrung mobile app and website use cookies and similar technologies, including Google Play.",
  alternates: { canonical: "/cookies" },
  openGraph: { title: "Cookie Policy", url: "/cookies" },
};

export default function CookiesPage() {
  return (
    <Doc eyebrow="Legal" title="Cookie Policy" path="/cookies">
      <p>
        Effective Date: 30 April 2026 Published by: Maharshi Pty Ltd T/A Birrung (ABN: 24 635 272 365) Jurisdiction: New South Wales, Australia Contact: info@birrung.com.au
      </p>
      <p>
        This Cookie Policy explains how Maharshi Pty Ltd uses cookies and similar technologies in the Birrung mobile application and on the Birrung website and web-based management portal. It forms part of our <a href="/privacy">Privacy Policy</a> and is provided so the disclosure can be linked from the Google Play listing for the app.
      </p>

      <h2>1. The Birrung app does not use cookies</h2>
      <p>
        The Birrung Application itself does not use cookies. It does not set advertising cookies, and it does not use cookies or similar technologies to build advertising profiles or to identify people who are looking at a digital signage screen.
      </p>
      <p>
        Google Play requires apps to disclose data collected by the app and by any SDKs it includes, and to keep that disclosure consistent with the Data safety section of the store listing. The technologies below are the ones used with the Application.
      </p>

      <h2>2. Similar technologies used by the app</h2>
      <p>
        Cookies are small text files stored by a browser. A mobile app can use similar technologies, such as on-device storage and identifiers collected by diagnostic SDKs. Where the Application uses those, it does so only to run the service:
      </p>
      <ul>
        <li>
          <strong>On-device cache.</strong> The Application may keep previously downloaded content on the Device so a screen can continue to play during a temporary network interruption. This cache stays on the Device, is not used to identify viewers, and is removed when you uninstall the Application.
        </li>
        <li>
          <strong>Sign-in state.</strong> If you use an account, the Application may store the details needed to keep that Device signed in and to synchronise content. This is associated with the account holder, not with people viewing a screen.
        </li>
        <li>
          <strong>Crash and diagnostic reports.</strong> Firebase Crashlytics and Sentry may receive the device model, device type, operating system and Android version, application version, and crash or error logs. These reports are used only to find and fix faults. They are not used for advertising. Technical logs and crash reports are kept for up to 12 months.
        </li>
        <li>
          <strong>Playback records.</strong> The Application may record which content items were displayed and when, so the account holder can see reports. These records are kept for up to 24 months.
        </li>
        <li>
          <strong>Connectivity status.</strong> The Application may record whether a Device is online or offline so content can synchronise. This is not precise location, and it is not collected from people viewing a screen.
        </li>
      </ul>
      <p>
        We do not sell, rent, or trade this information. We do not use the Android advertising ID to show ads or to track people across other companies&apos; apps.
      </p>

      <h2>3. Google Play and Google services</h2>
      <p>
        The Application is distributed through the Google Play Store. Payments for a paid subscription are processed by Google Play billing. We do not store your payment card details.
      </p>
      <p>
        Google may collect information about your download and use of the Application under its own policies, including when you use a Google account. That collection is controlled by Google, not by us. Read Google&apos;s Privacy Policy at <a href="https://policies.google.com/privacy">https://policies.google.com/privacy</a> and Google&apos;s description of cookies and similar technologies at <a href="https://policies.google.com/technologies/cookies">https://policies.google.com/technologies/cookies</a>.
      </p>
      <p>
        You can reset or delete your advertising ID, and opt out of Ads Personalisation, in your Android settings under Google, then Ads. Those controls apply to Google&apos;s own use of the advertising ID. Birrung does not use that identifier for advertising.
      </p>

      <h2>4. Cookies on the website and management portal</h2>
      <p>
        If you open the Birrung website or the web-based management portal, a browser may store cookies. We group those as follows:
      </p>
      <ul>
        <li>
          <strong>Strictly necessary.</strong> Required to deliver a page, keep a portal session signed in, and protect the service. The portal cannot provide account features without them.
        </li>
        <li>
          <strong>Preferences.</strong> Remember a choice you make in the browser, such as a saved setting. These are used only to provide the service you asked for.
        </li>
        <li>
          <strong>Advertising.</strong> We do not set advertising cookies on the website, the portal, or in the Application, and we do not allow third parties to use our app to build advertising profiles.
        </li>
      </ul>
      <p>
        This marketing website does not send font requests to Google. Typefaces are included with the site.
      </p>

      <h2>5. Information we do not collect with these technologies</h2>
      <p>In line with the Privacy Policy, these technologies are not used to collect:</p>
      <ul>
        <li>Government identifiers, such as passport numbers, driver licence numbers, or Tax File Numbers;</li>
        <li>Date of birth or age of people viewing a screen;</li>
        <li>Health, financial, racial, or biometric information;</li>
        <li>Location of people viewing a digital signage display;</li>
        <li>Personal information of children under 13.</li>
      </ul>

      <h2>6. How to control cookies and similar technologies</h2>
      <ul>
        <li>Uninstall the Application to remove the on-device cache and locally stored sign-in state.</li>
        <li>Use your browser settings to block or delete cookies. Blocking strictly necessary cookies can stop the management portal from signing you in.</li>
        <li>On Android, open Settings, then Google, then Ads, to delete the advertising ID or opt out of Ads Personalisation.</li>
        <li>Email info@birrung.com.au to access, correct, or delete account information. We respond within 30 days.</li>
      </ul>

      <h2>7. Changes to this policy</h2>
      <p>
        We may update this Cookie Policy when the Application or the website changes. The effective date at the top of this page will change, and material changes will be posted in the Application or on the website. Continued use after that date means you accept the updated policy.
      </p>

      <h2>8. Contact</h2>
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
      <p>
        If you are not satisfied with our response, you may contact the Office of the Australian Information Commissioner at <a href="https://www.oaic.gov.au">www.oaic.gov.au</a> or on 1300 363 992.
      </p>
    </Doc>
  );
}
