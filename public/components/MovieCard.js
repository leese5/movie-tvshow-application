import { useRouter} from "next/navigation";
const poster = 'https://image.tmdb.org/t/p/original/'

export default function MovieCard({ movie }) {
    const router = useRouter();
    const src = movie.poster_path ? poster + movie.poster_path : '/PNFCat.png';

    const handleMovie = () => {
        router.push(`Movie/?id=${movie.id}`);
    }

    return (
        <div>
            <div className="posterDiv" style={posterDiv} onClick={()=>handleMovie()}>
                <img style={posterStyle} src={src} alt={movie.original_title} />
            </div>
            <div style={titleDiv}>
                <h2>{movie.original_title}</h2>
            </div>
            <style jsx>{`
            .posterDiv:hover {
                scale: 1.1;
                cursor: pointer;
            }
        `}</style>
        </div>

    )
}
const posterDiv = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}
const posterStyle = {
    height: '225px',
    width: '150px',
}

const titleDiv = {
    display: "grid",
    gridTemplateColumns: "1fr",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    textAlign: "center",
}