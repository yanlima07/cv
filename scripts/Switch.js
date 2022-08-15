var dark = document.getElementById("clicker");
var switcher = document.getElementById("switcher");

dark.onclick = function () {
  document.body.classList.toggle("dark-theme");

  switcher.classList.toggle("move");
  setTimeout(() => {
    audio.play();
    switcher.classList.toggle("move");
  }, 200);
};
