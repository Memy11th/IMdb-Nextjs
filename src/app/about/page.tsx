import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About us",
    description: "The about page , that shows every single piece of info you need about the web app",
  };
export default function page() {
    return <>
    <div className='max-w-6xl mx-auto spaxe-y-2'>
    <h1 className='font-bold ms-3 text-2xl dark:text-amber-500'>About us</h1> 
    <p className=' p-3 text-sm'>IMDb by M11 is an web app clonning IMDb Made with care in Riyadh , this is a non-profit app i just made it in my learning journey as i am trying to develope and be better in every aspect as much as i can. trying hard to master Next js. wish me luck</p>
    <p className=' p-3 text-sm'>I am pretty sure that 2025 gonna be my year.</p>
    <p className=' p-3 text-sm'>Forever grateful</p>
    </div>
    
    </>
}
