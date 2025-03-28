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
                300,
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
                        $(this).remove();
                        $("i.fa-stethoscope").animate(
                          {
                            left: "-40px",
                            opacity: 0,
                            display: "none",
                          },
                          300,
                          function () {
                            $(this).remove();
                            $("p").animate(
                              {
                                left: "-40px",
                                opacity: 0,
                                display: "none",
                              },
                              300,
                              function () {
                                $(this).remove();
                                $("#btn").animate(
                                  {
                                    left: "-40px",
                                    opacity: 0,
                                    display: "none",
                                  },
                                  400,
                                  function () {
                                    $(".human-body").css({
                                      display: "block",
                                    });
                                    $(".human-body").animate(
                                      {
                                        top: 0,
                                        opacity: 1,
                                      },
                                      300
                                    );
                                    $("#area").css({
                                      display: "block",
                                    });
                                    $("#area").animate(
                                      {
                                        top: "210px",
                                        opacity: 1,
                                      },
                                      300
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
