$(window).scroll(function() {
  $("#breakfast").css({
    "margin-top": ($(window).scrollTop()) + "px",
  });
});
