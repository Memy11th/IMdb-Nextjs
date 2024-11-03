import MovieCard from '@/components/MovieCard';
import React from 'react';
import { Result } from "@/interfaces/resultsType";

interface Params {
    searchParam: string;
}

interface PassedToSearchPage {
    params: Params;
}

const API_KEY = process.env.API_KEY;

export default async function Page({ params }: PassedToSearchPage) {
    const search = params.searchParam;
    console.log(search);

    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}&language=en-US&include_adult=false`);
    const data = await response.json();
    const movies = data?.results;
    console.log(movies);

    return (
        <>
            <div className="max-w-6xl mt-3 mx-auto grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-5">
                {movies && movies.length === 0 && (
                    <h4 className='align-middle '>No results found</h4>
                )}

                {movies?.map((movie: Result) => (
                    <MovieCard key={movie.id} result={movie} />
                ))}
            </div>
        </>
    );
}
