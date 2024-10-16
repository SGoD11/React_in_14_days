import React from "react";
export default function Header() {
    return (
            <header data-bs-theme="dark">
                <div class="text-bg-dark collapse" id="navbarHeader" >
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-8 col-md-7 py-4">
                                <h4>About</h4>
                                <p class="text-body-secondary">My name is Subhajit and I am trying to make it look realistic </p>
                            </div>
                            <div class="col-sm-4 offset-md-1 py-4">
                                <h4>Contact</h4>
                                <ul class="list-unstyled">
                                    <li><a href="https://x.com/SubhajitDhar000" class="text-white">Follow on Twitter</a></li>
                                    <li><a href="https://github.com/SGoD11" class="text-white">Follow on Github</a></li>
                                    <li> <a href="mailto:freeplay644@gmail.com?subject=React Day 3 Topic" class="text-white">Email me</a> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="navbar navbar-dark bg-dark shadow-sm">
                    <div class="container">
                        <a href="#" class="navbar-brand d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" class="me-2" viewBox="0 0 24 24"><path d="M5 8c0-1.657 2.343-3 4-3V4a4 4 0 0 0-4 4"/> <path d="M12.318 3h2.015C15.253 3 16 3.746 16 4.667v6.666c0 .92-.746 1.667-1.667 1.667h-2.015A5.97 5.97 0 0 1 9 14a5.97 5.97 0 0 1-3.318-1H1.667C.747 13 0 12.254 0 11.333V4.667C0 3.747.746 3 1.667 3H2a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1h.682A5.97 5.97 0 0 1 9 2c1.227 0 2.367.368 3.318 1M2 4.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0M14 8A5 5 0 1 0 4 8a5 5 0 0 0 10 0"/><circle cx="12" cy="13" r="4"></circle></svg>
                            <strong>Lensify</strong>
                        </a>
                        <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </div>
            </header>
    );
}