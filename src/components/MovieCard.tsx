import React from 'react'
import { ResultsPassedToMovieCard } from '@/interfaces/MovieCardResults'
import Image from 'next/image'

export default function MovieCard({result}:ResultsPassedToMovieCard) {
    return <>
    <div className='rounded-xl max-w-6xl  my-2 mx-auto w-full '>
        <Image alt={result.title}  src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`} width={275} height={100} className="rounded-lg mx-auto  cursor-pointer" />
        <h3 className='truncate font-semibold ms-2  '>{result.title}</h3>
        <p className='truncate text-xs font-semibold ms-2  ' >{result.overview}</p>
    </div>
    
    </>
}
