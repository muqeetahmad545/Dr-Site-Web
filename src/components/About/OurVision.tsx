import ourVision from "../../assets/Our-Vision.png";

const OurVision = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Text Section */}
        <div className="md:w-1/2 mt-24">
          <h1
            data-aos="fade-right"
            className="text-3xl font-bold mb-4 text-[#5aaa5f]"
          >
            Our Vision
          </h1>
          <p className="text-lg text-gray-700">
            We aim to empower the people of Ireland by prioritising their
            health, comfort, and ease over all else.
          </p>
        </div>

        {/* Image Section */}
        <div data-aos="fade-right" className="md:w-1/2 flex justify-center">
          <img
            src={ourVision}
            alt="Our Vision"
            className="w-[420px] h-[400px] object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default OurVision;
