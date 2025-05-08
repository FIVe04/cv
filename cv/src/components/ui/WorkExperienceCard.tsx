import './WorkExperienceCard.css'
import { WorkExperienceType } from '@/types/WorkExperienceType'

const WorkExperienceCard: React.FC<{experience: WorkExperienceType}> = ({experience}) => {

    const { position, company, companyLogoSrc, dateStart, dateEnd, workStatus, tasks, technologies, description } = experience;


    return (
        <div className='experience-outer'>
            <div className="work-time-section">
                <h2 className="experience-date">{dateStart} - {dateEnd}</h2>
            </div>

            <div className="experience-info-section">
                <div className="experience-company-outer">
                    <img className='experience-logo' src={companyLogoSrc} alt="Company Logo"/>
                    <h2 className='experience-title'>{company}</h2>
                </div>
                <h3 className="experience-position">{position}</h3>
                <h4 className="experience-status">{workStatus}</h4>
                <ul className="experience-tasks">
                    {tasks.map((task, index) => (
                        <li key={index} className="experience-task-item">
                            {task}
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
    )
}

export default WorkExperienceCard