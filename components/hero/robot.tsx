import Image from "next/image";
// import { ScrollParallax } from "react-just-parallax";
export const Gradient = () => {
  return (
    <>
      <div className="relative z-1 h-6 mx-2.5 bg-n-11 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-8" />
      <div className="relative z-1 h-6 mx-6 bg-n-11/70 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-20" />
    </>
  );
};

export default async function Robot() {
  return (
    <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
      <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
        <div className="relative bg-n-8 rounded-[1rem]">
          <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

          <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
            <Image
              src={"/service-3.png"}
              className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
              width={1024}
              height={490}
              alt="AI"
            />
          </div>
        </div>

        <Gradient />
      </div>
      <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
        <Image
          src={"/sphere.png"}
          className="w-full"
          width={1440}
          height={1800}
          alt="hero"
        />
      </div>
    </div>
  );
}
