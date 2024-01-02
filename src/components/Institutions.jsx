import React from 'react'
import WorkItem from './WorkItem'
import amadi from '../assets/amadi.png'
import ecot from '../assets/ecot.png'
import emcu from '../assets/emcu.png'
import good from '../assets/good.png'
import limko from '../assets/limko.png'
import regend from '../assets/regend.png'
import sanu from '../assets/sanu.png'
import uneswa from '../assets/uneswa.png'
import voctim from '../assets/voctim.png'

const Institutions = () => {
  return (
    <div>
        <div className=' bg-blue-700 w-full'>

            <p className=' text-center font-bold text-5xl  py-24 text-white'>
                Choose your desired institution <br /> below and visit their website.
            </p>

        </div>

        <div className=' grid md:grid-cols-3 gap-6 p-8'>

                <WorkItem title="Amadi University College" img={amadi} address='http://amadiuniversity.co.za/'/>
                <WorkItem title="ECOT" img={ecot} address="https://ecotsz.co.za/"/>
                <WorkItem title="EMCU" img={emcu} address="https://emcu.ac.sz/"/>
                <WorkItem title="Good Shepard" img={good} address="https://www.gscn.org.sz/"/>
                <WorkItem title="Limkokwing University" img={limko} address="https://www.limkokwing.net/eswatini/"/>
                <WorkItem title="REGENT Business School" img={regend} address="https://regent.ac.za/"/>
                <WorkItem title="SANU" img={sanu} address="https://www.sanu.ac.sz/"/>
                <WorkItem title="UNESWA" img={uneswa} address="https://www.uneswa.ac.sz/"/>
                <WorkItem title="Gwamile Voctim" img={voctim} address="http://www.gwamilevoctim.ac.sz/"/>
        </div>
    </div>
  )
}

export default Institutions