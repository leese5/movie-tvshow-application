'use client';
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const genres = [
    { id: 28, name: 'Action' },
    { id: 12, name: 'Adventure' },
    { id: 16, name: 'Animation' },
    { id: 35, name: 'Comedy' },
    { id: 80, name: 'Crime' },
    { id: 99, name: 'Documentary' },
    { id: 18, name: 'Drama' },
    { id: 10751, name: 'Family' },
    { id: 14, name: 'Fantasy' },
    { id: 36, name: 'History' },
    { id: 27, name: 'Horror' },
    { id: 10402, name: 'Music' },
    { id: 9648, name: 'Mystery' },
    { id: 10749, name: 'Romance' },
    { id: 878, name: 'Science Fiction' },
    { id: 10770, name: 'TV Movie' },
    { id: 53, name: 'Thriller' },
    { id: 10752, name: 'War' },
    { id: 37, name: 'Western' }
];

const sortOptions = [
    { api: "popularity.asc", name: "Popularity Asc" },
    { api: "popularity.desc", name: "Popularity Desc " },
    { api: "release_date.asc", name: "Release Date Asc" },
    { api: "release_date.desc", name: "Release Date Desc" },
    { api: "primary_release_date.asc", name: "Primary Release Date Asc" },
    { api: "primary_release_date.desc", name: "Primary Release Date Desc" },
    { api: "vote_average.asc", name: "Vote Average Asc" },
    { api: "vote_average.desc", name: "Vote Average Desc" }
]

export default function Filter() {
    const [toggle, toggleFilter] = useState(false);
    const [genre, setGenre] = useState("");//useState(28);
    const [sort, setSort] = useState("");//useState("popularity.desc");
    const [release, setRelease] = useState("");//useState(2024);
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();


    const curYear = new Date().getFullYear();
    const last50Years = Array.from({ length: 50 }, (_, i) => curYear - i);
    
    const handleGenreChange = (e) => {
        setGenre(e.target.value);
    }

    const handleSortChange = (e) => {
        setSort(e.target.value);
    }

    const handleReleaseChange = (e) => {
        setRelease(e.target.value);
    }

    const handleApply = () => {
        if(!genre && !sort && !release) return;

        const current = new URLSearchParams(searchParams);
        if(genre) current.set('with_genres', genre);
        else current.delete('with_genres');
        if(sort) current.set('sort_by', sort);
        else current.delete('sort_by');
        if(release) current.set('year', release);
        else current.delete('year');
        const search = current.toString();
        const query = search ? `?${search}` : '';
        router.push(`${pathname}${query}`);
    }

    return (
        <>
            <div style={filterDiv}>
                <button onClick={() => toggleFilter(!toggle)} className="button">☰</button>
                <style jsx>{`
                .button {
                    border: none;
                    background: none;
                    font-size: 2rem;
                    cursor: pointer;
                }
                .button:hover {
                    scale: 1.1;
                }
            `}</style>
            </div>

            {toggle &&
                <div style={filterPopupCol}>
                    <div style={filterPopUpContainer}>
                        <div style={filterPopupGrid}>
                            <label htmlFor="genre">Genre</label>
                            <select name="genre" id="genre" onChange={(e)=>handleGenreChange(e)}>
                                //empty option
                                <option value=""></option>
                                {
                                    genres.map((genre, index) => {
                                        return (
                                            <option key={index} value={genre.id}>{genre.name}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>

                        <div style={filterPopupGrid}>
                            <label htmlFor="sort">Sort</label>
                            <select name="sort" id="sort" onChange={(e)=>handleSortChange(e)}>
                            <option value=""></option>
                                {
                                    sortOptions.map((sort, index) => {
                                        return (
                                            <option key={index} value={sort.api}>{sort.name}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>

                        <div style={filterPopupGrid}>
                            <label htmlFor="release">Release Year</label>
                            <select name="release" id="release" onChange={(e)=>handleReleaseChange(e)}>
                            <option value=""></option>
                                {
                                    last50Years.map((year, index) => {
                                        return (
                                            <option key={index} value={year}>{year}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>

                        <div style={applyDiv}>
                            <button style={applyButton} onClick={() => {
                                toggleFilter(!toggle)
                                handleApply()
                            }}>Apply</button>
                        </div>
                    </div>
                </div>
            }
        </>

    )
}

const filterDiv = {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    height: "auto",
}

const filterPopUpContainer = {
    width: "300px",
    height: "auto",
    borderRadius: "15px",
    border: "1px solid black",
    padding: "10px",
}

const filterPopupCol = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    width: "100%",
    height: "auto",
    margin: "5px",
}

const filterPopupGrid = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    height: "auto",
    margin: "5px",
    width: "250px",
}

const applyDiv = {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    height: "auto",
}

const applyButton = {
    border: "none",
    background: "none",
    fontSize: ".8rem",
    fontWeight: "bold",
    cursor: "pointer",
    margin: "5px",
    borderRadius: "5px",
    backgroundColor: "lightgrey",
    color: "black",
    width: "50px",
    height: "25px",
}