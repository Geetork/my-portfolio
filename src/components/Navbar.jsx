import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className='header'>
            <NavLink to='/' className='w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md'>
                <p className='pink-gradient_text'>GL</p>
            </NavLink>

            <nav className='flex text-lg gap-7 font-medium'>
                <NavLink to='/about' className={({ isActive }) => isActive ? 'text-[#3e1939]' : 'text-[#9b6292]'}>
                    ABOUT
                </NavLink>
                <NavLink to='/projects' className={({ isActive }) => isActive ? 'text-[#3e1939]' : 'text-[#9b6292]'}>
                    PROJECTS
                </NavLink>
            </nav>
        </header>
    )
}

export default Navbar