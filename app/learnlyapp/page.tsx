"use client";
import Niyo from "@/pages/niyo-labs";
import Footer from "@/component/footer";
import React from "react";
import Nav from "@/component/nav";

export default function Niyolabs() {
  return (
    <main>
      <Nav project />
      <Niyo />
      <Footer />
    </main>
  );
}
