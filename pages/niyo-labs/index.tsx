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
        <h1 className="font-bold px-8 pt-10 text-3xl">HARZYZ</h1>
      </Link>
      <div className="w-full  md:pl-8 px-5 pt-20">
        <p className="font-spartans text-[1.2rem] md:text-[1.7rem] leading-[2.07rem] font-[400] text-[#000]">
          LearnlyApp
        </p>
        <p className="font-spartans leading-[88.32px] text-[1.5rem] md:text-[4rem] font-[500] text-[#000]">
          Educational Technology
        </p>

        <div className="flex-col md:flex-row mt-[2rem] md:mt-[5rem]">
          <div className="flex-1">
            <p className="font-mainlux leading-[2rem] md:leading-[3rem] font-[900] text-[1.5rem] md:text-[2rem]">
              LearnlyApp
            </p>
            <p className="font-mainlux leading-[2rem] font-[300] text-[1rem] pt-5 w-[100%] md:w-[75%]">
              LearnlyApp is the easiest way for Africans to learn tech skills.
              We&apos;re committed to empowering African organisations and
              individuals for success in our tech-driven world. Through Gamified
              learning, AI-driven learning assistants and our mentor-led
              programs. We provide essential guidance and support, helping
              businesses and individuals navigate the ever-evolving tech
              landscape.
            </p>
          </div>
          <div className="flex-1">
            <p className="font-mainlux leading-[2rem] md:leading-[3rem] font-[900] text-[1.5rem] md:text-[2rem]">
              Role
            </p>
            <ul className="font-mainlux leading-[2rem] font-[300] text-[1rem] pt-5 w-[100%] md:w-[75%]">
              <p>1. Architecting the Frontend Framework</p>
              <li>
                <span>Component Design:</span> Built reusable UI components for
                scalability, such as course cards, gamification elements (e.g.,
                leaderboards, badges), dashboards etc.
              </li>
              <li>
                State Management: Implemented efficient state management using
                Pinia librarry
              </li>
              <p>2. Creating Interactive UI/UX</p>
              <li>
                <span>Component Design:</span> Designed responsive and
                accessible interfaces for users across devices (mobile, tablet,
                desktop).
              </li>
              <li>
                <span>Gamification Features:</span> Developed features like
                badges, progress bars, and peer interaction tools.
              </li>
              <li>
                <span>Animations and Transitions:</span> Implemented animations
                to enhance user experience, such as transitions during course
                progress or rewards.
              </li>
              <p>3. Optimizing Performance</p>
              <li>
                <span>Code Splitting:</span> Implemented lazy loading and
                optimized assets to reduce initial load time.
              </li>
              <li>
                <span>SEO and Accessibility:</span> Ensured the platform is
                SEO-friendly with metadata and semantic HTML.
              </li>
              <li>
                <span>Browser Compatibility:</span> Tested across browsers to
                ensure a consistent experience.
              </li>
              <p>4. Backend Collaboration</p>
              <li>
                <span>API Integration:</span> Worked with backend engineers to
                integrate REST APIs for dynamic data, such as course content,
                user profiles leaderboards, jobs, Certificates, Learning
                Buddies, Subscription etc
              </li>
              <li>
                <span>Real-time Features:</span> Implemented WebSocket for
                real-time data fetching for collaborative learning sessions
                called Learn with a Friend
              </li>
            </ul>
          </div>
          <div className="flex-1 my-10">
            <Link
              href={"https://www.learnlyapp.io"}
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
