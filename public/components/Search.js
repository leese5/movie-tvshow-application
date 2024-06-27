'use client';
import { useRouter } from "next/navigation";
import { useState } from "react";
import MovieCard from "./MovieCard";
import TvShowCard from "./TvShowCard";

export default function Search({ movieResults, tvResults }) {
    const router = useRouter();
    const [media, setMedia] = useState("movie");

    const handleSearch = (e) => {
        if (e.key === "Enter")
            router.push(`/Search/?query=${e.target.value}`);
    }
    const handleMedia = (e) => {
        setMedia(e.target.value);
    }
    
    return (
        <div style={flexDiv}>
            <div>
                <h1>Search</h1>
                <input type="text" placeholder="Search..." onKeyUp={handleSearch} />
            </div>

            {movieResults && tvResults &&
            <div style={filterDiv}>
                <label>Results Type: </label>
                <input type="radio" id="movie" name="searchType" value="movie" checked={media == "movie"} onChange={handleMedia}/>
                <label htmlFor="movie">Movie</label>
                <input type="radio" id="tv" name="searchType" value="tv" checked={media == "tv"} onChange={handleMedia}/>
                <label htmlFor="tv">TV Show</label>
            </div>}

            {/* {
                query &&
                <div>
                    <p>Search for: {query}</p>
                </div>
            } */}
            {movieResults && media == "movie" &&
                <div style={gridDiv}>
                    <div style={grid}>
                        {
                            movieResults &&
                            movieResults.results.map(movie => (
                                <MovieCard key={movie.id} movie={movie} />
                            ))
                        }
                    </div>
                </div>
            }
            
            {tvResults && media == "tv" &&
                <div style={gridDiv}>
                    <div style={grid}>
                        {
                            tvResults &&
                            tvResults.results.map(tvShow => (
                                <TvShowCard key={tvShow.id} tvShow={tvShow} />
                            ))
                        }
                    </div>
                </div>
            }
        </div>
    )
}

const flexDiv = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
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

const filterDiv = {
    margin: "20px",
    padding: "10px",
}