import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Header from '../components/Header/Header';
import Home from '../components/Pages/Home';
import About from '../components/Pages/About';
import Contact from '../components/Pages/Contact';
import ProjectsGallery from '../components/Pages/ProjectsGallery';
import Error from '../components/Pages/Error';


const Router = () => {
    return <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/projects' element={<ProjectsGallery/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Error />} />
        
    </Routes>
};

export default Router;