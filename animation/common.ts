import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
// import { IO } from "./observer";

export const split = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
};
