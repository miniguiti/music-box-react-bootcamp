import React from 'react'

import {Link} from 'react-router-dom'

function BtnGreen(props) {
    return (
        <Link to={props.destino}>
            <button className="btn-green ">{props.texto}</button>
        </Link>
    );
}

export default BtnGreen;