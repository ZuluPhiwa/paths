import React,{useState} from 'react'
import {data} from "./data"
const Careers = () => {

    const [search, setSearch] = useState("")
  return (
    <div>
        
        <div className=' bg-blue-700 w-full'>

            <p className=' mx-2 text-center font-bold text-5xl py-24 text-white'>
    Filter through the careers below.
            </p>

        </div>


        <form className=' mx-12 justify-center my-4  '>
        <input 
          type="text" 
          placeholder="Search..." 
            className=' border w-full border-solid p-1 rounded-md'
            onChange={ (e)=> setSearch(e.target.value)}
        />
      </form>
        <div className='grid md:grid-cols-3 mx-8'>

            {data.filter((item)=>
            {
                return search.toLowerCase() === '' ? item : item.jobTitle.toLowerCase().includes(search);
            }).map((item)=>(  
                
                <a href={item.link} target="_blank" rel="noopener noreferrer">
     <div className='m-4'>

<img src={item.img} alt="" className=''/>
<p className='font-bold my-3'>
    {item.jobTitle}
</p>
<p >
    {item.description}
</p>
</div>
                </a>
           ))}
         

        </div>
    </div>
  )
}

export default Careers