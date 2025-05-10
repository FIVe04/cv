import './LanguageSelector.css';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import EnFlag from '../../assets/en_flag_rounded.svg'
import RuFlag from '../../assets/russian_flag_rounded.svg';


const LanguageSelector: React.FC = () => {

    const { i18n } = useTranslation();
    const [isEnglish, setIsEnglish] = useState(i18n.language === 'en');

    const toggleLanguage = () => {
    const newLang = isEnglish ? 'ru' : 'en';
    i18n.changeLanguage(newLang);
    setIsEnglish(!isEnglish);
    };

    return (
        <div className="language-toggle" onClick={toggleLanguage}>
            <img
                src={isEnglish ? EnFlag : RuFlag}
                alt={isEnglish ? 'English' : 'Russian'}
                className={`flag ${isEnglish ? 'left' : 'right'}`}
            />
        </div>
  );
}

export default LanguageSelector