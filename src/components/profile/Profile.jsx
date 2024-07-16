import potoProfile from "../../assets/image/poto.png";
import { motion } from "framer-motion";

const Profile = () => {
  return (
    <div id="profile" className="container md:container-profile my-[150px]">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <img src={potoProfile} alt="" className="mx-auto" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-white w-[450px] flex flex-col justify-center mx-auto md:mx-0 md:w-1/2"
      >
        <h1 className="text-[60px] text-center md:text-left font-bold bg-gradient-to-r from-[#05772C] to-[#09C148] bg-clip-text text-transparent">
          About Me
        </h1>
        <p className="text-[16px] text-center md:text-left md:text-[24px] md:w-[400px] lg:w-[600px] xl:w-[650px] font-thin mt-[20px]">
          hello, i am <span className="font-bold"> hafidz</span>! i have high
          interest in programming especially{" "}
          <span className="font-bold">front-end developer</span>. i am dedicated
          to increase my knowledge and skills in frontend developer and learn
          new technology.
        </p>
      </motion.div>
    </div>
  );
};

export default Profile;
