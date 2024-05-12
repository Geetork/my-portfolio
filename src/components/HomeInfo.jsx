import React from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';


const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className='sm:text-xl text-center'>
            {text}
        </p>
        <Link to={link} className='neo-brutalism-pink neo-btn'>
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain" />
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-white py-4 px-8 text-black mx-5'>
            Hi, I am <span className='font-bold'>Galina</span> ✨
            <br />
            A Dedicated Software Developer with experience in React
        </h1>
    ),
    2: (
        <InfoBox
            text="Worked with various technologies and instruments" 
            link="/about"
            btnText='Learn more'/>
    ),
    3: (
        <InfoBox
            text="Created multiple PET-projects" 
            link="/projects"
            btnText='Visit my portfolio'/>
    ),
    4: (
        <InfoBox
            text="Need a project done or looking for a dev? I am a few keystrokes away" 
            link="/contacts"
            btnText="Let's talk"/>
    ),
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo;