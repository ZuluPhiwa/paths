import React from 'react'
import now from '../assets/graduation.jpg'

const Learn = () => {
  return (
    <div className=' mx-16 my-6 delay-[300ms] duration-[600ms] taos:translate-x-[-200px] taos:opacity-0'>

        <div className='grid gap-2 md:grid-cols-2'>
            <div>
                <p className='my-4 font-mono font-bold'>
                About Us
                </p>    
                <p className=' transition-opacity ease-in duration-700 opacity-100'>
                    We are a Eswatini start up company that goes the extra mile in trying to help you find your 
                    preffered career. Dive into a vast database of careers: From doctor to data scientist, astronaut to artist, we have information on hundreds of professions. Discover what each career entails, explore salary ranges, and learn about the required skills and education.
                    <br /> <br />
                    We also help you find the perfect university search by program, location, or interest: Whether you have a specific degree in mind or are open to exploring, our comprehensive search tool makes finding the right university a breeze.
                    Compare universities side-by-side: View tuition fees, acceptance rates, faculty profiles, and campus life details to make informed comparisons.
                </p>
            </div>
            <div className='my-6 '>
                <img src={now} alt="" className='h-[90%] rounded-lg shadow-lg'/>
            </div>

        </div>
    </div>
  )
}

export default Learn