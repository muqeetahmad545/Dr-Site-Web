import GetSupport from "../../assets/Doxonline-Support.png";
import { COLORS } from "../../constants/theme";

const LandingContact = () => {
  return (
    <div style={{ background: COLORS.gradientPrimary }}>
      <div className="container mx-auto px-4 py-12 ">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Text Section */}
          <div className="md:w-1/2 mt-36">
            <h1
              data-aos="fade-right"
              className="text-3xl font-bold mb-4 text-white text-center"
            >
              Clinvia Support
            </h1>
            <p className="border-b-4 font-bold text-3xl text-center border-white p-8">
              Looking for help? We’re always here.
            </p>
          </div>

          {/* Image Section */}
          <div
            data-aos="fade-right"
            className="md:w-1/2 flex justify-center mt-10"
          >
            <img
              src={GetSupport}
              alt="Our Vision"
              className="w-[360px] h-[450px] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingContact;
