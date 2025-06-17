import ourMission from "../../assets/Our-Mission.png";

const OurMission = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Image Section */}
        <div data-aos="fade-right" className="md:w-1/2 ">
          <img
            src={ourMission}
            alt="Our Vision"
            className="w-[416px] h-[400px] object-cover rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 mt-24">
          <h1
            data-aos="fade-right"
            className="text-3xl font-bold mb-4 text-[#5aaa5f]"
          >
            Our Mission
          </h1>
          <p className="text-lg text-gray-700">
            We intend to be a virtual space for the people of Ireland where they
            can feel safe, secure, and satisfied regarding all of their medical
            needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
