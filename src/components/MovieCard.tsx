import React from 'react'
import { ResultsPassedToMovieCard } from '@/interfaces/MovieCardResults'
import Image from 'next/image'

export default function MovieCard({result}:ResultsPassedToMovieCard) {
    return <>
    <div className='rounded-xl  p-1  my-2 mx-auto w-full '>
        <Image alt={result.title}  src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`} width={275} height={100} className="rounded-lg mx-auto  cursor-pointer" />
        <h3 className='truncate font-semibold  '>{result.title}</h3>
        <p className='line-clamp-2 text-xs font-semibold  ' >{result.overview}</p>
        <div className='flex gap-3 mt-1 '>
            <button className='p-2 bg-slate-500 hover:bg-slate-900 hover:text-white  dark:bg-gray-800 dark:hover:bg-gray-900 rounded-lg w-2/3 transition-all duration-200 '>
                Add to watchlist
            </button>
            <button className='p-2 bg-yellow-600 hover:bg-yellow-800 dark:bg-amber-500 dark:hover:bg-amber-600 transition-all duration-200 rounded-lg w-1/2 '>
                Learn more
            </button>
        </div>
        
    </div>
    
    </>
}
