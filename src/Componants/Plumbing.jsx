import React from 'react'
import clogged_pipe from "../assets/clogged_pipe.jpg";
import Wash_basin from "../assets/Wash_basin.jpg";
import Waterproof from "../assets/Waterproof.jpg";
import carpet_cleaning from "../assets/carpet_cleaning.jpg";
import tank_cleaning from "../assets/tank_cleaning.jpg";
import office_cleaning from "../assets/office_cleaning.jpg";
import marble_cleaning from "../assets/marble_cleaning.jpg";
import bathroom_cleaning from "../assets/bathroom_cleaning.jpg";
import DetailCardComponent from './DetailCardComponent';

function Plumbing() {
  return (
    <div className='main_div'>
    <DetailCardComponent  home_cleaning = {clogged_pipe} heading = "Clogged Pipe Repair & Unclogging" paragraph = "Say goodbye to slow drains and backups with professional clogged pipe repair services."/>
    <DetailCardComponent  home_cleaning = {Wash_basin} heading = "Wash Basin Repair & Service" paragraph = "Ensure your wash basin functions perfectly with professional repair services."/>
    <DetailCardComponent  home_cleaning = {Waterproof} heading = "Waterproofing Services" paragraph = "Protect your home from leaks and moisture damage with expert waterproofing services."/>
    <DetailCardComponent  home_cleaning = {carpet_cleaning} heading = "Carpet Cleaning" paragraph = "Restore your carpets to their original beauty with professional carpet cleaning."/>
    <DetailCardComponent  home_cleaning = {tank_cleaning} heading = "Tank Cleaning" paragraph = "Ensure clean and safe water with expert tank cleaning services."/>
    <DetailCardComponent  home_cleaning = {office_cleaning} heading = "Office Cleaning" paragraph = "Keep your workspace spotless and inviting with professional office cleaning."/>
    <DetailCardComponent  home_cleaning = {marble_cleaning} heading = "Marble Cleaning" paragraph = "Bring back the shine to your marble floors with expert marble polishing services."/>
    <DetailCardComponent  home_cleaning = {bathroom_cleaning} heading = "Bathroom Cleaning" paragraph = "Experience thorough bathroom cleaning that tackles stubborn stains, grime, and germs."/>


  

    
    </div>
  )
}

export default Plumbing