import React, { useState } from 'react';

const Header = () => {
    // State to track the currently active link
    const [activeLink, setActiveLink] = useState('home');
    // Function to handle the link click
    const handleLinkClick = (link) => {
        setActiveLink(link); // Set the clicked link as active
    };

    return (
        <header className='bg-black bg-gradient'>
            <nav >
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a
                            className={`nav-link  ${activeLink === 'home' ? 'active fs-3 text-success' : 'text-warning fs-4'}`}
                            aria-current="page"
                            href="#"
                            onClick={() => handleLinkClick('home')}
                        >
                            My Blog
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className={`nav-link  ${activeLink === 'link1' ? 'active fs-3 text-info' : 'text-warning fs-4'}`}
                            href="#"
                            onClick={() => handleLinkClick('link1')}
                        >
                            About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className={`nav-link ${activeLink === 'link2' ? 'active fs-3 text-danger' : 'text-warning fs-4'}`}
                            href="https://sgod11.github.io/portfolio/"
                            onClick={() => handleLinkClick('link2')}
                        >
                            Portfolio
                        </a>
                    </li>

                </ul>
            </nav>
        </header>

    );
};

export default Header;
