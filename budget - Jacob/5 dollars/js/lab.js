/*
* Author: Group 7
* Created: 3/17/2021
* License: Public Domain
*/

function togglePopup(){
  document.getElementById("popup-1").classList.toggle("active");
};

//appends an "active" class to .popup and .popup-content when the "Open" button is clicked
$(".open").on("click", function() {
  $(".popup-overlay, .popup-content").addClass("active");
});

//removes the "active" class to .popup and .popup-content when the "Close" button is clicked
$(".close, .popup-overlay").on("click", function() {
  $(".popup-overlay, .popup-content").removeClass("active");
});
