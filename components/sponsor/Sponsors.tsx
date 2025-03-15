import { SponsorShowcase } from "../sponsor-showcase";
import { Button } from "../ui/button";

export default function Sponsors() {
  return (
    <div className="flex justify-center mx-auto">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-sm font-medium tracking-wider uppercase text-purple-300 mb-4">
            Our Partners
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Proudly Sponsored By
          </h2>
          <p className="text-gray-400 text-lg">
            INGENIUM is made possible by the support of our amazing sponsors and
            partners.
          </p>
        </div>

        <SponsorShowcase />

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">
            Interested in becoming a sponsor?
          </p>
          <Button
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10"
          >
            Download Sponsorship Deck
          </Button>
        </div>
      </div>
    </div>
  );
}
