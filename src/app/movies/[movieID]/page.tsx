import MoviePage from '@/components/MoviePage';
import React from 'react';
const API_KEY = process.env.API_KEY;

interface Params{
    movieID : string
}
interface moviesPage{
    params:Params
}
export default async function page({params}:moviesPage) {
    const movieId = params.movieID;
    const Response = await fetch (`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US&page=1`);
    const movie = await Response.json()
    console.log(movie)


    return <>
    <MoviePage movie={movie} />
    </>
}
