
import React from 'react'
import './Plumbing.css'; // Import the CSS file for styling
import Plumbing from "../assets/Plumbing.jpeg"
import { useInView } from 'react-intersection-observer';
function PlumbingComponant
() {
  const { ref, inView } = useInView({
   
    threshold: 0.5,
  });
  return (
    <section className="appliances-section" ref={ref} 
    style={{
      transition: 'all 0.5s ease-in-out',
      transform: inView ? 'translateY(0)' : 'translateY(100px)',
      opacity: inView ? 1 : 0,
    }}>
    <div className="appliances-container " id='plumbing'>
      <h2>Plumbing Repairs</h2>
      
      <div className="appliances-content">
        {/* Left side with buttons */}
        <div className="services-buttons">
          <div className="service-button">Installation and Upgrades</div>
          <div className="service-button">Repair and Maintenance</div>
          <div className="service-button">Water Proofing Service</div>
        </div>

        {/* Right side with images */}
        <div className="services-images">
            <img src={Plumbing} alt="Plumbing" />
        </div>
      </div>
    </div>
  </section>
  )
}

export default PlumbingComponant
