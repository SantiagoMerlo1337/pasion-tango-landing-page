function createFooter() {
    const footer = document.createElement("divs");
    footer.classList.add("footer");
    footer.innerHTML = `
    <!-- Footer -->
    <div class="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="footer-col first">
                        <h6>Sobre el sitio</h6>
                        <p class="p-small">
                            "Pasión Tango" es un restaurante donde la ambientación y el tango en vivo te transportarán a otra época
                             y la comida será el complemento perfecto para una noche inolvidable en Buenos Aires.</p>
                    </div> <!-- end of footer-col -->
                    <div class="footer-col second">
                        <h6>Links</h6>
                        <ul class="list-unstyled li-space-lg p-small">
                            <li>Menu: <a href="/index.html#header">Inicio</a>, <a href="/index.html#quienes-somos">Quienes Somos</a>, <a href="/index.html#nuestro-lugar">Nuestro Lugar</a>, <a href="/index.html#programa">Programa</a>, <a href="/galeria/1.html">Galería</a>, <a href="/index.html#contact">Contacto</a></li>
                        </ul>
                    </div> <!-- end of footer-col -->
                    <div class="footer-col third">
                        <span class="fa-stack">
                            <a href="https://www.facebook.com/pasiontangobsas" target=”_blank”>
                                <i class="fab fa-facebook-f fa-stack-1x"></i>
                            </a>
                        </span>
                        <span class="fa-stack">
                            <a href="https://www.instagram.com/pasiontangobsas" target=”_blank”>
                                <i class="fab fa-instagram fa-stack-1x"></i>
                            </a>
                        </span>
                        <p class="p-small">Aliquam ultrices turpis rave loro <a href="mailto:contact@site.com"><strong>contact@site.com</strong></a></p>
                    </div> <!-- end of footer-col -->
                </div> <!-- end of col -->
            </div> <!-- end of row -->
        </div> <!-- end of container -->
    </div> <!-- end of footer -->  
    <!-- end of footer -->
    `;
    document.body.appendChild(footer);
  }

createFooter();