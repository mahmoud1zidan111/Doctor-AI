$(document).ready(function () {
  let conHTML = '<i id="right" class="fa-solid  fa-arrow-right"></i>';
  if ($("#btn-after").length === 0) {
    $(".human-body").after(`<button id="btn-after" >${conHTML}</button>`);
    $("#btn-after").animate(
      {
        opacity: 1,
        right: "30px",
      },
      350,
      function () {
        $("#btn-after").animate(
          {
            opacity: 1,
            right: "30px",
          },
          200
        );
      }
    );

    $("#btn-after").on("click", function () {
      window.location.href = "legs.html";
    });
  }
});
