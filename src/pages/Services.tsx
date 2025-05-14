'use client'
import Clients from '../components/Services/Clients'
import WorkProcess from '../components/Services/WorkProcess'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import ServicesLanding from '../components/Services/ServiceLanding'

const Services = () => {
  useEffect(() => {
    AOS.init({
        duration: 1000,
        once: true,
    });
}, []);
  return (
    <div>
      <ServicesLanding />
      <Clients />
      <WorkProcess />
    </div>
  )
}

export default Services