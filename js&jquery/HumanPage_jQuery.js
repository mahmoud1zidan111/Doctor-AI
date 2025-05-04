$(document).ready(function () {
  function showWelcomeAnimation() {
    $(".human-body").hide();
    $("#area").hide();

    $(".human-body").before(
      "<p>Welcome, I hope you are well. Where is the pain?</p>"
    );

    $(".doc-ai")
      .css({ left: 0, opacity: 0 })
      .animate(
        {
          left: "20px",
          opacity: 1,
        },
        500,
        function () {
          $("i.fa-stethoscope")
            .css({ left: 0, opacity: 0 })
            .animate(
              {
                left: "15px",
                opacity: 1,
              },
              400,
              function () {
                $("p")
                  .css({ left: 0, opacity: 0 })
                  .animate(
                    {
                      left: "25px",
                      opacity: 1,
                    },
                    400,
                    function () {
                      $("p").after('<button id="btn">Click here</button>');
                      $("#btn").css({ top: 0, opacity: 0 }).animate(
                        {
                          top: "270px",
                          opacity: 1,
                        },
                        300
                      );

                      $("#btn").on("click", function () {
                        exitAnimation().then(() => {
                          showBody();
                        });
                      });
                    }
                  );
              }
            );
        }
      );
  }

  function showBody() {
    $(".human-body").css("display", "block").animate(
      {
        top: 0,
        opacity: 1,
      },
      200
    );

    $("#area").css("display", "block").animate(
      {
        top: "210px",
        opacity: 1,
      },
      300
    );
  }

  function exitAnimation() {
    return new Promise((resolve) => {
      $(" p, #btn").animate(
        {
          left: "-40px",
          opacity: 0,
        },
        300,
        function () {
          $(this).remove();
          resolve();
        }
      );
    });
  }

  if (!sessionStorage.getItem("animationShown")) {
    showWelcomeAnimation();
    sessionStorage.setItem("animationShown", "true");
  } else {
    showBody();
  }
});
