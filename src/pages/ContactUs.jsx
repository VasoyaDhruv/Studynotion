import React from 'react'
import ContactUsForm from '../components/ContactPage/ContactUsForm'
import { IoIosChatboxes } from "react-icons/io";
import { FaEarthAmericas } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";


const ContactUs = () => {
  return (
    <div className='lg:flex lg:gap-10  w-11/12 justify-center p-2 lg:p-[90px] '>
        <div className=' lg:p-[24px] h-[80%] m-10 ml-4 mr-4 lg:m-0  lg:w-[30%] mx-auto rounded-lg bg-richblack-800 '>
            <div className='p-[12px] '>
                <div className='flex items-center gap-2'>
                    <IoIosChatboxes className='text-white'/>
                    <h1 className='text-white text-[18px] font-semibold'>Chat on Us</h1>
                </div>
                    <p className='text-[14px] text-richblack-400 font-semibold'>Our friendly team is here to help</p>
            </div>
            <div className='p-[12px]'>
                <div className='flex items-center gap-2'>
                    <FaEarthAmericas  className='text-white'/>
                    <h1 className='text-white text-[18px] font-semibold'>Visit us</h1>
                </div>
                    <p className='text-[14px] text-richblack-400 font-semibold'>Come and say hello at our fofice HQ.
                        here is the loaction/address
                    </p>
            </div>
            <div className='p-[12px]'>
                <div className='flex items-center gap-2'>
                    <IoCall className='text-white'/>
                    <h1 className='text-white text-[18px] font-semibold'>Call us</h1>
                </div>
                    <p className='text-[14px] text-richblack-400 font-semibold'>Mon-Fri From 8am to 5pm
                        +123 456 7890
                    </p>
            </div>
        </div>
        <div className=' p-10 flex flex-col text-white justify-center rounded-lg border  lg:w-[50%] border-richblack-500 '>
        <h1 className='text-3xl font-semibold w-[100%] lg:w-[70%] mb-2'>Got a Idea? We’ve got the skills. Let’s team up</h1>
        <p className='text-[16px] text-richblack-400 font-semibold mb-5'>Tall us more about yourself and what you’re got in mind.</p>
        <ContactUsForm/>
       </div>
    </div>
   
  )
}

export default ContactUs