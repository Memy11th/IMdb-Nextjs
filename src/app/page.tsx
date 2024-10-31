interface searchParams {
  genre:string
}
export default async function Home(searchParams:searchParams) {
  const genre = searchParams.genre || 'fetchTrending'
  const API_KEY = process.env.API_KEY

  const Response = await fetch(`https://api.themoviedb.org/3/${genre === 'fetchTopRated' ? 'movie/top_rated' : 'trending/movie/week/'}?language=en-US&page=1`,{
    method:'GET',
    headers:{
      accept: 'application/json',
    Authorization: `Bearer ${API_KEY} `
    }
  })
  const data = await Response.json();
  console.log(data)
  return <>

  <p>M11 by Memy11th</p>
  </>
}
