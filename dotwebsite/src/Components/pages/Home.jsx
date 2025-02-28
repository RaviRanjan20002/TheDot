
import Courses from '../Section/Courses';
import Registration from '../Section/Registration';
import Empowering from '../Section/Empowering';
import Facilities from '../Section/Facilities';
import Testimonial from '../Section/Testimonial';
import Footer from '../Section/Footer';
// import BannerSlider from '../Section/BannerSlider';
import Whatsapp from '../Section/Whatsapp';
import NewHome from '../pages/NewHome';
import ResFac from '../Section/ResFac';
import Programs from '../Section/Programs';

function Home() {
  return (
    <div>
      <NewHome/>
      {/* <BannerSlider/> */}
      <Programs/>
      <ResFac/>
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
