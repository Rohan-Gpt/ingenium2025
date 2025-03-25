import { Building2, Calendar, MapPin, Users } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";
export default function About() {
  return (
    <>
      <div className="flex justify-center mx-auto px-8 container md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-sm font-medium tracking-wider uppercase text-purple-300">
              About Ingenium
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Where Technology Meets Imagination
            </h2>
            <p className="text-gray-400 text-lg">
              INGENIUM is more than just a technical festival; it&apos;s a
              celebration of innovation, creativity, and the future of
              technology. Join us for two days of cutting-edge workshops,
              thrilling competitions, inspiring talks, and networking
              opportunities.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-600/20 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-medium">5,000+ Attendees</h3>
                  <p className="text-sm text-gray-400">From across the globe</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600/20 p-3 rounded-lg">
                  <Building2 className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-medium">50+ Colleges and Schools</h3>
                  <p className="text-sm text-gray-400">
                    From all over West Bengal
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-indigo-600/20 p-3 rounded-lg">
                  <Calendar className="h-6 w-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-medium">10+ Events</h3>
                  <p className="text-sm text-gray-400">competitions & more</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-violet-600/20 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-violet-400" />
                </div>
                <div>
                  <h3 className="font-medium">2 Days</h3>
                  <p className="text-sm text-gray-400">
                    Of non-stop innovation
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-xl opacity-70"></div>
            <motion.div
              className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-black shadow hover:shadow-2xl hover:shadow-purple-900"
              whileHover={{ scale: 1.05 }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
            >
              <Image
                className="w-full h-full object-cover"
                src={"/main-poster.png"}
                width={1920}
                height={1080}
                alt="INGENIUM"
              ></Image>
              {/* <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster="/placeholder.svg?height=720&width=1280"
              >
                <source src="https://example.com/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video> */}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
