let prodacts = document.querySelectorAll(".prodct");

prodacts.forEach((item) => {
  if (item.hasAttribute("data-position")) {
    let data = item.getAttribute("data-position");
    console.log(data);
  } else {
    console.log("This element does not have a data-position attribute.");
  }
});
