"use client";
import React from "react";
import StickyNavPage from "./sticky-nav";

const Hero = () => {
  return (
    <section className="heroBackground business-section h-[100vh] relative" id="azeez">

      <div className="">
        <div className="flex justify-center flex-col items-center absolute bottom-[230px] left-0 right-0 mx-auto">
          <p data-aos='fade-down' className="font-mainlux font-[300] text-[1.25rem] leading-8 text-[#fff]">
            Frontend Engineer
          </p>
          <p data-aos='zoom-in' className="font-spartans leading-[88.32px] text-[2rem] md:text-[3rem] lg:text-[6rem] font-[500] text-[#fff]">
            Abdul-Azeez Ahmed
          </p>
        </div>
        <div>
          <StickyNavPage />
        </div>
      </div>
    </section>
  );
};

export default Hero;
