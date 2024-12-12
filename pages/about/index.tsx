import React from "react";
import "./index.scss";

const About = () => {
  return (
    <section
      className="min-h-screen pt-14 md:pt-1 business-section relative scroll-snap-start flex items-center justify-center"
      id="about"
    >
      <div className="w-full">
        <div className="flex flex-col justify-center items-center w-fit mx-auto">
          <div>
            <div className="w-[70%] border border-[#1E1E1E]"></div>
            <div className="font-spartans text-[1.7rem] md:text-[2.25rem] leading-[2.07rem] font-[400] pt-2 text-[#1E1E1E]">
              About me
            </div>
          </div>
        </div>

        <div className="about_section flex-col md:flex-row mt-[2rem] md:mt-[5rem]">
          <div className="flex-1 md:pl-8 px-5">
            {/* First child takes majority space */}
            <p className="font-mainlux leading-[2rem] md:leading-[3rem] font-[300] text-[1.5rem] md:text-[2rem]">
              I&apos;m a Software Engineer With a Strong Focus on Front-end
              Development Based in Lagos, Nigeria
            </p>
            <p className="font-mainlux leading-[1.72rem] font-[300] text-[1rem] pt-5">
              My journey into software engineering began three years ago, driven
              by a deep interest in turning creative designs into interactive,
              dynamic web applications. Over time, I&apos;ve expanded my skills
              to become proficient in both front-end development.
            </p>
            <p className="font-mainlux leading-[1.72rem] font-[300] text-[1rem] pt-9">
              I&apos;m passionate about using modern technologies to develop
              fast, responsive, and accessible user interfaces. I am equally
              comfortable integrating APIs, and ensuring that my applications
              are scalable and efficient.
            </p>

            <p className="font-mainlux leading-[1.72rem] font-[300] text-[1rem] pt-9">
              Whether I&apos;m collaborating with a team or building something
              from the ground up, I take pride in delivering high-quality
              software that meets users&apos; needs and exceeds their
              expectations.
            </p>
          </div>

          <div className="flex-none w-[1px] mx-4 border border-[#1E1E1E]"></div>

          <div className="overflow-hidden whitespace-nowrap relative h-64 flex-1 flex items-center justify-center">
            <div className="flex animate-scroll items-center justify-center">
              {/* Individual cards */}
              <div className="w-[350px] h-full m-4">
                <div className="text-[1.25rem] leading-[2.15rem] font-[300] font-mainlux">
                  Software Engineer
                </div>
                <div className="text-[3rem] leading-[5.16rem] font-[300] font-mainlux">
                  Union Systems
                </div>
              </div>
              <div className="w-64 h-full m-4">
                <div className="text-[1.25rem] leading-[2.15rem] font-[300] font-mainlux">
                  Frontend Engineer
                </div>
                <div className="text-[3rem] leading-[5.16rem] font-[300] font-mainlux">
                  Ballotchain
                </div>
              </div>
              <div className="w-64 h-full m-4">
                <div className="text-[1.25rem] leading-[2.15rem] font-[300] font-mainlux">
                  Frontend Engineer
                </div>
                <div className="text-[3rem] leading-[5.16rem] font-[300] font-mainlux">
                  Learnly App
                </div>
              </div>

              {/* Duplicate items for seamless scroll */}
              <div className="w-[350px] h-full m-4">
                <div className="text-[1.25rem] leading-[2.15rem] font-[300] font-mainlux">
                  Software Engineer
                </div>
                <div className="text-[3rem] leading-[5.16rem] font-[300] font-mainlux">
                  Union Systems
                </div>
              </div>
              <div className="w-64 h-full m-4">
                <div className="text-[1.25rem] leading-[2.15rem] font-[300] font-mainlux">
                  Frontend Engineer
                </div>
                <div className="text-[3rem] leading-[5.16rem] font-[300] font-mainlux">
                  Ballotchain
                </div>
              </div>
              <div className="w-64 h-full m-4">
                <div className="text-[1.25rem] leading-[2.15rem] font-[300] font-mainlux">
                  Frontend Engineer
                </div>
                <div className="text-[3rem] leading-[5.16rem] font-[300] font-mainlux">
                  Learnly App
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
