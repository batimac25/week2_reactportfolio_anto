import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from './src/components/home/Home';
import About from './src/components/about/about';
import Contact from './src/components/contact/contact';
import Education from './src/components/education/education';
import Project from './src/components/project/project';
import Layout from './src/components/layout/Layout';
import Service from './src/components/services/services';

const MainRouter = () => {
    return (<div> 
             <Layout/>
             <Routes>
                   <Route exact path="/" element={<Home/>} />
                   <Route exact path="/about" element={<About/>}/>
                   <Route exact path="/education" element={<Education/>}/>
                   <Route exact path="/project" element={<Project/>}/>
                   <Route exact path="/service" element={<Service/>}/>
                   <Route exact path="/contact" element={<Contact/>}/>
             </Routes>
         </div>)
}

export default MainRouter;