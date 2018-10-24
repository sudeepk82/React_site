import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class ContactPage extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className="container" style={{backgroundColor:'green', padding:'20px 10px'}}>
                <h1>Contact Me!!!</h1>
            </div>
        );
    }
}

export default ContactPage;