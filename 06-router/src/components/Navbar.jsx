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
                          to="/prices" 
                          className={(e) => e.isActive ? "nav-link red" : "nav-link"}
                        >
                          Prices
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                          to="/about" 
                          className={(e) => e.isActive ? "nav-link red" : "nav-link"}
                        >
                          Album
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
