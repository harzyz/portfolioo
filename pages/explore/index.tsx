import React from "react";
import "./index.scss";
import Tosin from "@/assets/image/tosin.svg";
import Image from "next/image";

const Explore = () => {
  return (
    <section className="relative">
      <div className="flex">
        <div className="overflow-hidden whitespace-nowrap relative h-64 flex-1 flex items-center justify-center">
          <div className="flex gap-20 animate-scroll items-center justify-center">
            <h1 className="font-bold text-[#808080] text-[200px]">Azeez</h1>
            <h1 className="font-bold text-[#808080] text-[200px]">Azeez</h1>
            <h1 className="font-bold text-[#808080] text-[200px]">Azeez</h1>
            <h1 className="font-bold text-[#808080] text-[200px]">Azeez</h1>
            <h1 className="font-bold text-[#808080] text-[200px]">Azeez</h1>
            <h1 className="font-bold text-[#808080] text-[200px]">Azeez</h1>
            <h1 className="font-bold text-[#808080] text-[200px]">Azeez</h1>
            <h1 className="font-bold text-[#808080] text-[200px]">Azeez</h1>
            {/* <Image src={Tosin} width={10800} height={800} alt="projects" />
            <Image src={Tosin} width={10800} height={800} alt="projects" />
            <Image src={Tosin} width={10800} height={800} alt="projects" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
