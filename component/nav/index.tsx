"use client";
import gsap from "gsap";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";

const Nav = ({ project }: { project?: boolean }) => {
  const menuRef = useRef(null);
  const linksRef = useRef([]);
  const navList = [
    {
      text: "Azeez",
      link: "/#azeez",
    },
    {
      text: "About",
      link: "/#about",
    },
    {
      text: "Projects",
      link: "/#project",
    },
    {
      text: "Tools",
      link: "/#tools",
    },
  ];

  const [menuToggle, setMenuToggle] = useState(false);

  const handleMenuToogle = () => {
    setMenuToggle(!menuToggle);
  };

  useEffect(() => {
    if (menuToggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [menuToggle]);

  useEffect(() => {
    if (menuToggle) {
      // Animate the menu slide-in effect
      gsap.fromTo(
        menuRef.current,
        { y: "-100%", opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "easeIn" }
      );

      // Stagger animation for each menu item
      gsap.fromTo(
        linksRef.current,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.4, stagger: 0.1, ease: "power2.out" }
      );
    }
  }, [menuToggle]);

  return (
    <nav className="sticky top-0 z-[200]">
      <nav className="text-white bg-[#181818] md:hidden top-0 relative h-[80px]">
        <div
          ref={menuRef}
          className={`bg-[#181818] md:hidden flex items-start justify-between px-5 z-[20] absolute top-[80px] w-full min-h-[calc(100vh-80px)] left-0 
          ${menuToggle ? "opacity-1" : "opacity-0 hidden"}
        `}
        >
          <ul className="pt-14 flex-1 flex flex-col gap-10 text-white">
            {navList.map((item, index) => (
              <Link href={item.link} key={index} onClick={handleMenuToogle}>
                <li>{item.text}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-between md:hidden px-4 w-full h-full">
          <div>
            <h1 className="font-bold text-1xl">HARZYZ</h1>
          </div>
          <div
            onClick={handleMenuToogle}
            className={`${menuToggle && "change"}`}
          >
            <div className="toggler"></div>
            <div className="toggler"></div>
            <div className="toggler"></div>
          </div>
        </div>
      </nav>
    </nav>
  );
};

export default Nav;
