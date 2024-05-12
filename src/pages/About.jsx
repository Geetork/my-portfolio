import React from 'react';
import { skills, experiences } from '../constants';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I am <span className='pink-gradient_text font-semibold drop-shadow'>Galina</span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          Dedicated Software Developer with experience in React, JS, HTML, and CSS, showcasing a proven track record in
          crafting web sites and interactive widgets, integrating external systems through REST APIs, and implementing
          responsive designs. Successfully improved the efficiency of the data import setup process, leading to substantial
          time savings for the team through the design and implementation of an optimization algorithm. 
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          { skills.map((skill, id) => (
            <div key={id} className='block-container w-20 h-20'>
              <div className="btn-back rounded-xl"></div>
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img src={skill.imageUrl} alt={skill.name}
                  className='w-1/2 h-1/2 ovject-contain' />
              </div>
            </div>
          )) }
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">
          My Experience
        </h3>

        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>I've worked with various technologies, leveling up my skills. Here is the overview:</p>

          <div className="mt-12 flex">
            <VerticalTimeline>
              {experiences.map((experience, key) => (
                <VerticalTimelineElement 
                  key={key}
                  date={experience.date}
                  iconStyle={{
                    background: experience.iconBg,
                  }}
                  contentStyle={{
                    borderBottom: '8px',
                    borderBottomColor: experience.iconBg,
                    borderStyle: 'solid',
                    boxShadow: 'none',
                  }}
                  icon={<div className='flex justify-center items-center w-full h-full'>
                    <img 
                      src={experience.icon} 
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain' />
                  </div>}>
                  <div>
                    <h3 className='text-black text-xl font-poppins font-semibold'>
                      {experience.title}
                    </h3>

                    <p className='text-black-500 font-medium font-base'>
                      {experience.company_name}
                    </p>

                    <ul className='my-5 list-disc ml-1 space-y-2'>
                      {
                        experience.points.map((point, key) => (
                          <li key={key} className='text-black-500/50 font-normal pl-1 text-small'>
                            {point}
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </div>

      <hr className='border-slate-200'/>

      <CTA />
    </section>
  )
}

export default About