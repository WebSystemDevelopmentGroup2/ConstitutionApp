// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// When the user clicks on div, open the popup
function popUpFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}