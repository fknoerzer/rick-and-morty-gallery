import './Header.css'
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <div className={"Header"}>
            <div className={"Title"}>
                <img className={"logo"} src={"https://rickandmortyapi.com/icons/icon-512x512.png"}></img>
                <h1 className={"dataBase-title"}>Rick and Morty Database</h1>
                <iframe src="https://giphy.com/embed/jSQCODNIa6k5myYjyL" width="auto" height="200" frameBorder="0"
                        className="giphy-embed" allowFullScreen></iframe>
                <p><a
                    href="https://giphy.com/stickers/rickandmorty-season-4-episode-9-rick-and-morty-jSQCODNIa6k5myYjyL"></a>
                </p>
            </div>
            <div className={"Navigation"}>
                <Link to={"/"}>Homepage</Link>
                <Link to={"/gallery"}>Gallery</Link>
                <Link to={"/impressum"}>Impressum</Link>
            </div>
            <br/>
        </div>
    )
}