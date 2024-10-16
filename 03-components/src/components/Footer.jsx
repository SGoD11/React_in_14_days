import React from "react";

export default function Footer() {
    return (
        <div className="container">
            <footer className="row py-5 my-5 border-top">
                {/* Left Section */}
                <div className="col mb-3 d-flex justify-content-start">
                   
                    <p className="text-black">© {new Date().getFullYear()}</p>
                </div>

                {/* Right Section */}
                <div className="col mb-3 d-flex justify-content-end text-center ">
                    
                    <ul className="nav flex-column text-white">
                    <h5 className="">Section</h5>
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link p-0 text-body-secondary">Home</a>
                        </li>
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link p-0 text-body-secondary">Features</a>
                        </li>
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link p-0 text-body-secondary">Pricing</a>
                        </li>
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link p-0 text-body-secondary">FAQs</a>
                        </li>
                        <li className="nav-item mb-2">
                            <a href="About" className="nav-link p-0 text-body-secondary">About</a>
                        </li>
                    </ul>
                </div>
                <div className="text-center text-success">Made by Subhajit</div>
            </footer>
        </div>
    );
}
