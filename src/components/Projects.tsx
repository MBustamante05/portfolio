import { projects } from "../data/projectData";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div id="projects" className="pb-20 bg-black min-h-screen">
      <div className="mx-auto md:w-[748px] w-full sm:px-3 px-5 pt-20">
        <h1 className="lg:text-7xl md:text-6xl text-5xl font-bold text-white">Projects</h1>
        <div className="grid lg:grid-cols-2 gap-5 mt-12">
          {projects.map((project) => (
            <ProjectCard
            id={project.id}
              key={project.name}
              name={project.name}
              description={project.description}
              image={project.images[0]}
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
