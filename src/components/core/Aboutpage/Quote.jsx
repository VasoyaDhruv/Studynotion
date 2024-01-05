import React from 'react'
import HighlightText from '../Homepage/HighlightText'

const Quote = () => {
  return (
    <div>
        We are passionate about revolutionizing the way we learn. Our innovative platform 
        <HighlightText text={"combines technology"}/>
        <span className='flex text-brown-500'>expertise</span>
        and community to create an 
        <span className='flex text-yellow-300'>
        unparalleled educational experience.
        </span>
    </div>
  )
}

export default Quote