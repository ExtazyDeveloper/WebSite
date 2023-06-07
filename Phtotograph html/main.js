
$(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
      $('.back-to-top').fadeIn();
    } else {
      $('.back-to-top').fadeOut();
      $('.menu li a').removeClass('active');
      $('.menu li:first-child a').addClass('active');
    }
  });
  
  $('.back-to-top').click(function() {
    $('html, body').animate({scrollTop: 0}, 100, function() {
      $('.menu li a').removeClass('active');
      $('.menu li:first-child a').addClass('active');
    });
    return false;
  });
////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function() {
    var menuLinks = document.querySelectorAll(".menu li a");
  
    menuLinks.forEach(function(link) {
      link.addEventListener("click", function(event) {
        menuLinks.forEach(function(link) {
          link.classList.remove("active");
        });
  
        this.classList.add("active");
      });
    });
  });
  
  