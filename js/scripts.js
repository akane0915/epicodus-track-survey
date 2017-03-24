// Backend Logic



// Frontend Logic
$(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var personalityInput = $("#personality").val();
    var workInput = $("#work").val();
    var roomInput = $("#room").val();

    if (personalityInput === "Creative, Design-oriented"){
        $("#css").show();
    } else if (personalityInput === "Entrepreneurial, Open-minded"){
        $("#ruby").show();
    } else if (personalityInput === "Process-oriented, structured"){
      $("#csharp").show();
    } else if (personalityInput === "A person who absolutely hates computers and technology"){
      $("#no-track").show();
    } else {
      $("#php").show();
    }

  }); // Form submit function close







}); // Frontend function close
