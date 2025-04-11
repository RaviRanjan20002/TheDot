import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Layout from "./Components/pages/Layout";
import Home from "./Components/pages/Home";
import Blogs from "./Components/pages/Blogs";
import Contact from "./Components/pages/Contact";
import NoPage from "./Components/pages/NoPage";
import Gallery from "./Components/pages/Gallery";
import CrashCourse from "./Components/pages/CrashCourse";
import CareerLibrary from "./Components/Career/CareerFolder/CareerLibrary";
import CareerDetail from "./Components/Career/CareerFolder/CareerDetail"; // Import new component
import CareerStreams from "./Components/Career/CareerFolder/CareerStream";
import Faculty from "./Components/pages/Faculty";
import Result from "./Components/pages/Result";
import Programs from "./Components/Section/Programs";
import ProgramDetail from "./Components/Section/ProgramDetail";
import IITBlog from "./Components/pages/iitblog";
import AboutExcellence from "./Components/Section/AboutExcellence";
import OurVision from "./Components/Section/OurVision";
import OurJourney from "./Components/Section/OurJourney";
import JoinOurTeam from "./Components/Section/JoinOurTeam";
import JeeMainAdv from "./Components/Section/JeeMainAdv"
import NeetUG from "./Components/Section/NeetUG";
import JeeCrash from "./Components/Section/CrashCourseJEE";
import NeetCrash from "./Components/Section/CrashCourseNEET";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          {/* <Route path="/blog/:title" element={<IITBlog />} /> */}
          <Route path="/blog/:title" element={<IITBlog />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="CrashCourse" element={<CrashCourse />} />
          <Route path="faculty" element={<Faculty />} />
          <Route path="result" element={<Result />} />
          <Route path="CareerLibrary" element={<CareerLibrary />} />
          <Route path="/career-streams" element={<CareerStreams />} />
          <Route path="career/:careerTitle" element={<CareerDetail />} /> {/* Dynamic route */}
          <Route path="/" element={<Programs />} />
          <Route path="/programs/:id" element={<ProgramDetail />} />
          <Route path="/about-excellence" element={<AboutExcellence />} />
          <Route path="/our-vision" element={<OurVision />} />
          <Route path="/our-journey" element={<OurJourney />} /> 
          <Route path="/join-our-team" element={<JoinOurTeam />}/>
          <Route path="/jee-main-adv" element={<JeeMainAdv />} />
          <Route path="/neet-ug" element={<NeetUG />} />
          <Route path="/jee-crash-course" element={<JeeCrash />} />
          <Route path="/neet-crash-course" element={<NeetCrash />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
