import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class SkillsPage extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className="container" style={{backgroundColor:'green', padding:'20px 10px'}}>
                <h1>Skills Page</h1>
            </div>
        );
    }
}

export default SkillsPage;