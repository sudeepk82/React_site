import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class SkillsPage extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className="container-fluid">
                <h1>Skills Page</h1>
                <NavLink to="/">HOME</NavLink>
                <NavLink to="/contact">CONTACT ME</NavLink>
            </div>
        );
    }
}

export default SkillsPage;