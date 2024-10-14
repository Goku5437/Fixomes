import "./App.css";
import Card from "./Componants/Card";
import { BrowserRouter, Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import NavBar from "./Componants/navBar";
import CrossfadeCarousel from "./Componants/CrossfadeCarousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import almirah from "./assets/Alimrah.jpeg"
import Brrom from "./assets/Brrom.jpeg"
import Flush from "./assets/Flush.jpeg"
import Plug from "./assets/Plug.jpeg"
import RepairComponant from "./Componants/RepairComponant";
import WhatsappButton from "./Componants/WhatsappButton.jsx";
import ServiceSection from "./Componants/ServiceSection.jsx";
import ReviewsSection from "./Componants/ReviewsSection.jsx";
import AboutUs from "./Componants/Aboutus.jsx";
import ElectricalComponant from "./Componants/ElectricalComponant.jsx";
import PlumbingComponant from "./Componants/PlumbingComponant.jsx";
import CleaningComponant from "./Componants/CleaningComponant.jsx";
import FooterComponent from "./Componants/FooterComponent.jsx";
import Cleaning from "./Componants/Cleaning.jsx";
import Plumbing from "./Componants/Plumbing.jsx";
import Electrical from "./Componants/Electrical.jsx";
import DetailCardComponent from "./Componants/DetailCardComponent.jsx";

import ReapirComponentDetail from "./Componants/ReapirComponentDetail.jsx";
import { useState,useContext,createContext, useEffect } from "react";
import {UserProvider} from "./Context/context.jsx"
import { UserContext } from './Context/context'
import "./Componants/PopularServices.css"
import PopularServices from "./Componants/PopularServices.jsx";
import Basinrepair from "./assets/Basinrepair.png"
import chimney from "./assets/chimney.jpg"
import RO from "./assets/RO.jpg"
import tank_cleaning from "./assets/tank_cleaning.jpg"
import ACRepair from "./assets/ACRepir.jpeg"
import Wash_basin from "./assets/Wash_basin.jpg"


function App() {
  
  const { changeVisibility,changeVisibilityTrue}  = useContext(UserContext);
 

  useEffect(() => {
    
  window.addEventListener('popstate', changeVisibilityTrue);

    return () => {
      window.removeEventListener('popstate', changeVisibilityTrue);
    };
    
  }, [])
  
  
  return (
    <>
     <BrowserRouter>
    
      <Routes>
      
        <Route  path="/" element={<div className="main_outerDiv">
        <div className="slide_Div">
          <NavBar />
          <div className="nightStar">
            <CrossfadeCarousel idScrollcleaning = "#cleaning" idScrollrepair = "#repair" idScrollelectrical = "#electrical" idScrollplumbing="#plumbing" />
          </div>
          <h1 className="OUR_SERVICE" id="services">OUR SERVICES</h1>
          <div className="card-main-container">
          <Link className="a-setting" to="/repair" onClick = {changeVisibility}>
          <div className="card_div">
            <Card image = {almirah} idScroll = "#repair" />
            <h6>Appliances and Repair Services </h6>
            
          </div>
          </Link>
          <Link className="a-setting" to="/electrical" onClick = {changeVisibility}>
          <div className="card_div">
            <Card image = {Plug}  idScroll = "#electrical"/>
            <h6>Electrical Services</h6>
            
          </div>
          </Link>
          <Link className="a-setting" to="/plumbing" onClick = {changeVisibility}>
          <div className="card_div">
            <Card image = {Flush} idScroll="#plumbing" />
            <h6>Plumbing Services</h6>
            
          </div>
          </Link>
          <Link className="a-setting" to="/cleaning" onClick = {changeVisibility}>
          <div className="card_div">
            <Card image = {Brrom} idScroll="#cleaning"/>
            <h6>Cleaning Services</h6>
            
          </div>
          </Link>
        </div>
          
        </div>
        {/* <RepairComponant/>
        <CleaningComponant/>
        <PlumbingComponant/>
        <ElectricalComponant/> */}
        <h3 className="our-services">Our Popular Services</h3>
        <div className="outer-container">
          <PopularServices images ={chimney} heading = "Chimney Services" price ="499"/>
          <PopularServices images ={Basinrepair} heading = "Bathroom Cleaning" price ="499"/>
          <PopularServices images ={RO} heading = "RO Services" price ="350"/>
          <PopularServices images ={tank_cleaning} heading = "Tank Services" price ="299"/>
          <PopularServices images ={ACRepair} heading = "AC Services" price ="399"/>
          <PopularServices images ={Wash_basin} heading = "Plumbing Services" price ="99"/>
        </div>

        <ServiceSection/>
        <ReviewsSection/>
        <WhatsappButton/>
        <AboutUs/>
        <FooterComponent/>
      </div>}>
      </Route>
      <Route path="repair" element={< ReapirComponentDetail />} />

      <Route path="cleaning" element={<Cleaning />} />
      <Route path="plumbing" element={<Plumbing />} />
      <Route path="electrical" element={<Electrical />} />
     
      </Routes>
      
    </BrowserRouter>
      

    </>
  );
}

export default App;
