import React, {ChangeEvent, useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import GalleryOverview from "./components/GalleryOverview";
import Title from "./components/Title";
import {Character} from "./model/character";
import ActionBar from "./components/ActionBar";
import {fetchCharacters} from "./Service/ApiService";

export default function App() {

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
  <Title/>
      <ActionBar searchText={searchText} onSearchInputChange={onSearchInputChange}/>
  <GalleryOverview characters={filteredCharacters} />
    </div>
  );
}


