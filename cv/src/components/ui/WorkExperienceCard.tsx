import './WorkExperienceCard.css';
import { WorkExperienceType } from '@/types/WorkExperienceType';
import { useTranslation } from 'react-i18next';

const WorkExperienceCard: React.FC<{ experience: WorkExperienceType }> = ({ experience }) => {
  const { t } = useTranslation();

  const { positionKey, company, companyLogoSrc, dateStartKey, dateEndKey, workStatusKey, tasksKeys, technologies } = experience;

  return (
    <div className="experience-outer">
      <div className="work-time-section">
        <h2 className="experience-date">
          {t(dateStartKey)} - {t(dateEndKey)}
        </h2>
      </div>

      <div className="experience-info-section">
        <div className="experience-company-outer">
          <img className="experience-logo" src={companyLogoSrc} alt="Company Logo" />
          <h2 className="experience-title">{company}</h2>
        </div>
        <h3 className="experience-position">{t(positionKey)}</h3>
        <h4 className="experience-status">{t(workStatusKey)}</h4>
        <ul className="experience-tasks">
          {tasksKeys.map((taskKey, index) => (
            <li key={index} className="experience-task-item">
              {t(taskKey)}
            </li>
          ))}
        </ul>

        <div className="experience-technologies-outer">
          {technologies.map((tech, index) => (
            <div key={index} className="experience-technology">
              <span className="experience-technology-name">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceCard;