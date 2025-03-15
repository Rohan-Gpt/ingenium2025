import Image from "next/image";

export function SponsorShowcase() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h3 className="text-center text-lg font-medium text-gray-300">
          Platinum Sponsors
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={`platinum-${i}`}
              className="bg-white/5 rounded-xl p-8 flex items-center justify-center hover:bg-white/10 transition-colors border border-white/10"
            >
              <Image
                src="/placeholder-logo.svg"
                alt={`Platinum Sponsor ${i}`}
                width={200}
                height={80}
                className="max-h-16 w-auto"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-center text-lg font-medium text-gray-300">
          Gold Sponsors
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={`gold-${i}`}
              className="bg-white/5 rounded-xl p-6 flex items-center justify-center hover:bg-white/10 transition-colors border border-white/10"
            >
              <Image
                src="/placeholder-logo.svg"
                alt={`Gold Sponsor ${i}`}
                width={150}
                height={60}
                className="max-h-12 w-auto"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-center text-lg font-medium text-gray-300">
          Silver Sponsors
        </h3>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={`silver-${i}`}
              className="bg-white/5 rounded-xl p-4 flex items-center justify-center hover:bg-white/10 transition-colors border border-white/10"
            >
              <Image
                src="/placeholder-logo.svg"
                alt={`Silver Sponsor ${i}`}
                width={100}
                height={40}
                className="max-h-8 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
