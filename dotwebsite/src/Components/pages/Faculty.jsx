import "../../../styles/faculty.css";
import imag1 from "../../assets/rahul.png";
import imag2 from "../../assets/chiran.png";
import imag3 from "../../assets/raju.png";

import imag4 from "../../assets/satish.png";
import imag5 from "../../assets/anukalp.png";
import imag6 from "../../assets/pooja.png";

import imag7 from "../../assets/kundan.png";
import imag8 from "../../assets/manish.png";
import imag9 from "../../assets/mohit.png";

import imag10 from "../../assets/itipareek.png";
import imag11 from "../../assets/seema.png";
const facultyData = [
  {
    subject: "Physics",
    members: [
      { name: "Rahul Sir", degree: "B.Tech, IIT Bombay" ,img:imag1},
      { name: "Chirranjeev Sir", degree: "B.Tech, IIT Roorkee"  ,img:imag2},
      { name: "Raju Sir", degree: "B.Tech, DTU"  ,img:imag3},
    ],
  },
  {
    subject: "Chemistry",
    members: [
      { name: "Satish Sir", degree: "Int. M.Tech, IIT Dhanbad",img:imag4 },
      { name: "Anukalp Sir", degree: "B.Tech, IIT Dhanbad",img:imag5 },
      { name: "Pooja Mam", degree: "M.Sc, MDU Rohtak",img:imag6 }
    ],
  },
  {
    subject: "Maths",
    members: [
      { name: "Kundan Sir", degree: "B.Tech, IIT Delhi",img:imag7 },
      { name: "Manish Sir", degree: "M.Sc, IIT Delhi",img:imag8 },
      { name: "Mohit Sir", degree: "M.Sc, NIT Jmsd",img:imag9 },
    ],
  },
  {
    subject: "Biology",
    members: [
      { name: "Iti Pareek Mam", degree: "M.Sc, Banasthali University",img:imag10 },
      { name: "Seema Mam", degree: "M.Sc, GJU Hisar",img:imag11 },
    ],
  },
];

const FacultyCard = ({ name, degree,img }) => (
  <div className="faculty-card">
    <div className="faculty-image">
      <img className="facultyimage" src={img} alt="Faculty" />
    </div>
    <h3 className="faculty-name">{name}</h3>
    <p className="faculty-degree">{degree}</p>
  </div>
);

const Faculty = () => {
  return (
    <div className="faculty-container">
      <h1 className="faculty-title">Best Faculties in Rewari</h1>
      <div className="faculty-grid">
        {facultyData.map((category, index) => (
          <div key={index}>
            <h2 className="faculty-subject">{category.subject}</h2>
            <div className="faculty-list">
              {category.members.map((member, idx) => (
                <FacultyCard key={idx} {...member} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="faculty-contact">
        <p>☎️ 7419614833/53, 9560939372</p>
      </div>
    </div>
  );
};

export default Faculty;