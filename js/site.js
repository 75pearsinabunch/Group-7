/*
* Author: Group 7
* Created: 3/17/2021
* License: Public Domain
*/

// creat a character limit in text area
$(function(){
  $("#comment").keyup(function(event){
    $("#countNum").text($(this).val().length);
    var x = $(this).val().length;
    // if character more than 2000, error message pop up and show red border
    if (x > 2000) {
      $(this).css("border", '1px solid red');
      $(".errorMsg").show();
    }
    else {
      $(".errorMsg").hide();
      $(this).css("border", '');
    }
  });
  $(".errorMsg").hide();
});

// creat a click event which allow users to submit the input and display
$("#submit").click(function(){
  var rName = $("#text").val();
  var rInfo = $("#comment").val();
  $("#output").append("<h2>");
  $("#output").append("<p>");
  $("#output h2").text(rName);
  $("#output p").text(rInfo);
  $("#text").hide();
  $("#comment").hide();
  $(".fRight").hide();
  $("#img").hide();
  $("#submit").hide();
  $("#lab").hide();
  $("#nam").hide();
});

// creat a section that allow users to upload image files
$("#img").change(function(event){
  // create a url that can access the file
  var x = URL.createObjectURL(event.target.files[0]);
  $("#outImg").attr("src",x);
  console.log(event);
})
