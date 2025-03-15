export const setupMenuToggle = () => {
  const menu = document.getElementById("mobile-menu");
  const hamburger = document.getElementById("hamburger");

  if (!menu || !hamburger) {
    console.error("Menu elements not found!");
    return;
  }

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    hamburger.classList.toggle("open");
  });
};
