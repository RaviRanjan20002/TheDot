import { useState } from 'react';
import "../../../styles/Questions.css";

const questions = [
  {
    question: "What is the Special Fee Benefit?",
    answer: "The Special Fee Benefit allows students to secure their admission at a reduced fee by depositing the required fee on or before the last date. This helps students lock in a lower fee slab, making The DOT programs more accessible."
  },
  {
    question: "What is the Double Fee Advantage?",
    answer: "The Double Fee Advantage combines the benefits of the Special Fee Benefit with a scholarship from TALLENTEX & ASAT, maximizing financial savings for students."
  },
  {
    question: "How does the Double Fee Advantage work?",
    answer: "First, secure your admission under the Special Fee Benefit by depositing the fee before the last date. Then, add your TALLENTEX scorecard/ASAT score to qualify for an additional scholarship. This combination ensures a double advantage on your fees."
  },
  {
    question: "Who is eligible for these scholarship opportunities?",
    answer: "All students applying for The DOT courses are eligible for the Special Fee Benefit if they deposit their fee by the last date. Students can also participate in TALLENTEX/ASAT to earn additional scholarships, subject to eligibility and performance."
  },
  {
    question: "Where can I find more information or apply for these scholarships?",
    answer: "Visit the The DOT Institute’s official website or helpdesk."
  }
];

const Questions = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const handleEnrolNowClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
    <div className="questions-container">
      <h2 className="questions-title">HAVE ANY QUESTIONS?</h2>
      {questions.map((item, index) => (
        <div 
          key={index} 
          className={`question-item ${openQuestion === index ? 'open' : ''}`} 
          onClick={() => toggleQuestion(index)}
        >
          <div className="question-header">
            {item.question}
            <span className="question-toggle">{openQuestion === index ? '-' : '+'}</span>
          </div>
          {openQuestion === index && (
            <div className="question-content">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
      <div className="enrolnowsection">
        <h2>Kickstart Your Success Journey Today!</h2>
        <button className="enrolbtn" onClick={handleEnrolNowClick}>ENROL NOW</button>   
      </div>
    </div>
    <div className="question-footer">Copyright 2025,The DOT Institute, All right reserved</div>
    </>
  );
};

export default Questions;




