import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.scss"; // Only needed if you have custom styles
import { Logo } from "../../constants/constant";
import WizardContainer from "../WizardContainer";
import { shareLink } from "../../constants/constant";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showWizard, setShowWizard] = useState(false);

  const hamburgerMenu = useRef<HTMLDivElement>(null);
  const mobileNavBar = useRef<HTMLDivElement>(null);

  // Handle body scroll lock when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const toggleMobileMenu = () => {
    if (hamburgerMenu.current)
      hamburgerMenu.current.classList.toggle("openMenu");

    if (mobileNavBar.current) {
      const nav = mobileNavBar.current;
      const isOpened = nav.classList.contains("openMobileMenu");

      if (!isOpened) {
        setIsOpen(true);
        nav.classList.add("openMobileMenu", "isAnimating", "slideInLeft");
      } else {
        setIsOpen(false);
        nav.classList.remove("openMobileMenu");
        nav.classList.add("isAnimating", "slideOutLeft");
      }
    }
  };

  const removeAnimationClasses = () => {
    if (!mobileNavBar.current) return;

    mobileNavBar.current.classList.remove(
      "isAnimating",
      "slideInLeft",
      "slideOutLeft"
    );
  };

  return (
    <div className="main-header">
      {/* Logo */}
      <div className="logo-section">
        <Link to="/">
          <img src={Logo} alt="Sidepanda" className="logo" />
        </Link>
      </div>

      {/* Navigation */}
      <div className="navigation">
        {/* Mobile Hamburger */}
        <div
          ref={hamburgerMenu}
          className="hamburgerMenu"
          onClick={toggleMobileMenu}
        >
          {[...Array(4)].map((_, i) => (
            <span key={i} className="hamburgerMenuItem"></span>
          ))}
        </div>

        {/* Mobile Nav */}
        <div
          ref={mobileNavBar}
          className="mobile-nav"
          onAnimationEnd={removeAnimationClasses}
        >
          <ul className="flex gap-4 items-center font-bold">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `hover:text-[#5aab53] ${isActive ? "text-[#5aab53]" : ""}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/appointments"
                className={({ isActive }) =>
                  `hover:text-[#5aab53] ${isActive ? "text-[#5aab53]" : ""}`
                }
              >
                Appointments
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `hover:text-[#5aab53] ${isActive ? "text-[#5aab53]" : ""}`
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  `hover:text-[#5aab53] ${isActive ? "text-[#5aab53]" : ""}`
                }
              >
                About us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  `hover:text-[#5aab53] ${isActive ? "text-[#5aab53]" : ""}`
                }
              >
                Contact us
              </NavLink>
            </li>
            <li>
              <button
                className="outline-button"
                onClick={() => setShowWizard(true)}
              >
                <img
                  src={shareLink}
                  className="link-icon"
                  alt="Get Appointment"
                />
                Get Appointment
              </button>
            </li>
          </ul>
        </div>

        {/* Desktop Nav */}
        <nav>
          <ul className="flex gap-4 items-center font-bold">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `hover:text-[#5aab53] ${isActive ? "text-[#5aab53]" : ""}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/appointments"
                className={({ isActive }) =>
                  `hover:text-[#5aab53] ${isActive ? "text-[#5aab53]" : ""}`
                }
              >
                Appointments
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `hover:text-[#5aab53] ${isActive ? "text-[#5aab53]" : ""}`
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  `hover:text-[#5aab53] ${isActive ? "text-[#5aab53]" : ""}`
                }
              >
                About us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  `hover:text-[#5aab53] ${isActive ? "text-[#5aab53]" : ""}`
                }
              >
                Contact us
              </NavLink>
            </li>
            <li>
              <button
                className="outline-button"
                onClick={() => setShowWizard(true)}
              >
                <img
                  src={shareLink}
                  className="link-icon"
                  alt="Get Appointment"
                />
                Get Appointment
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Modal for Wizard */}
      {showWizard && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setShowWizard(false)}
        >
          <div
            className="bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl mr-2"
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

export default Header;
