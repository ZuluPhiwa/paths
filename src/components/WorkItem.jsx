import React from 'react'

const WorkItem = ({img, title, address}) => {
  return (
    <div className=' relative flex justify-center h-auto w-full shadow-xl
     shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-slate-200 to-slate-400'>
        <img src={img} alt="project" className=' rounded-xl group-hover:opacity-10' />
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] 
        translate-y-[-50%] translate-x-[-50%]'>
            <h3 className=' text-white tracking-wider font-tahoma font-bold text-center text-2xl'>
                {title}
            </h3>
            <a href={address} target="_blank" rel="noopener noreferrer">
                <p className='bg-white font-bold text-gray-700 text-lg cursor-pointer p-3 text-center rounded-lg'>More Info</p>
            
            </a>
        </div>
    </div>
  )
}

export default WorkItem