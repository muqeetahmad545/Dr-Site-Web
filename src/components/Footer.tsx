import {
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { INFO_EMAIL, Logo, PHONE_NUMBER } from "../constants/constant";
import { COLORS } from "../constants/theme";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="relative z-50">
      <div
        style={{ background: COLORS.gradientPrimary }}
        className="text-white bg-gradientPrimary w-full flex justify-center px-50"
      >
        <div className="innerContainer relative p-8 z-50 px-10 flex max-lg:flex-col max-sm:flex-col justify-between">
          <div className="mb-10">
            <img
              src={Logo}
              alt="footerlogo"
              width={117}
              height={118}
              className="mb-6 max-sm:w-[80px] max-sm:h-[81px]"
            />
            {/* <p>Questions? Reach us</p> */}
            <p>
              We’ve positioned our beautiful offices near where you live, work,
              and travel.
            </p>
            <p>{PHONE_NUMBER}</p>
          </div>
          <div className="flex max-sm:flex-col gap-5">
            <div className="flex flex-col gap-1 px-4 max-sm:px-0 max-sm:mb-4 min-w-48">
              <h3 className="mb-5 text-xl font-bold">Services</h3>
              <span className="text-sm">Drenched Skin</span>
              <span className="text-sm">Ageles Beauty</span>
              <span className="text-sm">Chemical Skin Care</span>
              <span className="text-sm">Doctor Consultation</span>
              <span className="text-sm">Cream Skincare</span>
            </div>
            <div className="flex flex-col gap-1 px-4 max-sm:px-0 max-sm:mb-4 min-w-48">
              <h3 className="mb-5 text-xl font-bold">Contact</h3>
              <div className="flex items-center gap-2">
                <img
                  src="https://res.cloudinary.com/dfizbmrep/image/upload/v1710497201/call_g10xq1.png"
                  alt="call"
                  width={27}
                  height={28}
                />
                <span className="text-sm">{PHONE_NUMBER}</span>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="https://res.cloudinary.com/dfizbmrep/image/upload/v1710497227/sms_kcqqzq.png"
                  alt="sms"
                  width={27}
                  height={28}
                />
                <span className="text-sm">{INFO_EMAIL}</span>
              </div>
            </div>
            <div className="flex flex-col gap-1 px-4 max-sm:px-0 max-sm:mb-4 min-w-48">
              <h3 className="mb-5 text-xl font-bold">Information</h3>
              <Link to="/" className="text-sm hover:underline text-red">
                Home
              </Link>
              <Link to="/appointments" className="text-sm hover:underline">
                Appointments
              </Link>
              <Link to="/services" className="text-sm hover:underline">
                Services
              </Link>
              <Link to="/about-us" className="text-sm hover:underline">
                About Us
              </Link>
              <Link to="/contact-us" className="text-sm hover:underline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="py-8 bg-[#5bac52] flex justify-around items-center text-white max-sm:flex-col gap-5">
        <span className="cursor-pointer">© {INFO_EMAIL}</span>
        <div className="flex items-center gap-8">
          <FaLinkedinIn className="text-2xl" />
          <FaFacebookF className="text-2xl" />
          <FaYoutube className="text-2xl" />
          <FaInstagram className="text-2xl" />
          <FaTwitter className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
