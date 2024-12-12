/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import React, { useEffect } from "react";
import ctl from "@netlify/classnames-template-literals";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";

import "./index.scss";

const scrollToSection = (start: number) => {
  gsap.to(window, {
    duration: 1,
    scrollTo: { y: start, autoKill: false, offsetY: -85 },
    ease: "power2",
  });
};

const FixedBar = ({}) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const links: any[] = gsap.utils.toArray(".pin-nav");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const sections: any[] = gsap.utils.toArray(
      ".all-businesses .business-section "
    );

    const navElement: any = document.querySelector(".innerBar");

    // ScrollTriggers to change the nav background color based on sections
    const colorTriggers = [
      { selector: ".about-tag", color: "black" }, // Red for About
      { selector: ".project-tag", color: "black" }, // Green for Projects
      { selector: ".tools-tag", color: "black" }, // Blue for Tools
    ];

    colorTriggers.forEach(({ selector, color }) => {
      ScrollTrigger.create({
        trigger: selector,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          if (navElement) navElement.style.color = color;
          console.log(navElement,"navElement")
        },
        onLeaveBack: () => {
          if (navElement) navElement.style.color = "white"; // reset or set to default color
        },
      });
    });

    // Optional: Reset to original background color on scroll to other sections
    ScrollTrigger.create({
      trigger: ".footer",
      start: "top center",
      onEnter: () => {
        if (navElement) navElement.style.color = "black"; // Reset in footer
      },
    });

    gsap.to(".fixedbar", {
      scrollTrigger: {
        trigger: ".footer",
        // start: "top -10%",
        // scrub: true,
        toggleActions: "play none none reverse",
        end: "top top",
      },
      opacity: 0,
      rotateX: 0,
      yPercent: 300,
      duration: 0.2,
      ease: "easeIn",
    });
    links.forEach((btn, index) => {
      const linkST = ScrollTrigger.create({
        trigger: sections[index],
        start: "top top",
      });

      btn.addEventListener("click", () => {
        if (index === 0) {
          scrollToSection(0);
        }
        scrollToSection(linkST.start);
        // scrollToSection(linkST.start);
        links.forEach((el) => el.classList.remove("active-tag"));
        btn.classList.add("active-tag");
      });
    });

    sections.forEach((section, i) => {
      ScrollTrigger.create({
        trigger: section,
        scroller: window,
        start: "top top",
        end: "bottom center",
        onToggle: (self) => self.isActive && setActive(links[i]),
      });
    });
    function setActive(link: any) {
      links.forEach((el) => el.classList.remove("active-tag"));
      link.classList.add("active-tag");
    }
  });

  return (
    <header className={`${mainHeaderStlye} fixedbar opacity-1 mb-11`}>
      <nav
        className={`innerBar ${navStyle}`}
        style={{ backgroundColor: "#ADACAC29", color: 'white' }}
      >
        <ul className="flex w-full justify-between items-center">
          <li className="pin-nav active-tag">
            <div className="tosin-tag inline-flex gap-1.5 md:gap-3 items-center p-1.5 md:p-2 rounded-md">
              <p className="text-sm md:text-[1.2rem] leading-[1.2rem]  font-mainlux font-[100] whitespace-nowrap">
                AZ
              </p>
            </div>
          </li>
          <li className="pin-nav  ">
            <div className="about-tag inline-flex gap-1.5 md:gap-3 items-center p-1.5 md:p-3 rounded-md">
              <p className="text-sm md:text-[1.2rem] leading-[1.2rem]  font-mainlux font-[100] whitespace-nowrap">
                About
              </p>
            </div>
          </li>
          <li className="pin-nav ">
            <div className="project-tag inline-flex gap-1.5 md:gap-3 items-center p-1.5 md:p-3 rounded-md ">
              <p className="text-sm md:text-[1.2rem] leading-[1.2rem]  font-mainlux font-[100] whitespace-nowrap">
                Projects
              </p>
            </div>
          </li>
          <li className="pin-nav ">
            <div className="tools-tag inline-flex gap-1.5 md:gap-3 items-center p-1.5 md:p-2 rounded-md ">
              <p className="text-sm md:text-[1.2rem] leading-[1.2rem]  font-mainlux font-[100] whitespace-nowrap">
                Tools
              </p>
            </div>
          </li>
          <li className="pin-nav ">
            <div className="tools-tag inline-flex gap-1.5 md:gap-3 items-center p-1.5 md:p-2 rounded-md ">
              <p className="text-sm md:text-[1.2rem] leading-[1.2rem]  font-mainlux font-[100] whitespace-nowrap">
                Contact
              </p>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const mainHeaderStlye = ctl(`

  fixed
  bottom-0
  left-0
  w-full
  z-[9998]
  pb-3
  lg:h-auto
`);

const navStyle = ctl(`

  flex
  items-center
  rounded-xl
  justify-center
  lg:justify-start
  backdrop-blur-[30px]
  p-[3px]
  md:p-2
  sticky-nav
  md:max-w-[650px]
  mx-auto
`);

const StickyNavPage = () => {
  return <FixedBar />;
};

export default StickyNavPage;
