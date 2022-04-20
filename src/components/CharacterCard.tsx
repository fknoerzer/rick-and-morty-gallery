import {Character} from "../model/character";
import './CharacterCard.css'
import {useNavigate} from "react-router-dom";
type CharacterCardProps =  {
    character : Character
}

export default function CharacterCard({character}: CharacterCardProps){

    const navigate = useNavigate();

    const onCardClick = () => {
        navigate(`/character/${character.id}`)
    }


    return <div className="character-card" onClick={onCardClick}>
        <h2 className={"character-name"}>{character.name}</h2>
        <h3 className={"ID"}>ID: {character.id}</h3>
        <img className={"Image"} src={character.image} />
        <div className={"details-character-card"}>
            <p className={"detail"}>Species: {character.species}</p>
            <p className={"detail"}>Origin: {character.origin.name}</p>
            <p className={"detail"}>Location: {character.location.name}</p>
            <p className={"detail"}>Gender: {character.status}</p>
        </div>
    </div>


}