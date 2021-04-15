import React from 'react'
import BtnGreen from '../components/BtnGreen'
import MusicItem from '../components/MusicItem'
import NavBar from '../components/NavBar'

function Music() {
    return (
        <>
            <NavBar/>
            <div className="container">
                <div className="filter">
                    <BtnGreen texto="Adicionar" destino="/add-music"/>
                </div>
            </div>
            <div className="container">
                <div className="music-boxes">
                    <MusicItem nome="Numb linking park" genero="rock" ano="2003"/>
                    <MusicItem nome="HIGHEST IN THE ROOM" genero="pop" ano="2001"/>
                    <MusicItem nome="Lisboa - Anavitória" genero="MBP" ano="2019"/>
                    <MusicItem nome="faroeste caboclo" genero="MBB/ROCK" ano="2001"/>
                    <MusicItem nome="Nome 1" genero="Pagode" ano="2000"/>
                    <MusicItem nome="Nome 2" genero="Rock" ano="2000"/>
                    <MusicItem nome="Nome 3" genero="Samba" ano="2070"/>
                    <MusicItem nome="Nome 4" genero="Funk" ano="2021"/>
                </div>
            </div>
        </>
    );
}

export default Music;