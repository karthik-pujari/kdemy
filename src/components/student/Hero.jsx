import React from 'react'
import { assets } from '../../assets/assets'
import SearchBar from './SearchBar'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full md:pt-36 pt-20
    px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70'>
      
      {/* <h1 class="text-course-details-heading-small">Small Heading</h1>
      <h1 class="text-home-heading-large">Large Home Heading</h1> */}

      <h1 className='text-home-heading-small tracking-tight relative
      font-bold max-w-3xl mx-auto'>
        <span className='bg-gradient-to-b from-gray-500 to-gray-900 bg-clip-text text-transparent'>Empower your future with the </span>
      <span className='bg-gradient-to-b from-gray-500 to-gray-900 bg-clip-text text-transparent'>courses designed to </span><span className='text-blue-600'>fit your choice.</
      span><img src={assets.sketch} alt="sketch" className='md:block hidden 
      absolute -bottom-7 right-0' /></h1>

      <p className='md:block hidden text-gray-500 max-w-2xl mx-auto'>We bring
      together world-class instructors, interactive content,and a supportive
      community to help you achieve your personal and professional goals.</p>

      <p className='md:hidden text-gray-500 max-w-sm mx-auto'>We bring together
      world-class instructors to help you achieve  your professional goals.</p>

      <SearchBar />
    </div>


  )
}

export default Hero
