import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center text-white mb-4">
      {text}
    </p>

    <Link
      to={link}
      className="neo-brutalism-white neo-btn flex items-center gap-2 mx-auto"
    >
      {btnText}
      <img src={arrow} alt="arrow icon" className="w-4 h-4 object-contain" />
    </Link>
  </div>
)

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Ansh Saini</span> 👋
      <br />
      Focused on solving problems and delivering impact.
    </h1>
  ),

  2: (
    <InfoBox
       text="Working across technology and execution to build interactive digital experiences."
      link="/about"
      btnText="Know More"
    />
  ),

  3: (
     <InfoBox
      text="Feeling curious? Explore my projects!"
      link="/projects"
      btnText="check Projects"
    />
  ),

  4: (
     <InfoBox
      text="Looking to collaborate or hire me?"
      link="/contact"
      btnText="Contact Me"
    />
  ),
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null
}

export default HomeInfo


