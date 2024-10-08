import "./App.css";
import Card from "./Componants/Card";
import SmallCard from "./Componants/SmallCard";
import NavBar from "./Componants/navBar";
import CrossfadeCarousel from "./Componants/CrossfadeCarousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import almirah from "./assets/Alimrah.jpeg"
import Brrom from "./assets/Brrom.jpeg"
import Flush from "./assets/Flush.jpeg"
import Plug from "./assets/Plug.jpeg"
import RepairComponant from "./Componants/RepairComponant";
import PumbingElectrical from "./Componants/PumbingElectrical.jsx";
import WhatsappButton from "./Componants/WhatsappButton.jsx";
import ServiceSection from "./Componants/ServiceSection.jsx";
import ReviewsSection from "./Componants/ReviewsSection.jsx";
import AboutUs from "./Componants/Aboutus.jsx";
import ElectricalComponant from "./Componants/ElectricalComponant.jsx";
import PlumbingComponant from "./Componants/PlumbingComponant.jsx";
import CleaningComponant from "./Componants/CleaningComponant.jsx";
import FooterComponent from "./Componants/FooterComponent.jsx";


function App() {
  
  return (
    <>
      <div className="main_outerDiv">
        <div className="slide_Div">
          <NavBar />
          <div className="nightStar">
            <CrossfadeCarousel idScrollcleaning = "#cleaning" idScrollrepair = "#repair" idScrollelectrical = "#electrical" idScrollplumbing="#plumbing" />
          </div>
          <h1 className="OUR_SERVICE" id="services">OUR SERVICES</h1>
          <div className="card-main-container">
          <div className="card_div">
            <Card image = {almirah} idScroll = "#repair" />
            <h6>Appliances and Repair Services </h6>
            
          </div>
          <div className="card_div">
            <Card image = {Plug}  idScroll = "#electrical"/>
            <h6>Electrical Services</h6>
            
          </div>
          <div className="card_div">
            <Card image = {Flush} idScroll="#plumbing" />
            <h6>Plumbing Services</h6>
            
          </div>
          <div className="card_div">
            <Card image = {Brrom} idScroll="#cleaning"/>
            <h6>Cleaning Services</h6>
            
          </div>
        </div>
          
        </div>
        <RepairComponant/>
        <CleaningComponant/>
        <PlumbingComponant/>
        <ElectricalComponant/>
        <ServiceSection/>
        <ReviewsSection/>
        <WhatsappButton/>
        <AboutUs/>
        <FooterComponent/>
      </div>

    </>
  );
}

export default App;
