import { useRouter} from "next/navigation";
const poster = 'https://image.tmdb.org/t/p/original/'

export default function TvShowCard({ tvShow }) {
    const router = useRouter();
    const src = tvShow.poster_path ? poster + tvShow.poster_path : '/PNFCat.png';

    const handleTvShow = () => {
        router.push(`/TvShow/?id=${tvShow.id}`);
    }

    return (
        <div>
            <div className="posterDiv" style={posterDiv} onClick={()=>handleTvShow()}>
                <img style={posterStyle} src={src} alt={tvShow.original_name} />
            </div>
            <div style={titleDiv}>
                <h2>{tvShow.original_name}</h2>
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