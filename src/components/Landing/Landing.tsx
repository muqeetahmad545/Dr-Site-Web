// import { COLORS } from "../../constants/theme";
import { shareLink } from "../../constants/constant";
import WizardContainer from "../WizardContainer";
import { useState } from "react";
import landingDoctor from "../../assets/GP-Consultation.webp";

const Landing = () => {
  const [showWizard, setShowWizard] = useState(false);

  return (
    <div>
      {/* Hero Section */}
      <section
        className="pt-[120px] bg-[#e8f1fa] min-h-screen flex justify-center items-center bg-cover bg-no-repeat bg-center w-full relative overflow-hidden"
        // style={{
        //   background: COLORS.gradientPrimary,
        // }}
      >
        <div className="innerContainer z-10 w-full px-4 max-w-7xl mx-auto mb-20">
          <div className="flex max-lg:flex-col-reverse gap-12 items-center">
            {/* Left Content */}
            <div className="flex flex-col gap-6 text-[#5bac52] w-full lg:w-1/2">
              <h1
                data-aos="fade-right"
                className="text-4xl text-gray-700 sm:text-5xl font-extrabold leading-tight text-left lg:text-left"
              >
                Schedule a Phone or Video Consultation
              </h1>

              <div className="mt-4 lg:text-left">
                <h2 className="text-2xl sm:text-3xl font-semibold">
                  Online Consultation With an
                </h2>
                <p className="border-b-4 font-bold text-2xl sm:text-3xl border-[#5bac52] inline-block mt-2 pb-2">
                  Irish-Registered Doctor
                </p>
              </div>

              <p className="text-lg sm:text-xl text-gray-600  lg:text-left">
                Find one of our highly experienced doctors today.
              </p>

              <div className="flex">
                <button
                  onClick={() => setShowWizard(true)}
                  className="flex items-center text-lg font-semibold rounded-full px-6 py-3 bg-[#5aa778] hover:bg-[#4e9668] text-white shadow-md transition duration-300"
                >
                  <div className="!text-white">
                    <img src={shareLink} alt="Link" className="w-5 h-5 mr-2" />
                  </div>
                  Get Appointment
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div
              data-aos="fade-left"
              className="w-full lg:w-1/2 flex justify-center"
            >
              <img
                src={landingDoctor}
                alt="Doctor Consultation"
                className="max-w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Decorative Background Image */}
        <img
          src="https://res.cloudinary.com/dfizbmrep/image/upload/v1710497210/bigstrings_ewtvre.png"
          alt="background icon"
          className="absolute -bottom-[900px] right-0 z-0 pointer-events-none opacity-30"
        />
      </section>

      {/* Wizard Modal */}
      {showWizard && (
        <div
          className="fixed inset-0 bg-opacity-60 flex items-center justify-center z-50"
          onClick={() => setShowWizard(false)}
        >
          <div
            className="bg-white rounded-lg shadow-2xl p-6 w-full max-w-4xl relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-2xl"
              onClick={() => setShowWizard(false)}
            >
              &times;
            </button>
            <WizardContainer />
          </div>
        </div>
      )}
    </div>
  );
};

export default Landing;
