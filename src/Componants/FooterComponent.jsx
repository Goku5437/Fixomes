import React from 'react'
import './FooterComponent.css'

function FooterComponent() {
    const handleWhatsapp = ()=>{
        const phoneNumber = "+917837311964"
        const message = "Please type your message here"
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url,'_blank')
    }
    return (
        <div className='footer'>
            <div className='navbar'>
                <div className='about'>

                    <h4>About us</h4>
                    <p>Welcome to Fixomes, your trusted partner for comprehensive home maintenance solutions. With over 4 years of experience and more than 2,500 satisfied customers, our team of skilled technicians and professionals is committed to providing top-notch services tailored to meet your specific needs. Our dedication to excellence has earned us a stellar reputation and a 4.9-star rating on Google.</p>
                </div>
                <div className='Menu'>
                    <h4>Menu</h4>
                    <ul>
                        <li> <a href="#navbar">Home</a> </li>
                        <li><a href="#aboutUs">About</a> </li>
                        <li> <a href="#services">Services</a></li>
                       

                    </ul>

                </div>
                <div
                className='Services'>
                    <h4>Services</h4>
                    <ul>
                        <li> <a href="#repair">Appliaces and Repair Services</a></li>
                        <li> <a href="#electrical">Electrical Services</a></li>
                        <li> <a href="#plumbing">Plumbing Services</a></li>
                        <li><a href="#cleaning">Cleaning Services</a></li>
                    </ul>
                </div>
                <div className='Contact '>
                    <h4>Contact us</h4>

                    <ul>
                        <li><a target='blank' href="https://www.google.com/maps/dir//Wadhawa+Nagar,+Dhakoli,+Zirakpur,+Panchkula,+Punjab/@30.649573,76.8130894,14z/data=!4m12!1m2!2m1!1sSHOP+NO.+10,+WADHWA+NAGAR,+Zirakpur,+Punjab+140603!4m8!1m0!1m5!1m1!1s0x390f94b149c29e1b:0xf9118b3d2e133cb2!2m2!1d76.83786!2d30.6632909!3e9?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D">SHOP NO. 10, WADHWA NAGAR, Zirakpur, Punjab 140603</a></li>
                        <li><a href="mailto: fixomes@gmail.com">fixomes@gmail.com</a></li>
                        <li> <span onClick={handleWhatsapp}><a href="https://wa.me/+91 78373 11964?text= Thankyou for contacting us">+91 78373 11964</a></span></li>
                    </ul>
                </div>

            </div>


        </div>
    )
}

export default FooterComponent;