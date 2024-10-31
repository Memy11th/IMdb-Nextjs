import Link from 'next/link'
import React from 'react'
import propsToMenuItem from '../interfaces/MenuItem'


export default function MenuItem({title,pathname,Icon}:propsToMenuItem) {
    return (
        <Link  href={pathname} className={`hover:text-amber-500 font-bold`} >
            <Icon className='sm:hidden text-2xl ' />
            <p className='hidden sm:inline '>{title}</p>
        </Link>
    )
    
}
