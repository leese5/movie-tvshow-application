import { getMovies } from "@/public/TMDB"
import Movies from "@/public/components/Movies";

export default async function MoviesApp({ searchParams }) {
    const curPage = searchParams?.page || 1;
    const page = "page=" + curPage;
    const sort = searchParams?.sort_by || null;
    const genre = searchParams?.with_genres || null;
    const year = searchParams?.year || null;
    const filter = `${page}${sort ? "&sort_by=" + sort : ""}${genre ? "&with_genres=" + genre : ""}${year ? "&year=" + year : ""}`;
    const data = await getMovies(filter);
    
    return (
        <Movies data={data} />
    )
}