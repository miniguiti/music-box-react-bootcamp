import React, { useEffect, useState } from 'react'
import api from '../api';
import BtnGreen from '../components/BtnGreen'
import MusicItem from '../components/MusicItem'
import NavBar from '../components/NavBar'

function Music() {

    //guardar as musicas
    const [musicas, setMusicas] = useState([]);

    //buscar as musicar
    useEffect(() =>{
        async function buscarMusicas(){
            const resposta = await api.get("");
            setMusicas(resposta.data);
            console.log("OLHA O QUE VEIO DA API!!", resposta.data)
        }
        buscarMusicas();
    }, []);

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
                    {musicas.map((musica) => (
                        <MusicItem
                            key={musica.id}
                            nome={musica.nome}
                            genero={musica.genero}
                            ano={musica.ano}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Music;