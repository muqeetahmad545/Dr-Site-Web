import landingScreen from "../../assets/About-Doxonline.png";

const LandingAboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Text Section */}
        <div className="md:w-1/2 mt-24">
          <h1 className="text-3xl font-bold mb-4 text-[#5aaa5f] text-center">
            Welcome to Clinvia Ireland’s Most-Trusted Virtual Partner in
            Healthcare
          </h1>
          <p className="border-b-4 font-bold text-3xl text-center border-[#5bac52] p-8 px-12">
            We bring the finest medical services directly to you, no matter the
            time or place
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center mt-10">
          <img
            src={landingScreen}
            alt="Our Vision"
            className="w-[570px] h-[350px] object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingAboutUs;
