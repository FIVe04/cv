import { LanguageType } from '@/types/LanguageType'
import React from 'react'
import './LanguageCard.css'
import { useTranslation } from 'react-i18next';


const LanguageCard: React.FC<LanguageType> = ({
    languageKey,
    icon,
    level,
    percent,
    descriptionKey
}

) => {
    const { t } = useTranslation();
  return (
    <div className="language-outer">
        <div className="language-title-outer">
            <img className='language-icon' src={icon} alt="russian flag"/>
            <h2 className='language-name'>{t(languageKey)}</h2>
        </div>
        <h4 className="language-description">{t(descriptionKey)}</h4>
        <div className="language-level">
            <h3 className="language-level-text">{level}</h3>
            <div className="language-progress-bar-outer">
                <div className="language-progress bar-inner"
                    style = {{
                        height: '5px',
                        width: `${percent}px`,
                        backgroundColor: "white",
                        borderRadius: "100px"
                    }}
                ></div>
            </div>
        </div>
    </div>
  )
}

export default LanguageCard