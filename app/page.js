import { getTrending } from "@/public/TMDB";
import LandingPage from "@/public/components/LandingPage";

export default async function  Page() {
  const trendingMoviesData = await getTrending('movie');
  const trendingTVsData = await getTrending('tv');

  return (
    <LandingPage TrendingMovies={trendingMoviesData} TrendingTvs={trendingTVsData} />
  );
}