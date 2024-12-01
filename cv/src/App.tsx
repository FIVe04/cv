import './App.css'
import Marquee from './components/ui/marquee'
import TechnologyCard from './components/ui/TechnologyCard'
import tsIcon from './assets/devicon_typescript.svg'
import jsIcon from './assets/devicon_javascript.svg'
import reactIcon from './assets/react.svg'
import pyIcon from './assets/logos_python.svg' 
import faIcon from './assets/devicon_fastapi.svg' 
import sqlIcon from './assets/vscode-icons_file-type-sql.svg'
import mongoIcon from './assets/skill-icons_mongodb.svg'
import rabbitIcon from './assets/devicon_rabbitmq.svg'
import redisIcon from './assets/devicon_redis.svg'
import trackerIcon from './assets/gravity-ui_logo-yandex-tracker.svg'
import gitIcon from './assets/devicon_git.svg'
import figmaIcon from './assets/devicon_figma.svg'

import mailIcon from './assets/material-symbols_mail-outline.svg'
import downloadIcon from './assets/material-symbols_download.svg'
import Globe from './components/ui/globe'
import locationIcon from './assets/mdi_location.svg'

import tgIcon from './assets/ic_baseline-telegram.svg'
import gmailIcon from './assets/ic_round-mail.svg'
import githubIcon from './assets/mdi_github.svg'
import igIcon from './assets/mdi_instagram.svg'

const technologies = [
  {
    name: "TypeScript",
    icon: tsIcon,
  },
  {
    name: "JaveScript",
    icon: jsIcon,
  },
  {
    name: "React",
    icon: reactIcon,
  },
  {
    name: "Python",
    icon: pyIcon,
  },
  {
    name: "FastApi",
    icon: faIcon,
  },
  {
    name: "SQL",
    icon: sqlIcon,
  },
  {
    name: "MongoDB",
    icon: mongoIcon,
  },
  {
    name: "RadditMQ",
    icon: rabbitIcon,
  },
  {
    name: "Redis",
    icon: redisIcon,
  },
  {
    name: "Yandex Tracker",
    icon: trackerIcon,
  },
  {
    name: "Git",
    icon: gitIcon,
  },
  {
    name: "Figma",
    icon: figmaIcon,
  },
]


function App() {

  return (
    <div className='main-page'>
      <div className="title-section">
        <div className="title-section-job-status-outer">
          <div className="title-section-job-status-indicator"></div>
          <h2 className="title-section-job-status-title">Свободен</h2>
        </div>
        <h1 className="title-section-name">Фролов Иван</h1>
        <h1 className="title-section-role">Full-Stack Developer</h1>
        <div className="title-section-btns-section">
          <div className="title-section-download-btn">
            <img src={downloadIcon} className='img-btn-download'/>
            Скачать резюме
            </div>
          <div className="title-section-contact-btn">
          <img src={mailIcon} className='img-btn-mail'/>
            Связаться со мной
            </div>
        </div>
      </div>

      <div className="about-section">
        <h1 className="about-section-title">Обо мне</h1>
        <div className="about-section-inter">
          <div className="about-section-location">

            <div className="about-section-location-text">
              <img className='about-section-location-icon' src={locationIcon}/>
              Москва, Россия
            </div>

            <div className="globe-outer">
              <Globe/>
          </div>
          </div>
          <div className="about-section-contacts">
            <div className="about-section-contacts-item">
              <img className='about-section-contacts-item-icon' src={tgIcon}/>
              Telegram
            </div>
            <div className="about-section-contacts-item">
              <img className='about-section-contacts-item-icon' src={gmailIcon}/>
              Mail
            </div>
            <div className="about-section-contacts-item">
              <img className='about-section-contacts-item-icon' src={githubIcon}/>
              Github
            </div>
            <div className="about-section-contacts-item">
              <img className='about-section-contacts-item-icon' src={igIcon}/>
              Instagram
            </div>
          </div>
          

        </div>
      </div>

      <h1 className="technolohies-title">Технологии</h1>

      <div className="relative flex h-[50px] w-[70%] flex-col items-center justify-center overflow-hidden rounded-lg technologies-list">
        <Marquee pauseOnHover className="[--duration:40s]">
          {technologies.map((technology) => (
              <TechnologyCard name={technology.name} icon={technology.icon}/>
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-[#1E1E1E] dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-[#1E1E1E] dark:from-background"></div>
      </div>
      
    </div>
  )
}

export default App
