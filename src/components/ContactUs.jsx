
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { IoMdCall } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { FaFacebook,FaTwitterSquare,FaLinkedinIn,FaInstagramSquare    } from "react-icons/fa";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='antialiased mt-8 mb-8' id='contact'>
      <div className='flex w-full justify-center items-center'>

        <div className='flex flex-col md:flex-row md:space-x-4 space-y-6 md:space-y-0 bg-[#636666] w-full max-w-5xl p-8 rounded-xl shadow-md'>
            <div className='flex flex-col space-y-8 justify-between'>
              <div>
                <h1 className='font-bold text-4xl text-white tracking-wide'>Contact Us</h1>
                <p className='pt-2 text-cyan-100 text-sm'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, voluptates iusto corporis dolor in sed atque? Illum, veniam officiis! Vel.

                </p>
              </div>

              <div className='flex flex-col space-y-6'>
                <div className='inline-flex space-x-2 items-center'>
                  <IoMdCall className='text-teal-300 text-xl' />
                  <span className='text-white'>+(123) 456789</span>
                </div>

                <div className='inline-flex space-x-2 items-center'>
                  <IoMailOutline className='text-teal-300 text-xl' />
                  <span className='text-white'>contact@xyzwebsite.com</span>
                </div>
             
              <div className='inline-flex space-x-2 items-center'>
                  <IoLocationSharp className='text-teal-300 text-xl' />
                  <span className='text-white'>11, Street 342, Abcd Fgh</span>
              </div>

              </div>


            <div className='flex space-x-4 text-lg text-white'>
              <a href="#"><FaFacebook/></a>
              <a href="#"><FaTwitterSquare/></a>
              <a href="#"><FaLinkedinIn/></a>
              <a href="#"><FaInstagramSquare/></a>
            </div>
        </div>

        <div>
          <div className='bg-white rounded-xl shadow-lg p-8 text-gray-400'>
            <form action='' className='flex flex-col space-y-4'>
              <div>
                  <label className='text-sm'> Your Name</label>  
                <input type='text' name="user_name" placeholder='Your Name' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2  focus:ring-teal-300' />
              </div>
              
              <div>
                <label className='text-sm'> Email Address</label>
                <input type='email' name="user_email" placeholder='Email Address' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300' />
              </div>

              <div>
                <label className='text-sm'> Message</label>
                <textarea type='text' rows='4' name="message" placeholder='message' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300' />
              </div>


            <button className='btn-register'>Learn More</button>
            </form>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};
