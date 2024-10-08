import React from 'react';
import './WhatsappButton.css'; // Import the CSS file

const WhatsappButton = () => {
    const handleWhatsapp = ()=>{
        const phoneNumber = "+917837311964"
        const message = "Please type your message here"
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url,'_blank')
    }
  return (
    <div className="whatsapp-float"  onClick={handleWhatsapp}>
      
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
          alt="WhatsApp Chat" 
        />
      
    </div>
  );
};

export default WhatsappButton;
