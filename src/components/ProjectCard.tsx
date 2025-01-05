import { Github, MoveUpRight } from "lucide-react";

type Props = {
  name: string;
  description: string;
  image: string;
  github: string;
  live: string;
}
function ProjectCard({ name, description, image, github, live }: Props) {
  return (
    <div className="col-span-1 flex flex-col border border-[#333] p-3 rounded-sm cursor-pointer hover:bg-[#222] transition duration-300 ease-in-out">
      <h1 className="text-lg font-semibold mb-3 text-white">{name}</h1>
      <p className="mb-3">{description}</p>
      <img className="w-full h-42 rounded-sm" src={image} alt={name} />
      <div className="flex items-center justify-between mt-6">
        <div className="flex items-center gap-2 hover:text-primary cursor-pointer">
          <a href={live}>Live</a>
          <MoveUpRight />
        </div>
        <a href={github} className="hover:bg-primary text-white px-3 py-2 rounded-lg "><Github /></a>
      </div>
    </div>
  )
}

export default ProjectCard