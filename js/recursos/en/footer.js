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
                        <h6>About the site</h6>
                        <p class="p-small">
                        "Pasión Tango" is a show where the setting and live tango will transport you to another era
                        and the food will be the perfect complement for an unforgettable night in Buenos Aires.</p>
                    </div> <!-- end of footer-col -->
                    <div class="footer-col second">
                        <h6>Links</h6>
                        <ul class="list-unstyled li-space-lg p-small">
                            <li>Menu: <a href="/en/#header">Home</a>, <a href="/en/#quienes-somos">About Us</a>, <a href="/en/#tarifas-reservas">Fees and Reservations</a>, <a href="/en/#programa">Program</a>, <a href="/en/galeria/1">Galery</a>, <a href="/en/#contact">Contact</a></li>
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
                        <p class="p-small">Any questions write to our mail: <a href="mailto:gerencia@pasiontango.ar"><strong>gerencia@pasiontango.ar</strong></a></p>
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