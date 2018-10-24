import React from 'react';
import {Route, Switch} from 'react-router';
import HomePage from './js/components/container/HomePage';
import SkillsPage from './js/components/container/SkillsPage';
import ContactPage from './js/components/container/ContactPage';

export default (
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path="/skills" component={SkillsPage} />
        <Route exact path="/contact" component={ContactPage} />
    </Switch>
);