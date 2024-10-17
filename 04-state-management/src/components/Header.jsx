import React from "react";

export default function Header() {
    return (
        <div>
            <nav class="navbar bg-body-tertiary fixed-top">
                <div class="container-fluid">
                    {/* <!-- Logo and Heading --> */}
                    <a class="navbar-brand d-flex align-items-center" href="#">
                        <img
                            src="/CounterLogo.webp"
                            alt="Logo"
                            width="30"
                            height="30"
                            class="d-inline-block rounded me-2"
                        />
                        <span class="text-dark fs-3">Counter</span>
                    </a>

                    {/* <!-- Offcanvas Toggle Button --> */}
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    {/* <!-- Offcanvas Menu --> */}
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <p class="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Links
                                    </p>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <div class="dropdown-item d-flex justify-content-center gap-3">
                                                <a target="_blank" href="https://x.com/SubhajitDhar000"><i class="bi bi-twitter-x"></i></a>
                                                <a target="_blank" href="https://www.instagram.com/subhajit_dhar_sd/"><i class="bi bi-instagram"></i></a>
                                                <a target="_blank" href="https://www.threads.net/@subhajit_dhar_sd"><i class="bi bi-threads"></i></a>
                                                <a target="_blank" href="mailto:freeplay644@gmail.com"><i class="bi bi-envelope-at"></i></a>
                                        </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>



        </div>
    );
}
