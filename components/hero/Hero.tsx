import { ChevronRight, CircleArrowRight } from "lucide-react";
import { CountdownTimer } from "../countdown-timer";
import { HeroParticles } from "../hero-particles";
import { Button } from "../ui/button";
import Image from "next/image";

export default function Hero() {
  const festivalDate = new Date("2025-04-08T00:00:00");
  return (
    <>
      <HeroParticles />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
      <div className="container relative z-20 px-4 md:px-6 flex flex-col items-center text-center space-y-4 lg:mt-0 md:pt-16">
        {/* <div className="mb-10 inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-sm font-medium tracking-wider uppercase">
          Coming Soon
        </div> */}
        <div className="px-4">
          <br></br>
          <br></br>
          <p className="text-gray-400 text-3xl md:text-4xl font-black md:-mb-0">
            Guru Nanak Institute of Technology
          </p>
          <p className="text-xl md:text-2xl font-bold mt-2 md:mt-1">
            Department of Electronics & Computer Science
          </p>
        </div>
        <p className="text-gray-400 md:text-xl font-bold -mt-1">Presents</p>
        <Image
          src={"/ingenium.png"}
          width={700}
          height={89}
          alt="INGENIUM"
          className="max-w-full h-auto"
        />
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
          The ultimate celebration of technology, innovation, and creativity
        </p>
        <div className="mt-10 flex justify-center items-center flex-col">
          <CountdownTimer targetDate={festivalDate} />
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button
              className="cursor-pointer bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full py-4 text-lg"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#events")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Register Now
              <CircleArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20 animate-bounce">
        <ChevronRight
          className="cursor-pointer h-8 w-8 rotate-90 text-white/70"
          onClick={(e) => {
            e.preventDefault();
            document
              .querySelector("#about")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        />
      </div>
    </>
  );
}
