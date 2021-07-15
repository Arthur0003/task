import React from 'react';
import Main from './pages/Main';
import RestaurantInfo from './pages/RestaurantInfo';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route component={Main} path={'/'} exact/>
                <Route component={RestaurantInfo} path={'/restaurant/:id'}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
