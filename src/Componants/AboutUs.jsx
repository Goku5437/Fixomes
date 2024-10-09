 import React from 'react';
import './AboutUs.css'; // Import the CSS file
import AboutUSImage from "../assets/AboutUSImage.jpeg"
import { useInView } from 'react-intersection-observer';
const AboutUs = () => {
  const { ref, inView } = useInView({
   
    threshold: 0.5,
  });
  return (
    <section className="about-us" ref={ref} 
    style={{
      transition: 'all 0.5s ease-in-out',
      transform: inView ? 'translateY(0)' : 'translateY(100px)',
      opacity: inView ? 1 : 0,
    }}>
      <div className="image-container">
        <img
          src={AboutUSImage} // Replace with your image path
          alt="About Us"
          className="background-image"
        />
        <div className="overlay" id='aboutUs'>
          <h1>About Us</h1>
          <div className="description">
            <p>
              Welcome to Fixomes, your trusted partner for comprehensive home maintenance solutions. With over 4 years of experience and more than 2,500 satisfied customers, our team of skilled technicians and professionals is committed to providing top-notch services tailored to meet your specific needs. Our dedication to excellence has earned us a stellar reputation and a 4.9-star rating on Google.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
