import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Header extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <header id="main-header" className="header-nav container-fluid row col-sm-12">
                <div className="col-sm-2">
                    logo
                </div>
                <div className="col-sm-5">
                    <h5>Sudeep Kumar</h5>
                </div>
                <div className="col-sm-5">
                    <div className="navbarMain row">
                        <ul className="nav navbar-right">
                            <li><NavLink exact activeStyle={{color:'red'}} to="/" className="col-sm-4">HOME</NavLink> </li>
                            <li><NavLink to="/skills" activeStyle={{color:'red'}} className="col-sm-4">SKILLS</NavLink> </li>
                            <li><NavLink to="/contact" activeStyle={{color:'red'}} className="col-sm-4">CONTACT ME</NavLink> </li>
                        </ul>
                    </div>

                    <div className="row">
                        <h6>Contact</h6>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;