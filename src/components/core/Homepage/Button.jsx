import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({children, active, linkto}) => {
  return (
        <Link to ={linkto}>
             <div className={`text-center text-[13px] px-6 py-3 rounded-md font-bold 
              ${active ? "bg-yellow-50 text-black  shadow-xl  shadow-yellow-500 ": "bg-richblack-800 shadow-white shadow-[_1px_1px_]"}
              hover:scale-95 hover:shadow-none transition-all duration-200
             `}>
                {children}
             </div>
        </Link>
  )
}

export default Button