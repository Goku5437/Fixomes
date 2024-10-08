import { CCarousel, CCarouselItem, CImage } from '@coreui/react'
import React from 'react'

function RepairCrousel(props) {
  return (
    <CCarousel interval={2000} transition="crossfade">
      <CCarouselItem className='d-flex justify-content-center align-items-center' >
        <CImage style={{ height: '500px', overflow:"hidden", objectFit: 'cover',  borderRadius:"50px", width: '600px'}}  className="d-block w70" src={props.image1} alt="Slide 1" />
      </CCarouselItem>
      <CCarouselItem className='d-flex justify-content-center align-items-center'>
        <CImage style={{ height: '500px',  overflow:"hidden", objectFit: 'cover',  borderRadius:"50px",  width: '600px'}}  className="d-block w-70" src={props.image2} alt="Slide 2" />
      </CCarouselItem>
      <CCarouselItem className='d-flex justify-content-center align-items-center'>
        <CImage style={{ height: '500px', objectFit: 'cover', overflow:"hidden",  borderRadius:"50px",  width: '600px'}}  className="d-block w-70" src={props.image3} alt="Slide 3" />
      </CCarouselItem>
      <CCarouselItem className='d-flex justify-content-center align-items-center'>
        <CImage style={{ height: '500px', objectFit: 'cover', overflow:"hidden",  borderRadius:"50px",  width: '600px'}}  className="d-block w-70" src={props.image4} alt="Slide 3" />
      </CCarouselItem>
    </CCarousel>
  )
}

export default RepairCrousel