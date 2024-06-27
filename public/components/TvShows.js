'use client';
import TvShowCard from "./TvShowCard";
import PageButtons from "./PageButtons";
import Filter from "./Filter";

export default function TvShows({ data }) {
    const tvShows = data.results;
    const page = data.page;
    const firstPage = data.page === 1 || !tvShows;
    const lastPage = data.page === data.total_pages || !tvShows;
    return (
        <div style={moviesDiv}>
            <div style={titleDiv}>
                <h1>Tv Shows</h1>
                <Filter />
            </div>
            <div style={gridDiv}>
                <div style={grid}>
                    {tvShows && tvShows.map((tvShow, index) => {
                        return (
                            <TvShowCard key={tvShow.original_title} tvShow={tvShow} />
                        )
                    })
                    }
                </div>
            </div>

            <PageButtons currentPage={page} firstPage={firstPage} lastPage={lastPage} />
        </div>
    )
}
const moviesDiv = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
}

const titleDiv = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "10%",
    width: "53%",
    marginBottom: "20px",
}

const gridDiv = {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}

const grid = {
    display: "grid",
    gridTemplateRows: "repeat(4, 1fr)",
    gridTemplateColumns: "repeat(4, 1fr)",
    justifyContent: "center",
    alignItems: "center",
    width: "60%",
}