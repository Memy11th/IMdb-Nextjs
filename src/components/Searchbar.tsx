'use client'
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';

export default function Searchbar() {
    const [searchParam, setSearchParam] = useState('');
    const router = useRouter();

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (searchParam.trim()) {
                router.push(`/search/${encodeURIComponent(searchParam)}`);
            } else {
                router.push(`/`); // Navigate to home if input is empty
            }
        }, 500);

        return () => clearTimeout(delayDebounceFn);
    }, [searchParam, router]);

    return (
        <div className='flex-1 flex justify-between gap-2 max-w-6xl mx-auto rounded-lg mt-2'>
            <input 
                type="text" 
                placeholder='Search the movie name' 
                className='outline-none p-2 w-full'  
                value={searchParam}
                onChange={(e) => setSearchParam(e.target.value)} 
            />
        </div>
    );
}
