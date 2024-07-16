import personalImage from "../../assets/image/poto.png";
import emailImg from "../../assets/image/emailWhite.png";
import linkedinImg from "../../assets/image/linkedinWhite.png";

const Footer = () => {
  return (
    <>
      <div id="contact" className="xl:footer-container">
        <h1 className="text-[40px] text-center lg:tittle">
          👋{" "}
          <span className="font-bold bg-gradient-to-r from-[#05772C] to-[#09C148] bg-clip-text text-transparent">
            Let's get connected!
          </span>
        </h1>
        <div className="flex justify-center lg:content">
          <div>
            <img src={personalImage} alt="" className="w-[150px]" />
          </div>
          <div className="flex flex-col justify-center text-white">
            <h1 className="text-[24px] mb-[30px]">Contact me on:</h1>
            <div className="flex gap-5 items-center mb-[10px] border-b-2 pb-[10px]">
              <img src={emailImg} alt="" />
              <p>hafidzhidayatulloh491@gmail.com</p>
            </div>
            <div className="flex items-center gap-5">
              <img src={linkedinImg} alt="" />
              <p>Hafidz Hidayatulloh</p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-[50px] ">
        <h1 className="text-center text-white">
          Created by Hafidz Hidayatulloh 👋{" "}
        </h1>
      </div>
    </>
  );
};

export default Footer;
