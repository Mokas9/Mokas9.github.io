$(document).ready(function() {
    const navigation = $(".navigation");
    const navbar = $(".container");
    let scroll = $(window).scrollTop();
  
    if (scroll === 0) {
      navigation.addClass("navbar-transparent");
      navbar.removeClass("navbar-text-transparent");
    } else {
      navigation.removeClass("navbar-transparent");
      navbar.addClass("navbar-text-transparent");
    }
  
    $(window).scroll(function() {
      scroll = $(window).scrollTop();
  
      if (scroll >= 200) {
        navigation.removeClass("navbar-transparent");
        navbar.addClass("navbar-text-transparent");
      } else {
        navigation.addClass("navbar-transparent");
        navbar.removeClass("navbar-text-transparent");
      }
    });
  
    navScrolling.init();
  });