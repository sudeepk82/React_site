import React from 'react';
import ReactDOM from 'react-dom';
import {Route} from 'react-router';
import {BrowserRouter, Router} from 'react-router-dom';
import routes from './routes';
import Homepage from './js/components/container/HomePage';

ReactDOM.render(
    <BrowserRouter>
        {routes}
    </BrowserRouter>,
    document.getElementById('app')
);