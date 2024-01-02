import React from 'react'
import shutter from '../assets/cap.jpg'
import graduation from '../assets/gradua.jpg'

const Home = () => {
  return (
    <div className='h-[100vh] '>
        
        <div className=' justify-center items-center grid grid-cols-2'>

            
        <div>
                <img src={shutter} alt="" className=' p-2 h-[100vh] w-full object-fill'/>
            </div>
            <div className='mx-12  '>

                <p className=' uppercase font-extrabold text-5xl pt-10 justify-center'>
                    Finding your passion has never been so easy
                </p>
                <p className='text-lg ml-4 my-4'>
                Feeling lost in a sea of career options and universities? Don't worry, you're not alone. Choosing the right path can be daunting, but that's where Careers.com comes in. We're your one-stop shop for career exploration and university matchmaking.      </p>
                <button className='p-3 rounded-lg bg-slate-400'>
                    Learn more
                </button>
            </div>


        </div>

    </div>
  )
}

export default Home