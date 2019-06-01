AOS.init({
  duration: 800,
  easing: "slide",
  once: false
});

jQuery(document).ready(function($) {
  "use strict";

  var windowScrolled = function() {
    $(window).scroll(function() {
      var $w = $(this),
        st = $w.scrollTop(),
        navbar = $(".js-site-navbar");

      if (st > 100) {
        navbar.addClass("scrolled");
        $($("#site-logo")[0]).attr("src", "./images/logo.png");
      } else {
        navbar.removeClass("scrolled");
        $($("#site-logo")[0]).attr("src", "./images/logo-white.png");
      }

      //Campaign Process
      if (st == 900) {
          let prg = document.getElementById('progress-line');
          let percent = document.getElementById('percentCount');
          let num_count = document.getElementsByClassName('from')[0];
          let counter = 5;
          let progress = 5;
          let start_num = 1;
          let id = setInterval(frame, 30);
        
          function frame() {
            if (start_num == 489) {
              clearInterval(id);
            }else {
              start_num += 6.172;
              num_count.innerHTML = `${Math.round(start_num)}M`;
            }

            if(progress == 83 && counter == 83) {
              clearInterval(id);
              percent.innerHTML = `${counter}% complete, 17% to go`;
            } else {
              progress += 1;
              counter += 1;
              prg.style.width = `${progress}%`;
              percent.innerHTML = `${counter}%`;
            }
          }
        }
    });
  };
  windowScrolled();

  // Video
  var p = $(".popup__overlay");

  $("#popup__toggle").click(function() {
    p.css("display", "block");
  });
  p.click(function(event) {
    let e = event || window.event;
    if (e.target == this) {
      $(p).css("display", "none");
    }
  });
  $(".popup__close").click(function() {
    p.css("display", "none");
  });

  var siteMenuClone = function() {
    $(".js-clone-nav").each(function() {
      var $this = $(this);
      $this
        .clone()
        .attr("class", "site-nav-wrap")
        .appendTo(".site-mobile-menu-body");
    });

    $("body").on("click", ".arrow-collapse", function(e) {
      var $this = $(this);
      if (
        $this
          .closest("li")
          .find(".collapse")
          .hasClass("show")
      ) {
        $this.removeClass("active");
      } else {
        $this.addClass("active");
      }
      e.preventDefault();
    });

    $(window).resize(function() {
      var $this = $(this),
        w = $this.width();

      if (w > 768) {
        if ($("body").hasClass("offcanvas-menu")) {
          $("body").removeClass("offcanvas-menu");
        }
      }
    });

    $("body").on("click", ".js-menu-toggle", function(e) {
      var $this = $(this);
      e.preventDefault();

      if ($("body").hasClass("offcanvas-menu")) {
        $("body").removeClass("offcanvas-menu");
        $this.removeClass("active");
      } else {
        $("body").addClass("offcanvas-menu");
        $this.addClass("active");
      }
    });

    // click outisde offcanvas
    $(document).mouseup(function(e) {
      var container = $(".site-mobile-menu");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($("body").hasClass("offcanvas-menu")) {
          $("body").removeClass("offcanvas-menu");
        }
      }
    });
  };
  siteMenuClone();

  var sitePlusMinus = function() {
    $(".js-btn-minus").on("click", function(e) {
      e.preventDefault();
      if (
        $(this)
          .closest(".input-group")
          .find(".form-control")
          .val() != 0
      ) {
        $(this)
          .closest(".input-group")
          .find(".form-control")
          .val(
            parseInt(
              $(this)
                .closest(".input-group")
                .find(".form-control")
                .val()
            ) - 1
          );
      } else {
        $(this)
          .closest(".input-group")
          .find(".form-control")
          .val(parseInt(0));
      }
    });
    $(".js-btn-plus").on("click", function(e) {
      e.preventDefault();
      $(this)
        .closest(".input-group")
        .find(".form-control")
        .val(
          parseInt(
            $(this)
              .closest(".input-group")
              .find(".form-control")
              .val()
          ) + 1
        );
    });
  };
  sitePlusMinus();

  

  var siteMagnificPopup = function() {
    $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
      disableOn: 700,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,

      fixedContentPos: false
    });
  };
  siteMagnificPopup();

  var siteCarousel = function() {
    if ($(".nonloop-block-14").length > 0) {
      $(".nonloop-block-14").owlCarousel({
        center: false,
        items: 1,
        loop: true,
        stagePadding: 0,
        autoplay: true,
        margin: 20,
        nav: true,
        dots: true,
        navText: [
          '<i class="fas fa-chevron-left fa-1x"></i>',
          '<i class="fas fa-chevron-right fa-1x"></i>'
        ],
        responsive: {
          600: {
            margin: 20,
            stagePadding: 0,
            items: 2
          },
          1000: {
            margin: 20,
            stagePadding: 0,
            items: 3
          }
        }
      });
    }

    if ($(".nonloop-block-15").length > 0) {
      $(".nonloop-block-15").owlCarousel({
        center: true,
        items: 1.5,
        loop: false,
        autoplay: true,
        margin: 10,
        nav: true,
        navText: [
          '<span style="color: blue;">&#10229;</span>',
          '<span style="color: white;background-color: rgba(34, 167, 240, 0.5);border-radius: 50%;padding: 10px 6px;">&#10230;</span>'
        ],
        responsive: {
          600: {
            stagePadding: 0,
            items: 1,
            nav: true
          },
          1000: {
            stagePadding: 0,
            items: 2,
            nav: true
          },
          1200: {
            stagePadding: 0,
            items: 2,
            nav: true
          }
        }
      });
    }

    if ($(".slide-one-item").length > 0) {
      $(".slide-one-item").owlCarousel({
        center: false,
        items: 1,
        loop: true,
        stagePadding: 0,
        margin: 0,
        autoplay: true,
        pauseOnHover: false,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        nav: true,
        navText: [
          '<i class="fas fa-arrow-left"></i>',
          '<i class="fas fa-arrow-right"></i>'
        ]
      });
    }
  };
  siteCarousel();

  var siteStellar = function() {
    $(window).stellar({
      responsive: false,
      parallaxBackgrounds: true,
      parallaxElements: true,
      horizontalScrolling: false,
      hideDistantElements: false,
      scrollProperty: "scroll"
    });
  };
  siteStellar();
});

