'use client';
import Link from 'next/link';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

interface PaginationControlsProps {
  currentPage: number;
  genre: string;
  totalPages: number;
}

function PaginationControls({ totalPages, currentPage, genre }: PaginationControlsProps) {



    


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
        borderRadius: '20px',
        '& .MuiPaginationItem-root': {
          color: 'text.primary', // Adjust text color based on the theme
        },
      }}
      renderItem={(item) => (
        <PaginationItem
          className='dark:bg-amber-600 dark:hover:bg-amber-700 rounded-full ' // Background color for dark mode
          component={Link}
          href={`/?genre=${genre}&page=${item.page}`}
          {...item}
        />
      )}
    />
  );
}

export default PaginationControls;
