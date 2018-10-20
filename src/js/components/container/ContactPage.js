import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class ContactPage extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className="container-fluid">
                <h1>Contact Me!!!</h1>
                <NavLink to="/">HOME</NavLink>
                <NavLink to="/skills">SKILLS</NavLink>
            </div>
        );
    }
}

export default ContactPage;