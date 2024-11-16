$(document).ready(function () {
  $("#contactForm").on("submit", function (e) {
    e.preventDefault();
    if ($('input[name="name"]').val() === "") {
      alert("Name is required!");
    } else if ($('input[name="email"]').val() === "") {
      alert("Email is required!");
    } else {
      alert("Form submitted successfully!");
    }
  });

  $("button").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });
});
