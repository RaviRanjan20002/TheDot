
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Layout from "./Components/pages/Layout";
import Home from "./Components/pages/Home";
import Blogs from "./Components/pages/Blogs";
import Contact from "./Components/pages/Contact";
import NoPage from "./Components/pages/NoPage";
import Gallery from "./Components/pages/Gallery";
import CrashCourse from "./Components/pages/CrashCourse";
import CareerLibrary from "./Components/Career/CareerLibrary";
function App() {
  return(
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="gallery" element={<Gallery/>} />
          <Route path="contact" element={<Contact />} />
          <Route path="/CrashCourse" element={<CrashCourse/>} /> {/* Add this route */}
          <Route path="CareerLibrary" element={<CareerLibrary/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
  
}

export default App;


