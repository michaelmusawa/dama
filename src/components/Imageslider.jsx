import React from 'react';
import { useState, useEffect } from 'react';

import image1 from '../images/generalsupplies.jpg';
import image2 from "../images/stationary.jpg";
import image3 from "../images/services.jpg";
import image4 from "../images/cereals.jpg";
import image5 from "../images/moringa.jpg";

import './imageslider.css';




function Imageslider() {

  const slider_data = [
    {
        image:  image1,
        text1: "Biocanopy Limited",
        text2: "Comprehensive General Supply Solutions",
        text3: "Elevating Your Operations",
      },
      {
        image: image2,
        text1: "Fueling Creativity Daily",
        text2: "Office Essentials to Power Your Ideas",
        text3: "Essentials, Delivered",
      },
      {
        image: image3,
        text1: "Comfort Is Our Business",
        text2: "Pristine Spaces, Productive Places",
        text3: "Relax, We've Got It Covered",
      },
      {
        image: image4,
        text1: "Nourishing Your Days",
        text2: "The Bits of Healthy Champions",
        text3: "Every Bite counts"
      },
      {
        image: image5,
        text1: "Moringa Magic Unleashed",
        text2: "Energize & Heal with Natural Goodness",
        text3: "Wellness, One Leaf at a Time",
      },
    
]

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % slider_data.length);
    };

    const handleAutoPlay = () => {
        nextSlide();
    };

  useEffect(() => {
    const intervalId = setInterval(handleAutoPlay, 10000); 

    return () => {
      clearInterval(intervalId);
    };
  });

 


  return (
    <header className='main__header'>
        <div className='main__image-container'>
            <img src={slider_data[currentSlide].image} alt={`Slide ${currentSlide}`} />

            <div className="container__show-active">
              {

                slider_data.map((item, index) => (
                  <div 
                    key={index} className={`show_active ${index === currentSlide ? 'active' : 'not_active'}`} 
                    onClick={()=>
                      setCurrentSlide(index)}
                   >
                  </div>
                ))
              }

            </div>

            <div className="slide__text-container">
                <h4>{slider_data[currentSlide].text1}</h4>
                <h1>{slider_data[currentSlide].text2}</h1>
                <p>{slider_data[currentSlide].text3}</p>
            </div>

        </div>
    </header>
  )
}

export default Imageslider