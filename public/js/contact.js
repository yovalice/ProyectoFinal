$(document).ready(function(){
  $("#btnContactUs").click(function(){
    var email = $("#email").val();
    var name = $("#name").val();
    var subject = $("#subject option:selected").text();
    var message = $("#message").val();
    window.location = "mailto:" + email + "?subject=Cliente: " + name + ", Razón: " + subject + "&body=" + message;
    console.log("ok");
  })
})
