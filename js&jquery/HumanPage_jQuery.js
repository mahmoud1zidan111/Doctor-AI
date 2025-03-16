$(document).ready(function () {
  $(".human-body").before(
    "<p>Welcome, I hope you are well. Where is the pain?</p>"
  );
  let iconHTML = `<i class="fa-solid fa-stethoscope"></i>`;
  $("p").before("<span class='doc-ai'>Doctor AI</span>" + iconHTML);

  $(".doc-ai").animate(
    {
      left: "80px",
      opacity: 1,
    },
    500,
    function () {
      $("i.fa-stethoscope").animate(
        {
          left: "45px",
          opacity: 1,
        },
        400,
        function () {
          $("p").animate(
            {
              left: "20px",
              opacity: 1,
            },
            400,
            function () {
              $("p").after('<button id="btn" >OK</button>');
              $("#btn").animate(
                {
                  top: "340px",
                  opacity: 1,
                },
                400,
                function () {
                  $("#btn").on("click", function () {
                    $(".doc-ai").animate(
                      {
                        left: "-40px",
                        opacity: 0,
                        display: "none",
                      },
                      300,
                      function () {
                        $(this).hide();
                        $("i.fa-stethoscope").animate(
                          {
                            left: "-40px",
                            opacity: 0,
                            display: "none",
                          },
                          300,
                          function () {
                            $(this).hide();
                            $("p").animate(
                              {
                                left: "-40px",
                                opacity: 0,
                                display: "none",
                              },
                              300,
                              function () {
                                $(this).hide();
                                $("#btn").animate(
                                  {
                                    left: "-40px",
                                    opacity: 0,
                                    display: "none",
                                  },
                                  400,
                                  function () {
                                    $(this).hide();
                                    let iconRight = `<i class="fa-solid fa-right-long"></i>`;
                                    $(".human-body").after(
                                      `<a href="#">${iconRight}</a>`
                                    );
                                  }
                                );
                              }
                            );
                          }
                        );
                      }
                    );
                  });
                }
              );
            }
          );
        }
      );
    }
  );
});
