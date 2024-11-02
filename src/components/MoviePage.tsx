'use client'
import React from 'react'
import Image from 'next/image'
import { FaStar } from "react-icons/fa";
import { PassedToComp } from '@/interfaces/passedToMoviePage';



export default function MoviePage({movie}:PassedToComp) {
    function handleClick(){
        window.open(movie.homepage,'_blank') 
    }
    
    return <>

    <div className='flex w-max-6xl gap-6 mt-5 '>
        <div className='w-1/3'>
        <Image alt={movie.title}  src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path || movie.poster_path}`} width={400} height={700} className="rounded-lg mx-auto  cursor-pointer" />
        </div>
        <div className='w-2/3'>
        <h2 className='font-bold dark:text-amber-500  '>{movie.title || movie.original_title}</h2>
        <p className=''> {movie.overview} </p>
        <div className='flex gap-1  items-center '>
            <span>{movie.vote_average}  </span>
            <FaStar style={{color:'yellow'}}/>
            <span>({movie.vote_count})</span>
        </div>
        <p> released on : <span className='text-amber-500 '>{movie.release_date}</span></p>
        <button onClick={handleClick} className='p-2 mt-3 text-lg bg-slate-300 hover:bg-slate-200 dark:bg-amber-500 rounded-lg dark:hover:bg-amber-600 '>Watch the movie</button>

        </div>

    </div>
    
    </>
}
