import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";


const Skill = () => {
    return (
        <div  data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000" className="text-white px-24">
        <div className="">
                <h1 className='text-3xl'>Skill</h1>
                <hr className='w-32 border-red-700 border-2 my-1' />
                <hr className='w-24 border-red-700 border-2' />
            </div>
            <div className='lg:w-[50%] mx-auto'>
           <div >
             <span>Html</span>
             <ProgressBar bgColor='green' completed={90} animateOnRender={true}/>
           </div>
           <div >
             <span>CSS</span>
             <ProgressBar bgColor='green' completed={80} animateOnRender={true}/>
           </div>
           <div >
             <span>JavaScript</span>
             <ProgressBar  bgColor='DarkGoldenRod' completed={57} animateOnRender={true}/>
           </div>
           <div >
             <span>React Js</span>
             <ProgressBar bgColor='green' completed={65} animateOnRender={true}/>
           </div>
           <div >
             <span>MongoDb</span>
             <ProgressBar bgColor='Chocolate' completed={40} animateOnRender={true}/>
           </div>
           <div >
             <span>Express Js</span>
             <ProgressBar bgColor='Chocolate' completed={35} animateOnRender={true}/>
           </div>
           <div>
             <span>firebase</span>
             <ProgressBar bgColor='Blue' completed={60} animateOnRender={true}/>
           </div>
        </div>
        </div>
    );
};

export default Skill;