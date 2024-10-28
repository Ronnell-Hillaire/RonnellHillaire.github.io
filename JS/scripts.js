  /*
  window.onscroll = function() {
    var button = document.getElementById("back-to-top");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  };

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

*/

window.onscroll = function() {
    var button = document.getElementById("back-to-top");
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    
    // Show the button only if the scroll position is between 100 and 500 pixels
    if (scrollTop > 100 && scrollTop <= 4600) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}