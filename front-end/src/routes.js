//BrowserRouter -> Acesso ao uso das rotas
//Switch -> Navegação entre as rotas
//Route -> Criar uma rota

import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

//Import dos componentes/pages
import Index from './pages/Index'
import Music from './pages/Music'
import AddMusic from './pages/AddMusic'
import NotFound from './pages/NotFound'

function Routes(){
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Index}/>
                <Route path="/music" component={Music}/>
                <Route path="/add-music" component={AddMusic}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        </Router>
    );
}

export default Routes;