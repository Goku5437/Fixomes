import React from 'react';
import './ServiceSection.css'; // CSS file
import Service from "../assets/Service.jpeg"
import { useInView } from 'react-intersection-observer';
const ServiceSection = () => {
  const { ref, inView } = useInView({
   
    threshold: 0.5,
  });
  return (
    <div className="service-section" ref={ref} 
    style={{
      transition: 'all 0.5s ease-in-out',
      transform: inView ? 'translateY(0)' : 'translateY(100px)',
      opacity: inView ? 1 : 0,
    }}>
      <div className="left-side">
        <h2>How to Book Service</h2>
        <img
          src={Service} // Replace with the actual image URL
          alt="Service booking process"
          className="service-image"
        />
      </div>
      <div className="right-side">
        <div className="step">Reach out to us via phone call or WhatsApp</div>
        <div className="step yellow">Tell us about the problem you're facing</div>
        <div className="step">Provide your contact details and address to confirm the booking</div>
        <div className="step yellow">Receive a confirmation message with all the details of your booking</div>
        <div className="step">Our technician will arrive at the scheduled time to provide the service</div>
      </div>
    </div>
  );
};

export default ServiceSection;
