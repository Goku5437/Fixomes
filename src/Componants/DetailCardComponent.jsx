import React from 'react'
import "./Repair.css"



function DetailCardComponent(props) {
  return (
    
      <div className='outer_div'>
      <div className='home'>

        <img className='home_image1' src={props.home_cleaning} alt="home_cleaning" />
        <h2>{props.heading}</h2>
        <p>{props.paragraph}</p>
      </div>
    </div>
    
  )
}

export default DetailCardComponent;