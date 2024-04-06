import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    // <></>
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="grid grid-cols-2 gap-2 h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Cricket Sphere"
          description="It is backend cricket app based on mongodb and nodejs.It includes User Authentication, Player Management, Team Management, Unmpire Management, live score saving, live score to database directly generator."
        />
        <ProjectCard
          src="/CardImage.png"
          title="Human Resource Management"
          description="This project is about Human Resource Management. Feartures include Secure admin login system, Employee Management, Invetor management, Team management ,assigning team member and leader, attendence sort using dates and recored of attendence."
        />
        {/* <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        /> */}
        {/* <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        /> */}
      </div>
    </div>
  );
};

export default Projects;
