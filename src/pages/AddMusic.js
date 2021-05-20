import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import imgAdd from '../assets/images/add-music-img.png';
import BtnGreen from '../components/BtnGreen';
import axios from 'axios';
import api from '../api';

function AddMusic(props) {
    //Guarda a música que queremos salvar
    const [musicData, setMusicData] = useState({
        nome: "",
        genero: "",
        ano: 0,
        url: ""
    })

    //Captura os dados do form para guardar no musicData
    function handle(e){
        const newMusic = {...musicData};
        newMusic[e.target.id] = e.target.value;
        setMusicData(newMusic);
        console.log("OLHA O QUE INDO PRO musicData",newMusic);
    }

    //Enviar chamando a requisição HTTP POST
    function enviar(e){
        e.preventDefault(); //para não atualizar a tela quando for chamada a função
        api.post(`/`, {
            nome: musicData.nome,
            genero: musicData.genero,
            ano: musicData.ano,
            url: musicData.url
        }).then(resposta => {
            console.log("OLHA A RESPOSTA!", resposta.data)
        });
    }  


    return (
        <>
            <NavBar />
            <div className="container">
                <div className="add-music">
                    <form onSubmit={(e) => enviar(e)}>
                        <h1>Adicionar</h1>
                        <div>
                            <label>Nome: 
                            <input type="text" onChange={(e) => handle(e)} id="nome" value={musicData.nome}/></label>
                        </div>
                        <div>
                            <label>Genêro: 
                            <input type="text"  onChange={(e) => handle(e)} id="genero" value={musicData.genero}/></label>
                        </div>
                        <div>
                            <label>Ano Lançamento:</label>
                            <input type="text" onChange={(e) => handle(e)} id="ano" value={musicData.ano} />
                        </div>

                        <div>
                            <label> Imagem (url):</label>
                            <input type="text" onChange={(e) => handle(e)} id="url" value={musicData.url}/>
                        </div>
                        <div>
                            <button className="btn-green " type="submit">ENVIAR</button>
                        </div>
                    </form>
                    <img src={imgAdd} alt="" />
                </div>
            </div>

        </>
    );
}

export default AddMusic;