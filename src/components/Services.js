import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import comp1 from '../Assets/comp1.jpeg'
import comp2 from '../Assets/comp2.jpeg'
import comp3 from '../Assets/comp3.jpeg'
import comp4 from '../Assets/comp4.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"

export default function Services() {
  return (
    <body>
        <div className='Services bg-gray-800 h-[100%]'>
     <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} showThumbs={false} interval={2000}>
        <div className=''>
            <img src={comp1} alt="" className='w-full' />
            <p className='legend'>Lorem, ipsum dolor.</p>
        </div>
        <div>
            <img src={comp2} alt="" className='w-full' />
            <p className='legend'>Lorem, ipsum dolor.</p>
        </div>
        <div>
            <img src={comp3} alt="" className='w-full' />
            <p className='legend'>Lorem, ipsum dolor.</p>
        </div>
        <div>
            <img src={comp4} alt="" className='w-full' />
            <p className='legend'>Lorem, ipsum dolor.</p>
        </div>
     </Carousel>

    <section className='pb-20 pt-20 h-[100vh]'>
       <div className='grid items-center justify-center h-full bg-white  text-black w-8/12 mx-auto rounded-l-full rounded-r-full border-x-4 border-orange-600'>
       <div className='py-20 mx-10 grid gap-7 text-center'>
       <h1 className='border-b-2 w-40 mx-auto border-orange-600 font-bold text-3xl uppercase animate-bounce'>Services</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eligendi quam ratione dolor reiciendis, voluptatum, eum ex, rem nemo dicta nam sunt dolorum quaerat deserunt minus ipsum animi. Eius, nobis?</p>
       </div>
       </div>
    </section>
      
    </div>
    </body>
  )
}
