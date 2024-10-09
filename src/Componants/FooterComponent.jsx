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
        <div id='footer' className='footer'>
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
                        <li> <a href="#repair">Appliances and Repair Services</a></li>
                        <li> <a href="#electrical">Electrical Services</a></li>
                        <li> <a href="#plumbing">Plumbing Services</a></li>
                        <li><a href="#cleaning">Cleaning Services</a></li>
                    </ul>
                </div>
                <div className='Contact '>
                    <h4>Contact us</h4>

                    <ul>
                        <li><a target='blank' href="https://www.google.com/maps/place/337,+Industrial+Area+Phase+II,+Chandigarh,+160002,+India/@30.698445,76.7847555,17z/data=!3m1!4b1!4m6!3m5!1s0x390fecf4ba99661b:0xdeb2a24e2abd3d43!8m2!3d30.698445!4d76.7847555!16s%2Fg%2F11dy76bhfp?entry=ttu&g_ep=EgoyMDI0MTAwNS4yIKXMDSoASAFQAw%3D%3D">Plot no 337 industrial area phase 2,Chandigarh 160002</a></li>
                        <li><a href="mailto: fixomes@gmail.com">fixomes@gmail.com</a></li>
                        <li> <span onClick={handleWhatsapp}><a href="https://wa.me/+91 78373 11964?text= Thankyou for contacting us">+91 78373 11964</a></span></li>
                    </ul>
                </div>

            </div>


        </div>
    )
}

export default FooterComponent;