import './ProjectCard.css'
import { ProjectType } from '../../types/ProjectType'; // Предполагаем, что тип находится в `types.ts`
import linkIcon from '../../assets/linkIcon.svg'
import ProjectStatus from './ProjectStatus';

import mpeiGradedScreen from '../../assets/mpeiGradesScreen.png'
import mpeiScheduleScreen from '../../assets/mpeiScheduleScreen.png'

const ProjectCard: React.FC<ProjectType> = ({ 
  title, 
  logoSrc, 
  linkHref, 
  linkText, 
  screenshotSrc, 
  position, 
  subPosition,
  projectStatus,
}) => {


  return (
    <div className="tts-project">
      <ProjectStatus projectStatus={projectStatus}/>
      <div className="tts-title-outer">
        <h2 className="tts-title">{title}</h2>
        <img src={logoSrc} alt="Project Logo" />
      </div>
      
      {linkText !== "" ? 
            <a className="tts-link" href={linkHref} target="_blank" rel="noopener noreferrer">
                <img src={linkIcon} alt="Link Icon" />
                {linkText}
            </a>
            :
            <></>

      }
      
    {
        title !== "IOS приложение для университета МЭИ с раписанием и оценками" ?
        <img className="tts-site-screenshot" src={screenshotSrc} alt="Site Screenshot" />
        :
        <div className="images-grid">
            <img src={mpeiGradedScreen} alt="" />
            <img src={mpeiScheduleScreen} alt="" />
        </div>

    }


      <div className="my-responses">
        <h2 className="my-position">as <strong>{position}</strong> developer</h2>
        <h3 className="my-sub-position">{subPosition}</h3>
      </div>
    </div>
  );
};

export default ProjectCard;
