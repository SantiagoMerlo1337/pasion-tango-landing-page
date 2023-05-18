function createNav() {
    const nav = document.createElement("nav");
    nav.classList.add("nav");
    nav.innerHTML = `
    <!-- Navigation -->
    <nav id="navbarExample" class="navbar navbar-expand-lg fixed-top navbar-dark" aria-label="Main navigation">
        <div class="container">
    
            <!-- Image Logo -->
            <a class="navbar-brand" href="/en/index">
                <img class="logoNav" src="/images/logos/logos-05.png" alt="Logo Pasion Tango">
            </a> 
    
            <button class="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
    
            <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                <ul class="navbar-nav ms-auto navbar-nav-scroll">
                    <li class="nav-item">
                        <a class="nav-link" href="/en/#header">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/en/#quienes-somos">About Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/en/#tarifas-reservas">Fees and Reservations</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/en/#programa">Program</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/en/galeria/1">Gallery</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="/images/flag-estados-unidos.png" class="flag-icon" alt="Icono bandera Argentina">Language</a>
                        <ul class="dropdown-menu" aria-labelledby="dropdown01">
                            <li>
                                <a class="dropdown-item text-decoration-none" href="/">
                                    <img src="/images/flag-argentina.png" class="flag-icon" alt="Icono bandera Argentina">
                                    Español
                                </a>
                            </li>
                            <li><div class="dropdown-divider"></div></li>
                            <li>
                                
                                <a class="dropdown-item text-decoration-none" href="/en/">
                                    <img src="/images/flag-estados-unidos.png" class="flag-icon" alt="Icono bandera Estadounidense">
                                    English
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/en/#contact">Contact</a>
                    </li>
                </ul>
                <span class="nav-item social-icons">
                    <span class="fa-stack">
                        <a href="https://www.facebook.com/pasiontangobsas" target=”_blank”>
                            <i class="fas fa-circle fa-stack-2x"></i>
                            <i class="fab fa-facebook-f fa-stack-1x"></i>
                        </a>
                    </span>
                    <span class="fa-stack">
                        <a href="https://www.instagram.com/pasiontangobsas" target=”_blank”>
                            <i class="fas fa-circle fa-stack-2x"></i>
                            <i class="fab fa-instagram fa-stack-1x"></i>
                        </a>
                    </span>
                </span>
            </div> <!-- end of navbar-collapse -->
        </div> <!-- end of container -->
    </nav> <!-- end of navbar -->
    <!-- end of navigation -->
    `;
    document.body.appendChild(nav);
  }

createNav();