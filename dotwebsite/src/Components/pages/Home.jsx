// eslint-disable-next-line no-unused-vars
import React from 'react';
import Courses from '../Section/Courses';
import Registration from '../Section/Registration';
import Empowering from '../Section/Empowering';
import Facilities from '../Section/Facilities';
import Testimonial from '../Section/Testimonial';
import Footer from '../Section/Footer';
import BannerSlider from '../Section/BannerSlideshow';

function Home() {
  return (
    <div>
      <BannerSlider/> 
      <Courses/>
      <Registration/>
      <Empowering/>
      <Facilities/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}

export default Home;
