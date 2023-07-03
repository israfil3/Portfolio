import React, { useRef } from 'react';
import './Contect.css'
import { BiLocationPlus, BiLogoGmail, BiPhoneCall } from 'react-icons/bi';
import emailjs from '@emailjs/browser';


const Contect = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <div className='text-white lg:px-24 py-10'>
            <div className="my-6">
             <h1 className='text-3xl text-white'>Contact</h1>
                <hr className='w-32 border-red-700 border-2 my-1' />
                <hr className='w-24 border-red-700 border-2' />
            </div>
            
            <div className="">
            <div className="lg:flex justify-between">               
            <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000" className="">
                <div className="">
                   <h1 className='text-center text-2xl'>Have You Any Question ?</h1>
                </div>
                <div className="lg:flex justify-center items-center lg:gap-10 text-center">
                    <div>
                        <h1 className='text-center text-2xl'><BiPhoneCall className='text-4xl mx-auto my-2 text-red-400'></BiPhoneCall>Call</h1>
                        <p className='my-3'>+8801929254784</p>
                    </div>
                    <div className="my-10">
                        <h2 className='text-center text-2xl'><BiLogoGmail className='text-4xl mx-auto my-2 text-red-400'></BiLogoGmail>Email</h2>
                        <p className='my-3'>mdisrafilhossin61@gmail.com</p>
                    </div>
                    <div className="">
                        <h3 className='text-center text-2xl'><BiLocationPlus className='text-4xl mx-auto my-2 text-red-400'></BiLocationPlus> Location </h3>
                        <p className='my-3'>Jessor,Bangladsesh</p>
                    </div>
                        
                    </div>
                  
                </div>
                 <hr className='lg:border-red-600 border-2 lg:h-72'></hr>
                <div data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000" className="">
                    <div className="">
                      <h1 className='text-2xl'>SEND ME AN EMAIL</h1>
                    </div>
                    <div className="text-area text-black">
                       <form ref={form} onSubmit={sendEmail}>
                          <input type="text" placeholder='Name'/> <br />
                          <input type="email" name="email" id="email" placeholder='Email'/> <br />
                          <input className='message' type="text" name="text" id="text" placeholder='Message'/> <br />
                          <input className='btn' type="submit" value="submit" />
                       </form>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Contect;