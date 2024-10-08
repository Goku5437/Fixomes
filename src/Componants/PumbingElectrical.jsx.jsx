import React from "react";
import "./AppliancesSection.css"; // Import the CSS file for styling
import Electrical from "../assets/Electrical.jpeg"; // Add paths to your images
import Plumbing from "../assets/Plumbing.jpeg";

function PumbingElectrical() {
  return (
    <section className="appliances-section" id="plumbing" >
      <div className="appliances-container ">
        <h2>Electrical and Plumbing Services</h2>

        <div className="appliances-content2" >
          {/* Left side with buttons */}
          <div className="services-buttons">
            <div className="service-button electrical">Electrical</div>
            <div className="service-button">Microwave Repair</div>
            <div className="service-button">Refrigerator Repair</div>
            <div className="service-button plumbing">Plumbing</div>
            <div className="service-button">Washing Machine Repair</div>
            <div className="service-button">AC Repair and Service</div>
            <div className="service-button">TV Repair</div>
          </div>

          {/* Right side with images */}
          <div className="services-images2">
          <div className="imagesDiv">
              <img  src={Electrical} alt="Electrical" />
            </div>
            <div className="imagesDiv">
              <img src={Plumbing} alt="Plumbing" />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default PumbingElectrical;
