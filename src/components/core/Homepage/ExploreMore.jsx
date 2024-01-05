import React, { useState } from 'react'
import {HomePageExplore} from "../../../assets/data/homepage-explore"

import HighlightText from './HighlightText';
import CourseCard from './CourseCard';
const tabsName=[
    "Free",
    "New to coding",
    "Most popular",
    "Skill Paths",
    "Career paths",
]

const ExploreMore = () => {

    const [currentTab, setCurrentTab] = useState(tabsName[0]);
    const [courses, setCourses] = useState(HomePageExplore[0].courses)
    const [currentCard, setCurrentCard] = useState(HomePageExplore[0].courses[0].heading)

    const setMyCards = (value) => {
        setCurrentTab(value);
        const result = HomePageExplore.filter((course) => course.tag === value);
        setCourses(result[0].courses);
        setCurrentCard(result[0].courses[0].heading);
    }
  return (
    <div>
        <div className='relative text-[32px] font-semibold text-center'>
            Unlock the
            <HighlightText text={"Power of Code"}/>
        </div>

        <p className='text-center text-richblack-300 text-[16px] font-semibold mt-3'>
            Learn to Build Anything You Can Imagine
        </p>

        <div className='flex felx-row rounded-full bg-richblack-800 mb-[30%] mt-5 px-1 py-1  '>
            {
                tabsName.map((Element, index) => {
                    return(
                        <div className={`text-[16px] flex flex-row items-center gap-2 
                         ${currentTab === Element 
                            ? "bg-richblack-900 border-1 border-blue-500 border text-richblack-5 font-medium "
                            : "text-richblack-200"} rounded-full transition-all duration-0 cursor-pointer
                            hover:bg-richblack-700  hover:text-richblack-5 px-7 py-2`}
                            key={index}
                            onClick={ () => setMyCards(Element)}
                            >
                            {Element}
                        </div>
                    )
                })
            }
        </div>
        <div className='lg:h-[150px]'></div>

        
        <div className=' w-full lg:absolute  overflow-hidden gap-10 justify-center lg:gap-0 flex lg:justify-between flex-wrap lg:bottom-[0] lg:left-[50%]   lg:translate-x-[-50%] text-black lg:mb-0 mb-7 lg:px-0 px-3'>
       
        {
            courses.map((Element, index) =>{
                return (
                    <CourseCard
                    key={index}
                    cardData = {Element}
                    currentCard = {currentCard}
                    setCurrentCard ={setCurrentCard}/>
                );
            })
        }
        </div> 
    </div>
  )
}

export default ExploreMore