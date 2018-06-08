$(document).ready(function() {
    const navigation = $(".navigation");
    let scroll = $(window).scrollTop();
  
    if (scroll === 0) {
      navigation.addClass("navbar-transparent");
    } else {
      navigation.removeClass("navbar-transparent");
    }
  
    $(window).scroll(function() {
      scroll = $(window).scrollTop();
  
      if (scroll >= 200) {
        navigation.removeClass("navbar-transparent");
      } else {
        navigation.addClass("navbar-transparent");
      }
    });
  
    navScrolling.init();
  });