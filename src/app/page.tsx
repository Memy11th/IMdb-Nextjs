
interface SearchParams {
  genre: string;
}

const API_KEY = process.env.API_KEY;

export default async function Home(searchParams: SearchParams) {
  const genre = searchParams.genre || 'fetchTrending';

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/${genre === 'fetchTopRated' ? 'movie/top_rated' : 'trending/movie/week'}?api_key=${API_KEY}&language=en-US&page=1`,
      {
        next: {
          revalidate: 6000,
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`API error: ${errorData.status_message}`);
    }

    const {results} = await response.json();
    console.log(results)
  } catch (err) {
    console.error('Fetch error:', err);
    throw err;
  }

  return (
    <div className="max-w-6xl mx-auto">
      
    </div>
  );
}
