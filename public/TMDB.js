const rat = process.env.TMDB_RAT;

const validTrendTimeWindows = ["day", "week"];
const validTrendMedia = ["movie", "tv"]; 
export const getTrending = async (media=validTrendMedia[0], time_window = validTrendTimeWindows[0]) => {
    if(!validTrendTimeWindows.includes(time_window) || !validTrendMedia.includes(media)) return null;

    return await fetch(`https://api.themoviedb.org/3/trending/${media}/${time_window}`,{
        headers: {
            Authorization: `Bearer ${rat}`
        }
    }).then(res => res.json());
}

export const getMovies = async(filter) => {
    return await fetch(`https://api.themoviedb.org/3/discover/movie?${filter}`,{
        headers: {
            Authorization: `Bearer ${rat}`
        }
    }).then(res => res.json());
}

export const getTvShows = async(filter) => {
    return await fetch(`https://api.themoviedb.org/3/discover/tv?${filter}`,{
        headers: {
            Authorization: `Bearer ${rat}`
        }
    }).then(res => res.json());
}

export const getMovieDetails = async(id) => {
    return await fetch(`https://api.themoviedb.org/3/movie/${id}`,{
        headers: {
            Authorization: `Bearer ${rat}`
        }
    }).then(res => res.json());
}

export const getTvShowDetails = async(id) => {
    return await fetch(`https://api.themoviedb.org/3/tv/${id}`,{
        headers: {
            Authorization: `Bearer ${rat}`
        }
    }).then(res => res.json());
}


export const getMovieCast = async(id) => {
    return await fetch(`https://api.themoviedb.org/3/movie/${id}/credits`,{
        headers: {
            Authorization: `Bearer ${rat}`
        }
    }).then(res => res.json());
}

export const getTvShowCast = async(id) => {
    return await fetch(`https://api.themoviedb.org/3/tv/${id}/credits`,{
        headers: {
            Authorization: `Bearer ${rat}`
        }
    }).then(res => res.json());
}

export const getMovieResults = async(query) => {
    return await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}`,{
        headers: {
            Authorization: `Bearer ${rat}`
        }
    }).then(res => res.json());
}

export const getTVResults = async(query) => {
    return await fetch(`https://api.themoviedb.org/3/search/tv?query=${query}`,{
        headers: {
            Authorization: `Bearer ${rat}`
        }
    }).then(res => res.json());
}
