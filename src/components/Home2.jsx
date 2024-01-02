import React from 'react'
import Learn from './Learn'
import now from '../assets/capoi.png'
import { Link } from 'react-router-dom'
const Home2 = () => {
  return (
    <div>
    <div className=' bg-blue-700 h-[90vh] text-white'>
  
  <div className='mx-12  grid md:grid-cols-2'>

  <div className='my-[20vh]'>
      <p className=' font-extrabold text-3xl pt-10 justify-center'>
              Finding your path has never been so easy
          </p>
          <p className=' my-4'>
          Feeling lost in a sea of career options and universities? Don't worry, you're not alone. Choosing the right path can be daunting, but that's where Careers.com comes in. We're your one-stop shop for career exploration and university matchmaking.
                </p>
                <button className='p-2 text-black rounded-lg bg-slate-100'>
             <Link to="/paths/careers">Learn more</Link> 
          </button>
      </div>
      <div>

          <img src={now} alt="banner" className=' hidden md:block mx-16 h-[80%] object-scale-down'/>

      </div>
 
 

  </div>
</div>
        <Learn/>
    </div>

  )
}

export default Home2