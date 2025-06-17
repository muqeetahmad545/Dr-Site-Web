import ourTeam from "../../assets/Our-team.png";

const OurTeam = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Image Section */}
        <div data-aos="fade-right" className="md:w-1/2 ">
          <img
            src={ourTeam}
            alt="Our Vision"
            className="w-[418px] h-[400px] object-cover rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 mt-24">
          <h1
            data-aos="fade-right"
            className="text-3xl font-bold mb-4 text-[#5aaa5f]"
          >
            Our Team
          </h1>
          <p className="text-lg text-gray-700">
            We are partnered with an expert doctors and general practitioners
            who are committed to providing you with the medical care that you
            require. These expert healthcare professionals are backed by
            technological specialists who work tirelessly to make virtual care a
            seamless experience for you. Together, they ensure that Doxonline
            brings the most convenient, approachable, and economical medical
            services right at your fingertips.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
