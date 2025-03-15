import Link from "next/link";

export default function FAQ() {
  return (
    <div className="flex justify-center mx-auto">
      <div className="container px-4 md:px-6">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors duration-300">
            <h3 className="text-xl font-medium mb-3">
              When and where is INGENIUM 2025?
            </h3>
            <p className="text-gray-400">
              INGENIUM 2025 will take place from March 15-17, 2025, at the Tech
              Convention Center in Silicon Valley, California.
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
              Are there accommodation options?
            </h3>
            <p className="text-gray-400">
              Yes, we have partnered with several hotels near the venue to
              provide discounted rates for INGENIUM attendees.
            </p>
          </div>
          <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors duration-300">
            <h3 className="text-xl font-medium mb-3">
              Can I get a refund if I can't attend?
            </h3>
            <p className="text-gray-400">
              Tickets are refundable up to 30 days before the event. After that,
              you can transfer your ticket to someone else.
            </p>
          </div>
          <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors duration-300">
            <h3 className="text-xl font-medium mb-3">
              How can I participate in the hackathon?
            </h3>
            <p className="text-gray-400">
              Hackathon registration is included with your ticket. You'll
              receive details on how to form or join a team closer to the event.
            </p>
          </div>
          <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors duration-300">
            <h3 className="text-xl font-medium mb-3">
              Will the talks be recorded?
            </h3>
            <p className="text-gray-400">
              Yes, all keynotes and selected sessions will be recorded and made
              available to ticket holders after the event.
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
