import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import imgAdd from '../assets/images/add-music-img.png';

function EditMusic(props) {

    return (
        <>
            <NavBar />
            <div className="container">
                <div className="add-music">
                    <form>
                        <h1>Editar Musica</h1>
                        <div>
                            <label>Nome: 
                            <input type="text"/></label>
                        </div>
                        <div>
                            <label>Genêro: 
                            <input type="text"/></label>
                        </div>
                        <div>
                            <label>Ano Lançamento:</label>
                            <input type="text"/>
                        </div>

                        <div>
                            <label> Imagem (url):</label>
                            <input type="text"/>
                        </div>
                        <div>
                            <button className="btn-green " type="submit">ATUALIZAR</button>
                        </div>
                    </form>
                    <img src={imgAdd} alt="" />
                </div>
            </div>

        </>
    );
}

export default EditMusic;