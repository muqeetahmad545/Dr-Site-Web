import { useState, useRef, useEffect } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'; 
import shareLink from '../../assets/link.svg'; 

const Header = () => {
    const [isOpen, setMenuState] = useState(false);
    const hamburgerMenu = useRef<HTMLInputElement>(null);
    const mobileNavBar = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const toggleMobileMenuBar = () => {
        hamburgerMenu!.current!.classList.toggle("openMenu");
        const hasOpenClass = mobileNavBar!.current!.classList.contains("openMobileMenu");

        if (!hasOpenClass) {
            setMenuState(true);
            mobileNavBar!.current!.classList.add("openMobileMenu");
            mobileNavBar!.current!.classList.add("isAnimating");
            mobileNavBar!.current!.classList.add("slideInLeft");
        } else {
            setMenuState(false);
            mobileNavBar!.current!.classList.remove("openMobileMenu");
            mobileNavBar!.current!.classList.add("isAnimating");
            mobileNavBar!.current!.classList.add("slideOutLeft");
        }
    };

    const removeAnimationClasses = () => {
        if (isOpen) {
            mobileNavBar!.current!.classList.remove("isAnimating");
            mobileNavBar!.current!.classList.remove("slideInLeft");
        } else {
            mobileNavBar!.current!.classList.remove("isAnimating");
            mobileNavBar!.current!.classList.remove("slideOutLeft");
        }
    };

    return (
        <div className='main-header'>
            <div className='logo-section'>
                <Link to="/">
                    <img src={logo} alt="Sidepanda" className='logo' />
                </Link>
            </div>

            <div className='navigation'>
                <div ref={hamburgerMenu} className="hamburgerMenu"
                    onClick={toggleMobileMenuBar}>
                    <span className="hamburgerMenuItem"></span>
                    <span className="hamburgerMenuItem"></span>
                    <span className="hamburgerMenuItem"></span>
                    <span className="hamburgerMenuItem"></span>
                </div>
                <div className="mobile-nav"
                    ref={mobileNavBar}
                    onAnimationEnd={() => removeAnimationClasses()}>
                    <ul>

                        <li><Link to="/about-us">About us</Link></li>
                        <li><Link to="/leadership">Leadership</Link></li>
                        <li><Link to="/contact-us">Contact us</Link></li>
                        <li>
                            <Link to="https://www.sidepanda.com" target="_blank">
                                <button className="outline-button">
                                    <img src={""} alt="Get Appointment"
                                        className='link-icon' /> Get Appointment
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/appointments">Appointments</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li className="dropdown">
                            <Link to="">Menu <i className="arrow down"></i></Link>
                            <ul className="dropdown-content">
                                <li><Link to="/about-us">About us</Link></li>
                                <li><Link to="/leadership">Leadership</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/contact-us">Contact us</Link></li>
                        <li>
                            <Link to="https://www.sidepanda.com" target="_blank">
                                <button className="outline-button">
                                    <img src={shareLink} alt="Link"
                                        className='link-icon' />  Get Appointment
                                </button>
                            </Link>

                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;