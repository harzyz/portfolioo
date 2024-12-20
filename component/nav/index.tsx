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
    console.log(`menuToggle`, menuToggle);
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
    <nav className="relative z-50">
      {" "}
      {!project && (
        <ul className="navList md:flex hidden justify-between items-center gap-5 text-white p-5 md:p-8">
          <div>
            {/* <Image width={100} height={40} src={logo} alt="Logo" /> */}
            <h1 className="font-bold text-3xl">Azeez</h1>
          </div>
        </ul>
      )}
      <div
        ref={menuRef}
        className={`bg-[#181818] md:hidden  flex items-start justify-between px-5 fixed top-0 w-full min-h-screen left-0 
          ${menuToggle ? "opacity-1  pt-5" : "opacity-0 hidden"}
        `}
      >
        <ul className="pt-14 flex-1 flex flex-col gap-10 text-white">
          {navList.map((item, index) => (
            <Link href={item.link} key={index} onClick={handleMenuToogle}>
              <li>{item.text}</li>
            </Link>
          ))}
        </ul>
        <div onClick={handleMenuToogle}>
          {/* <Image width={30} height={40} src={menu} alt="Logo" /> */}
          <h1 className="font-bold text-3xl">Azeez</h1>
        </div>
      </div>
      <div className="flex justify-between px-5 py-5 items-center md:hidden bg-[#181818] fixed w-full">
        <div>
          {/* <Image width={70} height={57} src={logo} alt="Logo" /> */}
          <h1 className="font-bold text-3xl">Azeez</h1>
        </div>
        <div onClick={handleMenuToogle}>
          {" "}
          {/* <Image width={30} height={40} src={menu} alt="Logo" /> */}
          <h1 className="font-bold text-3xl">Azeez</h1>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
