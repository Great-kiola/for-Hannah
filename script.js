const cardFront = document.querySelector(".card-front")
const cardBack = document.querySelector(".card")
const noBtn = document.getElementById("noBtn");
let speed = 500;

cardFront.addEventListener("click", () => {
    cardFront.classList.add("hide")
    cardBack.classList.remove("hide")
})


noBtn.addEventListener("mouseover", () => {
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;
    const x = Math.min(maxX, Math.max(0, Math.random() * maxX));
    const y = Math.min(maxY, Math.max(0, Math.random() * maxY));
    noBtn.style.transition = `all ${speed}ms ease`;
    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
    speed = Math.max(100, speed - 50);
  });
  