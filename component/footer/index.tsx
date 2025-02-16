import React from "react";

const Explore = () => {
  return (
    <section
      className="relative business-section py-[2rem] px-8 2-[9999]"
      style={{ borderTop: "1px solid #8585853B" }}
      id="contact"
    >
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div>
            <h1 className="font-bold text-3xl cursor-pointer">HARZYZ</h1>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div>
            <a href="mailto: abdulahmedazeez5@gmail.com" className="font-mainlux cursor-pointer font-[300] text-[1rem] leading-[1.74rem]">
              abdulahmedazeez5@gmail.com
            </a>
          </div>
          <div>
            <a
              href={"https://www.linkedin.com/in/abdulazeezahmed/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="font-mainlux font-[300] text-[1rem] leading-[1.74rem]">
                LinkedIn
              </p>
            </a>
          </div>
          <div>
            <a
              href={"https://github.com/harzyz"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="font-mainlux font-[300] text-[1rem] leading-[1.74rem]">
                Github
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
