window.onload = function () {
  const pieces = document.querySelectorAll("svg");
  let data = document.getElementById("data");
  let activePiece = null;

  let scriptPaths = {
    head: "js&jquery/head_jQuery.js",
    shoulder: "js&jquery/shoulder_jQuery.js",
    arm: "js&jquery/arm_jQuery.js",
    cheast: "js&jquery/cheast_jQuery.js",
    stomach: "js&jquery/stomach_jQuery.js",
    legs: "js&jquery/legs_jQuery.js",
    hands: "js&jquery/hands_jQuery.js",
  };

  pieces.forEach((piece) => {
    piece.addEventListener("click", function (event) {
      let targetElement = event.target.closest("svg");

      if (!targetElement) return;

      let position =
        targetElement.getAttribute("data-position") ||
        targetElement.parentElement?.getAttribute("data-position");

      if (activePiece && activePiece !== targetElement) {
        activePiece.style.fill = "#57c9d5";
      }

      if (activePiece === targetElement) {
        targetElement.style.fill = "#57c9d5";
        activePiece = null;
        data.innerHTML = "";
        $("#btn-after").hide();
        removeOldScripts();
      } else {
        targetElement.style.fill = "#ff7d16";
        activePiece = targetElement;

        data.innerHTML = position || "";

        removeOldScripts();
        if (!scriptPaths[position]) {
          $("#btn-after").hide();
          return;
        }

        let script = document.createElement("script");
        script.src = scriptPaths[position];
        script.setAttribute("data-dynamic", "true");
        document.body.appendChild(script);
        console.log(`Loaded script for: ${position}`);

        $("#btn-after").show();
      }
    });
  });

  $("#btn-after").hide();

  function removeOldScripts() {
    document.querySelectorAll("script[data-dynamic]").forEach((script) => {
      script.remove();
    });
  }
};
