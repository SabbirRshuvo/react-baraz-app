import React from 'react';
import './LogoSearchBar.css'
import logo from '../../../src/images/logo.png'

const LogoSearchBar = () => {
    return (
        <div className='container-fluid search-container pt-2 d-flex justify-content-center align-item-center'>
            <a href="/"><img className='img fluid' width='150' src={logo} alt="logo of baraz" /></a>
            <input type="text" className='search-bar' placeholder='Search In Baraz'/>
            <button>Search</button>
        </div>
    );
};

export default LogoSearchBar;