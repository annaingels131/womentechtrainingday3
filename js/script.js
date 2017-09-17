$(window).scroll(function() {
  $("#breakfast").css({
    "margin-top": ($(window).scrollTop()) + "px",
  });
});


function myFunction() {
    var x = document.getElementById("navItems");
    if (x.className === "navitems") {
        x.className += " responsive";
    } else {
        x.className = "navitems";
    }
}
