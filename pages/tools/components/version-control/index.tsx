import React from "react";
import Project1 from "@/assets/image/git.svg";
import Project2 from "@/assets/image/slack.svg";
import Project3 from "@/assets/image/clickup.svg";
import Project4 from "@/assets/image/jira.svg";
import Project5 from "@/assets/image/shortcut.svg";
import Image from "next/image";

const VersionControl = () => {
  const colors = [
    { color: "#f0db4f", image: Project1 },
    { color: "#61dbfb", image: Project2 },
    { color: "#fff", image: Project3 },
    { color: "#2196F3", image: Project4 },
    { color: "#FF5722", image: Project5 },
    {},
    {},
    {},
    {},
    {},
  ];

  return (
    <div className="">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 py-4">
        {colors.map((color, index) => (
          <div
            data-aos="zoom-in"
            key={index}
            className={`flex justify-center rounded-lg min-h-[10rem] max-h-[15rem]  relative overflow-hidden px-4 md:px-0 ${
              color.color && "bg-[#F2F2F2E3]"
            }`}
          >
            <div
              className={`absolute inset-0 transition-transform duration-500 ease-out origin-left z-0 bg-[${color}] scale-x-0 group-hover:scale-x-100`}
              style={{ backgroundColor: color?.color && color?.color }} // Apply the color using inline styles
            ></div>
            {color?.image && (
              <div className="relative z-10 flex items-center">
                <Image src={color?.image} className="h-full" alt="projects" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VersionControl;
