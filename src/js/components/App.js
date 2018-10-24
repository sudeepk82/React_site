import React, {Component} from'react';
import {BrowserRouter} from 'react-router-dom';
import routes from '../../routes';
import Header from '../components/container/common/Header';

class App extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div id="main-container" className="container-fluid">
                <BrowserRouter>
                    <div id="app-container" className="container-fluid">
                        <Header />
                        {routes}
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;