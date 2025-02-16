"use client";
import { split } from "@/animation/common";
import About from "@/pages/about";
import Projects from "@/pages/projects";
import Tools from "@/pages/tools";
import Footer from "@/component/footer";
import React, { useEffect } from "react";
import Hero from "@/pages/hero";
import AOS from "aos";
import Nav from "@/component/nav";

export default function Home() {
  useEffect(() => {
    split();
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <main>
      <div className="all-businesses scroll-snap-y scroll-snap-mandatory">
        <Nav />
        <Hero />
        <About />
        <Projects />
        {/* <Tosin /> */}
        <div className="footer">
          <Tools />
        </div>
        <Footer />
      </div>
    </main>
  );
}
