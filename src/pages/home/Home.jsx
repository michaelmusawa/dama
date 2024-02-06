import React from 'react';
import './home.css';
import Imageslider from '../../components/Imageslider';
import Services from '../../components/Services';
import About from '../../components/About';
import Testimonials from '../../components/Testimonials';
import Home_members from '../../components/Home_members';




const Home = () => {
  return (
    <>
      <Imageslider />
      <Services />
      <About />
      <Testimonials />
      <Home_members />
    </>
    
  )
} 

export default Home