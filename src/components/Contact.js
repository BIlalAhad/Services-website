import React from 'react'

export default function Contact() {
  return (
    <div className='bg-gray-800 h-[100%] w-full py-20 '>
      <section className='  w-8/12 grid items-center'>
      <div className='bg-white h-[80vh] rounded-r-full border-b-4 border-orange-600'>
      <h1 className=' text-black text-xl sm:text-3xl font-bold border-b-2 border-orange-600 pt-16 sm:pt-5 p-5 w-40 sm:w-60 '>Contact Us</h1>
      <form action="" className='mx-auto w-64'>
       <div className='grid gap-2 items-start sm:items-center mt-10'>
                        <label htmlFor="">NAME</label>
                        <input type="text"  className='border-2 border-gray-400 h-8 w-52' />
                        <label htmlFor="">Email</label>
                        <input type="text"  className='border-2 border-gray-400 h-8 w-52' />
                        <label htmlFor="">Message</label>
                        <input type="text"  className='border-2 border-gray-400 h-8 w-52' />
                        <button className='bg-blue-800 rounded-r-full border-b-2 border-orange-600 text-white hover:brightness-75 text-center items-center h-9 w-28 mt-5'>Send</button>
        </div>
      </form>
      </div>
      </section>
    </div>
  )
}
