import type { Metadata } from "next";
import LegalPage from "@/components/ui/LegalPage";

export const metadata: Metadata = {
  title: "Accessibility",
  description:
    "Everlast Plastic accessibility statement outlining our commitment to making our digital experience usable for everyone.",
};

export default function AccessibilityPage() {
  return (
    <LegalPage
      index="L6"
      title="Accessibility Statement"
      intro="We are committed to ensuring our website is accessible to people with diverse abilities. This statement outlines our ongoing efforts and how to reach us with feedback."
    >
      <h2>1. Our commitment</h2>
      <p>
        We follow widely recognised accessibility guidelines, including the Web Content
        Accessibility Guidelines (WCAG) 2.1 Level AA, as a target for our digital experience.
      </p>

      <h2>2. Features we have implemented</h2>
      <ul>
        <li>Keyboard-navigable site structure and interactive elements.</li>
        <li>Sufficient color contrast for primary text and key interactive states.</li>
        <li>Reduced-motion respect: animations honour the user&rsquo;s OS-level preference.</li>
        <li>Semantic HTML and accessible labels on form controls.</li>
        <li>Mobile-responsive layouts across screen sizes.</li>
      </ul>

      <h2>3. Areas of ongoing improvement</h2>
      <p>
        We continuously improve our experience and welcome feedback. If you encounter any
        accessibility barriers, please let us know so we can prioritise fixes.
      </p>

      <h2>4. Contact</h2>
      <p>
        Send accessibility-related feedback to our team using the contact details below. We
        aim to respond within five business days.
      </p>
    </LegalPage>
  );
}
