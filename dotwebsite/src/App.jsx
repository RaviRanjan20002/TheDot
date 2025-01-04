// In App.jsx or index.js
import "@fortawesome/fontawesome-free/css/all.min.css";

import Header from "./Components/Header/Header";
import Courses from "./Components/Section/Courses";
import Registration from "./Components/Section/Registration";
import Empowering from "./Components/Section/Empowering";
import Facilities from "./Components/Section/Facilities";
function App() {
  return (
    <div>
     <Header/>
     <Courses/>
     <Registration/>
     <Empowering/>
     <Facilities/>
    </div>
  );
}

export default App;

