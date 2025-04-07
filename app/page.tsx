"use client";
import Link from "next/link";
import { Footer } from "@/components/footer";
import Preloader from "@/components/Redirect";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Events from "@/components/events/Events";
import FAQ from "@/components/faq/FAQ";

import Image from "next/image";
import Sponsors from "@/components/sponsor/Sponsors";
import RegistrationClosedDialog from "@/components/resgistration-closed-dialog";
import RegistrationClosedButton from "@/components/closed-dialog";
import CodingCompetitionSection from "@/components/code-maina/coding-competition-section";

export default function Home() {
  // Festival date - set to 3 months from now

  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Preloader
          text="Back to the Future"
          minLoadingTime={2000}
          onLoadingComplete={() => setLoading(false)}
        />
      ) : (
        <>
          <AnimatePresence>
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.1 }}
              className="sticky top-3 z-30 flex justify-between w-auto -mt-20 mx-7 lg:mx-20 rounded-xl bg-transparent backdrop-blur-sm border border-white text-white px-6 py-4 items-center hover:bg-white/15 transition-all"
            >
              <Link href={"/"}>
                <Image
                  src={"/ingenium.png"}
                  width={125}
                  height={31}
                  alt="INGENIUM"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector("#hero")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                />
              </Link>

              <div className="flex items-center space-x-4">
                {/* <Link
                  href="#events"
                  className="flex items-center bg-white font-semibold text-black px-4 py-1 rounded-lg hover:drop-shadow-lg hover:shadow-white hover:-translate-y-1 transition-all group"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector("#events")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Register now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="hidden md:block ml-2 w-6 h-6 group-hover:translate-x-2 transition-all"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </Link> */}
                <RegistrationClosedButton />
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="min-h-screen bg-black text-white overflow-hidden">
            <RegistrationClosedDialog />
            <AnimatePresence>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                {/* Hero Section */}
                <section
                  id="hero"
                  className="relative h-screen flex items-center justify-center overflow-hidden md:pt-10"
                >
                  <Hero />
                </section>

                {/* About Section */}
                <section
                  id="about"
                  className="relative py-24 bg-gradient-to-b from-black to-purple-950/30"
                >
                  <About />
                </section>
                <section>
                  <CodingCompetitionSection />
                </section>

                {/* Events Section */}
                <section
                  id="events"
                  className="py-24 bg-gradient-to-b from-purple-950/30 to-black"
                >
                  <Events />
                </section>

                {/* Speakers Section */}
                {/* <section
                  id="speakers"
                  className="py-24 bg-gradient-to-b from-black to-blue-950/30"
                >
                  <Speakers />
                </section> */}

                {/* Registration Section */}
                {/* <section
                  id="register"
                  className="py-24 bg-gradient-to-b from-blue-950/30 to-black relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,80,255,0.15),transparent_70%)]"></div>
                  <Registration />
                </section> */}

                {/* Sponsors Section */}
                <section
                  id="sponsors"
                  className="py-24 bg-gradient-to-b from-black to-purple-950/20"
                >
                  <Sponsors />
                </section>

                {/* FAQ Section */}
                <section
                  id="faq"
                  className="py-24 bg-gradient-to-b from-purple-950/20 to-black"
                >
                  <FAQ />
                </section>

                {/* Newsletter Section */}
                {/* <section className="py-24 bg-gradient-to-r from-purple-900/30 to-blue-900/30 relative">
                  <div className="absolute inset-0 bg-black/50"></div>
                  <NewsLetter />
                </section> */}

                <Footer />
              </motion.div>
            </AnimatePresence>
          </div>
        </>
      )}
    </>
  );
}
