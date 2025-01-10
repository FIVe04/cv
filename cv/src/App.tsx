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
import ProjectCard from './components/ui/ProjectCard'

import ttsProjectData from './lib/shared/projects/ttsProject'
import { useEffect, useState } from 'react'
import mpeiAppProjectData from './lib/shared/projects/mpeiAppProject'
import LanguageCard from './components/ui/LanguageCard'
import Russian from './lib/shared/languages/russian'
import English from './lib/shared/languages/english'


function App() {

  const [scrollY, setScrollY] = useState<number>(0);
  const [documentHeight, setDocumentHeight] = useState<number>(0);
  const [clientHeight, setClientHeight] = useState<number>(0);

  const [scrollPercent, setScrollPercent] = useState<number>(0);
  const [aboutTop, setAboutTop] = useState<number>(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
    setDocumentHeight(document.documentElement.scrollHeight);
    setClientHeight(window.innerHeight);

    setScrollPercent(Math.round(window.scrollY/(document.documentElement.scrollHeight - window.innerHeight) * 100));

  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    // return () => {
    //   window.removeEventListener('scroll', handleScroll);
    //   window.removeEventListener('resize', handleScroll);
    // };
  }, []);



  return (
    <div className='main-page'>
      {window.innerWidth < 600 ? 
        <></>
        :
        <div className="navigation-bar-inactive"
        style={scrollY === 0 ? {
          background: 'linear-gradient(to bottom, black 0%, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.2) 90%, black 100%)',
          width: '3px',
          bottom: '50px',
          position: 'fixed',
          right: '50px',
          top: '50px',
        }: {
          background: `linear-gradient(to bottom, black 0%, rgba(255, 255, 255, 1) ${scrollPercent < 10 ? scrollPercent : 10}%,rgba(255, 255, 255, 1) ${scrollPercent}%,rgba(255, 255, 255, 0.1) ${scrollPercent}%, rgba(255, 255, 255, 0.2) 90%, black 100%)`,
          width: '3px',
          bottom: '50px',
          position: 'fixed',
          right: '50px',
          top: '50px',
      }}></div>
      }
      
      <section className="title-section" onClick={()=>{console.log(scrollY, documentHeight, clientHeight, scrollPercent, aboutTop)}}>
        <div className="title-section-job-status-outer">
          <div className="title-section-job-status-indicator"></div>
          <h2 className="title-section-job-status-title">Свободен</h2>
        </div>
        <h1 className="title-section-name">Фролов Иван</h1>
        <h1 className="title-section-role">Full-Stack Developer</h1>
        <div className="title-section-btns-section">
          <a className="title-section-download-btn" href="/резюме_Фролов_Иван_Андреевич.pdf">
            <img src={downloadIcon} className='img-btn-download'/>
            Скачать резюме
          </a>
          <a className="title-section-contact-btn" href='mailto:frolovia04@gmail.com'>
            <img src={mailIcon} className='img-btn-mail'/>
              Связаться со мной
          </a>
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
            <a className="about-section-contacts-item" href="https://t.me/vf0705" target="_blank">
              <img className='about-section-contacts-item-icon' src={tgIcon}/>
              Telegram
            </a>
            <a className="about-section-contacts-item" href="mailto:frolovia04@gmail.com" target="_blank">
              <img className='about-section-contacts-item-icon' src={gmailIcon}/>
              Mail
            </a>
            <a className="about-section-contacts-item" href="https://github.com/FIVe04" target="_blank">
              <img className='about-section-contacts-item-icon' src={githubIcon}/>
              Github
            </a>
            <a className="about-section-contacts-item" href="https://www.instagram.com/vanyafrolov0705" target="_blank">
              <img className='about-section-contacts-item-icon' src={igIcon}/>
              Instagram
            </a>
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

      <h1 className="lang-title">Языки</h1>

      <section className="language-section">
        <LanguageCard {...Russian}/>
        <LanguageCard {...English}/>
      </section>

      <h1 className="projects-title">Проекты</h1>

      <section className='projects-section'>
          <ProjectCard {...ttsProjectData}/>
          <ProjectCard {...mpeiAppProjectData}/>
      </section>

      
      
    </div>
  )
}

export default App
