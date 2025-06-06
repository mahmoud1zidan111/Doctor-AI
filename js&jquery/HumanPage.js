window.onload = function () {
  const pieces = document.querySelectorAll("svg");
  let data = document.getElementById("data");
  let activePiece = null;

  const scriptPaths = {
    head: "js&jquery/allBody-js/head_jQuery.js",
    shoulder: "js&jquery/allBody-js/shoulder_jQuery.js",
    arm: "js&jquery/allBody-js/arm_jQuery.js",
    cheast: "js&jquery/allBody-js/cheast_jQuery.js",
    stomach: "js&jquery/allBody-js/stomach_jQuery.js",
    legs: "js&jquery/allBody-js/legs_jQuery.js",
    hands: "js&jquery/allBody-js/hands_jQuery.js",
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
        location.reload();
      } else {
        targetElement.style.fill = "#ff7d16";
        activePiece = targetElement;

        data.innerHTML = position || "";
        removeOldScripts();

        if (!scriptPaths[position]) {
          DeleteTheBtn();
          return;
        }

        let newScript = document.createElement("script");
        newScript.src = scriptPaths[position];
        newScript.setAttribute("data-dynamic", "true");

        newScript.onload = function () {
          $("#btn-after").show();
        };

        document.body.appendChild(newScript);
      }
    });
  });

  function removeOldScripts() {
    document
      .querySelectorAll("script[data-dynamic]")
      .forEach((s) => s.remove());
  }
};
