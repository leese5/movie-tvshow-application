
import Search from "@/public/components/Search";
import { getMovieResults, getTVResults } from "@/public/TMDB";

export default async function SearchApp ({searchParams}) {
    const query = searchParams?.query || null;
    const movieResults = query ? await getMovieResults(query) : null;
    const tvResults = query ? await getTVResults(query) : null;

    return (
        <Search movieResults={movieResults} tvResults={tvResults}/>
    )
}