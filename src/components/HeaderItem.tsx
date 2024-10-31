'use client'
import React from 'react'
import propsToHeaderItem from '@/interfaces/propsToHeaderItem'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
export default function HeaderItem({title,param}:propsToHeaderItem) {
    const searchParams = useSearchParams();
    const genre = searchParams.get('genre')
    return <>

    <Link href={`/?genre=${param}`} className={`p-3 dark:text-white font-bold ${genre === param ? ` underline underline-offset-8 decoration-2  decoration-amber-500 rounded-2xl  ` :''} `}>
    {title}
    </Link>
    
    </>
}
