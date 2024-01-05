import React from 'react';
import { Component } from 'react';
import Navbar from '../components/NavBar';


class DefaultNav extends Component { 
    state = {}
    render() { 
        return (
            <>
            <Navbar/>
            {this.props.children}
            </>
        );
    }
}
 
export default DefaultNav;