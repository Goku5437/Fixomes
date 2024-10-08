import React from 'react';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';// Example image path
import Banner2 from '../assets/Banner2.jpeg'
import Banner3 from '../assets/Banner3.jpeg'
import Banner4 from '../assets/Banner4.jpeg'
import Banner5 from '../assets/Banner5.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css'; 

function CrossfadeCarousel({idScrollplumbing,idScrollrepair,idScrollelectrical,idScrollcleaning}) {
  return (
    <CCarousel interval={2000} transition="crossfade">
      <CCarouselItem className='d-flex justify-content-center align-items-center' >
        <a href={idScrollelectrical}>
        <CImage style={{ maxHeight: '500px', objectFit: 'cover', marginTop: '70px' }}  className="d-block w-100" src={Banner2} alt="Slide 1" />
        </a>
      </CCarouselItem>
      <CCarouselItem className='d-flex justify-content-center align-items-center'>
      <a href={idScrollplumbing}>
        <CImage style={{ maxHeight: '500px', objectFit: 'cover', marginTop: '70px' }}  className="d-block w-100" src={Banner3} alt="Slide 2" />
      </a>
      </CCarouselItem>
      <CCarouselItem className='d-flex justify-content-center align-items-center'>
      <a href={idScrollrepair}>
        <CImage style={{ maxHeight: '500px', objectFit: 'cover', marginTop: '70px' }}  className="d-block w-100" src={Banner4} alt="Slide 3" />
      </a>
      </CCarouselItem>
      <CCarouselItem className='d-flex justify-content-center align-items-center'>
      <a href={idScrollcleaning}>
        <CImage style={{ maxHeight: '500px', objectFit: 'cover', marginTop: '70px' }}  className="d-block w-100" src={Banner5} alt="Slide 3" />
      </a>
      </CCarouselItem>
    </CCarousel>
  );
}

export default CrossfadeCarousel;