import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./pages/About";
import Services from "./pages/Services";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Home from "./pages/Landing";
import Appointments from "./pages/Appointments";
import Contact from "./pages/Contact";
import AppointmentTimeout from "./pages/timeout";
import { NotFound } from "./pages/NotFound";
// import { SignupPage } from "./pages/SignUp";
// import { LoginPage } from "./pages/Login";
const App = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/timeout" element={<AppointmentTimeout />} />
        <Route path="*" element={<NotFound />} />

        {/* <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} /> */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
