import React from 'react';
import Courses from '../Section/Courses';
import Registration from '../Section/Registration';
import Empowering from '../Section/Empowering';
import Facilities from '../Section/Facilities';

function Home() {
  return (
    <div>
      <Courses/>
      <Registration/>
      <Empowering/>
      <Facilities/>
    </div>
  );
}

export default Home;
