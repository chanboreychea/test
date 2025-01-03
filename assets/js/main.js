// const menuToggle = document.querySelector(".menu-toggle");
// const navMenu = document.querySelector(".nav_menu");
const darkModeToggle = document.querySelector(".dark-mode-toggle");

// menuToggle.addEventListener("click", () => {
//   navMenu.classList.toggle("active");
// });

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

const playModeToggle = document.querySelector(".play-mode-toggle");
const firework = document.querySelector(".container-firework");

playModeToggle.addEventListener("click", () => {
  const icon = playModeToggle.querySelector("i");
  if (icon.classList.contains("bx-play")) {
    firework.style.display = "block";
    icon.classList.replace("bx-play", "bx-pause"); // Switch to bx-pause
  } else {
    firework.style.display = "none";
    icon.classList.replace("bx-pause", "bx-play"); // Switch back to bx-play
  }
});
