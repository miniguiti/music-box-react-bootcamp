import React from 'react'
import NavBar from '../components/NavBar'
import imgNotFound from '../assets/images/not-found.png'
import BtnGreen from '../components/BtnGreen'

function NotFound() {
    return (
        <>
            <NavBar />
            <div className="container index ">
                <div className="index-content">
                    <div className="box-text-index">
                        <div className="info-index not-found">
                            <h1>Oops!</h1>
                            <h3>A página que você procura não foi encontrada.</h3>
                        </div>
                        <div className="img-index"></div>
                        <BtnGreen texto="Voltar"/>
                    </div>
                    <img src={imgNotFound} alt="" className="index-img" />
                </div>
            </div>
        </>
    );
}

export default NotFound;