import MovieCard from "@/components/MovieCard";
import { Result } from "@/interfaces/resultsType";


interface SearchParams {
  genre: string;
}
interface SearchParamsI {
  searchParams : SearchParams
}

const API_KEY = process.env.API_KEY;

export default async function Home({searchParams}:SearchParamsI) {
  const genre = searchParams.genre ;
  let results = []

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3${genre === 'fetchTopRated' ? '/movie/top_rated' : '/trending/movie/week'}?api_key=${API_KEY}&language=en-US&page=1`,{
        cache:'no-cache',
        next:{
          revalidate:60
        }
      });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`API error: ${errorData.status_message}`);
    }

    const data = await response.json();
    results = data.results;
  
  } catch (err) {
    console.error('Fetch error:', err);
    throw err;
  }

  return (
    <div className="max-w-6xl mt-3 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {results.map((result: Result) => (
        <MovieCard key={result.id} result={result} />
      ))}
    </div>
  );
  
}
