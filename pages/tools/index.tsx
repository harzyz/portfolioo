import React, { useState } from "react";
import FrontendTools from "./components/front";
import VersionControlTools from "./components/version-control";
import "./index.scss";

const Tools = () => {
  const [selectedTab, setSelectedTab] = useState("Front-end");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTabClick = (tab: string) => {
    if (tab !== selectedTab) {
      // Trigger transition
      setIsTransitioning(true);
      setTimeout(() => {
        setSelectedTab(tab);
        setIsTransitioning(false);
      }, 500);
    }
  };

  const renderSelectedComponent = () => {
    switch (selectedTab) {
      case "Front-end":
        return <FrontendTools />;
      // case "Back-end":
      //   return <BackendTools />;
      // case "Dev Ops":
      //   return <DevOpsTools />;
      case "Version Control":
        return <VersionControlTools />;
      // default:
      //   return null;
    }
  };

  return (
    <section
      className="min-h-screen business-section scroll-snap-start flex items-center justify-center px-5 md:px-8"
      id="tools"
    >
      <div className="w-full">
        <div className="flex flex-col justify-center items-center w-fit mx-auto">
          <div>
            <div className="w-[70%] border border-[#1E1E1E]"></div>
            <div className="font-spartans text-[2.25rem] leading-[2.07rem] font-[400] pt-2">
              Tools
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mt-8 w-full">
          <div className="flex gap-3 bg-[#F2F2F2E3] p-2 rounded-lg">
            <button
              className={`py-2  ${
                selectedTab === "Front-end" ? "bg-black text-white px-[0.5rem] md:px-4 rounded-md" : ""
              }`}
              onClick={() => handleTabClick("Front-end")}
            >
              Front-end
            </button>
            {/* <button
              className={`py-2  ${
                selectedTab === "Back-end" ? "bg-black text-white px-[0.5rem] md:px-4 rounded-md" : ""
              }`}
              onClick={() => handleTabClick("Back-end")}
            >
              Back-end
            </button> */}
            {/* <button
              className={`py-2  ${
                selectedTab === "Dev Ops" ? "bg-black text-white px-[0.5rem] md:px-4 rounded-md" : ""
              }`}
              onClick={() => handleTabClick("Dev Ops")}
            >
              Dev Ops
            </button> */}
            <button
              className={`py-2  ${
                selectedTab === "Version Control" ? "bg-black text-white px-[0.5rem] md:px-4 rounded-md" : ""
              }`}
              onClick={() => handleTabClick("Version Control")}
            >
              Version Control
            </button>
          </div>

          {/* Content with smooth fade and translate effect */}
          <div
            className={`mt-8 duration-500 w-full ${
              isTransitioning
                ? "opacity-0 translate-y-4"
                : "opacity-100 translate-y-0"
            }`}
          >
            {renderSelectedComponent()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
