
import React from 'react'
import HeaderItem from './HeaderItem'

export default function Header() {
    return <>
    <div className='flex justify-center gap-8 bg-slate-100 dark:bg-gray-900'>
    <HeaderItem title='Trending' param='fetchTrending' />
    <HeaderItem title='Top Rated' param='fetchTopRated' />
    </div>
    
    
    </>
}
