import { useParams } from "react-router-dom";
import careersData from "./careersData";
import AdminManagment from "./Admnistration/AdminManagment";
import AgricultureMgm from "./Agriculture/AgricultureMgm";
import ArchitectureMgm from "./Architecture/ArchitectureMgm";
import Engineering from "./Engineering/Engineering";
import Medical from "./Medical/Medical";
import Civil from "./CivilServices/Civil";
import Law from "./Law/Law";
import Arts from "./Arts/Arts";

// Import other components for different careers

const careerComponents = {
  "Administration and Management":AdminManagment,
  "Agriculture and Natural Resources": AgricultureMgm,
  "Architecture": ArchitectureMgm,
  "Engineering": Engineering,
  "Medical": Medical,
  "Civil Services": Civil,
  "Law and Public Policy":Law,
  "Arts and Design":Arts
};

const CareerDetail = () => {
  const { careerTitle } = useParams(); // Get career name from URL
  const formattedTitle = careerTitle.replace(/-/g, " "); // Convert URL-friendly format back to normal text
  const career = careersData.find((c) => c.title.toLowerCase() === formattedTitle.toLowerCase());

  if (!career) {
    return <h2>Career Not Found</h2>;
  }

  const SpecificCareerComponent = careerComponents[career.title];

  return SpecificCareerComponent ? (
    <SpecificCareerComponent />
  ) : (
    <div className="career-detail">
      {/* <h1>{career.title}</h1>
      <img src={career.image} alt={career.title} className="career-detail-image" />
      <p>Number of career options: {career.options}</p>
      <p>More details about {career.title} will go here...</p> */}
    </div>
  );
};

export default CareerDetail;
