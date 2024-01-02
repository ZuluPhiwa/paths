import React from 'react'
import data from '../assets/data.jpg'
const FeaturedCareer = () => {
  return (
    <div className='mx-16'>
        <div className='grid grid-cols-2'>

<div>
<p className=' font-mono font-bold my-6'>
                Featured Job
            </p>
            <p className=' '>
            Data science is an interdisciplinary academic field that uses statistics, scientific computing, scientific methods, processes, algorithms and systems to extract or extrapolate knowledge and insights from potentially noisy, structured, or unstructured data.
            <br /> <br />
            Data science also integrates domain knowledge from the underlying application domain (e.g., natural sciences, information technology, and medicine). Data science is multifaceted and can be described as a science, a research paradigm, a research method, a discipline, a workflow, and a profession.
             Learn more <a href="https://youtu.be/X3paOmcrTjQ" target='_blank' className=' text-blue-400'>here.</a>
                </p>
</div>
                <div className=' object-center my-8 mx-6'>
               <img src={data} alt="" className='rounded-lg  '/>
            </div>
        </div>
           
            
    </div>
  )
}

export default FeaturedCareer