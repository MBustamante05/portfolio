import { Github, MoveRight, MoveUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

type Props = {
  id: number;
  name: string;
  description: string;
  image: string;
  github: string;
  live: string;
};
function ProjectCard({ id, name, description, image, github, live }: Props) {
  const navigate = useNavigate();
  const redirectPage = () => {
    navigate(`/projects/${id}`);
  };
  return (
    <div
      className="col-span-1 flex flex-col border border-[#333]  p-3 rounded-sm cursor-pointer  hover:bg-[#222] transition duration-300 ease-in-out"
      onClick={redirectPage}
    >
      <h1 className="text-lg font-semibold mb-3 text-white">{name}</h1>
      <p className="mb-3">{description}</p>
      <div className="relative w-full h-42 group">
        <img className="w-full h-42 rounded-sm" src={image} alt={name} />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out text-white font-bold text-lg gap-1">
          <span>See more</span>
          <MoveUpRight size={15} strokeWidth={1.75} absoluteStrokeWidth />

        </div>
      </div>
      <div className="flex items-center justify-between mt-5">
        <a href={live} className="flex items-center gap-1 hover:text-primary">
          <span>Live</span>
          <MoveRight className="hover:-rotate-45 relative -bottom-0.5 transition duration-300 ease-in-out" size={15} strokeWidth={1.75} absoluteStrokeWidth/>
        </a>
        <a
          href={github}
          className="hover:bg-primary text-white px-3 py-2 rounded-lg "
        >
          <Github />
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
