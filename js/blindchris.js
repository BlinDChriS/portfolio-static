(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Hide navbar when modals trigger
  $('.portfolio-modal').on('show.bs.modal', function(e) {
    $('.navbar').addClass('d-none');
  })
  $('.portfolio-modal').on('hidden.bs.modal', function(e) {
    $('.navbar').removeClass('d-none');
  })

})(jQuery); // End of use strict



// SCRIPT OPEN STREET MAP
			// Latitude et longitude de base
			var lat = 47.2543202;
			var lon = 6.0342307;
            var macarte = null;
            // Si on veut initialiser une liste de marqueurs
            var villes = {
            //     "Autre Ville": { "lat": 47.23464, "lon": 6.02069 }
            };
            // mon icône personnalisée (blindchris)
            var blindIcon = L.icon({
                iconUrl: 'img/position.png',

                iconSize:     [64, 64], //taille de l'icone
                iconAnchor:   [32, 64], // pixel de l'icône qui pointe sur la carte
                popupAnchor:  [0, -64] // pixel d'oû apparaîtra le popup
            });
			// Fonction d'initialisation de la carte
			function initMap() {
				// Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
                macarte = L.map('map').setView([lat, lon], 17);
                // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer.
                L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
                    // attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
                    minZoom: 1,
                    maxZoom: 20
                }).addTo(macarte);
                // Nous parcourons la liste des villes
	            for (ville in villes) {
                var marker = L.marker([villes[ville].lat, villes[ville].lon], {icon: blindIcon}).addTo(macarte);
                // Nous ajoutons la popup. A noter que son contenu (ici la variable ville) peut être du HTML
                marker.bindPopup(ville);
                }
            }
			window.onload = function(){
				// Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
                initMap(); 
                // Nous ajoutons un marqueur
            var marker = L.marker([lat, lon], {icon: blindIcon}).addTo(macarte).bindPopup("<b>BlinDChriS</b>, développeur Web<br><a href='http://www.google.fr/maps/place/14+Rue+Résal,+25000+Besançon' target='_blank'>14 rue Résal, Apt. 103<br>25000 Besançon</a>").openPopup();
            
			};