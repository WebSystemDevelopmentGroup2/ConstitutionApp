// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Execute some code when document is loaded
$(document).ready(() => {

  // Add listener to info buttons
  $(".info-button").click(function() {
    // The goal of this function is to copy all content in hidden div to pop up window
    // Once the content is copied the pop up will be shown to user
    var content = $(this).parent().parent().next();
    
    $("#popup-content").html(content.html());
    $("#popup-title").text(content.attr("data-popup-title"));
    $("#popup-window").show(500);
  });

  // Add listener to the close button
  $("#close-popup").click(function() {
    // This simply hides the pop up
    $(this).parent().parent().hide(500);
  })
});

