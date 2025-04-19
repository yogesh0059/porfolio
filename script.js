// Typing animation
const typingText = document.getElementById("typing-text");
const textArray = ["Web Developer", "Frontend Enthusiast", "Problem Solver"];
let textIndex = 0;
let charIndex = 0;

function typeText() {
  if (charIndex < textArray[textIndex].length) {
    typingText.innerHTML += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 100);
  } else {
    setTimeout(eraseText, 1500);
  }
}

function eraseText() {
  if (charIndex > 0) {
    typingText.innerHTML = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, 60);
  } else {
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(typeText, 300);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeText();
});

// Dark mode toggle
const modeToggle = document.getElementById("modeToggle");
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
