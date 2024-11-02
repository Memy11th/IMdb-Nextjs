'use client'
import React from 'react'
import { useEffect } from 'react'

interface ErrorPass{
    error:string,
 }
export default function Error({error,reset}:ErrorPass) {

    useEffect(()=>{
        console.log(error)
    },[error])
    return <>
    <div className='min-h-screen text-center flex flex-col justify-center items-center '>
    <h4>Something went wrong , Oops!</h4> 
    <button className='underline ' onClick={()=>reset()}>Try again</button>
    </div>
    
    
    </>
}
