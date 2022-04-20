import React, {ChangeEvent, useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import GalleryOverview from "./components/GalleryOverview";
import Title from "./components/Header";
import {Character} from "./model/character";
import ActionBar from "./components/ActionBar";
import {fetchCharacters} from "./Service/ApiService";
import Header from "./components/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from './Pages/Homepage';
import GalleryPage from "./Pages/GalleryPage";
import Impressum from './Pages/Impressum';
import CharacterDetailsPage from "./Pages/CharacterDetailsPage";

export default function App() {

  return (

  <BrowserRouter>
  <Header/>
    <Routes>
        <Route path={"/"} element={<Homepage />}/>
        <Route path={"/gallery"} element={<GalleryPage />}/>
        <Route path={"/impressum"} element={<Impressum />}/>
        <Route path={"/character/:id"} element={<CharacterDetailsPage />} />

    </Routes>
  </BrowserRouter>

  );
}


