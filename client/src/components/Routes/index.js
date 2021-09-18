import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Article from '../../pages/Article';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Profil from '../../pages/Profil';
import Header from '../Header/Header';


const index = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Login} />
                <Route path="/profil" exact component={Profil} />
                <Route path="/article/:id" exact component={Article} />
                <Redirect to="/" />
            </Switch>
        </Router>
    );
};

export default index;