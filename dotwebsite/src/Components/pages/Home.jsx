import React from 'react';
import Courses from '../Section/Courses';
import Registration from '../Section/Registration';
import Empowering from '../Section/Empowering';
import Facilities from '../Section/Facilities';
import Testimonial from '../Section/Testimonial';
// import Gallery from '../Section/Gallery';
import Footer from '../Section/Footer';

function Home() {
  return (
    <div>
      <Courses/>
      <Registration/>
      <Empowering/>
      <Facilities/>
      <Testimonial/>
      {/* <Gallery/> */}
      <Footer/>
      
     
    </div>
  );
}

export default Home;
