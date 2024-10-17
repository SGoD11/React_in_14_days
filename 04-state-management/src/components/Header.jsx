import React from "react";

export default function Header() {
    return (
        <div>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    
                    <a className="navbar-brand" href="#root">
                        <img 
                            src="/CounterLogo.webp"  // Corrected path
                            alt="Logo" 
                            width="30" 
                            height="24" 
                            className="d-inline-block align-text-top rounded-circle" 
                        />
                        Counter
                    </a>
                </div>
            </nav>
        </div>
    );
}
