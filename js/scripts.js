// Backend Logic



// Frontend Logic
$(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var personalityInput = $("#personality").val();
    var workInput = $("#work").val();
    var roomInput = $("#room").val();
    console.log(personalityInput);
    console.log(workInput);
    console.log(roomInput);
  });







}); // Frontend function close
