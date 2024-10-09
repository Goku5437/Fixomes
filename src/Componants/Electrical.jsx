import React from 'react'
import Fan2 from "../assets/Fan2.jpg";
import MCB from "../assets/MCB.jpg";
import Switch_board_repair from "../assets/Switch_board_repair.jpg";
import carpet_cleaning from "../assets/carpet_cleaning.jpg";
import tank_cleaning from "../assets/tank_cleaning.jpg";
import office_cleaning from "../assets/office_cleaning.jpg";
import marble_cleaning from "../assets/marble_cleaning.jpg";
import bathroom_cleaning from "../assets/bathroom_cleaning.jpg";
import DetailCardComponent from './DetailCardComponent';


function Electrical() {
  return (<>
    
    
    <div className='main_div'>
    <DetailCardComponent  home_cleaning = {Fan2} heading = "Fan Installation & Repair" paragraph = "Ensure your fans are running efficiently with expert installation and repair services."/>
    <DetailCardComponent  home_cleaning = {MCB} heading = "MCB & Fuse Repair" paragraph = "Protect your home’s electrical system with professional MCB and fuse repair services."/>
    <DetailCardComponent  home_cleaning = {Switch_board_repair} heading = "Switchboard Repair & Installation" paragraph = "Get quick and safe switchboard repairs and installations to prevent electrical hazards."/>
    <DetailCardComponent  home_cleaning = {carpet_cleaning} heading = "Carpet Cleaning" paragraph = "Restore your carpets to their original beauty with professional carpet cleaning."/>
    <DetailCardComponent  home_cleaning = {tank_cleaning} heading = "Tank Cleaning" paragraph = "Ensure clean and safe water with expert tank cleaning services."/>
    <DetailCardComponent  home_cleaning = {office_cleaning} heading = "Office Cleaning" paragraph = "Keep your workspace spotless and inviting with professional office cleaning."/>
    <DetailCardComponent  home_cleaning = {marble_cleaning} heading = "Marble Cleaning" paragraph = "Bring back the shine to your marble floors with expert marble polishing services."/>
    <DetailCardComponent  home_cleaning = {bathroom_cleaning} heading = "Bathroom Cleaning" paragraph = "Experience thorough bathroom cleaning that tackles stubborn stains, grime, and germs."/>

   

    
  
    </div>
  </>
  )

}

export default Electrical