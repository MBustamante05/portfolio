import { CodeXml } from "lucide-react";
import Tool from "./Tool";

function About() {
  const tools = [
    "Javascript",
    "HTML",
    "CSS",
    "React",
    "Tailwind",
    "Typescript",
    "Git",
    "GitHub",
    "Bootstrap",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "Postman",
    "Sass",
  ];
  return (
    <div id="about" className="my-20 mx-auto md:w-[748px] w-full sm:px-3 px-5">
      <h1 className="lg:text-7xl md:text-6xl text-5xl font-bold text-white">About</h1>
      <div className="grid lg:grid-cols-2 mt-12 gap-10">
        <div className="col-span-1">
          <p>
            As a Full-Stack Developer, I bring creativity, curiosity, and
            technical expertise to every project I work on. From building
            visually appealing user interfaces to designing robust back-end
            systems, I love the challenge of crafting solutions that not only
            work but inspire.
          </p>
          <br />
          <p>
            I’m passionate about learning and staying up-to-date with the latest
            technologies, whether it’s mastering a new framework, solving
            complex problems, or collaborating with others to bring innovative
            ideas to life. My goal is to create meaningful digital experiences
            that make a difference.
          </p>
          <br />
        </div>
        <div className="col-span-1">
          <div className="flex items-center gap-4">
            <CodeXml className="text-primary" />
            <h2 className="text-xl font-bold text-white">
              Programming & Tools
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 mt-5">
              {tools.map((tool, i) => (
                <Tool key={i} language={tool} />
              ))}
            </div>
        </div>
      </div>
    </div>
  );
}

export default About;
