import {Character} from "../model/character";
import CharacterCard from "./CharacterCard";
import './GalleryOverview.css'

type GalleryOverviewProps = {
    characters: Character[]
}

export default function GalleryOverview({characters}: GalleryOverviewProps) {
    return <div className={"gallery-overview"}> {characters.map( character => <CharacterCard character={character}/>)}</div>
}