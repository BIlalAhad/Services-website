import React from 'react'
import { icons } from 'react-icons/lib';
import { Link } from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'

export default function Header() {
    function hamburger(){
        let items=document.getElementById('navitems');
        items.classList.toggle('hidden');
    }
  return (
    <nav className='flex justify-between bg-white w-full p-3 items-center '>
      <h1 className='font-bold text-2xl text-fuchsia-800 sm:flex hidden'><i>BA.DEVELOPER</i></h1>
      <ul className='flex-col space-y-1 sm:hidden' onClick={hamburger}>
        <li className='w-12 rounded-lg h-2 bg-fuchsia-800'></li>
        <li className='w-12 rounded-lg h-2 bg-fuchsia-800'></li>
        <li className='w-12 rounded-lg h-2 bg-fuchsia-800'></li>
      </ul>
      <main className='hidden flex sm:flex flex-col sm:flex-row  gap-5' id='navitems'>
        <HashLink to={"/#home"} className="hover:border-b-2 border-orange-600" >home</HashLink>
        <Link to={"/contact"}  className="hover:border-b-2 border-orange-600" >contact</Link>
        <HashLink to={"/#about"} className="hover:border-b-2 border-orange-600" >about</HashLink>
        <HashLink to={"/#brands"} className="hover:border-b-2 border-orange-600" >brands</HashLink>
        <Link to={"/services"} className="hover:border-b-2 border-orange-600" >services</Link>
      </main>
      
    </nav>
  )
}
