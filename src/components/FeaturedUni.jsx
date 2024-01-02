import React from 'react'
import uneswa from '../assets/uneswa.png'
const FeaturedUni = () => {
  return (

    <div className=' bg-gray-50 '>
  <div className='mx-16 '>
        
        <div className='grid grid-cols-2 gap-2'>

                <div> 
                <p className='my-4 font-mono font-bold'>
                Featured University
            </p>
                    <div>
                        <img src={uneswa} alt="" className='rounded-lg shadow-2xl mb-8 ' />
                    </div>
                </div>
        <div>

            <p className='my-12 mx-5'>
            The University of Eswatini is a three-campus public university with its largest campus at the centre of the nation in Matsapha, the industrial hub of Eswatini. UNESWA offers a high quality of teaching, learning, research and community based expertise across all eight faculties. For us, UNESWA is more than a university – it is a way of life that is underpinned by striving for excellence, 
            giving back to society, and living a life that is ethical, understanding and caring towards everyone. Our graduates are critical and creative thinkers who are able to function seamlessly in a professional work environment while maintaining a strong commitment to contributing to Eswatini by being socially responsible and active citizens. Learn more <a href="https://www.uneswa.ac.sz/" target="_blank" rel="noopener noreferrer" className=' text-blue-400'>here.</a>
            </p>
        </div>


        </div>
    </div>

    </div>
  
  )
}

export default FeaturedUni