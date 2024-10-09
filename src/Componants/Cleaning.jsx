import React from 'react'
import home_cleaning from "../assets/Home_cleaning.jpg";
import kitchen_cleaning from "../assets/kitchen_cleaning.jpg";
import sofa_cleaning from "../assets/sofa_cleaning.jpg";
import carpet_cleaning from "../assets/carpet_cleaning.jpg";
import tank_cleaning from "../assets/tank_cleaning.jpg";
import office_cleaning from "../assets/office_cleaning.jpg";
import marble_cleaning from "../assets/marble_cleaning.jpg";
import bathroom_cleaning from "../assets/bathroom_cleaning.jpg";
import DetailCardComponent from './DetailCardComponent';

function Cleaning() {
  return (
    <>
    <div className='main_div'>
    <DetailCardComponent  home_cleaning = {home_cleaning} heading = "Home Cleaning" paragraph = "Get professional home cleaning services that leave your entire house spotless and refreshed."/>
    <DetailCardComponent  home_cleaning = {kitchen_cleaning} heading = "Kitchen Cleaning" paragraph = "Say goodbye to grease and dirt with expert kitchen cleaning services."/>
    <DetailCardComponent  home_cleaning = {sofa_cleaning} heading = "Sofa Cleaning" paragraph = "Revitalize your sofa with expert sofa cleaning services."/>
    <DetailCardComponent  home_cleaning = {carpet_cleaning} heading = "Carpet Cleaning" paragraph = "Restore your carpets to their original beauty with professional carpet cleaning."/>
    <DetailCardComponent  home_cleaning = {tank_cleaning} heading = "Tank Cleaning" paragraph = "Ensure clean and safe water with expert tank cleaning services."/>
    <DetailCardComponent  home_cleaning = {office_cleaning} heading = "Office Cleaning" paragraph = "Keep your workspace spotless and inviting with professional office cleaning."/>
    <DetailCardComponent  home_cleaning = {marble_cleaning} heading = "Marble Cleaning" paragraph = "Bring back the shine to your marble floors with expert marble polishing services."/>
    <DetailCardComponent  home_cleaning = {bathroom_cleaning} heading = "Bathroom Cleaning" paragraph = "Experience thorough bathroom cleaning that tackles stubborn stains, grime, and germs."/>


  

    
    </div>
     
     
     </>
  )
}

export default Cleaning