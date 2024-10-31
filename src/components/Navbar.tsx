import React from 'react'
import MenuItem from './MenuItem'
import { AiFillHome } from "react-icons/ai";
import { IoInformationCircle } from "react-icons/io5";
export default function Navbar() {
    
    return <>
    <div className='flex justify-between bg-slate-200 '>

        <div className='flex gap-3 p-3 text-center items-center'>
            <MenuItem title='Home' pathname="/" Icon={AiFillHome} />
            <MenuItem title='About' pathname="/about" Icon={IoInformationCircle} />
        </div>

        <div className='flex gap-1 p-4 items-center'>
            <span className='p-2 bg-amber-400 rounded-lg  text-lg font-bold'>IMDb</span>
            <span className='hidden sm:inline'>By M11</span>

        </div>


    </div>
    </>
}
