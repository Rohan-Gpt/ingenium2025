import Link from "next/link";

export default function FAQ() {
  return (
    <div className="flex justify-center mx-auto">
      <div className="container px-4 md:px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-sm font-medium tracking-wider uppercase text-purple-300 mb-4">
            FAQ
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-lg">
            Everything you need to know about INGENIUM 2025.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-screen mx-auto">
          <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors duration-300">
            <h3 className="text-xl font-medium mb-3">
              When and where is INGENIUM 2025?
            </h3>
            <p className="text-gray-400">
              INGENIUM 2025 will take place from April 8th to 9th, 2025, at Guru
              Nanak Institute of Technology, Kolkata.
            </p>
          </div>
          <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors duration-300">
            <h3 className="text-xl font-medium mb-3">
              Who can attend INGENIUM?
            </h3>
            <p className="text-gray-400">
              INGENIUM is open to students, professionals, entrepreneurs, and
              anyone interested in technology and innovation.
            </p>
          </div>
          <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors duration-300">
            <h3 className="text-xl font-medium mb-3">
              Can we participate solo in group events?
            </h3>
            <p className="text-gray-400">
              Yes, you can participate in group events as a solo participant.
            </p>
          </div>
          <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors duration-300">
            <h3 className="text-xl font-medium mb-3">
              Where can i get the brochure of the event?
            </h3>
            <p className="text-gray-400">
              The brochure of the event will be available on the INGENIUM
              website and at GNIT campus.
            </p>
          </div>
          <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors duration-300">
            <h3 className="text-xl font-medium mb-3">
              How can I participate in the events?
            </h3>
            <p className="text-gray-400">
              You can register for events on the INGENIUM website or at GNIT
              campus .
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <Link
            href="/contact"
            className="text-purple-400 hover:text-purple-300 font-medium"
          >
            Contact our support team →
          </Link>
        </div>
      </div>
    </div>
  );
}
