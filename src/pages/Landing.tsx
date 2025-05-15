'use client';
import Header from '../components/Header/Header';
import Landing from '../components/Landing/Landing';
import ServicesLanding from '../components/Services/ServiceLanding';
import Categories from '../components/Landing/Catogries';
import Integrate from '../components/Landing/Integrate';
import ContactUs from '../components/Landing/ContactUs';
import ClientReviews from '../components/Landing/Reviews';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Gallery } from '../components/Landing/Gallery';
import Clients from '../components/Services/Clients';
import BrandCarousal from '../components/Landing/BrandCarousal';

export default function Home() {
  useEffect(() => {
    // Here we initialize AOS
    AOS.init({
      duration: 1000, // values from 0 to 3000, with step 50ms
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <div>
      <Header />
      <Landing />
      <BrandCarousal />
      <Integrate />
      <Clients />
      <Categories />
      <ServicesLanding />
      <Gallery />
      <ContactUs />
      <ClientReviews />
    </div>
  );
}
