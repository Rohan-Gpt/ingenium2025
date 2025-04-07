import Image from "next/image";
import Link from "next/link";

export function SponsorShowcase() {
  return (
    <div className="space-y-12 flex flex-col items-center justify-center mx-auto px-4 md:px-6">
      <div className="space-y-4">
        <h3 className="text-center text-lg font-medium text-gray-300">
          Title Sponsor
        </h3>
        <Link href={"https://electrosteel.com"} target="_blank">
          <div className="bg-white/5 rounded-xl p-14 flex items-center justify-center hover:bg-white/10 transition-colors border border-purple-600 max-w-lg shadow-lg hover:shadow-xl shadow-purple-600 mx-auto">
            <Image
              src="/electrosteel.png"
              alt={`ElectroSteel`}
              width={400}
              height={90}
            />
          </div>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-quto">
        <div className="space-y-4">
          <h3 className="text-center text-lg font-medium text-gray-300">
            Merchandise Partner
          </h3>
          <div className="">
            <div className="bg-white/5 rounded-xl p-10 flex items-center justify-center hover:bg-white/10 transition-colors border border-white/10">
              <Image
                src="/Reel2Real.png"
                alt={`Reel2Real`}
                width={260}
                height={60}
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-center text-lg font-medium text-gray-300 mb-4">
            Silver Sponsors
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-quto">
            <div className="space-y-4">
              <div className="">
                <div className="bg-white/5 rounded-xl p-6 flex items-center justify-center hover:bg-white/10 transition-colors border border-white/10">
                  <Image
                    src="/love-birds.jpg"
                    alt={`Love Birds`}
                    width={92}
                    height={60}
                  />
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="">
                <div className="bg-white/5 rounded-xl p-6 flex items-center justify-center hover:bg-white/10 transition-colors border border-white/10">
                  <Image src="/gtpl.jpg" alt={`GTPL`} width={160} height={60} />
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="">
                <div className="bg-white/5 rounded-xl p-10 flex items-center justify-center hover:bg-white/10 transition-colors border border-white/10">
                  <Image
                    src="/camtek.jpg"
                    alt={`CAMTEK`}
                    width={250}
                    height={60}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4 flex flex-col items-center">
        <h3 className="text-center text-lg font-medium text-gray-300">
          Bronze Sponsors
        </h3>
        <div className="grid grid-cols-2 gap-4 justify-center">
          <div className="bg-white/5 rounded-xl p-4 flex items-center justify-center hover:bg-white/10 transition-colors border border-white/10">
            <Image
              src="/siyatech.png"
              alt="Siyatech"
              width={200}
              height={40}
              className="max-h-8 w-auto"
            />
          </div>
          <div className="bg-white/5 rounded-xl p-4 flex items-center justify-center hover:bg-white/10 transition-colors border border-white/10">
            <Image
              src="/tiffin.png"
              alt="Tiffin"
              width={200}
              height={40}
              className="max-h-8 w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
