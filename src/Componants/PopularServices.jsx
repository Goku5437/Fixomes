import React from 'react'
import "./PopularServices.css"

function PopularServices(props) {
  return (
    <>
        <div className='main-container'>
            <div className="imageDivimage">
                <img src={props.images} alt="Service" />
                <h4>{props.heading}</h4>
                <p>Starting at : {props.price}</p>
            </div>
        </div>  
    </>
  )
}

export default PopularServices