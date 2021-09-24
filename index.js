// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

$(document).ready(() => {
  $(".info-button").click(function() {
    var content = $(this).parent().parent().next();
    
    $("#popup-content").html(content.html());
    $("#popup-title").text(content.attr("data-popup-title"));
    $("#popup-window").show();
  });

  $("#close-popup").click(function() {
    $(this).parent().parent().hide();
  })
});

