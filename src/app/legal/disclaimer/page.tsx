import type { Metadata } from "next";
import LegalPage from "@/components/ui/LegalPage";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "General disclaimer governing the information published on the Everlast Plastic website and product specifications.",
};

export default function DisclaimerPage() {
  return (
    <LegalPage
      index="L4"
      title="Disclaimer"
      intro="The information published on this website is provided for general informational purposes only and is subject to change without notice."
    >
      <h2>1. General information</h2>
      <p>
        While we make every effort to ensure that information is accurate and up to date, we
        do not warrant the completeness, reliability, or suitability of any content for any
        particular purpose.
      </p>

      <h2>2. Product specifications</h2>
      <p>
        Specifications, finishes, dimensions, and performance characteristics shown on this
        website are indicative. Final product details and project deliverables depend on
        confirmed sales documentation and shop drawings approved by our engineering team.
      </p>

      <h2>3. External links</h2>
      <p>
        Links to third-party websites are provided for convenience only. We do not endorse and
        are not responsible for the content, privacy practices, or accuracy of external
        websites.
      </p>

      <h2>4. Limitation of liability</h2>
      <p>
        We shall not be liable for any direct or indirect loss arising from the use of, or
        reliance on, information published on this website. Always consult our team for
        binding project information.
      </p>

      <h2>5. Color reproduction</h2>
      <p>
        Color and texture representations on screen may differ slightly from the actual
        product. Physical samples are recommended for final selection.
      </p>
    </LegalPage>
  );
}