//Snazzy map

// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, "load", init);

function init() {
  // Basic options for a simple Google Map
  // For more options see: https://developers.google.com/maps/documenjavascript/reference#MapOptions
  var mapOptions = {
    // How zoomed in you want the map to start at (always required)
    zoom: 11,

    // The latitude and longitude to center the map (always required)
    center: new google.maps.LatLng(40.67, -73.94), // New York

    // How you would like to style the map.
    // This is where you would paste any style found on Snazzy Maps.
    styles: [
      {
        featureType: "administrative",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#6195a0"
          }
        ]
      },
      {
        featureType: "landscape",
        elementType: "all",
        stylers: [
          {
            color: "#f2f2f2"
          }
        ]
      },
      {
        featureType: "landscape",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#ffffff"
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "all",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "poi.park",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#e6f3d6"
          },
          {
            visibility: "on"
          }
        ]
      },
      {
        featureType: "road",
        elementType: "all",
        stylers: [
          {
            saturation: -100
          },
          {
            lightness: 45
          },
          {
            visibility: "simplified"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "all",
        stylers: [
          {
            visibility: "simplified"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#f4d2c5"
          },
          {
            visibility: "simplified"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "labels.text",
        stylers: [
          {
            color: "#4e4e4e"
          }
        ]
      },
      {
        featureType: "road.arterial",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#f4f4f4"
          }
        ]
      },
      {
        featureType: "road.arterial",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#787878"
          }
        ]
      },
      {
        featureType: "road.arterial",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "transit",
        elementType: "all",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "all",
        stylers: [
          {
            color: "#eaf6f8"
          },
          {
            visibility: "on"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#eaf6f8"
          }
        ]
      }
    ]
  };

  // Get the HTML DOM element that will contain your map
  // We are using a div with id="map" seen below in the <body>
  var mapElement = document.getElementById("map");

  // Create the Google Map using our element and options defined above
  var map = new google.maps.Map(mapElement, mapOptions);

  // Let's also add a marker while we're at it
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(40.67, -73.94),
    map: map,
    title: "Snazzy!"
  });
}

//Progress Bar


