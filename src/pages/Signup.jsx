import React from 'react'
import Template from '../components/core/Auth/Template'
import SignupImg from "../assets/Images/signup.webp"

const Signup = () => {
  return (
    <Template
    title="Welcome Back"
      description1="Build skills for today, tomorrow, and beyond."
      description2="Education to future-proof your career."
      image={SignupImg}
      formType="signup"
      />
  )
}

export default Signup