import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Form from './Form';
import NotFound from './NotFound';


const Router = () => {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route path="/form" component={Form}/>
                    <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
        )
} 

export default Router;