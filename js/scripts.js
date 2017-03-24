// Backend Logic

// Frontend Logic
$(function(){

  $("form").submit(function(event){
    event.preventDefault();
    var personalityInput = $("#personality").val();
    var workInput = $("#work").val();
    var nameInput = $("#name").val();

    $("#ruby").hide();
    $("#css").hide();
    $("#csharp").hide();
    $("#no-track").hide();
    $("#php").hide();

    $(".name").text(nameInput);

    if (personalityInput === "Creative, Design-oriented"){
        $("#css").fadeIn(2000);
    } else if (personalityInput === "Entrepreneurial, Open-minded"){
        $("#ruby").fadeIn(2000);
    } else if (personalityInput === "Process-oriented, structured"){
      $("#csharp").fadeIn(2000);
    } else if (personalityInput === "A person who absolutely hates computers and technology"){
      $("#no-track").fadeIn(2000);
    } else {
      if (workInput === "A large, established company"){
        $("#csharp").fadeIn(2000);
      } else if (workInput === "A small to medium size company or startup"){
        $("#ruby").fadeIn(2000);
      } else if (workInput === "Myself. I want to freelance!"){
        $("#css").fadeIn(2000);
      } else {
      $("#php").fadeIn(2000);
      }
    }
  }); // Form submit function close
}); // Frontend Document Ready function close
