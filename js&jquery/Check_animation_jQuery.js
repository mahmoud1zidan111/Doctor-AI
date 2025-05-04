// window.addEventListener("load", () => {
//   const animationPlayed = sessionStorage.getItem("animationShown");

//   if (animationPlayed) {
//     $("p").remove();
//     $("i.fa-stethoscope").remove();
//     $("#btn").remove();
//     $("doc-ai").remove();
//     $(".human-body").fadeIn(200);
//   } else {
//     $("p").fadeIn(200);
//     $("i.fa-stethoscope").fadeIn(200);
//     $("#btn").fadeIn(200);
//     $("doc-ai").fadeIn(200);
//     $(".human-body").hide();

//     setTimeout(() => {
//       sessionStorage.setItem("animationShown", "true");

//       $("p").fadeOut(200, () => $(this).remove());
//       $("i.fa-stethoscope").fadeOut(200, () => $(this).remove());
//       $("#btn").fadeOut(200, () => $(this).remove());
//       $("doc-ai").fadeOut(200, () => $(this).remove());

//       $(".human-body").fadeIn(200);
//     }, 4000);
//   }
// });
