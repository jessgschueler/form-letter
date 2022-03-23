$(document).ready(function () {
  $("form").submit(function () {
    const name = $("input").val();
    $("#greeting").text(name);

    console.log(name);

    event.preventDefault();
  });
});