import { experienceHafidz } from "../../utils/Data";

const Experiences = () => {
  return (
    <div id="experience" className="my-[200px]">
      <h1 className="text-center text-[40px] font-bold bg-gradient-to-r from-[#05772C] to-[#09C148] bg-clip-text text-transparent">
        Highlight Experiences!
      </h1>
      <p className="mx-auto text-white text-center font-light text-[16px] w-full mt-[20px] px-4 md:project-desc">
        some of the experiences that I have had. have the opportunity to grow
        and also contribute to the company
      </p>
      <div className="flex justify-center items-center mt-[50px]">
        <div className="timeline relative md:max-w-[600px] lg:max-w-[900px] sm:max-w-[600px] my-0 mx-auto text-white">
          <ul>
            {experienceHafidz.map((item) => (
              <li
                key={item.id}
                className="p-[20px] rounded-[10px] mb-[10px] sm:mb-[20px]"
              >
                <div className="timeline-content">
                  <div className="flex gap-5">
                    <div>
                      <img src={item.img} alt="" />
                    </div>
                    <div>
                      <h1 className="text-2xl">{item.title}</h1>
                      <h3 className="text-[16px]">{item.position}</h3>
                      <p className="text-[16px]">{item.date}</p>
                    </div>
                  </div>
                  <p>The Responsibilites:</p>
                  {item.description.map((item, index) => (
                    <p key={index} className="text-[16px]">
                      - {item}
                    </p>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
