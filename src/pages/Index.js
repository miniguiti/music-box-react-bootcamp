import React from 'react'
import NavBar from '../components/NavBar'
import imgIndex from '../assets/images/index-img.png'
import BtnGreen from '../components/BtnGreen'

function Index() {
    return (
        <>
        <NavBar/>
            <div className="container index">
                <div className="index-content">
                    <div className="box-text-index">
                        <div className="info-index">
                            <h1>Faça parte do nosso dicionário de música </h1>
                            <h3>Contribua e fique por dentro das novidades  </h3>
                        </div>
                        <div className="img-index"></div>
                        <BtnGreen texto = "Conhecer agora!"/>
                    </div>
                    <img src={imgIndex} alt="" className="index-img" />
                </div>
            </div>
        </>
    );
}
export default Index;