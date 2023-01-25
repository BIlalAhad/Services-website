import React from 'react';
import vg from '../Assets/top1.jpg'
import child from '../Assets/children.jpeg'
import{AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from 'react-icons/ai'

export default function Home() {
  return (
    
    <section className='home bg-gray-800 w-full h-[100%] ' id='home'>
            <div className='  relative'>
                    <img className='w-full rounded-b-full brightness-75 border-b-4 border-orange-600' src={vg} alt="" />
                    <div className='absolute w-full mx-auto top-20 md:top-52 lg:top-64'>
                        <h1 className='font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white text-center '>Best Design Ever</h1>
                `   </div>


                    <section className=' mt-32 px-10 h-[70vh] '>
                        <div className='flex flex-col sm:flex-row text-center sm:text-left gap-10 items-center max-w-7xl mx-auto  sm:mx-8 md:mx-10'>
                            <img className='sm:w-64 md:w-80 lg:w-96 rounded-full border-b-4 border-orange-600' src={child} alt="" />
                            <p className='text-lg  text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem esse perferendis aspernatur minus, mollitia quibusdam incidunt accusamus modi officia non odit eligendi doloribus ipsa quia. Animi ipsam similique totam ratione.</p>
                        </div>
                    </section>  
            </div>

            <section className=' h-[100vh] sm:h-[70vh]  items-center flex w-8/12 mx-auto sm:ml-0 bg-white  mt-16 rounded-3xl sm:rounded-r-full relative border-b-4 border-orange-600' id='about'>
                <div className='px-5 flex flex-col items-center gap-10 justify-start sm:justify-center absolute'>
                    <h1 className='border-b-2 border-orange-600 font-bold text-2xl font-serif p-5 '>About Us</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam iusto consequatur quo, quod amet mollitia molestias vitae eaque aliquid laudantium reiciendis perspiciatis veniam optio. Possimus modi corrupti blanditiis quia omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, quibusdam suscipit reprehenderit excepturi quas earum animi rem. Quis molestiae cumque nisi doloremque, autem totam, nostrum, ratione sit recusandae eum incidunt?</p>
                </div>
            </section>

            <article className='mt-16 h-[70vh] flex flex-col gap-12 items-center px-12 sm:flex-col justify-center  ' id='brands'>
                    <h1 className='text-white text-center font-bold text-3xl font-serif border-b-2 border-orange-600 '>Brands</h1>
               <div className='flex flex-row gap-2 sm:gap-5'>
                     <div className=' flex flex-col items-center'>
                    <AiFillGoogleCircle className='sm:text-7xl bg-white shadow-2xl rounded-full sm:w-24  w-12 h-12 sm:h-24 hover:brightness-75 animate-bounce duration-75' />
                    <p className='font-bold text-white'>Google</p>
                </div>
                <div className=' flex flex-col items-center'>
                    <AiFillYoutube className='sm:text-7xl bg-white shadow-2xl rounded-full sm:w-24 sm:h-24 w-12 h-12 hover:brightness-75 animate-bounce duration-100' />
                    <p  className='font-bold text-white'>Youtube</p>
                </div>
                <div className=' flex flex-col items-center'>
                    <AiFillInstagram className='sm:text-7xl bg-white shadow-2xl rounded-full sm:w-24 sm:h-24 w-12 h-12 hover:brightness-75 animate-bounce delay-100' />
                    <p className='font-bold text-white'>Instagram</p>
                </div>
                <div className=' flex flex-col items-center'>
                    <AiFillAmazonCircle className='sm:text-7xl bg-white shadow-2xl rounded-full sm:w-24 sm:h-24 w-12 h-12 hover:brightness-75 animate-bounce  delay-75' />
                    <p className='font-bold text-white'>Amazon</p>
                </div>
               </div>
            </article>

    </section>
  )
}
