// Envelope Animation
const envelope = document.querySelector(".envelope");
let opened = false;

envelope.addEventListener("click", () => {
  if (!opened) {
    envelope.classList.add("open");
    opened = true;
  }
});

// Proposal Interaction
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const heartsContainer = document.getElementById("hearts");
const yayContainer = document.getElementById("yay-container");
let speed = 500;

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤";
  heart.style.left = Math.random() * 100 + "%";
  heart.style.animationDelay = Math.random() * 2 + "s";
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 3000);
}

yesBtn.addEventListener("click", () => {
  // Hide everything except the Yay! container
  envelope.style.display = "none";
  heartsContainer.style.display = "none";
  yayContainer.style.display = "flex";
  setInterval(createHeart, 300);
});

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

// Initial hearts
setInterval(createHeart, 500);
