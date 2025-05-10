import { WorkExperienceType } from "@/types/WorkExperienceType";
import marsLogo from "@/assets/mars_new_logo.png";

const rpaMarsWorkExperience: WorkExperienceType = {
  positionKey: "rpa_mars_position",
  company: "MARS, Inc.",
  companyLogoSrc: marsLogo,
  dateStartKey: "rpa_mars_date_start",
  dateEndKey: "rpa_mars_date_end",
  workStatusKey: "rpa_mars_work_status",
  tasksKeys: [
    "rpa_mars_task_1",
    "rpa_mars_task_2",
    "rpa_mars_task_3",
    "rpa_mars_task_4",
    "rpa_mars_task_5",
  ],
  technologies: [
    "Python",
    "SQL",
    "Excel",
    "RPA solutions",
    "Linux",
    "Git",
    "Docker",
    "Microsoft Planner",
  ],
  descriptionKey: "rpa_mars_description",
};

export default rpaMarsWorkExperience;