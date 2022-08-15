var toggle = document.getElementById("toggle");

document.onclick = function (e) {
  if (e.target.id !== "toggle" && e.target.id !== "menu") {
    toggle.classList.remove("active");
  }
};

toggle.onclick = function () {
  toggle.classList.toggle("active");
};
