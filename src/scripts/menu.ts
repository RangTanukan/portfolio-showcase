export const toggleMenu = (): void => {
  const menu = document.getElementById('mobile-menu');
  const hamburger = document.getElementById('hamburger');

  if (menu && hamburger) {
    menu.classList.toggle('hidden');
    hamburger.classList.toggle('open');
  }
};
