import React from 'react'
import { ResultsPassedToMovieCard } from '@/interfaces/MovieCardResults'

export default function MovieCard({result}:ResultsPassedToMovieCard) {
    return <>
    <div className='rounded-xl bg-black  '>
    <p className='text-white'>{result?.title}</p>
        
    </div>
    
    </>
}
