// components/ImageSlider.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import L1 from './im/L1.jpg';
import L2 from './im/L2.jpg';
import L3 from './im/L3.jpg';
import C from './im/cs.jpg'
import I from './im/Is.webp'
import R8 from './im/A8.png'
import I4 from './im/Is2.png'
import R from './im/R.png'
import K4 from './im/K4.png'

import K5 from './im/k5.jpg'
function ImageSlider() {


    const imageStyle = {
        maxWidth: '100%',
        // Adjust this as needed
        // Adjust this as needed
      };
      const im={
        maxWidth:'80%',
      }
    
  return (
    
    <div className="image-slider" style={imageStyle}>
      <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false}>
        <div>
          <img src = {L1} alt="Car 1"style={imageStyle} />
          
        </div>
        <div>
          <img src={K5} alt="Car 2" style={imageStyle}/>
          
        </div>
        
        <div>
          <img src={R8}alt="Car 4" style={im}/>
         
        </div>
        {/* Add more images as needed */}
      </Carousel>
    </div>
  );
}

export default ImageSlider;
