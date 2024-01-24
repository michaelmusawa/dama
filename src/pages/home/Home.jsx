import React from 'react';
import './home.css';
import Imageslider from '../../components/Imageslider';
import Services from '../../components/Services';
import About from '../../components/About';
import Testimonials from '../../components/Testimonials';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <>
      <Imageslider />
      <Services />
      <About />
      <Testimonials />
      <Footer />
    </>
    
  )
} 

export default Home