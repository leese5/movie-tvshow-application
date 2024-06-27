import Movie from "@/public/components/Movie";
import { getMovieDetails, getMovieCast } from "@/public/TMDB";

export default async function MovieApp({ searchParams }) {
    const movieID = searchParams?.id;
    const movieData = await getMovieDetails(movieID);
    const castData = await getMovieCast(movieID);
    return (
        <Movie movieData={movieData} castData={castData}/>
    )
}