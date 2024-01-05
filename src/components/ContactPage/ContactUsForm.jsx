import React, { useEffect, useState } from 'react'
import CountryCode from "../../assets/data/countrycode.json"
import { isFulfilled } from '@reduxjs/toolkit';
import { useForm } from 'react-hook-form';
import apiConnector from "../../services/apiconnector"
import countrycode from "../../assets/data/countrycode.json"


const ContactUsForm = () => {

    const[loading, setloading] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isSubmitSuccessful}
    } = useForm();

    const submitContactForm = async(data)=>{
      console.log('Logging Data' , data);
      try{
         setloading(true);
        // const response = await apiConnector("POST", contactusEndpoint.CONTACT_US_API, data);
        const response = {status:"OK"};
         console.log(false);
         setloading(false);

      }catch(error){
         console.log("Error:", error.message);
         setloading(false);
      }
    }

    useEffect(()=>{
       if(isSubmitSuccessful) {
        reset({
            email:"",
            firstname:"",
            lastname:"",
            message:"",
            phoneNo:"",
        })
       }
    },[isSubmitSuccessful, reset]);
  return (
           <form onSubmit={handleSubmit(submitContactForm)}>
            <div className='flex flex-col gap-5'>

            <div className='flex  gap-10'>
              <div className='flex flex-col justify-between'>
                    <label htmlFor='firstname' className='text-richblack-100'>
                        First Name
                    </label>
                    <input 
                    type='text'
                    name='firstname'
                    id='firstname'
                    style={{
                     boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                   }}
                   className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                    placeholder='Enter first name'
                    {...register("firstname",{required:true})}
                    />
                    {
                       errors.firstname && (
                        <span>
                           Please enter your first name
                        </span>
                       ) 
                    }
              </div>

              <div className='flex flex-col'>
                    <label htmlFor='lastname' className='text-richblack-100'>
                        last Name
                    </label>
                    <input 
                    type='text'
                    name='lastname'
                    id='lastname'
                    style={{
                     boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                   }}
                   className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                    placeholder='Enter last name'
                    {...register("lastname",{required:true})}
                    />
                    {
                       errors.firstname && (
                        <span>
                           Please enter your last name
                        </span>
                       ) 
                    }
              </div>


            </div>

              <div className='flex flex-col'>
                    <label htmlFor='email' className='text-richblack-100'>
                        email
                    </label>
                    <input 
                    type='email'
                    name='email'
                    id='email'
                    style={{
                     boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                   }}
                   className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                    placeholder='Enter email Address'
                    {...register("email",{required:true})}
                    />
                    {
                       errors.email && (
                        <span>
                           Please Enter your email
                        </span>
                       ) 
                    }
              </div>

              <div className='flex flex-col gap-2'>
               <label htmlFor='label' className='text-richblack-100'>Phone Number</label>

               <div className='flex flex-row gap-3'>
                 {/* dropdown */}
                  
                     <select
                        name='dropdown'
                        id='dropdown'
                        style={{
                           boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                         }}
                         className="w-[170px] rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                        {...register("countrycode", {required:true})}
                     >
                        {
                           countrycode.map((element, index) => {
                              return(
                                 <option key={index} value={element.code}>
                                    {element.code} -{element.country}
                                 </option>
                              )
                           })
                        }
                     </select>

                  

                  
                     <input 
                     type='number'
                     name='phonenumber'
                     id='phonenumber'
                     placeholder='1234 56789'
                     style={{
                        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                      }}
                      className=" rounded-[0.5rem] w-[calc(100%-90px)]  bg-richblack-800 p-[12px] text-richblack-5"
                     {...register('phoneNo', 
                     {
                        required:{value:true,message:"Please Enter phone Number"},
                        maxLength:{value:10, message:"invalid PhoneNumber"},
                        minLength:{value:8, message:"invalid PhoneNumber"}
                     })}
                        
                     />
                 
               </div>
               {
                  errors.phoneNo && (
                     <span>
                        {errors.phoneNo.message}
                     </span>
                  )
               }

              </div>

              <div className='flex flex-col'>
               <label htmlFor='message' className='text-richblack-100'>Message</label>
               <textarea
                name='message'
                id='message'
                cols="30"
                rows="4"
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className=" rounded-[0.5rem]   bg-richblack-800 p-[12px] text-richblack-5"
                placeholder='Enter Your Message here'
                {...register("message", {required:true})}
               />
               {
                  errors.message && (
                     <span>
                        Please Enter your message
                     </span>
                  )
               }
              </div>
            <button type='submit'
            className='bg-yellow-100 hover:bg-yellow-200 duration-100 text-center rounded-md p-3 ttext-[16px] font-bold text-black'>
               Send Message  
            </button>
            </div> 
           </form>
       
  )
}

export default ContactUsForm