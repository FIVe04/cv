import './App.css'
import Marquee from './components/ui/marquee'
import TechnologyCard from './components/ui/TechnologyCard'
import technologies from './lib/shared/technologies'

import mailIcon from './assets/material-symbols_mail-outline.svg'
import downloadIcon from './assets/material-symbols_download.svg'
import Globe from './components/ui/globe'
import locationIcon from './assets/mdi_location.svg'

import tgIcon from './assets/ic_baseline-telegram.svg'
import gmailIcon from './assets/ic_round-mail.svg'
import githubIcon from './assets/mdi_github.svg'
import igIcon from './assets/mdi_instagram.svg'

import uniIcon from './assets/uniIcon.svg'
import schoolIcon from './assets/schoolIcon.svg'

import ttsLogo from './assets/tts_logo.svg'

function App() {

  return (
    <div className='main-page'>
      <section className="title-section">
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
      </section>

      <section className="about-section">
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
      </section>

      <h1 className="technolohies-title">Технологии</h1>

      <section className="relative flex h-[60px] w-[70%] flex-col items-center justify-center overflow-hidden rounded-lg technologies-list">
        <Marquee pauseOnHover className="[--duration:40s]">
          {technologies.map((technology) => (
              <TechnologyCard name={technology.name} icon={technology.icon}/>
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-black dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-black dark:from-background"></div>
      </section>

      <h1 className="education-title">Образование</h1>

      <section className='education-section'>
        <div className="education-school-section">
          <div className="school-title">
            Среднее образование
            <img src={schoolIcon}/>
          </div>
          <h2 className="school-name">ГБОУ Школа №1793 (бывш. Лицей №1793)</h2>
          <div className="bar-split"></div>
          <h3 className="school-class">Физико-математический класс</h3>
          <div className="bar-split"></div>
          <h3 className="school-dates">2011 - 2022</h3>
        </div>

        <div className="education-uni-section">
          <div className="uni-title">
              <img src={uniIcon}/>
              Высшее образование
          </div>
          <h2 className="uni-name">ФГБОУ ВО «НИУ «МЭИ»</h2>
          <div className="bar-split"></div>
          <h3 className="school-class">Прикладная математика и информатика</h3>
          <div className="bar-split"></div>
          <h3 className="school-dates">2022 - 2026</h3>
        </div>
      </section>

      <h1 className="education-title">Проекты</h1>

      <section className='projects-section'>
          <div className="tts-project">
            <div className="tts-title-outer">
              <h2 className="tts-title">Сервис для покупки билетов на мероприятия</h2>
              <img src={ttsLogo}/>
            </div>
            <a className="tts-link" href="https://tickettoshow.ru/">tickettoshow.ru</a>
            
          </div>
      </section>

      
      
    </div>
  )
}

export default App
