/*
===========================================================================
 EXCLUSIVE ON themeforest.net
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 Template Name   : Oceanview - Hotel HTML Template
 Author          : bootWeb
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 Copyright (c) 2017 - bootWeb - https://themeforest.net/user/bootweb
===========================================================================
*/

/*================================================
            Table of contents  
==================================================
 
1. Preloader
2. Home Slider
3. Sticky js
4. Wow js
5. Smooth scroll
6. Magnific Popup
7. Mixitup
8. Counter
9. Team
10. Reviews
11. Partners
12. Contact form
13. Google Map
14. Scroll to top

====================================================
            End table content 
===================================================*/

$(function () {
  "use strict";

  var $window = $(window),
  $body = $('body');

  jQuery(document).ready(function($){

    	//Preloader
      $('.spinner').fadeOut(); 
      $('.preloader').delay(350).fadeOut(500);
      $body.delay(350).css({'overflow':'visible'});

      //Home Slider
      $('#hero-slider').owlCarousel({
        dots: true,
        nav: true,
        navClass: ['owl-prev', 'owl-next'],
        navText: [
        "<i class='fa fa-chevron-left' aria-hidden='true'></i>",
        "<i class='fa fa-chevron-right' aria-hidden='true'></i>"
        ],
        autoplay:true,
        loop: true,
        smartSpeed: 800,
        items:1
      });

      //Sticky JS
      $("#nav").sticky({
        topSpacing: 0
      });

//Wow js
new WOW().init(); 

//Smooth Scroll
$(".navbar-nav a,#about a,#quote a,[href='body']").on('click', function(event) {
  if (this.hash !== ""){
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){
      window.location.hash = hash;
    });
  }
});

//Magnific Popup
$('#parent').magnificPopup({
  delegate: 'a.gallery',
  type: 'image',
  closeOnContentClick: true,
  gallery: {enabled: true}
});

//Mixitup
$('#parent').mixItUp();

//Counter
$('.counter').counterUp({
  delay: 1,
  time: 300
});

//Team
$("#us").owlCarousel({
  navigation: false,
  pagination: true,
  slideSpeed: 800,
  paginationSpeed: 800,
  smartSpeed: 500,
  autoplay: false,
  singleItem: true,
  loop: false,
  responsive:{
    0:{
      items:1
    },
    480:{
      items:2
    },
    900:{
      items:3
    }
  }
});

//Reviews
$("#owl-review").owlCarousel({
  navigation: false,
  pagination: true,
  slideSpeed: 800,
  paginationSpeed: 800,
  smartSpeed: 500,
  autoplay: false,
  singleItem: true,
  loop: false,
  responsive:{
    0:{
      items:1
    },
    680:{
      items:2
    },
    1000:{
      items:3
    }
  }
});

//Partners
$("#partners").owlCarousel({
  loop: true,
  nav: false,
  dots: false,
  margin: 30,
  autoplay: true,
  autoplayTimeout: 1300,
  smartSpeed: 500,
  animateOut: 'slideOutDown',
  animateIn: 'slideInDown',
  responsive: {
    0:{
      items:1
    },
    320:{
      items:2
    },
    520:{
      items:3
    },
    860:{
      items:5
    },
    1000:{
      items:6
    }
  }
});

//Contact form
var validator=$("#form").validate({
  rules: {
    name: "required",
    email: {
      required: true,
      email: true
    },
    subject: "required",
    phone: "required",
    message: "required",
  },

  messages: {
    name: "Please enter your name",
    email: "Please enter a valid email address",
    subject: "Please enter a subject",
    phone: "Please enter your contact number",
    message: "Please enter your message"
  }
});

$(".send-btn").on("click",function(){
  $("#form").css({"color": "#ac4b49", "font-size": "14px", "font-weight": "500"});
});

//Google Map
var myCenter = new google.maps.LatLng(19.074,72.884);
function initialize() {
  var mapProp = {
    center:myCenter,
    zoom:13,
    scrollwheel:false,
    draggable:true,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map"),mapProp);
  var marker = new google.maps.Marker({
    position:myCenter,
    icon: 'images/map.png',
  });
  marker.setMap(map);
  marker.setAnimation(google.maps.Animation.BOUNCE);
}
google.maps.event.addDomListener(window, 'load', initialize);

//Scroll-to-up
$('#scroll-up').hide();
$window.on("scroll", function () {
  if ($window.scrollTop() > 300) {
    $('#scroll-up').fadeIn();
  } else {
    $('#scroll-up').fadeOut();
  }
});
$('#scroll-up').on("click", function () {
  $("html, body").animate({
    scrollTop: 0
  }, 1000);
  return false;
});

}(jQuery));
});