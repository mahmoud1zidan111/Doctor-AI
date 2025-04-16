$(document).ready(function () {
  function showWelcomeAnimation() {
    $(".human-body").hide();
    $("#area").hide();

    $(".human-body").before(
      "<p>Welcome, I hope you are well. Where is the pain?</p>"
    );

    let iconHTML = `<i class="fa-solid fa-stethoscope"></i>`;
    $("p").before("<span class='doc-ai'>Doctor AI</span>" + iconHTML);

    $(".doc-ai")
      .css({ left: 0, opacity: 0 })
      .animate(
        {
          left: "80px",
          opacity: 1,
        },
        500,
        function () {
          $("i.fa-stethoscope")
            .css({ left: 0, opacity: 0 })
            .animate(
              {
                left: "45px",
                opacity: 1,
              },
              400,
              function () {
                $("p")
                  .css({ left: 0, opacity: 0 })
                  .animate(
                    {
                      left: "20px",
                      opacity: 1,
                    },
                    400,
                    function () {
                      $("p").after('<button id="btn">OK</button>');
                      $("#btn").css({ top: 0, opacity: 0 }).animate(
                        {
                          top: "340px",
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
      $(".doc-ai, i.fa-stethoscope, p, #btn").animate(
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
