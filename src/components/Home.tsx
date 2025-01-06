import Navbar from "./Navbar";

function Home() {
  
  return (
    <div className="bg-black h-screen">
      <Navbar />
      <div className="w-[748px] mx-auto mt-14">
        <div className="flex gap-3 mb-10 relative">
          <div className="block z-10">
            <p className="text-2xl text-primary-100 w-3/4 font-bold ms-3 border-b-4 border-primary">
              Hi, my name is Maria Bustamante
            </p>
            <h1 className="text-9xl font-bold text-white">Fullstack</h1>
            <h1 className="text-9xl font-bold text-primary ">Developer</h1>
          </div>
          <div className="lg:block hidden bg-gray-200 opacity-30 lg:w-60 h-full right-0 absolute">
            .
          </div>
        </div>

        <p className="text-lg">
          Passionate and creative Full-Stack Developer dedicated to crafting
          seamless digital experiences. With expertise in both front-end and
          back-end development, I thrive on transforming ideas into functional,
          beautiful, and user-friendly solutions. I’m constantly exploring new
          technologies and approaches to deliver innovative results. Let's build
          something amazing together!
        </p>
      </div>
    </div>
  );
}

export default Home;
