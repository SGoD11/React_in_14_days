import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar bg-dark p-0">
            <div className="container-fluid">
                <ul className='navbar-brand d-flex gap-5'>
                    <li>
                        <NavLink 
                          to="/" 
                          className={(e) => e.isActive ? "nav-link red" : "nav-link"}
                        >
                          Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                          to="/recipes" 
                          className={(e) => e.isActive ? "nav-link red" : "nav-link"}
                        >
                          Recipes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                          to="/about" 
                          className={(e) => e.isActive ? "nav-link red" : "nav-link"}
                        >
                          About
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
