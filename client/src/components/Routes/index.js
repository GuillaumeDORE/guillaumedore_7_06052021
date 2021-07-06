import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Article from '../../pages/Article';
import Home from '../../pages/Home';
import Profil from '../../pages/Profil';
import Header from '../Header/Header';


const index = ({ userId, setUserId }) => {
    return (
        <Router>
            <Header userId={userId} setUserId={setUserId} />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/profil" exact component={Profil} />
                <Route path="/article/:id" exact component={Article} />
                <Redirect to="/" />
            </Switch>
        </Router>
    );
};

export default index;