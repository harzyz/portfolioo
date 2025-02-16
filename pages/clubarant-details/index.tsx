import React from "react";
import "./index.scss";
import Link from "next/link";

const Niyo = () => {
  return (
    <section className="">
      {/* <Link href={"/"}>
        <ul className="navList md:flex hidden justify-between items-center gap-5 text-white p-5 md:p-8">
          <div>
          <Image width={100} height={40} src={logo} alt="Logo" />
          </div>
          </ul>
          </Link> */}
      <Link href="/">
        <h1 className="font-bold px-8 pt-10 text-3xl">Az</h1>
      </Link>
      <div className="w-full md:pl-8 px-5 pt-20">
        <p className="font-spartans text-[1.2rem] md:text-[1.7rem] leading-[2.07rem] font-[400] text-[#000]">
          Clubarant
        </p>
        <p className="font-spartans leading-[88.32px] text-[1.5rem] md:text-[4rem] font-[500] text-[#000]">
          Digital Menu System
        </p>

        <div className="flex-col md:flex-row mt-[2rem] md:mt-[5rem]">
          <div className="flex-1">
            <p className="font-mainlux leading-[2rem] md:leading-[3rem] font-[900] text-[1.5rem] md:text-[2rem]">
              Role
            </p>
            <ul className="font-mainlux leading-[2rem] font-[300] text-[1rem] pt-5 w-[100%] md:w-[75%]">
              <p>1. Building the User Interface (UI):</p>
              <li>
                Designing and developing responsive, scalable, and aesthetically
                pleasing user interfaces for the digital menu platform. Ensuring
                compatibility across multiple devices such as tablets,
                smartphones, and desktops.
              </li>

              <p>2. User Experience (UX) Design:</p>
              <li>
                Collaborating with the design team to optimize the user
                experience, making the platform intuitive and easy to use for
                both businesses and customers.
              </li>

              <p>3. Real-Time Data Integration:</p>
              <li>
                Ensuring fast load times and smooth interactions on the
                platform. Using best practices for optimizing frontend
                performance.
              </li>

              {/* <p>4. Server-Side Logic</p>
              <li>
                Designing and building scalable backend services that manage
                user data, menu updates, and the overall platform’s
                functionality.
              </li> */}
              {/* <p>5. Database Management</p>
              <li>
                Setting up and maintaining the databases that store menu items,
                prices, business info, and user interactions. Ensuring data
                integrity and security.
              </li> */}
              <p>4. APIs & Integration</p>
              <li>
                Building and maintaining APIs to enable communication between
                the frontend and backend, and integrating with third-party
                services like payment gateways or analytics tools.
              </li>
              {/* <p>7. Code Reviews and Mentorship</p>
              <li>
                Mentored junior developer, conducted code reviews, and promoted
                best practices and code quality
              </li> */}
            </ul>
          </div>
          <div className="flex-1 my-10">
            <Link
              href={"https://www.clubarant.com"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="py-2 px-4 bg-black text-white">
                View Application
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Niyo;
