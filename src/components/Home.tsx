import Navbar from "./Navbar";

function Home() {
  const h1Style = "lg:text-9xl sm:text-8xl text-7xl font-bold";
  return (
    <div id="home" className="bg-black lg:h-screen ">
      <Navbar showLinks={true}/>
      <div className="md:w-[748px] w-full mx-auto mt-20 lg:pb-0:px-0 sm:px-3 px-5 pb-32 ">
        <div className="flex gap-3 mb-10 relative">
          <div className="block z-10">
            <p className="relative lg:text-2xl text-xl sm:w-3/4 sm:left-0 -left-2 text-primary-100 font-bold ms-3 border-b-4 border-primary">
              Hi, my name is Maria Bustamante
            </p>
            <h1 className={`${h1Style} text-white`}>Fullstack</h1>
            <h1 className={`${h1Style} text-primary`}>Developer</h1>
          </div>
          <div className="sm:block hidden bg-gray-200 opacity-30 md:w-60:w-40 lg:rounded-none rounded-full w-60 h-full right-0 absolute">
            .
          </div>
        </div>

        <p className="lg:text-lg text-base">
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
