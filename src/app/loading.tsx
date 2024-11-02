'use client'
import React from 'react'
import { DNA } from 'react-loader-spinner'

export default function loading() {
    return <>

    <div className='flex justify-center items-center min-h-screen'>

        <DNA
    visible={true}
    height="80"
    width="80"
    ariaLabel="dna-loading"
    wrapperStyle={{}}
    wrapperClass="dna-wrapper "
    />
    </div>
    
    </>
}
