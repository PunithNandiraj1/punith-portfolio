import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GiTie } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { useTheme } from "next-themes";
import Image from "next/image";

import Puni from "../public/images/Puni.jpg";




const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <>
      
      <Image
        width="148"
        height="148"
        src={Puni}
        alt="avatar"
        className="mx-auto border-solid "
        quality={75}
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green "> Punith </span> N
      </h3>
      <p className="px-2 py-1 mx-4 my-4 bg-green-100 border border-primary dark:bg-dark-200 ">
        FullStack Developer
      </p>
      {/* Resume */}
      <a
        href="/assets/resume.pdf"
        download=" Punith Resume.pdf"
        className="flex items-center justify-center px-2 py-1 mx-4 my-4 bg-green-100 border border-solid cursor-pointer border-primary dark:bg-dark-200"
      >
        <GiTie className="w-6 h-6" />
        <span>Download Resume</span>
      </a>

      {/* Socials */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full ">
      
        <a
          href="https://www.linkedin.com/in/punithnandiraj/"
          aria-label="Linkedin"
        >
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://github.com/PunithNandiraj1" aria-label="GitHub">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />{" "}
        </a>
      </div>

      {/* Contacts */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" /> <span>Bengaluru,India </span>
        </div>
        <p className="my-2 "> punithnandiraj@gmail.com </p>
        <p className="my-2"> 9845805411 </p>
      </div>

      {/* Email Button */}

      <button
        className="w-8/12 px-5 py-2 text-white bg-black border-solid cursor-pointer bg-gradient-to-r from-green to-blue-500 hover:scale-105 focus:outline-none"
        onClick={() => window.open("mailto:punithnandiraj@gmail.com")}
      >
        Email me
      </button>
      <button
        onClick={changeMode}
        className="w-8/12 px-5 py-2 my-4 text-white bg-black border-solid cursor-pointer bg-gradient-to-r from-green to-blue-500 focus:outline-none hover:scale-105 "
      >
        {/* //TODO remove bg black */}
        Toggle Theme
      </button>
    </>
  );
};

export default Sidebar;




