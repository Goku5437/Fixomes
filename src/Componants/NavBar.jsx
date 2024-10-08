import React from 'react'
import logo from "../assets/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import "../App.css"
function NavBar() {
  const handleWhatsapp = ()=>{
    const phoneNumber = "+917837311964"
    const message = "Please type your message here"
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url,'_blank')
}
  return (
    <div id='navbar' className='navBar'>
            <div className= 'imageDiv'>
            <img src={logo} alt="Logo"  />
            </div>
            <div className='linksDiv'>
              <ul className='linksList'>
                <li><a  href="#home">Home</a></li>
                <li><a  href="#aboutUs">About</a></li>
                <li><a  href="#services">Services</a> </li>
                <li><a  href="#contactUs">Contact US</a></li>
              </ul>
              <span className='bookNow' onClick={handleWhatsapp}>
              {/* <FontAwesomeIcon icon={faCalendar}  /> */}
                <a  className='bookLink' href="#">Book Now</a>
              </span>
            </div>
            
          </div>
  )
}

export default NavBar