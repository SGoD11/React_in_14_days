import React from 'react';
import { NavLink } from 'react-router-dom';
function Navbar() {
    return (

        <nav className='navbar navbar-expand-lg bg-body-tertiary'>
            <div class="container-fluid">

                <ul>
                    <li><NavLink to="/" className={(e) => { return e.isActive ? "red" : "" }}>Home</NavLink></li>
                    <li><NavLink to="/recipes" className={(e) => { return e.isActive ? "red" : "" }}>Recipes</NavLink></li>
                    <li><NavLink to="/about" className={(e) => { return e.isActive ? "red" : "" }}>About</NavLink></li>

                </ul>
                </div>
        </nav>

    )
}

export default Navbar