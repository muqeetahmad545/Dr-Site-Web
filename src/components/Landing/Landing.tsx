
import { ClockCircleOutlined } from '@ant-design/icons';


const Landing = () => {
  const pdfUrl = "https://accellionx.com/portfolio.pdf";
  return (
    <div
      className="pt-[120px] h-screen flex justify-center items-center bg-cover bg-no-repeat bg-center w-full relative overflow-hidden"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dfizbmrep/image/upload/v1710497209/background_vgycqk.png')",
      }}
    >
      <div className="innerContainer z-10">
        <div className="flex max-lg:flex-col gap-5 items-center max-lg:pt-5">
          <div className="flex flex-col gap-8 pl-8">
            <div className="flex items-center flex-col">
              <h1
                data-aos="fade-right"
                className="text-[50px] font-extrabold leading-[70px] max-sm:text-5xl max-lg:text-4xl"
              >
                Extraordinary Care is Right Here
              </h1>
              <div
                data-aos="fade-right"
                className="border-[5px] w-[45%] ml-28 mt-2 border-secondary"
              ></div>
            </div>
            <p
              data-aos="fade-right"
              className="text-2xl text-textcolor max-sm:text-2xl max-lg:text-xl"
            >
              FIND ONE OF OUR DOCTORS{" "}
            </p>
            <a
              data-aos="fade-right"
              href={pdfUrl}
              download
              target="_blank"
              className="flex items-center p-5 text-2xl bg-secondary rounded-full px-10 w-max gap-2 text-white max-sm:text-xl max-sm:p-2 max-sm:px-6"
            >
              <span>ANAPPOINTMENT</span>
              <ClockCircleOutlined className="text-4xl max-sm:text-2xl max-lg:text-xl" />
            </a>
          </div>
          <div data-aos="fade-left" className="max-sm:hidden ">
            <img
              src="https://res.cloudinary.com/dfizbmrep/image/upload/v1710497221/Mask_Group_c2hcwf.png"
              alt="landing Image"
              width={779}
              height={740}
            />
          </div>
        </div>
      </div>
      <img
        src="https://res.cloudinary.com/dfizbmrep/image/upload/v1710497210/bigstrings_ewtvre.png"
        alt="icon"
        width={1908}
        height={1025}
        className="absolute -bottom-[1000px] right-0 z-0"
      />
    </div>
  );
};

export default Landing;
