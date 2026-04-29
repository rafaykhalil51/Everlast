import type { Metadata } from "next";
import LegalPage from "@/components/ui/LegalPage";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Everlast Plastic collects, uses, and protects personal information across our website, products, and services.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      index="L1"
      title="Privacy Policy"
      intro={`This Privacy Policy describes how ${COMPANY.legalName} (“we”, “us”, “our”) collects, uses, and shares information when you visit our website, request a quote, or communicate with our team.`}
    >
      <h2>1. Information we collect</h2>
      <p>
        When you interact with us, we may collect:
      </p>
      <ul>
        <li>Identification details such as name, company, phone number, and email address.</li>
        <li>Project details voluntarily shared in quote forms or correspondence.</li>
        <li>Technical data including IP address, browser type, device, and pages visited.</li>
        <li>Cookies and similar identifiers — see our{" "}
          <a href="/legal/cookies">Cookie Policy</a>.
        </li>
      </ul>

      <h2>2. How we use information</h2>
      <ul>
        <li>To respond to inquiries, send quotes, and deliver products and services.</li>
        <li>To improve our website, services, and customer support quality.</li>
        <li>To comply with legal obligations and protect our rights.</li>
        <li>To send service-related communications. Marketing messages are sent only with your consent.</li>
      </ul>

      <h2>3. Sharing of information</h2>
      <p>
        We do not sell personal data. We may share limited information with trusted service
        providers (such as hosting, analytics, and logistics partners) who are bound to
        confidentiality. We may disclose information when required by law or to protect rights.
      </p>

      <h2>4. Data retention</h2>
      <p>
        We retain personal data only as long as necessary to fulfil the purposes for which it
        was collected, or as required by applicable laws and accounting obligations.
      </p>

      <h2>5. Security</h2>
      <p>
        We use reasonable administrative, technical, and physical safeguards designed to
        protect your information against unauthorised access, loss, or misuse.
      </p>

      <h2>6. Your rights</h2>
      <p>
        Depending on your jurisdiction, you may request access to, correction of, or deletion
        of your personal data. You can also object to certain processing or withdraw consent
        previously given. Contact us using the details below to exercise these rights.
      </p>

      <h2>7. Children</h2>
      <p>
        Our services are not directed to children under 13, and we do not knowingly collect
        information from them.
      </p>

      <h2>8. Changes</h2>
      <p>
        We may update this Privacy Policy periodically. The “Effective” date above will reflect
        the most recent revision.
      </p>
    </LegalPage>
  );
}
