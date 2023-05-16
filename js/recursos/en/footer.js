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
                        "Pasión Tango" is a show where the setting and live tango will transport you to another era
                        and the food will be the perfect complement for an unforgettable night in Buenos Aires.</p>
                    </div> <!-- end of footer-col -->
                    <div class="footer-col second">
                        <h6>Links</h6>
                        <ul class="list-unstyled li-space-lg p-small">
                            <li>Menu: <a href="/en/index.html#header">Home</a>, <a href="/en/index.html#quienes-somos">About Us</a>, <a href="/en/index.html#tarifas-reservas">Rates and Reservations</a>, <a href="/en/index.html#programa">Program</a>, <a href="/en/galeria/1.html">Galery</a>, <a href="/en/index.html#contact">Contact</a></li>
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