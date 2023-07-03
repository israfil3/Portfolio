import React from 'react';
import logo from './Screenshot_1.png'
import logo2 from './Screenshot_6.png'
import logo3 from './Screenshot_3.png'
import logo4 from './Screenshot_28.png'

const Project = () => {
    return (
        <div className='lg:px-24 '>
           <div className="my-6">
             <h1 className='text-3xl text-white'>Project</h1>
                <hr className='w-32 border-red-700 border-2 my-1' />
                <hr className='w-24 border-red-700 border-2' />
            </div>
            <div data-aos="fade-right" className="grid lg:grid-cols-3 sm:grid-cols-1 gap-5">
                  <div className="card w-96 h-[90%] bg-base-100 shadow-xl">
                    <figure><img src={logo} alt="img" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Career hub</h2>
                        <div className="text-[18px]">
                            <p>Job Hiring is a job hiring website where we can find remote control jobs, among others.</p>
                            <p className='my-2'>this web site for ob Hiring is a job and  find remote control jobs</p>
                            <p> Technologies: HTML | CSS | Tailwind | Font Awesome | JavaScript</p>
                        </div>
                        <a href='https://stellar-manatee-2c73d6.netlify.app' className='btn'>Live Demo</a>
                        <a className='btn' href="https://github.com/israfil3/Future-job">Code Link</a>
                     </div>
                  </div>
                <div className="">
                <div data-aos="flip-left" className="card w-96 h-[90%] bg-base-100 shadow-xl">
                    <figure><img src={logo4} alt="img" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Toy market</h2>
                        <div className="text-[18px]">
                            <p>Toy Marketplace is a website where we can easily list various cars and toys for kids.</p>
                            <p className='my-2'>any parson buy a toy and sell his toy and this website mane children base website</p>
                            <p>Technologies: React JS | React-router | MongoDb | Firebase | CSS(Tailwind)|Express Js</p>
                        </div>
                        <a href='https://assignment-121-e18dd.web.app' className='btn'>Live Demo</a>
                        <a className='btn' href="https://github.com/israfil3/Toy-marketplace-client">Code Link</a>
                     </div>
                  </div>
                </div>
                <div className="">
                <div data-aos="zoom-in" className="card w-96 h-[90%] bg-base-100 shadow-xl">
                    <figure><img src={logo2} alt="img" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Steinway School</h2>
                        <div className="text-[18px]">
                            <p>This is a school summer camp website where courses of various subjects are conducted by the best teachers.</p>
                            <p className='my-2'>admin control this web site and teacher add class an sell class</p>
                            <p> Technologies: React JS | Tailwind | Express | Firebase | mongoDb</p>
                        </div>
                        <a href='https://assignment12-6fd65.web.app' className='btn'>Live Demo</a>
                        <a className='btn' href="https://github.com/israfil3/summer-camp-school-client">Code Link</a>
                     </div>
                  </div>
                </div>
            </div> 
        </div>
    );
};

export default Project;