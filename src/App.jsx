import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import { Home, About, Projects, Contact } from './pages';

const App = () => {
    return (
        <main className='bg-slate-300/20 min-h-[100vh]'>
            <Router basename={"/my-portfolio/"}>
                <Navbar/>

                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/projects' element={<Projects />}/>
                    <Route path='/about' element={<About />}/>
                    <Route path='/contacts' element={<Contact />}/>
                </Routes>
            </Router>
        </main>
    )
}

export default App;