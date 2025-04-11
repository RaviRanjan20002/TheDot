import React from "react";
import { useParams } from "react-router-dom";

// Import all individual blog components
import HowToPrepareIITJEE from "./Blogs/HowToPrepareIITJEE";
import TopNEETStrategies from "./Blogs/TopNEETStrategies";
import ChoosingCoaching from "./Blogs/ChoosingCoaching";
import TimeManagement from "./Blogs/TimeManagement";
import HowToStayMotivated from "./Blogs/HowToStayMotivated";
import MasteringMathematics from "./Blogs/MasteringMathematics";
import RoleOfPractice from "./Blogs/RoleOfPractice";
import ChoosingStudyMaterial from "./Blogs/ChoosingStudyMaterial";
import OvercomingExamAnxiety from "./Blogs/OvercomingExamAnxiety";
import StudySchedule from "./Blogs/StudySchedule";
import NEETSyllabus from "./Blogs/NEETSyllabus";
import MistakesToAvoid from "./Blogs/MistakesToAvoid";

// Map blog slugs to their respective components
const blogComponents = {
  "how-to-prepare-for-iit-jee-effectively": HowToPrepareIITJEE,
  "top-neet-preparation-strategies": TopNEETStrategies,
  "choosing-the-right-coaching-program": ChoosingCoaching,
  "the-importance-of-time-management-for-exam-success": TimeManagement,
  "how-to-stay-motivated-during-exam-prep": HowToStayMotivated,
  "mastering-mathematics-for-iit-jee": MasteringMathematics,
  "the-role-of-practice-in-exam-preparation": RoleOfPractice,
  "key-factors-in-choosing-study-material": ChoosingStudyMaterial,
  "overcoming-exam-anxiety-and-stress": OvercomingExamAnxiety,
  "how-to-create-a-study-schedule-for-success": StudySchedule,
  "understanding-neet-syllabus-and-exam-pattern": NEETSyllabus,
  "top-mistakes-to-avoid-in-iit-jee-preparation": MistakesToAvoid,
};

const IITBlog = () => {
  const { title } = useParams();
  const BlogComponent = blogComponents[title];

  if (!BlogComponent) {
    return <h2>Blog post not found</h2>;
  }

  return <BlogComponent />;
};

export default IITBlog;
