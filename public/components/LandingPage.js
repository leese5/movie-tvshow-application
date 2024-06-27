
'use client';
import MovieCard from './MovieCard'; 
import TvShowCard from './TvShowCard'
import React, { useState, useEffect } from 'react';
import { getTrending } from '../TMDB';

export default function LandingPage({ TrendingMovies, TrendingTvs }) {
    const [mediaType, setMediaType] = useState('movie');

    // Function to handle media type change
    const handleMediaTypeChange = (e) => {
        setMediaType(e.target.value);
    };

    return (
        <div style={flexDiv}>
            <h1>Trending</h1>
            
            {/* Media type selection */}
            <div style={filterDiv}>
                <label>Media Type: </label>
                <input type="radio" id="movie" name="mediaType" value="movie" checked={mediaType === "movie"} onChange={handleMediaTypeChange} />
                <label htmlFor="movie">Movies</label>
                <input type="radio" id="tv" name="mediaType" value="tv" checked={mediaType === "tv"} onChange={handleMediaTypeChange} />
                <label htmlFor="tv">TV Shows</label>
            </div>

            {/* Display Movies */}
            {TrendingMovies && mediaType === "movie" &&
                <div style={gridDiv}>
                    <div style={grid}>
                        {TrendingMovies.results.map(movie => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))}
                    </div>
                </div>
            }
            
            {/* Display TV Shows */}
            {TrendingTvs && mediaType === "tv" &&
                <div style={gridDiv}>
                    <div style={grid}>
                        {TrendingTvs.results.map(tvShow => (
                            <TvShowCard key={tvShow.id} tvShow={tvShow} />
                        ))}
                    </div>
                </div>
            }
        </div>
    );
}

const flexDiv = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
};

const gridDiv = {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

const grid = {
    display: "grid",
    gridTemplateRows: "repeat(4, 1fr)",
    gridTemplateColumns: "repeat(4, 1fr)",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px", // Added gap for better spacing between cards
    width: "80%", // Adjusted to 80% for better utilization of space
};

const filterDiv = {
    margin: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};