// User Interface Logic
$(function(){

  $("form").submit(function(event){  // Click to submit form
    event.preventDefault();
    // Declare variables
    var personalityInput = $("#personality").val();
    var workInput = $("#work").val();
    var nameInput = $("#name").val();

    // Error message if Name Question is left blank
    if(nameInput === ""){
      $(".error-message").show();
      $(".error-message").addClass("error-class");
      return;
    }

    // Hide results section if form is re-submitted
    $("#ruby").hide();
    $("#css").hide();
    $("#csharp").hide();
    $("#no-track").hide();
    $("#php").hide();

    // Display user name in results
    $(".name").text(nameInput);

    // Branching logic for results based on user input
    // PersonalityInput Question
    if (personalityInput === "Creative, Design-oriented"){
        $("#css").fadeIn(2000);
    } else if (personalityInput === "Entrepreneurial, Open-minded"){
        $("#ruby").fadeIn(2000);
    } else if (personalityInput === "Process-oriented, structured"){
      $("#csharp").fadeIn(2000);
    } else if (personalityInput === "A person who absolutely hates computers and technology"){
      $("#no-track").fadeIn(2000);
    } else {
      // WorkInput Question
      if (workInput === "A large, established company"){
        $("#csharp").fadeIn(2000);
      } else if (workInput === "A small to medium size company or startup"){
        $("#ruby").fadeIn(2000);
      } else if (workInput === "Myself. I want to freelance!"){
        $("#css").fadeIn(2000);
      } else {
      $("#php").fadeIn(2000);
      } // Close of WorkInput if statement
    } // Close of PersonalityInput if statement
  }); // Form submit function close
}); // User Interface Document Ready function close
