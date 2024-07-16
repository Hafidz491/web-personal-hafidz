import { iconSosmed } from "../../utils/Data";
import { useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Heroes = () => {
  const [text] = useTypewriter({
    words: ["Frontend Developer"],
    loop: {},
    delaySpeed: 2000,
    typeSpeed: 100,
    deleteSpeed: 80,
  });

  return (
    <div className="container">
      <div className="flex flex-col justify-center items-center mt-[100px]">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[20px] md:heroes-h1 font-bold text-white"
        >
          HAFIDZ HIDAYATULLOH
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="h-[60px]"
        >
          <h1 className="text-[40px] md:animate-fe font-bold bg-gradient-to-r from-[#05772C] to-[#09C148] bg-clip-text text-transparent">
            {text}
          </h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-[350px] text-[16px] font-thin text-[#D9D9D9] text-center md:desc-heroes"
        >
          Junior{" "}
          <span className="font-bold text-white">front-end developer</span>,
          using ReactJs for developing website and web applications
        </motion.p>
        <div className="flex gap-5 mt-10">
          {iconSosmed.map((item, index) => (
            <motion.a
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.4 }}
              whileHover={{
                scale: 1.2,
                rotate: 10,
                transition: { duration: index == 0.1 },
              }}
              href={item.url}
              key={item.id}
              className="flex justify-center items-center w-[50px] h-[50px] md:div-icon bg-white rounded-3xl duration-200"
            >
              <img
                src={item.img}
                alt=""
                className=" w-[30px] h-[30px] md:icon-heroes cursor-pointer bg-white"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Heroes;
