import React from 'react';
import NavBar from '../components/NavBar';
import imgAdd from '../assets/images/add-music-img.png';
import BtnGreen from '../components/BtnGreen';

function AddMusic() {
    return (
        <>
            <NavBar />
            <div className="container">
                <div className="add-music">
                    <form>
                        <h1>Adicionar</h1>
                        <div>
                            <label>Nome: <input type="text" /></label>
                        </div>
                        <div>
                            <label>Genêro: <input type="text" /></label>
                        </div>
                        <div>
                            <label>Ano Lançamento:</label>
                            <input type="text" />
                        </div>

                        <div>
                            <label> Imagem (url):</label>
                            <input type="text" />
                        </div>
                        <div>
                            <BtnGreen texto ="Enviar"/>
                        </div>
                    </form>
                    <img src={imgAdd} alt="" />
                </div>
            </div>

        </>
    );
}

export default AddMusic;