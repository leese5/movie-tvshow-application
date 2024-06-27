import Link from 'next/link'



const divStyle = {
    minWidth: "100%",
    // backgroundColor: "#3454D1",
    background: "black",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",

}
const navLeft = {
    display: "flex",
    justifyContent: "flex-start",
}
const navRight = {
    display: "flex",
    justifyContent: "flex-end",
}
const navItems = {
    display: "flex",
    justifyContent: "flex-end",
}

const homeStyle = {
    color: "white",
    textDecoration: "none",
    fontWeight: "normal",
    margin: "10px 15px 10px 15px",
}

const itemStyle = {
    // width: "100px",
    margin: "10px 15px 10px 15px",
    color: "white",
    textDecoration: "none",
    fontFamily: "Archivo Black",
    fontWeight: "normal",
}

export default async function Navbar() {
    return (
        <div style={divStyle}>
            <nav style={navLeft}>
                <ul style={navItems}>
                    <Link href="/" style={homeStyle}>
                        <text>Movies</text>
                    </Link>
                </ul>
            </nav>

            <nav style={navRight}>
                <ul style={navItems}>
                    <Link href="/TvShows" style={itemStyle}>
                        <text>TV</text>
                    </Link>
                    <Link href="/Movies" style={itemStyle}>
                        <text>Movies</text>
                    </Link>
                    <Link href="/Search" style={itemStyle}>
                        <text>Search</text>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}