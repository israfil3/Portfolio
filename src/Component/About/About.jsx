import React from 'react';

const About = () => {
    return (
        <div className='text-white w-[98%] mx-auto lg:px-24'>
            <div className="my-10">
               <div className="my-10">
                    <h1 className='text-3xl '>About Me</h1>
                    <hr className='w-32 border-red-700 border-2 my-1' />
                    <hr className='w-24 border-red-700 border-2' />
               </div>
                <p className='text-2xl my-2'>I' m Israfil Hossin and Web Developer</p>
                <p className='text-[18px]'>Dedicated web developer , Strong creative and analytical skills.Motivated designer and developer with experience creating custom websites Strong collaboration skills and proven history of application development.</p>
            </div>
            <div className="mb-10">
                <div className="lg:flex justify-between">
                    <div data-aos="zoom-in" className="">
                        <h1 className='border-b-2 text-[18px] my-2'>Birthday : 1 november 2000</h1>
                        <h2  className='border-b-2 text-[18px] my-2'>City : jessor</h2>
                        <p  className='border-b-2 text-[18px] my-2'>Freelance : Available</p>
                    </div>
                    <div data-aos="zoom-in" className="">
                        <h2 className='border-b-2 text-[18px] my-2'>Age : 23</h2>
                        <p className='border-b-2 text-[18px] my-2'>Phone : +01929254784</p>
                        <p className='border-b-2 text-[18px] my-2'>Email : mdisrafilhossin61@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;