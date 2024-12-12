"use client";
import { split } from "@/animation/common";
import Landing from "@/pages/hero";
import About from "@/pages/about";
import Projects from "@/pages/projects";
import Tools from "@/pages/tools";
import Footer from "@/component/footer";
import Tosin from "@/pages/explore";
import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    split();
  }, []);

  return (
    <main>
      <div className="all-businesses scroll-snap-y scroll-snap-mandatory">
        <Landing />
        <About />
        <Projects />
        <Tosin />
        <div className="footer">
          <Tools />
        </div>
        <Footer />
      </div>
    </main>
  );
}
