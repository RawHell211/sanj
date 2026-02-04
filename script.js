let screens = document.querySelectorAll(".screen");
let current = 0;
let filled = 0;
const total = 6;

function next() {
  screens[current].classList.remove("active");
  current++;
  screens[current].classList.add("active");
}

function pickLetter(el, letter, pos) {
  if (el.classList.contains("used")) return;

  document.getElementById("l" + pos).innerText = letter;
  el.classList.add("used");
  filled++;

  document.getElementById("bar").style.width =
    (filled / total) * 100 + "%";

  if (filled === total) {
    setTimeout(() => next(), 700);
  }
}

function wrongLetter(el) {
  el.style.transform = "scale(0.7)";
  setTimeout(() => {
    el.style.transform = "";
  }, 300);
}

function runAway(btn) {
  btn.style.position = "absolute";
  btn.style.left = Math.random() * 70 + "%";
  btn.style.top = Math.random() * 70 + "%";
}
