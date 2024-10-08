import React from 'react'
import './AppliancesSection.css'; // Import the CSS file for styling// Add paths to your images
import RepairCrousel from './RepairCrousel';
import ACRepir from "../assets/ACRepir.jpeg"
import { useInView } from 'react-intersection-observer';

function RepairComponant() {
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
    <div className="appliances-container " id='repair'>
      <h2>Appliances Repair and Services</h2>
      
      <div className="appliances-content">
        {/* Left side with buttons */}
        <div className="services-buttons">
          <div className="service-button">Chimney Repair</div>
          <div className="service-button">Microwave Repair</div>
          <div className="service-button">Refrigerator Repair</div>
          <div className="service-button">Fan Repair</div>
          <div className="service-button">Washing Machine Repair</div>
          <div className="service-button">AC Repair and Service</div>
          <div className="service-button">TV Repair</div>
        </div>

        {/* Right side with images */}
        <div className="services-images">
            <RepairCrousel image1 = {ACRepir} image2 = {ACRepir} image3 = {ACRepir} image4 = {ACRepir} />
        </div>
      </div>
    </div>
  </section>
  )
}

export default RepairComponant