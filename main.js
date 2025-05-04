
document.addEventListener("DOMContentLoaded", () => {
  const text = "Je suis Driss Ezzaoui, spécialisé en marketing & business development.";
  const el = document.getElementById("typed-text");
  if (el) {
    let i = 0;
    el.textContent = "";
    const interval = setInterval(() => {
      if (i < text.length) {
        el.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 50);
  }
});
