"use client";
import Lenis from "@studio-freight/lenis";
import Tempus from "@studio-freight/tempus";
import router from "next/router";
import { createContext, useContext, useLayoutEffect, useState } from "react";

export const lenisCTX = createContext<Lenis | null>(null);

export const useLenis = () => useContext(lenisCTX);

export default function Lenify({ children }: { children: React.ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useLayoutEffect(() => {
    const lenis = new Lenis({
      duration: 1.6,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      infinite: false,
    });

    setLenis(lenis);

    const resize = setInterval(() => {
      lenis.resize();
    }, 150);
    function onFrame(time: number) {
      lenis.raf(time);
    }
    const unsubscribe = Tempus.add(onFrame);

    router.events.on("routeChangeStart", () => {
      lenis.scrollTo(0, { immediate: true });
    });

    return () => {
      unsubscribe();
      clearInterval(resize);
      setLenis(null);
      lenis.destroy();
    };
  }, []);

  return <lenisCTX.Provider value={lenis}>{children}</lenisCTX.Provider>;
}
