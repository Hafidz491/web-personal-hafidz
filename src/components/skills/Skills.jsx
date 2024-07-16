import { useState } from "react";
import { iconSkill, iconTools } from "../../utils/Data";
const Skills = () => {
  const [activeBtn, setActiveBtn] = useState("skills");

  return (
    <div id="skills" className="container lg:skills-container">
      <div className="flex flex-col items-center justify-center lg:w-[500px] text-white">
        <h1 className="text-center lg:skills-tittle mx-auto w-[315px] text-[40px] font-bold bg-gradient-to-r from-[#05772C] to-[#09C148] bg-clip-text text-transparent">
          My Programming Skills Included!
        </h1>
        <p className="text-center w-[500px] text-[20px] font-thin mt-[20px] lg:skills-desc">
          I am someone who likes challenges, and in the future I will continue
          to hone my programming skills, here are the skills that I usually use
        </p>
        <div className="relative justify-evenly text-center items-center mx-auto w-[220px] h-[45px] rounded-full border border-white my-[20px] lg:skills-btn">
          <button
            onClick={() => setActiveBtn("skills")}
            className={`py-2 px-4 mt-[2px] w-[108px] rounded-full transition duration-300 ${
              activeBtn === "skills"
                ? " bg-gradient-to-r from-[#05772C] to-[#09C148] text-white"
                : " text-white"
            }`}
          >
            Skills
          </button>
          <button
            onClick={() => setActiveBtn("tools")}
            className={` py-2 px-4 mt[2px] w-[108px] rounded-full transition duration-300 ${
              activeBtn === "tools"
                ? " bg-gradient-to-r from-[#05772C] to-[#09C148] text-white"
                : " text-white"
            }`}
          >
            Tools
          </button>
        </div>
      </div>
      <div className="sm:hidden md:block md:border-r-4"></div>
      {/* w-[480px] */}
      <div className="w-full lg:skills-icon">
        {activeBtn === "skills" ? (
          <div className="flex flex-wrap justify-center gap-5 lg:icon">
            {iconSkill.map((item) => (
              <div
                key={item.id}
                className="flex justify-center items-center w-[75px] h-[75px] bg-white rounded-2xl"
              >
                <img src={item.img} alt="icon" className="w-[50px] h-[50px]" />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-5 lg:icon">
            {iconTools.map((item) => (
              <div
                key={item.id}
                className="flex justify-center items-center w-[75px] h-[75px] bg-white rounded-2xl"
              >
                <img src={item.img} alt="icon" className="w-[50px] h-[50px]" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;
