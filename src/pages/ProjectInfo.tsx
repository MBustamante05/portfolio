import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { projects } from "../data/projectData";
import Technology from "../components/Technology";
import {
  ChartNoAxesGantt,
  CodeXml,
  Github,
  Images,
  Link,
} from "lucide-react";
import Footer from "../components/Footer";

function ProjectInfo() {
  const links = "flex items-center gap-1 text-white px-3 py-1 bg-base-100 hover:bg-base-300 rounded-lg transition duration-300 ease-in-out";

  const { projectId } = useParams<{ projectId: string }>();
  const [titleUp, setTitleUp] = useState<string>("");
  const [titleDown, setTitleDown] = useState<string>("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [github, setGithub] = useState("");
  const [live, setLive] = useState("");
  const [technologies, setTechnologies] = useState<string[]>([]);

  useEffect(() => {
    const project = projects.find((p) => p.id === Number(projectId));
    if (project) {
      const title = project.name.split(" ");
      setTitleUp(title[0]);
      setTitleDown(title.slice(1).join(" "));
      setDescription(project.extendedDescription);
      setImages(project.images);
      setGithub(project.github);
      setLive(project.live);
      setTechnologies(project.technologies);
    }
  }, [projectId]);
  return (
    <div className="bg-black min-h-screen pb-10">
      <Navbar showLinks={false}/>
      <div className="w-[748px] mx-auto mt-10">
        <h1 className="text-7xl text-white drop-shadow-[0_3px_1px_rgba(50,50,50,2.25)] font-bold">
          {titleUp}
        </h1>
        <h1 className="text-7xl text-primary drop-shadow-[0_3px_1px_rgba(50,50,50,2.25)] font-bold mb-7">
          {titleDown}
        </h1>

        <div className="flex items-center gap-5 my-5">
          <a href={live} className={links}>
          <Link size={20} strokeWidth={1.75} absoluteStrokeWidth />
            <p>View live</p>
          </a>
          <a
            href={github}
            className={links}
          >
            <Github size={20} strokeWidth={1.75} />
            <p>Repository</p>
          </a>
        </div>

        <img
          className="w-full rounded-sm mb-10"
          src={images[0]}
          alt={`${titleUp + " " + titleDown} images`}
        />
        <div className="flex items-center text-white">
          <ChartNoAxesGantt
            className="text-primary "
            size={40}
            strokeWidth={3}
            absoluteStrokeWidth
          />
          <h2 className="text-5xl font-bold text-white mb-2">Overview</h2>
        </div>
        <p>{description}</p>
        <div className="flex items-center text-white gap-3">
          <CodeXml
            className="relative -bottom-3 text-primary"
            size={40}
            strokeWidth={3}
            absoluteStrokeWidth
          />
          <h2 className="text-5xl font-bold text-white mt-10 mb-5">
            Technologies
          </h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tool, i) => (
            <Technology key={i} tool={tool} />
          ))}
        </div>
        <div className="flex items-center text-white gap-3">
          <Images
            className="relative -bottom-5 text-primary"
            size={35}
            strokeWidth={3}
            absoluteStrokeWidth
          />
          <h2 className="text-5xl font-bold text-white mt-10 mb-2">
            Screenshots
          </h2>
        </div>

        <div className="flex flex-col gap-2 mt-5 ">
          {images.map((image, i) => (
            <img
              key={i}
              className="w-full rounded-sm"
              src={image}
              alt={`${titleUp + " " + titleDown} images`}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProjectInfo;
