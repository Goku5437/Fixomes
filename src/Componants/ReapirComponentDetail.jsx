import React from 'react'
import DetailCardComponent from './DetailCardComponent'
import "./Repair.css"
import chimney from "../assets/chimney.jpg";
import RO from "../assets/RO.jpg";
import TV from "../assets/TV.jpg";
import AC from "../assets/AC.jpg";
import washing_machine from "../assets/washing_machine.jpg";
import Geyser from "../assets/Geyser.jpg";
import Microwave from "../assets/Microwave.jpg";
import Commercial from "../assets/Commercial.jpg";
import NavBar from './navBar';


function ReapirComponentDetail() {
    return (<> <NavBar />
        <div className='main_div'>

            <DetailCardComponent home_cleaning={chimney} heading="Chimney Repair & Service" paragraph="Experience thorough bathroom cleaning that tackles stubborn stains, grime, and germs." />
            <DetailCardComponent home_cleaning={RO} heading="RO Repair & Service" paragraph="Ensure pure drinking water with professional RO repair and maintenance services." />
            <DetailCardComponent home_cleaning={TV} heading="TV Repair & Service" paragraph="Restore your TV’s performance with expert repair services." />
            <DetailCardComponent home_cleaning={AC} heading="AC Repair & Service" paragraph="Beat the heat with expert AC repair and servicing." />
            <DetailCardComponent home_cleaning={washing_machine} heading="Washing Machine Repair & Service" paragraph="Get your laundry back on track with expert washing machine repair services." />
            
            <DetailCardComponent home_cleaning={TV} heading="Refrigerator Repair & Service" paragraph="Ensure your food stays fresh with professional refrigerator repair services." />
            <DetailCardComponent home_cleaning={Geyser} heading="Geyser Repair & Service" paragraph="Enjoy uninterrupted hot water with reliable geyser repair and servicing." />
            <DetailCardComponent home_cleaning={Microwave} heading="Microwave Repair & Service" paragraph="Fix your microwave’s heating and electrical issues with professional repair services" />
            <DetailCardComponent home_cleaning={Commercial} heading="Commercial Appliances Repair"
                paragraph="Keep your business running smoothly with expert commercial appliance repair services" />








        </div>


    </>
    )
}

export default ReapirComponentDetail