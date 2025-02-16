import React from "react";
import Ballotchain from "@/assets/image/ballotchain.jpeg";
import Clubarant from "@/assets/image/clubarant.jpeg";
import LearnlyApp from "@/assets/image/learnlyapp.jpeg";
import Image from "next/image";
import Link from "next/link";

const Project = () => {
  const projects = [
    {
      id: 1,
      label: "Ballotchain",
      imgUrl: Ballotchain,
      link: '/ballotchain'
    },
    {
      id: 2,
      label: "Clubarant",
      imgUrl: Clubarant,
      link: '/clubarant'
    },
    {
      id: 3,
      label: "Learnlyapp",
      imgUrl: LearnlyApp,
      link: '/learnlyapp'
    },
  ];
  return (
    <section
      className="h-auto business-section scroll-snap-start flex items-center justify-center px-5 md:px-8 pt-14 md:pt-1"
      id="project"
    >
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 w-full h-full">
        {projects.map((project) => (
          <Link data-aos='zoom-in' href={project.link} key={project.id}>
            <div className="h-[350px] relative rounded-lg">
              <Image
                src={project.imgUrl}
                className="w-full rounded-lg h-full object-cover"
                alt={project.label}
              />
              <div className="absolute top-0 h-full rounded-lg w-full bg-[#0000001a]"></div>
            </div>
            <div className="font-mainlux font-[300] text-[1.5rem] leading-[3.44rem] pt-4">
              {project.label}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Project;
