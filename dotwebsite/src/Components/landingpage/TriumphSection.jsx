import React from "react";
import "../../../styles/TriumphSection.css";
import truphImage from "../../assets/trumph.png";

const TriumphSection = () => {
  const title = "THE TRIUMPH OF 5 YEARS";
  const subtitle = "25 AIR 1 in JEE & Pre-Medical all from classroom";
  const participants = [
    "Ayush Goel (NEET 2013)","Lokesh Agarwal (AIPMT 2010)","Het Sanjay Shah (NEET 2016)", 
    "Nishita Purohit (AIIMS 2017)","Kavya Chopra (JEE MAIN 2021)", "Pulkit Goyal (JEE MAIN 2021)",
    "Siddhant Mukherjee (JEE MAIN 2021)", "Guramrit Singh (JEE MAIN 2021)", "Aman Bansal (IIT-JEE 2016)",
    "Anshul Verma (JEE MAIN 2021)","Chitraang Murdia (IIT-JEE 2014)", "Tejaswin Jha (AIPMT 2014)",
    "Nalin Khandelwal (NEET 2019)","Soyeb Aftab (NEET 2020)", "Nilkrishna (JEE MAIN 2024)", 
    "Mazin Mansoor (NEET 2024)","Divyansh Jitender (NEET 2024)", "Prachita (NEET 2024)",
    "Isha K. Mane (NEET 2024)","Tanishka (NEET 2022)", "Mridul Agarwal (IIT-JEE | JEE MAIN 2021)",
    "Ved Lahoit (IIT-JEE 2024)","Kartikey Gupta (IIT-JEE 2019)"
  ];

  return (
    <div className="triumph-section">
      <h1 className="title">{title}</h1>
      <h2 className="subtitle">{subtitle}</h2>
      <div className="image-container">
        <img src={truphImage} alt="Group" className="group-image" />
      </div>
      <div className="participants">
        <p>
          {participants.map((name, index) => (
            <span key={index}>
              {name}
              {index < participants.length - 1 ? ", " : ""}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default TriumphSection;
