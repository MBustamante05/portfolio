import { projects } from "../data/projectData";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div className="mt-10 bg-black min-h-screen">
      <div className="mx-auto w-[748px] pt-20">
        <h1 className="text-6xl font-bold text-white">Projects</h1>
        <div className="grid lg:grid-cols-2 gap-5 mt-12">
          {projects.map((project) => (
            <ProjectCard
              key={project.name}
              name={project.name}
              description={project.description}
              image={project.image}
              github={project.github}
              live={project.live}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
