'use client';
import Link from 'next/link';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { useEffect, useState } from 'react';

interface PaginationControlsProps {
  currentPage: number;
  genre: string;
  totalPages: number;
}

function PaginationControls({ totalPages, currentPage, genre }: PaginationControlsProps) {

    const [isDarkMode,setIsDarkMode] = useState(false)


    useEffect(()=>{
        const userPreference = localStorage.getItem('theme');

        if(userPreference==='dark'){
            setIsDarkMode(true);
        }else {
            setIsDarkMode(false)
        }

    },[])


  return (
    <Pagination
      color='primary' 
      page={currentPage}
      count={totalPages}
      className='rounded-lg bg-slate-200 dark:bg-black my-3'
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '3px',
        borderRadius: '15px',
        '& .MuiPaginationItem-root': {
          color: 'text.primary', // Adjust text color based on the theme
        },
      }}
      renderItem={(item) => (
        <PaginationItem
          className='dark:bg-amber-600' // Background color for dark mode
          component={Link}
          href={`/?genre=${genre}&page=${item.page}`}
          {...item}
        />
      )}
    />
  );
}

export default PaginationControls;
