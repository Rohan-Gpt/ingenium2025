import { Button } from "../ui/button";

export default function Registration() {
  return (
    <div className="flex justify-center mx-auto">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-sm font-medium tracking-wider uppercase text-purple-300 mb-4">
            Join Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Secure Your Spot at INGENIUM 2025
          </h2>
          <p className="text-gray-400 text-lg">
            Early bird registrations are now open. Don't miss out on the biggest
            tech festival of the year!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gradient-to-b from-purple-900/20 to-purple-900/10 border border-purple-500/20 rounded-2xl p-8 text-center relative overflow-hidden group hover:border-purple-500/40 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <h3 className="text-xl font-bold mb-2 relative z-10">
              Student Pass
            </h3>
            <div className="text-3xl font-bold mb-4 relative z-10">$49</div>
            <ul className="space-y-3 mb-8 text-sm text-gray-300 relative z-10">
              <li>Access to all events</li>
              <li>Workshop participation</li>
              <li>Hackathon entry</li>
              <li>Swag bag</li>
              <li>Certificate of participation</li>
            </ul>
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white relative z-10">
              Get Ticket
            </Button>
          </div>

          <div className="bg-gradient-to-b from-blue-900/30 to-blue-900/20 border border-blue-500/30 rounded-2xl p-8 text-center relative overflow-hidden group hover:border-blue-500/50 transition-all duration-300 transform scale-105 shadow-xl">
            <div className="absolute top-0 left-0 right-0 px-4 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-xs font-bold uppercase tracking-wider">
              Most Popular
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <h3 className="text-xl font-bold mb-2 mt-4 relative z-10">
              Pro Pass
            </h3>
            <div className="text-3xl font-bold mb-4 relative z-10">$99</div>
            <ul className="space-y-3 mb-8 text-sm text-gray-300 relative z-10">
              <li>All Student Pass benefits</li>
              <li>Priority workshop registration</li>
              <li>Exclusive networking events</li>
              <li>Premium swag kit</li>
              <li>1-year digital subscription</li>
            </ul>
            <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white relative z-10">
              Get Ticket
            </Button>
          </div>

          <div className="bg-gradient-to-b from-indigo-900/20 to-indigo-900/10 border border-indigo-500/20 rounded-2xl p-8 text-center relative overflow-hidden group hover:border-indigo-500/40 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <h3 className="text-xl font-bold mb-2 relative z-10">VIP Pass</h3>
            <div className="text-3xl font-bold mb-4 relative z-10">$199</div>
            <ul className="space-y-3 mb-8 text-sm text-gray-300 relative z-10">
              <li>All Pro Pass benefits</li>
              <li>VIP lounge access</li>
              <li>Speaker dinner invitation</li>
              <li>One-on-one mentoring session</li>
              <li>Lifetime community membership</li>
            </ul>
            <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white relative z-10">
              Get Ticket
            </Button>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">
            Group discounts available for teams of 5 or more
          </p>
          <Button
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10"
          >
            Contact for Group Rates
          </Button>
        </div>
      </div>
    </div>
  );
}
