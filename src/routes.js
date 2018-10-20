import React from 'react';
import {Route, Switch} from 'react-router';
import HomePage from './js/components/container/HomePage';
import SkillsPage from './js/components/container/SkillsPage';
import ContactPage from './js/components/container/ContactPage';

export default (
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path="/skills" component={SkillsPage} />
        <Route path="/contact" component={ContactPage} />
    </Switch>
);