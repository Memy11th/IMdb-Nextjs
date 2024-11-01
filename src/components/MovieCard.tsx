import React from 'react'
import { ResultsPassedToMovieCard } from '@/interfaces/MovieCardResults'

export default function MovieCard({result}:ResultsPassedToMovieCard) {
    return <>
    <div className='w-1/3 rounded-xl bg-black h-9 '>
    <p className='text-white'>{result?.title}</p>
        
    </div>
    
    </>
}
