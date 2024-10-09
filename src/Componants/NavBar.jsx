import React, { useContext } from 'react'
import logo from "../assets/logo.png"
import "../App.css"
import { UserContext } from '../Context/context'
import { Link } from 'react-router-dom'

function NavBar() {
  const handleWhatsapp = ()=>{
    const phoneNumber = "+917837311964"
    const message = "Please type your message here"
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url,'_blank')
}

  const {navVisibility, changeVisibilityTrue}  = useContext(UserContext);

  return (
    navVisibility ? <div id='navbar' className='navBar'>
    <div className= 'imageDiv'>
    <img src={logo} alt="Logo"  />
    </div>
    <div className='linksDiv'>
      <ul className='linksList'>
      <Link to="/" onClick={changeVisibilityTrue}>
        <li><a  href="/">Home</a></li></Link>
        <li><a  href="#aboutUs">About</a></li>
        <li><a  href="#services">Services</a> </li>
        <li><a  href="#footer">Contact Us</a></li>
      </ul>
      <span className='bookNow' onClick={handleWhatsapp}>
      {/* <FontAwesomeIcon icon={faCalendar}  /> */}
        <a  className='bookLink' href="#">Book Now</a>
      </span>
    </div>
    
  </div> 

  : 

  <div id='navbar' className='navBar'>
            <div className= 'imageDiv'>
            <img src={logo} alt="Logo"  />
            </div>
            <div className='linksDiv'>
              <ul className='linksList'>
              <Link to="/" onClick={changeVisibilityTrue}>
              <li><a  href="/">Home</a></li></Link>
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