import React from 'react';
import Header from '../Header/Header';
import About from '../About/About';
import Servies from '../Servies/Servies';
import Skill from '../Skill/Skill';
import Project from '../Project/Project';
import Contect from '../Contect/Contect';
import Footer from '../Footer/Footer';
import './Home.css'

const Home = () => {
    return (
        <>
            <div className="navbar bg-slate-900 text-white">
                          <div className="navbar-start">
                            <div className="dropdown">
                              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                              </label>
                              <div tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                              <a className='btn btn-outline btn-warning' href="#home1">Home</a>
                              <a className='btn btn-outline btn-warning' href="#about1">About</a>
                              <a className='btn btn-outline btn-warning' href="#servies1">Services</a>
                              <a className='btn btn-outline btn-warning' href="#skill1">Skills</a>
                              <a className='btn btn-outline btn-warning' href="#project1">Projects</a>
                              <a className='btn btn-outline btn-warning' href="#contact1">Contact</a>
                              </div>
                            </div>
                            <a className="btn btn-ghost normal-case text-red-600 text-3xl">ISRAFIL</a>
                          </div>
                          <div className="navbar-center hidden lg:flex">
                            <div className="menu menu-horizontal man">
                              <a className='btn btn-outline btn-warning' href="#home1">Home</a>
                              <a className='btn btn-outline btn-warning' href="#about1">About</a>
                             <a className='btn btn-outline btn-warning' href="#servies1">Services</a>
                             <a className='btn btn-outline btn-warning' href="#skill1">Skills</a>
                             <a className='btn btn-outline btn-warning' href="#project1">Projects</a>
                             <a className='btn btn-outline btn-warning' href="#contact1">Contact</a>
                            </div>
                          </div>
            </div>
          <div className="bg-slate-800">
            <div id='home1' className="">
              <Header></Header>
            </div>
            <div id='about1'>
              <About></About>
            </div>
            <div id='servies1'>
                <Servies></Servies>
            </div>
            <div id='skill1'>
               <Skill></Skill>
            </div>
              <div id='project1'>
              <Project></Project>
              </div>
              <div id='contact1' className="">
                <Contect ></Contect>
              </div>
              <div className="">
                  <Footer></Footer>
              </div>
          </div>
        </>
    );
};

export default Home;