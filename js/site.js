$(function(){
  $("#comment").keyup(function(event){
    $("#countNum").text($(this).val().length);
    var x = $(this).val().length;
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

$("#img").change(function(event){
  var x = URL.createObjectURL(event.target.files[0]);
  $("#outImg").attr("src",x);
  console.log(event);
})
