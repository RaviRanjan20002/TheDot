import React from "react";
import "../../../styles/StatsSection.css";

const StatsSection = () => {
  const stats = [
    { label: "Over 500 students mentored in 2024, fostering academic growth and success." },
    { label: "Specialized coaching for JEE, NEET, and competitive exams, tailored to each student's needs." },
    { label: "Proudly serving students in Rewari, with plans for expansion to other cities in India." },
    { label: "In 2024, we welcomed over 1,000 students, reflecting our growing reputation for quality education." },
    { label: "Strategic partnerships with leading educational platforms for a comprehensive learning experience." },
  ];

  return (
    <div className="stats-section">
      <div className="stats-background">
        <div className="stats-container"> {/* New container class */}
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
