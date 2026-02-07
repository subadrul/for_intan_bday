let images = ["img1.jpg", "img2.jpg", "img3.jpg"];
let current = 0;

function openGallery() {
  document.getElementById("galleryModal").style.display = "block";
}

function closeGallery() {
  document.getElementById("galleryModal").style.display = "none";
}

function nextImg() {
  current = (current + 1) % images.length;
  document.getElementById("galleryImg").src = images[current];
}

function prevImg() {
  current = (current - 1 + images.length) % images.length;
  document.getElementById("galleryImg").src = images[current];
}

function unlockSecret() {
  let pwd = prompt("Enter password:");
  if (pwd === "love") {
    document.getElementById("secretContent").classList.remove("hidden");
  } else {
    alert("Wrong password 💔");
  }
}

// Floating hearts
const hearts = document.querySelector(".hearts");
setInterval(() => {
  const heart = document.createElement("span");
  heart.textContent = Math.random() > 0.5 ? "💜" : "💕";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 4 + Math.random() * 3 + "s";
  hearts.appendChild(heart);
  setTimeout(() => heart.remove(), 7000);
}, 500);

// Mobile autoplay fix
document.body.addEventListener("click", () => {
  document.getElementById("bgm").play().catch(() => {});
}, { once: true });
