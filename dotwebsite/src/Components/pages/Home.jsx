
import Courses from '../Section/Courses';
import Registration from '../Section/Registration';
import Empowering from '../Section/Empowering';
import Facilities from '../Section/Facilities';
import Testimonial from '../Section/Testimonial';
import Footer from '../Section/Footer';
// import BannerSlider from '../Section/BannerSlider';
import Whatsapp from '../Section/Whatsapp';
import NewHome from '../pages/NewHome';

function Home() {
  return (
    <div>
      <NewHome/>
      {/* <BannerSlider/> */}
      <Courses/>
      <Registration/>
      <Empowering/>
      <Facilities/>
      <Testimonial/>
      <Footer/>
      <Whatsapp/>
    </div>
  );
}

export default Home;
