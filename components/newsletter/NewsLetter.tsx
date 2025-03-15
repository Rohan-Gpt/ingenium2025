import { Button } from "../ui/button";

export default function NewsLetter() {
  return (
    <div className="container px-4 md:px-6 relative z-10">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Stay Updated
        </h2>
        <p className="text-gray-300 text-lg mb-8">
          Subscribe to our newsletter for the latest updates, speaker
          announcements, and exclusive offers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 flex-grow"
          />
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full px-6">
            Subscribe
          </Button>
        </div>
        <p className="text-xs text-gray-400 mt-4">
          By subscribing, you agree to our Privacy Policy and consent to receive
          updates from INGENIUM.
        </p>
      </div>
    </div>
  );
}
