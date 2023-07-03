import React from 'react';
import logo from './My project (4).png'
import {FaDownload, FaShareSquare } from 'react-icons/fa';
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Header = () => {
    const [text] = useTypewriter({
        words: ['Web Developer', 'Web Designer|', 'Mern Stack Developer'],
        loop: Infinity,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
      })
      const handleDownload = () => {
        const url = '../../../public/resume.pdf'
        const anchor = document.createElement('a')
        anchor.href = url;
        anchor.download = "resume.pdf"
        anchor.click();
      }
    return (
        <div className='lg:flex lg:gap-32 py-14 lg:px-32 text-white'>
            <div className="lg:w-1/2 lg:my-32">
               <h1 className='text-2xl '>Hello, my name is Israfil Hossin</h1> 
                <div className="my-5 text-2xl ">
                    <span className=''>I' m a {text}</span>
                    <Cursor cursorColor='red' />
                </div>
               <h2 className='mb-10'>I am a well-versed MERN Stack web developer & designer with 1 years experience. I have led many projects from design to deployment which have impacted thousands of people. I love to blend my skills in the most creative way possible.</h2>
               <a className='mr-7 btn  btn-outline btn-error' onClick={handleDownload} >Resume <FaDownload></FaDownload> </a>
               <a href='#contact1' className='btn  btn-outline btn-error'>Hire Me <FaShareSquare></FaShareSquare> </a>
            </div>
            <div className="lg:w-1/2">
                <img className='w-[400px] rounded' src={logo} alt="" />
            </div>
        </div>
    );
};

export default Header;