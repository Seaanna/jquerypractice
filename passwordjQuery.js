var count = 0;
$(document).ready(function(){
  $("button").on(
    "click",
    function() {
      var userId = $("#userName").val();
      var password = $("#passw").val();
      if (count===5)
      {
      $("button").off("click")
      alert("You're done")
    }
    if (count<=4){
    $("button").off("click")
    alert("You're done")
      var errorMessagesArray = checkUserIdAndPassword(userId, password);
      errorMessagesArray.forEach(
        function(errorMessage) {


          $("#messages").append("<li>" + errorMessage + "</li>");

          if (userId.length < 6 || (userId.includes("!") || userId.includes("#") || userId.includes("$"))) {
            $("#userName").val("")
          };


          if (!password.includes("!") && !password.includes("#") && !password.includes("$") || !password.includes("0") && !password.includes("1") && !password.includes("2") && !password.includes("3") && !password.includes("4") && !password.includes("5") && !password.includes("6") && !password.includes("7") && !password.includes("8") && !password.includes("9") || password === password.toUpperCase() || (password === password.toLowerCase())){
            $("#passw").val("")
          };




}
        }
      );
    });
  }); // end of document ready


  // Purpose: check if password and user ID is valid; returns an array of error messages
  // Signature: String -> Array
  // Examples:
  // checkUserIdAndPassword("123456", "aB34567890!") -> []
  // checkUserIdAndPassword("12345", "aB4567890!") -> ["soemthing is wrong"]
  // checkUserIdAndPassword("123456", "aB34567890") -> ["soemthing is wrong"]
  // checkUserIdAndPassword("123456", "a") -> ["soemthing is wrong"]

  function checkUserIdAndPassword(userId, password) {
    var errorMessages = [];
    // var regularExpression = /[0-9]/
    var identification = (userId.length >= 6 && (!userId.includes("!") && !userId.includes("#") && !userId.includes("$")));
    if (identification) {
      // User ID is okay

    }
    else if (userId.length < 6) {
      errorMessages[errorMessages.length] = "username is too short";
    }

    if (userId.includes("!") || userId.includes("#") || userId.includes("$")) {
      errorMessages[errorMessages.length] = "Username cannot include a !,#,$";
    }

    // else if {
    //   errorMessages[errorMessages.length] = "something is wrong";
    // }

    var pass = (password != "password")
    && (password.includes("!") || password.includes("#") || password.includes("$"))
    && (password.includes("0") || password.includes("1") || password.includes("2") || password.includes("3") || password.includes("4") || password.includes("5") || password.includes("6") || password.includes("7") || password.includes("8") || password.includes("9"))
    && (password != password.toUpperCase() && password != password.toLowerCase()) ;

    if (pass) {
      // Password is okay
    } else if (!password.includes("!") && !password.includes("#") && !password.includes("$")) {
      errorMessages[errorMessages.length] = "Password must include : !,#, or $";
    }
    if ((!password.includes("0") && !password.includes("1") && !password.includes("2") && !password.includes("3") && !password.includes("4") && !password.includes("5") && !password.includes("6") && !password.includes("7") && !password.includes("8") && !password.includes("9"))) {
      errorMessages[errorMessages.length] = "Password must include a digit";
    }
    if ((password === password.toUpperCase()) || (password === password.toLowerCase())) {
      errorMessages[errorMessages.length] = "Password must have an Uppercase and a LowerCase letter";
    }

    // document.getElementById("tacos").innerHTML = "Credentials are valid: " + (identification && pass);
    return errorMessages;
  }
