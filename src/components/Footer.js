import React from 'react'

export default function Footer() {
  return (
    <div>
        <section className='grid sm:grid-flow-col justify-between h-[45vh] items-center  border-t-4 border-orange-600 '>
            <div className='px-12 '>
                <h1 className='font-bold text-3xl text-fuchsia-800'>BA.DEVELOPER</h1>
                <p className='taxt-sm text-gray-500'>All rights reserved</p>
            </div>
            <div className='px-12'>
                <ul className='text-xl space-y-5'>
                    <li>email: abc@gmail.com</li>
                    <li>address: mingora swat</li>
                    <li>call: 0344******</li>
                    <li>DEVELOPER</li>
                </ul>
            </div>
        </section>
    </div>
  )
}
