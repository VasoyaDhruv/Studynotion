import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import IconBtn from '../../../../common/IconBtn';
import { IoMdAddCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { IoIosArrowDropright } from "react-icons/io";
import toast from 'react-hot-toast';
import NestedView from './NestedView';
import {
  createSection,
  updateSection,
} from "../../../../../services/operations/courseDetailsAPI"
import {
  setCourse,
  setEditCourse,
  setStep,
} from "../../../../../slices/courseSlice"


const CourseBuilderForm = () => {

  const {register, handleSubmit, setValue,formState:{errors}} = useForm();
  const [editSectionName, setEditSectionName] = useState(null);
  const {course} = useSelector((state) => state.course)
  const  dispatch = useDispatch();
  const {token} = useSelector((state) => state.auth);
  const [loading, setLoading]  = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    let result;
    if(editSectionName){
      //we are editing the section name
      result =  await updateSection(
        {
          sectionName: data.sectionName,
          sectionId:editSectionName,
          courseId: course._id,
        },token
      )
    }
    else{
      result = await createSection({
        sectionName:data.sectionName,
        courseId: course._id,
      },token)
    }

    //update values
    if(result){
      dispatch(setCourse(result));
      setEditSectionName(null);
      setValue("sectionName","")
    }
    setLoading(false)


  }

  const cancelEdit = () => {
    setEditSectionName(null);
    setValue("sectionName","");
  }

  const goBack = () => {
    dispatch(setStep(1));
    dispatch(setEditCourse(true));
  }
  const goToNext = () => {
    if(course.courseContent.length === 0 ){
      toast.error("Please add at leaset one Section");
      return;
    }
  if(course.courseContent.some((section) => section.subSection.length === 0)){
    toast.error("Please  add at least one lecture in each section");
    return;
  }

  //if everything is good
  dispatch(setStep(3));
 
  }

  const handleChangeEditSectionName = (sectionId, sectionName) => {
    if(editSectionName === sectionId){
      cancelEdit();
      return;
    }
    setEditSectionName(sectionId);
    setValue("sectionName",sectionName);
  }
  return (
    <div>
      <p>Course Builder</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mt-3 '>
          <label htmlFor='sectionName'>Section Name<sup>*</sup></label>
          <input
            id='sectionName'
            placeholder='Add Section Name'
            {...register("sectionName",{required:true})}
            className='w-full text-black p-2 mt-2'/>
            {errors.sectionName && (
              <span>Section Name is required</span>
            )}
        </div>
        <div  className='flex w-full mt-10 '>
          <IconBtn 
            type='Submit'
            text={editSectionName ? "Edit Section name" : " Create Section"}
            outline={true}
            customClasses={"text-white"}>
            <IoMdAddCircleOutline size={20} className='text-yellow-50 items-center'/>
            </IconBtn>
            {editSectionName && (
              <button
              type='button'
              onClick={cancelEdit}
              className='text-sm text-richblack-300 underline  ml-10'
              >
                Cancel Edit
              </button>
            )}
        </div>
      </form>
      
      {course.courseContent.length > 0 && (
        <NestedView handleChangeEditSectionName={handleChangeEditSectionName}/>
      )}

      <div className='flex justify-end gap-x-3 mt-10'>
        <button  
           onclick={goBack}
           className='rounded-md cursor-pointer flex items-center'>
           Back
        </button>
        <IconBtn text="Next"
           onclick={goToNext}
           disabled={loading}><IoIosArrowDropright /></IconBtn>
      </div>
      
    </div>
  )
}

export default CourseBuilderForm