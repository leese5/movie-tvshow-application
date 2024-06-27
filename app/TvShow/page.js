import TvShow from "@/public/components/TvShow";
import { getTvShowDetails, getTvShowCast } from "@/public/TMDB";

export default async function TvShowApp({ searchParams }) {
    const tvShowID = searchParams?.id;
    const tvShowData = await getTvShowDetails(tvShowID);
    const castData = await getTvShowCast(tvShowID);
    return (
        <TvShow tvShowData={tvShowData} castData={castData}/>
    )
}