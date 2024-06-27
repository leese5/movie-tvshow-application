import { getTvShows } from "@/public/TMDB"
import TvShows from "@/public/components/TvShows";

export default async function TvShowsApp({ searchParams }) {
    const curPage = searchParams?.page || 1;
    const page = "page=" + curPage;
    const sort = searchParams?.sort_by || null;
    const genre = searchParams?.with_genres || null;
    const year = searchParams?.year || null;
    const filter = `${page}${sort ? "&sort_by=" + sort : ""}${genre ? "&with_genres=" + genre : ""}${year ? "&year=" + year : ""}`;
    const data = await getTvShows(filter);
    
    return (
        <TvShows data={data} />
    )
}