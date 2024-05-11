import React from 'react';
import { projects } from '../constants';
import { Link } from 'react-router-dom';
import CTA from '../components/CTA';
import { arrow } from '../assets/icons';

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My <span className='blue-gradient_text font-semibold drop-shadow'>Project</span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
        I've embarked on numberous projects throughout the years,
        byt these are the ones I hold closest to my heart. Many of them are
        open-source, so if you come across something that piques your interest, feel free
        to explore the codebase and contribute your ides for further enhancement.
        </p>
      </div>

      <div className="flex flex-wrap my-20 gap-16">
        {
          projects.map((project, id) => (
            <div className='lg:w-[400px] w-full' key={id}>
              <div className='block-container w-12 h-12'>
                <div className={`btn-back rounded-xl ${project.theme}`}/>
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img src={project.iconUrl} alt="Project icon" className='w-1/2 h-1/2 object-contain' />
                </div>
              </div>

              <div className='mt-5 flex flex-col'>
                <h4 className='text-2-xl font-poppins font-semibold'>{project.name}</h4>
                <p className='mt-2 text-slate-500'>{project.description}</p>
                <div className='mt-5 flex items-center gap-2'>
                  <Link to={project.link} target="_blank" rel="noopener noreferrer" className='font-semibold text-blue-600'>
                    Project Link
                  </Link>
                  <img src={arrow} alt="arrow" className='w-4 h-4 ovject-contain' />
                </div>
              </div>
            </div>
          ))
        }
      </div>

      <hr className='border-slate-200'/>
      <CTA />
    </section>
  )
}

export default Projects