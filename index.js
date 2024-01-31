const buttons = document.querySelectorAll(".btn");
const slides = document.querySelectorAll(".slide");

// Caroussel qui fonctionne comme un tableau,
//  opacity a zero et un pour la slide active: [0, 1, 2, 3]

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const calculNextSlide = e.target.id === "next" ? 1 : -1;
    const slideActive = document.querySelector(".active");

    newIndex = calculNextSlide + [...slides].indexOf(slideActive);

    if (newIndex < 0) newIndex = [...slides].length - 1;

    if (newIndex >= [...slides].length) newIndex = 0;

    slides[newIndex].classList.add("active");

    slideActive.classList.remove("active");
  });
});
