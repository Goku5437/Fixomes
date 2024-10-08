import React from 'react'
import './Electrical.css'; // Import the CSS file for styling
import Electrical from "../assets/Electrical.jpeg"
import { useInView } from 'react-intersection-observer';
function ElectricalComponant
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
    <div className="appliances-container " id='electrical'>
      <h2>Electrical Repairs</h2>
      
      <div className="appliances-content">
        {/* Left side with buttons */}
        <div className="services-buttons">
          <div className="service-button">Installation and Upgrades</div>
          <div className="service-button">Repair and Maintenance</div>
        </div>

        {/* Right side with images */}
        <div className="services-images2">
            <img src={Electrical} alt="Electrical" />
        </div>
      </div>
    </div>
  </section>
  )
}

export default ElectricalComponant
