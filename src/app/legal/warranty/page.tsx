import type { Metadata } from "next";
import LegalPage from "@/components/ui/LegalPage";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Warranty",
  description:
    "Everlast Plastic warranty policy outlining coverage, exclusions, and claim procedures for uPVC profiles and door systems.",
};

export default function WarrantyPage() {
  return (
    <LegalPage
      index="L5"
      title="Warranty Policy"
      intro={`${COMPANY.legalName} provides a written 10-year performance warranty on profile integrity, color stability, and hardware function under normal use and proper installation.`}
    >
      <h2>1. Coverage</h2>
      <ul>
        <li>Profile structural integrity under normal residential and commercial use.</li>
        <li>Color stability of laminated and solid finishes against fading.</li>
        <li>Hardware function (hinges, locks, rollers) when used as intended.</li>
      </ul>

      <h2>2. Duration</h2>
      <p>
        The warranty period begins on the date of installation or invoice — whichever is
        earlier — and continues for 10 years for profiles and 2 years for hardware.
      </p>

      <h2>3. Exclusions</h2>
      <ul>
        <li>Damage caused by improper installation by unauthorised parties.</li>
        <li>Misuse, accidents, vandalism, or natural disasters.</li>
        <li>Modifications, alterations, or repairs not authorised by us.</li>
        <li>Normal wear of consumable parts (e.g. weather seals, brushes).</li>
      </ul>

      <h2>4. Claim procedure</h2>
      <ol className="list-decimal pl-6 space-y-1">
        <li>Contact us in writing with project details and photographs.</li>
        <li>Our technical team will assess the claim, often via on-site visit.</li>
        <li>If covered, we repair or replace at our discretion under this warranty.</li>
      </ol>

      <h2>5. Limitations</h2>
      <p>
        The warranty is limited to the repair or replacement of defective material. It does
        not cover labour, transport, or consequential losses unless agreed in writing.
      </p>
    </LegalPage>
  );
}
