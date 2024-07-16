import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "../../utils/Data";

const Navigation = () => {
  return (
    <>
      <div
        id="navbar"
        className="md:layer-blur w-[600px] h-[450px] bg-[#075A23] rounded-[100%] absolute z-1 blur-[150px] top-[-300px] translate-x-[10px]"
      ></div>
      <motion.div className="hidden my-8 md:navbar-container">
        <motion.ul className="w-[600px] backdrop-blur-md bg-white/10 border border-white/10 border-opacity-10 rounded-[50px] flex justify-evenly p-2 text-navigation text-xl ">
          {Navbar &&
            Navbar.map((item) => (
              <li key={item.id} className="text-lg hover:text-white">
                <a href={`#${item.url}`}>{item.name}</a>
              </li>
            ))}
        </motion.ul>
      </motion.div>
    </>
  );
};

export default Navigation;
