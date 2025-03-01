import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { dummyCourses } from '../../assets/assets'
import { AppContext } from '../../context/AppContext'

const CourseCard = ({course}) => {

  const {currency} = useContext(AppContext)
  // const course = dummyCourses[0];
  // console.log(course);
  return (
    <div>
      <img src={course.courseThumbnail} alt="" className='rounded-xl' />
      <div className='py-4 px-2'>
        <h3 className='text-lg font-semibold'>{course.courseTitle}</h3>
        <p>{course.educator.name}</p>
        <div className=''>
         <div className='flex justify-center items-center gap-x-2 my-2'>
         <p>4.5</p>
          <div className='flex'>
            {[...Array(5)].map((_, i)=>(<img key={i} src={assets.
            star} alt='' className='h-5 w-5' />
            ))}
          </div>
         </div>
          <p className='my-2'>22</p>
        </div>
        <p className='my-2'>{currency}{(course.coursePrice - course.discount * course.
        coursePrice/100).toFixed(2)}</p>
      </div>
    </div>
  )
}

export default CourseCard
