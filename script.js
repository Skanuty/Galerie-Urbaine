window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementsByTagName("nav")[0].style.padding = "5px 10px";
      } else {
        document.getElementsByTagName("nav")[0].style.padding = "15px";
      }
    }