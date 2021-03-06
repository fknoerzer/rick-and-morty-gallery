import React, {ChangeEvent, useEffect, useState} from "react";
import {Character} from "../model/character";
import {fetchCharacters} from "../Service/ApiService";
import Header from "../components/Header";
import ActionBar from "../components/ActionBar";
import GalleryOverview from "../components/GalleryOverview";

export default function GalleryPage() {

    const [characters, setCharacters] = useState<Character[]>([])

    useEffect(() => {
        getCharactersFromApi()
    }, [])

    const getCharactersFromApi = () => {
        fetchCharacters("https://rickandmortyapi.com/api/character")
            .then(response => {
                setCharacters(response.results)
            })
            .catch(error => console.log(error))
    }

    const [searchText, setSearchText] = useState<string>("")

    const filteredCharacters = characters.filter(character => character.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))

    const onSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value)
    }
    return (

        <div className="App">
            <ActionBar searchText={searchText} onSearchInputChange={onSearchInputChange}/>
            <GalleryOverview characters={filteredCharacters} />
        </div>
    );
}