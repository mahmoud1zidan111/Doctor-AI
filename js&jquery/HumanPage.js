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
        $("#btn-after").hide(); // إخفاء الزر مباشرة عند إلغاء الاختيار
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

        // إذا لم يتم اختيار الرأس، احذف السكريبت فورًا ولا تقم بطباعته أو تشغيله
        if (!head) {
          if (script) {
            script.remove();
          }
          $("#btn-after").hide(); // إخفاء الزر فورًا عند اختيار شيء آخر غير الرأس
          return;
        }

        // تحميل السكريبت فقط إذا كان العنصر المختار هو الرأس
        if (head && !script) {
          script = document.createElement("script");
          script.src = "js&jquery/head_jQuery.js";
          document.body.appendChild(script);
        }

        $("#btn-after").show(); // إظهار الزر فقط عند اختيار الرأس
      }
    });
  });

  $("#btn-after").hide(); // تأكد أن الزر مخفي عند تحميل الصفحة
};
