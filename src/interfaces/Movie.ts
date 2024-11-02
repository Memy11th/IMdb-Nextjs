export interface Movie{
    adult:boolean,
    backdrop_path:string,
    belongs_to_collection ? : string,
    budget:number,
    status:string,
    release_date:string,
    title:string,
    video:boolean,
    overview:string,
    homepage:string,
    original_title:string,
    poster_path:string,
    genre: string |  [],
    vote_average:number,
    vote_count:number
}