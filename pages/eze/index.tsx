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
      <Link href='/'>
        <h1 className="font-bold px-8 pt-10 text-3xl">Az</h1>
      </Link>
      <div className="w-full  md:pl-8 px-5 pt-20">
        <p className="font-spartans text-[1.2rem] md:text-[1.7rem] leading-[2.07rem] font-[400] text-[#000]">
          Ballotchain
        </p>
        <p className="font-spartans leading-[88.32px] text-[1.5rem] md:text-[4rem] font-[500] text-[#000]">
          Voting System
        </p>

        <div className="flex-col md:flex-row mt-[2rem] md:mt-[5rem]">
          <div className="flex-1">
            <p className="font-mainlux leading-[2rem] md:leading-[3rem] font-[900] text-[1.5rem] md:text-[2rem]">
              Ballotchain
            </p>
            <p className="font-mainlux leading-[2rem] font-[300] text-[1rem] pt-5 w-[100%] md:w-[75%]">
              Ballotchain is a convenient, Safe, Secure, and Transparent Online / Mobile Voting Platform where users can vote from their home, leveraging blockchain Technology&apos;s distributed ledger System to ensure the integrity of the voting process by providing live election results, multiple vote verification systems, and tamper-proof records of votes
            </p>
          </div>
          <div className="flex-1">
            <p className="font-mainlux leading-[2rem] md:leading-[3rem] font-[900] text-[1.5rem] md:text-[2rem]">
              Role
            </p>
            <ul className="font-mainlux leading-[2rem] font-[300] text-[1rem] pt-5 w-[100%] md:w-[75%]">
              <p>1. Building and Enhancing the User Interface</p>
              <li>
                <span>Component Design:</span> Used Next js to Build reusable UI
                components for scalability, and design and implemented
                user-friendly and responsive interfaces for the B2B marketplace.
              </li>
              <li>
                <span>Page Optimization:</span> Optimized page rendering
                performance with high-volume datasets, such as device
                inventories such that the page loades fast and effective.
              </li>
              <li>
                Ensure the platform performs well on all devices, including
                desktops, tablets, and mobile phones, catering to diverse
                business users.
              </li>
              <p>2. Custom Dashboards</p>
              <li>
                Developed personalized dashboards for admins to track voting results.
              </li>
              <li>
                Incorporate analytics.
              </li>
              <p>3. Backend Integration and API Consumption</p>
              <li>
                Integrated frontend components with backend services to display
                real-time data.
              </li>
              <li>
                Handle complex API responses.
              </li>

              {/* <p>4. Third-Party Integrations</p>
              <li>
                Work with third-party services for logistics, payment gateways,
                and inventory management systems.
              </li>
              <li>
                Seamlessly integrate tools for managing wholesale and
                certification processes.
              </li> */}
            </ul>
          </div>
          <div className="flex-1 my-10">
            <Link
              href={"https://beta.myballotchain.com"}
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
