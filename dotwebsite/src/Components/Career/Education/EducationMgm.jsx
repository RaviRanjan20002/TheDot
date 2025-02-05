
import "./EducationMgm.css";

// Import images
import ChemistryTeacher from "../../../assets/ChemistryTeacher.jpg";
import CollegeProfessor from "../../../assets/CollegeProfessor.jpg";
import CorporateTrainer from "../../../assets/CorporateTrainer.jpg";
import CurriculumDeveloper from "../../../assets/CurriculumDeveloper.jpg";
// import EducationAdministrator from "../../../assets/EducationAdministrator.jpg";
// import EducationTechnologySpecialist from "../../../assets/EducationTechnologySpecialist.jpg";
// import EducationalConsultant from "../../../assets/EducationalConsultant.jpg";
// import HigherEducationLecturer from "../../../assets/HigherEducationLecturer.jpg";
// import Historian from "../../../assets/Historian.jpg";
// import HomeCareManager from "../../../assets/HomeCareManager.jpg";
// import HomeschoolConsultant from "../../../assets/HomeschoolConsultant.jpg";
// import ImageConsultant from "../../../assets/ImageConsultant.jpg";
// import ImmigrationExpert from "../../../assets/ImmigrationExpert.jpg";
// import InstructionalCoordinator from "../../../assets/InstructionalCoordinator.jpg";
// import LearningExperienceDesigner from "../../../assets/LearningExperienceDesigner.jpg";
// import Librarian from "../../../assets/Librarian.jpg";
// import MontessoriTeacher from "../../../assets/MontessoriTeacher.jpg";
// import NurseryTeacher from "../../../assets/NurseryTeacher.jpg";
// import NurseryWorker from "../../../assets/NurseryWorker.jpg";
// import OnlineEducator from "../../../assets/OnlineEducator.jpg";
// import OnlineTutor from "../../../assets/OnlineTutor.jpg";
// import PersonalEducationGuide from "../../../assets/PersonalEducationGuide.jpg";
// import PersonalPrivacyAdvisor from "../../../assets/PersonalPrivacyAdvisor.jpg";
// import PrimarySchoolTeacher from "../../../assets/PrimarySchoolTeacher.jpg";
// import ProblemSolvingCompetitionDirector from "../../../assets/ProblemSolvingCompetitionDirector.jpg";
// import ProgramEvaluator from "../../../assets/ProgramEvaluator.jpg";
// import SchoolCounselor from "../../../assets/SchoolCounselor.jpg";
// import SchoolPsychologist from "../../../assets/SchoolPsychologist.jpg";
// import ScienceWriter from "../../../assets/ScienceWriter.jpg";
// import SecondarySchoolTeacher from "../../../assets/SecondarySchoolTeacher.jpg";
// import SocialWorker from "../../../assets/SocialWorker.jpg";
// import SpecialEducationTeacher from "../../../assets/SpecialEducationTeacher.jpg";
// import StudentAffairsAdministrator from "../../../assets/StudentAffairsAdministrator.jpg";
// import Teacher from "../../../assets/Teacher.jpg";
// import TechEthicist from "../../../assets/TechEthicist.jpg";
// import YouthWorker from "../../../assets/YouthWorker.jpg";

const roles = [
    { title: "Chemistry Teacher", image: ChemistryTeacher },
    { title: "College Professor", image: CollegeProfessor },
    { title: "Corporate Trainer", image: CorporateTrainer },
    { title: "Curriculum Developer", image: CurriculumDeveloper },
    // { title: "Education Administrator", image: EducationAdministrator },
    // { title: "Education Technology Specialist", image: EducationTechnologySpecialist },
    // { title: "Educational Consultant", image: EducationalConsultant },
    // { title: "Higher Education Lecturer", image: HigherEducationLecturer },
    // { title: "Historian", image: Historian },
    // { title: "Home Care Manager", image: HomeCareManager },
    // { title: "Homeschool Consultant", image: HomeschoolConsultant },
    // { title: "Image Consultant", image: ImageConsultant },
    // { title: "Immigration Expert", image: ImmigrationExpert },
    // { title: "Instructional Coordinator", image: InstructionalCoordinator },
    // { title: "Learning Experience Designer", image: LearningExperienceDesigner },
    // { title: "Librarian", image: Librarian },
    // { title: "Montessori Teacher", image: MontessoriTeacher },
    // { title: "Nursery Teacher", image: NurseryTeacher },
    // { title: "Nursery Worker", image: NurseryWorker },
    // { title: "Online Educator", image: OnlineEducator },
    // { title: "Online Tutor", image: OnlineTutor },
    // { title: "Personal Education Guide", image: PersonalEducationGuide },
    // { title: "Personal Privacy Advisor", image: PersonalPrivacyAdvisor },
    // { title: "Primary School Teacher", image: PrimarySchoolTeacher },
    // { title: "Problem-Solving Competition Director", image: ProblemSolvingCompetitionDirector },
    // { title: "Program Evaluator", image: ProgramEvaluator },
    // { title: "School Counselor", image: SchoolCounselor },
    // { title: "School Psychologist", image: SchoolPsychologist },
    // { title: "Science Writer", image: ScienceWriter },
    // { title: "Secondary School Teacher", image: SecondarySchoolTeacher },
    // { title: "Social Worker", image: SocialWorker },
    // { title: "Special Education Teacher", image: SpecialEducationTeacher },
    // { title: "Student Affairs Administrator", image: StudentAffairsAdministrator },
    // { title: "Teacher", image: Teacher },
    // { title: "Tech Ethicist", image: TechEthicist },
    // { title: "Youth Worker", image: YouthWorker }
];

const EducationMgm = () => {
    return (
        <div className="container">
            <h1>Education Careers</h1>
            <p className="educationdescription">
                Education offers a wide range of career paths, from classroom teaching to education technology, curriculum development, and student counseling. Explore the many opportunities to make an impact in the world of education.
            </p>
            <h3 className="educationsubtitle">Click below to explore any of the following career(s)</h3>

            <div className="grid">
                {roles.map((role, index) => (
                    <div key={index} className="card">
                        <img src={role.image} alt={role.title} />
                        <h2>{role.title}</h2>
                        <a href={`https://www.google.com/search?q=${encodeURIComponent(role.title)}+Career`} target="_blank" rel="noopener noreferrer" className="button">
                            See Details
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EducationMgm;
