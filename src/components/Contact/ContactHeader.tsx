import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { ADDRESS, PHONE_NUMBER } from "../../constants/constant";
import ContactBox from "./ContactBox";

const ContactHeader = () => {
  return (
    <div
      className="pt-[0px] max-sm:pt-20 flex justify-center bg-cover bg-no-repeat bg-center w-full relative"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dfizbmrep/image/upload/v1710497220/contactbg_eko1ct.png')",
      }}
    >
      <div className="innerContainer z-30">
        <div className="py-64 mt-4 mb-10 flex gap-10 justify-between items-center">
          <div className="max-lg:px-10">
            <img
              src="https://res.cloudinary.com/dfizbmrep/image/upload/v1710497220/ladyicon_v3xctf.png"
              alt="icon"
              width={77}
              height={53}
              className="py-5"
            />

            <div className="flex items-end flex-col">
              <h1
                data-aos="fade-right"
                className="text-[60px] text-[#5aab53] max-sm:text-3xl font-bold pb-5"
              >
                Have Any Question
              </h1>
              <div className="border-[5px] w-[60%] border-secondary"></div>
            </div>
          </div>
          <img
            src="https://res.cloudinary.com/dfizbmrep/image/upload/v1710497242/worldmap_oybg7l.png"
            className="max-lg:hidden"
            alt="worldmap"
            width={608}
            height={391}
          />
        </div>
        <div className="flex justify-center mb-20">
          <div className="flex justify-center w-max">
            <div className="flex max-sm:px-0 max-sm:flex-col max-sm:gap-5">
              <div data-aos="fade-down" className="px-10 border-r py-3">
                <span className="mb-2">Follow us</span>
                <div className="flex gap-2 items-center">
                  <div
                    className="p-2 rounded-full w-max"
                    style={{ boxShadow: "0px 0px 10px #e5e5e5" }}
                  >
                    <FaFacebookF />
                  </div>
                  <div
                    className="p-2 rounded-full w-max"
                    style={{ boxShadow: "0px 0px 10px #e5e5e5" }}
                  >
                    <FaInstagram />
                  </div>
                  <div
                    className="p-2 rounded-full w-max"
                    style={{ boxShadow: "0px 0px 10px #e5e5e5" }}
                  >
                    <BsTwitterX />
                  </div>
                  <div
                    className="p-2 rounded-full w-max"
                    style={{ boxShadow: "0px 0px 10px #e5e5e5" }}
                  >
                    <FaLinkedinIn />
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-down"
                className="px-10 border-r py-3 flex gap-3"
              >
                <span className="mb-2">
                  <FaPhoneAlt className="mt-1" />
                </span>
                <div className="flex flex-col">
                  <span>{PHONE_NUMBER}</span>
                  <span>Call us: Mon - Fri 11:00am - 9:00pm</span>
                </div>
              </div>
              <div
                data-aos="fade-down"
                className="px-10 border-r py-3 flex gap-3 w-[42%] max-sm:w-full"
              >
                <span className="mb-2">
                  <FaLocationDot className="mt-1" />
                </span>
                <div className="flex flex-col gap-2 items-center">
                  <span>{ADDRESS}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-down" className="flex justify-center">
          <ContactBox />
        </div>
      </div>
      <img
        src="https://res.cloudinary.com/dfizbmrep/image/upload/v1710497228/strings_p9o6yi.png"
        alt="icon"
        width={1908}
        height={1025}
        className="absolute -bottom-[100px] right-0 z-20"
      />
      <img
        src="https://res.cloudinary.com/dfizbmrep/image/upload/v1711388594/spotLeft_o5frqt.png"
        alt="icon"
        width={100}
        height={100}
        className="absolute top-0 left-0 z-20"
      />
      <img
        src="https://res.cloudinary.com/dfizbmrep/image/upload/v1711388586/spotRight_sm7ksi.png"
        alt="icon"
        width={100}
        height={100}
        className="absolute -bottom-0 right-0 z-20"
      />
      <div className="w-[60%] h-[40%] absolute -bottom-10 left-0 bg-[#E8F4FA] z-0"></div>
    </div>
  );
};

export default ContactHeader;
