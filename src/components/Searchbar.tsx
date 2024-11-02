'use client'
import React from 'react'

export default function Searchbar() {
    function handleSubmit(){

    }
    return <>
    <form className='flex-1' onSubmit={handleSubmit}>
        <input type="text" placeholder='Search the movie name' className='w-full' />

    </form>
    </>
}
