import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

export default function Routes() {
    return (
        <BrowserRouter>
            <Redirect from='/' exact to='/home' />
            <Switch>
                <Route path='/home' component={Home} />
                <Route path='/projects' component={Projects} />
                <Route path='/contact' component={Contact} />
            </Switch>
        </BrowserRouter>
    )

}