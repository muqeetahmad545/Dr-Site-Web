import { COLORS } from "../../constants/theme";

const ContactUs = () => {
  return (
    <div
      style={{ background: COLORS.gradientPrimary }}
      className="w-full flex justify-center relative overflow-hidden"
    >
      <div className="innerContainer py-14 p-10">
        <div className="text-white flex flex-col items-center gap-6">
          <h1
            data-aos="fade-right"
            className="text-5xl font-bold max-sm:text-3xl text-center"
          >
            Contact us for a quotes
          </h1>
          <p className="text-center w-[60%] font-light text-base">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <button className="p-3 px-20 bg-white text-[#5bac52] text-lg rounded-full w-max font-bold">
            Get Now
          </button>
        </div>
      </div>
      <img
        src="https://res.cloudinary.com/dfizbmrep/image/upload/v1710497228/strings_p9o6yi.png"
        alt="icon"
        width={708}
        height={900}
        className="absolute -top-80 right-60 z-20"
      />
    </div>
  );
};

export default ContactUs;
