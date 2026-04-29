import type { Metadata } from "next";
import LegalPage from "@/components/ui/LegalPage";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "How and why Everlast Plastic uses cookies and similar technologies on its website to improve experience and analyse performance.",
};

export default function CookiesPage() {
  return (
    <LegalPage
      index="L3"
      title="Cookie Policy"
      intro="This Cookie Policy explains how we use cookies and similar technologies when you visit our website, what they do, and how you can manage them."
    >
      <h2>1. What are cookies?</h2>
      <p>
        Cookies are small text files placed on your device by websites you visit. They help
        sites function correctly, remember preferences, and provide analytics about how the
        site is used.
      </p>

      <h2>2. Cookies we use</h2>
      <ul>
        <li>
          <strong>Essential cookies</strong> — required for the basic operation of the site
          and for security.
        </li>
        <li>
          <strong>Performance cookies</strong> — collect aggregated information about how
          visitors use the site so we can improve it.
        </li>
        <li>
          <strong>Functional cookies</strong> — remember your preferences (e.g. language).
        </li>
        <li>
          <strong>Analytics cookies</strong> — help us understand visitor patterns through
          third-party tools.
        </li>
      </ul>

      <h2>3. Managing cookies</h2>
      <p>
        Most browsers allow you to view, manage, or delete cookies through their settings.
        Disabling some cookies may affect website functionality.
      </p>

      <h2>4. Third-party cookies</h2>
      <p>
        We may rely on third-party tools (such as analytics providers) that set their own
        cookies. Their privacy practices are governed by their own policies.
      </p>

      <h2>5. Updates</h2>
      <p>
        We may update this Cookie Policy as our practices evolve. The “Effective” date above
        will reflect the most recent revision.
      </p>
    </LegalPage>
  );
}
