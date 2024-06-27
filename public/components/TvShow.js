'use client';
const poster = 'https://image.tmdb.org/t/p/original/'

export default function TvShow({ tvShowData, castData }) {
    return (
        <div style={flexDiv}>
            <div style={headerDiv}>
                <img src={poster + tvShowData.poster_path} alt={tvShowData.original_name} style={imageStyle} />
                <h1 style={margin}>{tvShowData.original_name}</h1>
            </div>
            <div style={detailsDiv}>
                <div style={rowDiv}>
                    <div>
                        <h3 style={margin}>Release Date</h3>
                        <p style={margin}>{tvShowData.release_date}</p>
                    </div>

                    <div>
                        <h3 style={margin}>Vote Average</h3>
                        <p style={margin}>{tvShowData.vote_average + ` (${tvShowData.vote_count} votes)`}</p>
                    </div>

                    <div>
                        <h3 style={margin}>Number of Episodes</h3>
                        <p style={margin}>{tvShowData.number_of_episodes}</p>
                    </div>

                    <div>
                        <h3 style={margin}>Genres</h3>
                        <p style={margin}>{tvShowData.genres ? tvShowData.genres.map(genre => genre.name).join(", ") : "N/A"}</p>
                    </div>
                </div>
                <div>
                    <h2 style={margin}>Overview</h2>
                    <p style={margin}>{tvShowData.overview}</p>
                </div>

                <div>
                    <h2>Cast</h2>
                    <div style={rowDiv}>
                        {castData && castData.cast.slice(0, 4).map((person, index) => (
                                <div style={flexDiv} key={person.id}>
                                    <img style={castImageStyle} src={poster + person.profile_path} alt={person.name} />
                                    <h3 style={margin}>{person.name}</h3>
                                </div>
                            )
                        )}
                    </div>
                </div>

            </div>
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

const headerDiv = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    justifyContent: "center",
    width: "50%",
    padding: "10px",
    margin: "30px",
}

const detailsDiv = {
    display: "grid",
    width: "50%",
    padding: "10px",

}

const imageStyle = {
    height: '500px',
    width: '300px',
    margin: '5px',
}

const margin = {
    margin: '5px'
}

const rowDiv = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    width: "100%",
    margin: "10px 0px",
}

const castImageStyle = {
    objectFit: 'cover',
    width: '125px',
    height: '125px',
    borderRadius: '50%',
}