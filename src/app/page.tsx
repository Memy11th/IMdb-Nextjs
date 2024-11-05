import MovieCard from "@/components/MovieCard";
import PaginationControls from "@/components/Pagination";
import { Result } from "@/interfaces/resultsType";

interface SearchParams {
  genre: string;
  page?: string;
}

interface SearchParamsI {
  searchParams: SearchParams;
}

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }: SearchParamsI) {
  const genre = searchParams.genre;
  const page = parseInt(searchParams.page || '1');
  let results: Result[] = [];
  let totalPages = 1;

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3${genre === 'fetchTopRated' ? '/movie/top_rated' : '/trending/movie/week'}?api_key=${API_KEY}&language=en-US&page=${page}`,
      {
        next: {
          revalidate: 6
        }
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`API error: ${errorData.status_message}`);
    }

    const data = await response.json();
    results = data.results;
    totalPages = data.total_pages; // Set total pages based on the API response

  } catch (err) {
    console.error('Fetch error:', err);
    throw err;
  }

  return ( <>
    <div className="max-w-6xl mt-3 mx-auto grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-5">
      {results.map((result: Result) => (
        <MovieCard key={result.id} result={result} />
      ))}

    </div>
    <div className='flex justify-center'> 
    <PaginationControls totalPages={totalPages} currentPage={page} genre={genre} />
    </div>
    </>

  );
}
