import { projectHafidz } from "../../utils/Data";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div id="project" className="container my-[200px]">
      <h1 className="text-[40px] font-bold bg-gradient-to-r from-[#05772C] to-[#09C148] bg-clip-text text-transparent text-center">
        Highlight My Project!
      </h1>
      <p className="w-full mx-auto text-[16px] md:project-desc font-thin mt-[20px] px-4 text-white text-center">
        These are several projects that I have developed, both personal projects
        and projects from my work experience
      </p>
      <div className="flex flex-wrap justify-center items-center gap-[40px] mt-[40px] ">
        {projectHafidz.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 + index * 0.4 }}
            viewport={{ once: true }}
            key={item.id}
            className="w-[400px] md:card-project-md lg:card-project-xl backdrop-blur-md bg-white/30 border border-white/10 border-opacity-10 rounded-xl"
          >
            <img
              src={item.img}
              alt=""
              className="w-[370px] h-[200px] md:img-project lg:img-project-xl mx-auto my-2"
            />
            <div className="flex mt-5 gap-5 ml-[14px] mb-[10px]">
              <p className="text-white text-[16px] lg:desc-card">{item.type}</p>
              {item.icon.map((icon, index) => (
                <img
                  key={index}
                  src={icon}
                  alt=""
                  className="w-[20px] h-[20px] lg:icon-project"
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;
