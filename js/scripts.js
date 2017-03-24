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
        $("#css").show();
    } else if (personalityInput === "Entrepreneurial, Open-minded"){
        $("#ruby").show();
    } else if (personalityInput === "Process-oriented, structured"){
      $("#csharp").show();
    } else if (personalityInput === "A person who absolutely hates computers and technology"){
      $("#no-track").show();
    } else {
      if (workInput === "A large, established company"){
        $("#csharp").show();
      } else if (workInput === "A small to medium size company or startup"){
        $("#ruby").show();
      } else if (workInput === "Myself. I want to freelance!"){
        $("#css").show();
      } else {
      $("#php").show();
      }
    }
  }); // Form submit function close
}); // Frontend Document Ready function close
