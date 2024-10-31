import React from 'react'
import MenuItem from './MenuItem'
import { AiFillHome } from "react-icons/ai";
import { IoInformationCircle } from "react-icons/io5";
import Link from 'next/link';
import ThemeSwitch from './ThemeSwitch';
export default function Navbar() {
    
    return <>
    <div className='flex justify-between items-center max-w-6xl mx-auto  '>

        <div className='flex gap-3 p-3 text-center items-center'>
            <MenuItem title='Home' pathname="/" Icon={AiFillHome} />
            <MenuItem title='About' pathname="/about" Icon={IoInformationCircle} />
        </div>

        <div className='flex gap-3 p-4 items-center'>
            <ThemeSwitch/>
            <div>
            <Link href={'/'} className='p-2 bg-amber-500 rounded-lg  text-lg font-bold'>IMDb</Link>
            <span className='hidden sm:inline'>By  <span className='font-bold'>M11</span></span>
            </div>
            
        </div>


    </div>
    </>
}
