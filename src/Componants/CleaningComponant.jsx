import React from 'react'
import './AppliancesSection.css'; // Import the CSS file for styling // Add paths to your images
import RepairCrousel from './RepairCrousel';
import Cleaning1 from "../assets/Cleaning1.jpeg"
import Cleaning2 from "../assets/Cleaning2.jpeg"
import Cleaning3 from "../assets/Cleaning3.jpeg"
import Cleaning4 from "../assets/Cleaning4.jpeg"
import { useInView } from 'react-intersection-observer';
function CleaningComponant() {
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
    <div className="appliances-container " id='cleaning'>
      <h2>Cleaning Services</h2>
      
      <div className="appliances-content">
        {/* Left side with buttons */}
        <div className="services-buttons">
          <div className="service-button">Ho​me Cleaning</div>
          <div className="service-button">Ba​throom Cleaning</div>
          <div className="service-button">Kitchen Cleaning​</div>
          <div className="service-button">Ta​nk Cleaning</div>
          <div className="service-button">Sofa & Carpet  Cleaning</div>
          <div className="service-button">Of​fice Cleaning</div>
          <div className="service-button">Ma​rble Polishing</div>
        </div>

        {/* Right side with images */}
        <div className="services-images">
            <RepairCrousel image1 = {Cleaning1} image2 = {Cleaning2} image3 = {Cleaning3} image4 = {Cleaning4}/>
        </div>
      </div>
    </div>
  </section>
  )
}

export default CleaningComponant