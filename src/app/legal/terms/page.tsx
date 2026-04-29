import type { Metadata } from "next";
import LegalPage from "@/components/ui/LegalPage";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms governing your use of the Everlast Plastic website, product information, quotes, and sales engagements.",
};

export default function TermsPage() {
  return (
    <LegalPage
      index="L2"
      title="Terms of Service"
      intro={`These Terms govern your use of the ${COMPANY.legalName} website and any related communications, quotes, or commercial engagements with us.`}
    >
      <h2>1. Acceptance</h2>
      <p>
        By accessing this website or engaging with our team, you agree to these Terms. If you
        disagree with any part, please discontinue use of the website or services.
      </p>

      <h2>2. Use of the website</h2>
      <ul>
        <li>You agree not to misuse the website or attempt unauthorised access.</li>
        <li>You will not use the site for unlawful, fraudulent, or harmful purposes.</li>
        <li>You will not copy, reproduce, or redistribute content without written permission.</li>
      </ul>

      <h2>3. Product information</h2>
      <p>
        Specifications, sizes, and finishes shown on the website are indicative. Final
        deliverables depend on project requirements, available stock, and confirmed sales
        documentation. We reserve the right to update product information without notice.
      </p>

      <h2>4. Quotations and orders</h2>
      <p>
        Quotations are valid for the period stated on the document. Orders are confirmed only
        upon written acceptance and applicable payment terms. Lead times are estimates.
      </p>

      <h2>5. Warranty</h2>
      <p>
        Our products are covered by a written performance warranty. See the{" "}
        <a href="/legal/warranty">Warranty</a> page for full terms.
      </p>

      <h2>6. Intellectual property</h2>
      <p>
        All trademarks, logos, designs, photographs, and content on this site are the property
        of {COMPANY.legalName} or used with permission. Unauthorised use is prohibited.
      </p>

      <h2>7. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, we are not liable for any indirect or
        consequential damages arising from use of the website or our services. Our liability
        for any claim is limited to the amount paid for the relevant product or service.
      </p>

      <h2>8. Governing law</h2>
      <p>
        These Terms are governed by the laws of the Islamic Republic of Pakistan. Any disputes
        will be subject to the exclusive jurisdiction of the courts of Karachi.
      </p>

      <h2>9. Changes</h2>
      <p>
        We may update these Terms occasionally. The “Effective” date above will reflect the
        most recent revision.
      </p>
    </LegalPage>
  );
}
