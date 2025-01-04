// import Header from "./Components/Header/Header";
// import Courses from "./Components/Section/Courses";
// import Registration from "./Components/Section/Registration";
// eslint-disable-next-line no-unused-vars
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/pages/Layout";
import Home from "./Components/pages/Home";
import Blogs from "./Components/pages/Blogs";
import Contact from "./Components/pages/Contact";
import NoPage from "./Components/pages/NoPage";
import '@fortawesome/fontawesome-free/css/all.min.css';
function App() {
  return(
    <>
     {/* <Header/>
     <Courses/>
     <Registration/> */}
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
  
}

export default App;


