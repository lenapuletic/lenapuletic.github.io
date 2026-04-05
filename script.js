function setMenuOpen(open) {
  const menu = document.querySelector(".menu-links");
  const toggle = document.querySelector(".hamburger-icon");
  if (!menu || !toggle) return;
  menu.classList.toggle("open", open);
  toggle.classList.toggle("open", open);
  toggle.setAttribute("aria-expanded", open ? "true" : "false");
  toggle.setAttribute(
    "aria-label",
    open ? "Close menu" : "Open menu"
  );
}

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  if (!menu) return;
  setMenuOpen(!menu.classList.contains("open"));
}

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".hamburger-icon");
  const menu = document.querySelector(".menu-links");

  toggle?.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  menu?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setMenuOpen(false);
  });

  document.addEventListener("click", (e) => {
    if (!menu?.classList.contains("open")) return;
    const target = e.target;
    if (menu.contains(target) || toggle?.contains(target)) return;
    setMenuOpen(false);
  });
});
