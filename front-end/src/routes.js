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
import EditMusic from './pages/EditMusic' //<-----

function Routes(){
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Index}/>
                <Route exact path="/music" component={Music}/>
                <Route exact path="/add-music" component={AddMusic}/>
                <Route exact path={`/edit/:id`} component={EditMusic}/>
                <Route exact path="*" component={NotFound}/>
            </Switch>
        </Router>
    );
}

export default Routes;