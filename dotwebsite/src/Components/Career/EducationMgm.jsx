
// Import images
import ChemistryTeacher from "../../assets/ChemistryTeacher.jpg";
import CollegeProfessor from "../../assets/CollegeProfessor.jpg";
import CurriculumDeveloper from "../../assets/CurriculumDeveloper.jpg";
import EducationalConsultant from "../../assets/EducationalConsultant.jpg";
import ImmigrationExpert from "../../assets/ImmigrationExpert.jpg";
import Librarian from "../../assets/Librarian.jpg";
import OnlineEducator from "../../assets/OnlineEducator.jpg";
import SchoolCounselor from "../../assets/SchoolCounselor.jpg";
import manymore from "../../assets/manymore.jpg";
// import CorporateTrainer from "../../../assets/CorporateTrainer.jpg";
// import EducationAdministrator from "../../../assets/EducationAdministrator.jpg";
// import EducationTechnologySpecialist from "../../../assets/EducationTechnologySpecialist.jpg";
// import HigherEducationLecturer from "../../../assets/HigherEducationLecturer.jpg";
// import Historian from "../../../assets/Historian.jpg";
// import HomeCareManager from "../../../assets/HomeCareManager.jpg";
// import HomeschoolConsultant from "../../../assets/HomeschoolConsultant.jpg";
// import ImageConsultant from "../../../assets/ImageConsultant.jpg";
// import InstructionalCoordinator from "../../../assets/InstructionalCoordinator.jpg";
// import LearningExperienceDesigner from "../../../assets/LearningExperienceDesigner.jpg";
// import MontessoriTeacher from "../../../assets/MontessoriTeacher.jpg";
// import NurseryTeacher from "../../../assets/NurseryTeacher.jpg";
// import NurseryWorker from "../../../assets/NurseryWorker.jpg";
// import OnlineTutor from "../../../assets/OnlineTutor.jpg";
// import PersonalEducationGuide from "../../../assets/PersonalEducationGuide.jpg";
// import PersonalPrivacyAdvisor from "../../../assets/PersonalPrivacyAdvisor.jpg";
// import PrimarySchoolTeacher from "../../../assets/PrimarySchoolTeacher.jpg";
// import ProblemSolvingCompetitionDirector from "../../../assets/ProblemSolvingCompetitionDirector.jpg";
// import ProgramEvaluator from "../../../assets/ProgramEvaluator.jpg";
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
    { title: "Chemistry Teacher", image: ChemistryTeacher, link: "https://en.wikipedia.org/wiki/Chemistry_teacher" },
    { title: "College Professor", image: CollegeProfessor, link: "https://en.wikipedia.org/wiki/Professor" },
    { title: "Curriculum Developer", image: CurriculumDeveloper, link: "https://en.wikipedia.org/wiki/Curriculum_development" },
    { title: "Educational Consultant", image: EducationalConsultant, link: "https://en.wikipedia.org/wiki/Educational_consultant" },
    { title: "Immigration Expert", image: ImmigrationExpert, link: "https://en.wikipedia.org/wiki/Immigration_consultant" },
    { title: "Librarian", image: Librarian, link: "https://en.wikipedia.org/wiki/Librarian" },
    { title: "Online Educator", image: OnlineEducator, link: "https://en.wikipedia.org/wiki/Online_education" },
    { title: "School Counselor", image: SchoolCounselor, link: "https://en.wikipedia.org/wiki/School_counselor" },
    {
        title: "& many more",
        image: manymore,
        link: "https://www.google.com/search?q=Education+Careers&sca_esv=664f7e6c30f8a07c&rlz=1C1VDKB_enIN1133IN1133&sxsrf=AHTn8zo40iSiw87XS5Tw4UwaWk7-I6gVkg%3A1738732939678&ei=i_WiZ_z8KOab0-kPg76VqQ4&ved=0ahUKEwi87un55KuLAxXmzTQHHQNfJeUQ4dUDCBA&uact=5&oq=Education+Careers&gs_lp=Egxnd3Mtd2l6LXNlcnAiEUVkdWNhdGlvbiBDYXJlZXJzMgsQABiABBiRAhiKBTILEAAYgAQYkQIYigUyBRAAGIAEMgoQABiABBgUGIcCMgUQABiABDILEC4YgAQYxwEYrwEyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAESOADUABYAHAAeAGQAQCYAb0BoAG9AaoBAzAuMbgBA8gBAPgBAvgBAZgCAaACywGYAwCSBwMyLTGgB6AI&sclient=gws-wiz-serp&jbr=sep:0"
    },

    // { title: "Corporate Trainer", image: CorporateTrainer },
    // { title: "Education Administrator", image: EducationAdministrator },
    // { title: "Education Technology Specialist", image: EducationTechnologySpecialist },
    // { title: "Higher Education Lecturer", image: HigherEducationLecturer },
    // { title: "Historian", image: Historian },
    // { title: "Home Care Manager", image: HomeCareManager },
    // { title: "Homeschool Consultant", image: HomeschoolConsultant },
    // { title: "Image Consultant", image: ImageConsultant },
    // { title: "Instructional Coordinator", image: InstructionalCoordinator },
    // { title: "Learning Experience Designer", image: LearningExperienceDesigner },
    // { title: "Montessori Teacher", image: MontessoriTeacher },
    // { title: "Nursery Teacher", image: NurseryTeacher },
    // { title: "Nursery Worker", image: NurseryWorker },
    // { title: "Online Tutor", image: OnlineTutor },
    // { title: "Personal Education Guide", image: PersonalEducationGuide },
    // { title: "Personal Privacy Advisor", image: PersonalPrivacyAdvisor },
    // { title: "Primary School Teacher", image: PrimarySchoolTeacher },
    // { title: "Problem-Solving Competition Director", image: ProblemSolvingCompetitionDirector },
    // { title: "Program Evaluator", image: ProgramEvaluator },
    // { title: "School Psychologist", image: SchoolPsychologist },
    // { title: "Science Writer", image: ScienceWriter },
    // { title: "Secondary School Teacher", image: SecondarySchoolTeacher },
    // { title: "Social Worker", image: SocialWorker },
    // { title: "Special Education Teacher", image: SpecialEducationTeacher },
    // { title: "Student Affairs Administrator", image: StudentAffairsAdministrator },
    // { title: "Teacher", image: Teacher },
    // { title: "Tech Ethicist", image: TechEthicist },
    // { title: "Youth Worker", image: YouthWorker },

];


const EducationMgm = () => {
    return (
        <div className="container">
            <h1>Education Careers</h1>
            <p className="description">
                Education offers a wide range of career paths, from classroom teaching to education technology, curriculum development, and student counseling. Explore the many opportunities to make an impact in the world of education.
            </p>

            <h3 className="subtitle">Click below to explore any of the following career(s)</h3>

            <div className="grid">
                {roles.map((role, index) => (
                    <div key={index} className="card">
                        <img src={role.image} alt={role.title} />
                        <h2>{role.title}</h2>
                        <a
                            href={role.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button"
                        >
                            See Details
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EducationMgm;