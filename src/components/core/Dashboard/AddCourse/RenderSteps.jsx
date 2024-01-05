import React from 'react'
import { useSelector } from 'react-redux'
import { FaCheck } from "react-icons/fa";
import CourseInformationForm from "./CourseInformation/CourseInformationForm"
import CourseBuilderForm from './CourseBuilder/CourseBuilderForm';
import PublishCourse from './PublishCourse/index'

const RenderSteps = () => {

    const {step} = useSelector((state) => state.course);

    const steps = [
        {
          id: 1,
          title: "Course Information",
        },
        {
          id: 2,
          title: "Course Builder",
        },
        {
          id: 3,
          title: "Publish",
        },
      ]
  return (
    <>
      <div className='relative flex gap-[20%] items-center justify-center '>
        {
        steps.map((item) => (
            <>
              <div >
                <div className={`${step === item.id 
                ? "bg-yellow-900 border-yellow-50 border-2 text-yellow-50 w-fit p-2  rounded-full" 
                : "bg-richblack-800 border-richblack-700 text-richblack-300 w-fit p-2  rounded-full "} `}>
 
                  {
                      step > item.id ? (<FaCheck className='text-2xl '/>) : (<p className='text-2xl rounded-md'>{item.id}</p>)
                  }
                  
                </div>
                <div className={`${step === item.id ? '  border-yellow-50':"border-richblack-300"}
                 border border-dashed w-[20%] absolute top-5 translate-x-[32px] ${3 === steps.id}`}></div>
                 
              </div>
              {/* add code for dashes between the table */}
            </>
        ))
        }
      </div>
      <div className='flex gap-[14%] text-[14px] justify-center'>
         {steps.map((item) => (
            <>
              <div>
                 <p>{item.title}</p>
              </div>
            </>
         ))}
      </div>

      {step === 1 && <CourseInformationForm/>}  
      {step === 2 && <CourseBuilderForm/>} 
      {step === 3 && <PublishCourse/>}

    </>
  )
}

export default RenderSteps