import React, { useEffect } from 'react';
import { FaDelicious, FaDev, FaProcedures } from 'react-icons/fa';
import AOS from 'aos'
import 'aos/dist/aos.css'

const Servies = () => {
    useEffect(()=>{
        AOS.init({duration: 1000});
    },[])
    return (
        <div className='text-white lg:p-24'>
            <div className="">
                <h1 className='text-3xl'>Services</h1>
                <hr className='w-32 border-red-700 border-2 my-1' />
                <hr className='w-24 border-red-700 border-2' />
            </div>
            <div data-aos="zoom-out-right" className="grid lg:grid-cols-3 sm:grid-cols-1 my-5 gap-6">
                <div className="bg-slate-600 p-10 text-[18px] rounded">
                    <h1 className='text-4xl'><FaDelicious className='mx-auto bg-red-600'></FaDelicious> </h1>
                    <h1 className='text-2xl my-3'>Design</h1>
                    <p>I design beautiful and functional user interfaces that are easy to use and intuitive. Love the creative process of bringing something from idea to reality.</p>
                </div>
                <div data-aos="zoom-out-down" className="bg-slate-600 p-10 text-[18px] rounded">
                    <h1  className='text-4xl'><FaDev className='mx-auto bg-red-600'></FaDev> </h1>
                    <h1  className='text-2xl my-3'>Development</h1>
                    <p>I develop applications that are fast, responsive and user-friendly. Love the process of bringing design to life by code and making it useful tool for user.</p>
                </div>
                <div data-aos="zoom-out-up" className="bg-slate-600 p-10 text-[18px] rounded">
                    <h1 className='text-4xl'><FaProcedures className='mx-auto bg-red-600'></FaProcedures> </h1>
                    <h1  className='text-2xl my-3'>Problem Solving</h1>
                    <p>Problem solving is the act of defining a problem; determining the cause of the problem; identifying, prioritizing, and selecting alternatives for a solution; and implementing a solution.</p>
                </div>
            </div>
        </div>
    );
};

export default Servies;