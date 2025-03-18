window.onload = function () {
  const pieces = document.querySelectorAll("svg");
  let data = document.getElementById("data");
  let defaultColor = "#57c9d5";
  let activePiece = null;
  let head;

  pieces.forEach((piece) => {
    piece.addEventListener("click", function (event) {
      let targetElement = event.target.closest("svg");

      if (!targetElement) return;

      let currentColor = window
        .getComputedStyle(targetElement)
        .getPropertyValue("fill");

      if (currentColor === defaultColor) {
        data.innerHTML = "";
      }

      if (activePiece && activePiece !== targetElement) {
        activePiece.style.fill = defaultColor;
      }

      if (activePiece === targetElement) {
        targetElement.style.fill = defaultColor;
        activePiece = null;
        data.innerHTML = "";
        $("#btn-after").hide();
      } else {
        targetElement.style.fill = "#ff7d16";
        activePiece = targetElement;

        let position =
          targetElement.getAttribute("data-position") ||
          targetElement.parentElement?.getAttribute("data-position");

        if (position) {
          data.innerHTML = position;
        }

        head = position === "head";
        let script = document.querySelector(
          "script[src='js&jquery/head_jQuery.js']"
        );

        if (!head) {
          if (script) {
            script.remove();
          }
          $("#btn-after").hide();
          return;
        }

        if (head && !script) {
          script = document.createElement("script");
          script.src = "js&jquery/head_jQuery.js";
          document.body.appendChild(script);
        }

        $("#btn-after").show();
      }
    });
  });

  $("#btn-after").hide();
};
