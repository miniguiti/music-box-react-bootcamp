import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import imgAdd from '../assets/images/add-music-img.png';
import { useHistory, useParams } from 'react-router';
import api from '../api';
import { Link } from 'react-router-dom';

function EditMusic(props) {

    const [musicEdit, setMusicEdit] = useState({});
    const {id} = useParams();

    useEffect(() => {
        async function getMusicById(){
            const resposta = await api.get(`/${id}`);
            setMusicEdit(resposta.data);
        }
        if(id){
            getMusicById();
        }
    },[])

    //Captura os dados do form para guardar no musicEdit
    function handle(e){
        const newMusic = {...musicEdit};
        newMusic[e.target.id] = e.target.value;
        setMusicEdit(newMusic);
    }

    //Função que vai fazer o PUT
    function atualizar(e){
        e.preventDefault();  //para não atualizar a tela quando for chamada a função
        api.put(`/${musicEdit.id}`,{
            nome: musicEdit.nome,
            genero: musicEdit.genero,
            ano: musicEdit.ano,
            url:musicEdit.url
        }).then(resposta => {
            if(resposta.status == 200){
                alert("Sua música foi alterada com sucesso");
            }else if(resposta.status == 429){
                alert("Aguarde um momento, nosso sistema está sobrecarregado!")
            }
        })

    }

    return (
        <>
            <NavBar />
            <div className="container">
                <div className="add-music">
                    <form onSubmit={(e) => atualizar(e)}>
                        <h1>Editar Musica</h1>
                        <div>
                            <label>Nome: 
                            <input type="text"  onChange={(e) => handle(e)} id="nome" value={musicEdit.nome} defaultValue={musicEdit.nome}/></label>
                        </div>
                        <div>
                            <label>Genêro: 
                            <input type="text"  onChange={(e) => handle(e)} id="genero" value={musicEdit.genero} defaultValue={musicEdit.genero} /></label>
                        </div>
                        <div>
                            <label>Ano Lançamento:</label>
                            <input type="text" onChange={(e) => handle(e)} id="ano" value={musicEdit.ano} defaultValue={musicEdit.ano}/>
                        </div>

                        <div>
                            <label> Imagem (url):</label>
                            <input type="text" onChange={(e) => handle(e)} id="url" value={musicEdit.url} defaultValue={musicEdit.url}/>
                        </div>
                        <div>
                            <button className="btn-green " type="submit">ATUALIZAR</button>
                            <Link to="/music">
                                <button className="btn-green " type="submit">Voltar</button>
                            </Link>
                        </div>
                    </form>
                    <img src={imgAdd} alt="" />
                </div>
            </div>

        </>
    );
}

export default EditMusic;