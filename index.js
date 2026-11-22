// Dark / Light Theme Toggle
const themeToggle = document.getElementById("themeToggle");
const htmlEl = document.documentElement;

const savedTheme = localStorage.getItem("portfolio-theme") || "dark";
applyTheme(savedTheme);

function applyTheme(theme) {
  htmlEl.setAttribute("data-theme", theme);
  localStorage.setItem("portfolio-theme", theme);
  themeToggle.textContent = theme === "dark" ? "☀️ Light" : "🌙 Dark";
}

themeToggle.addEventListener("click", () => {
  const current = htmlEl.getAttribute("data-theme");
  applyTheme(current === "dark" ? "light" : "dark");
});

// Mobile Hamburger Menu
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navMenu.classList.remove("open"));
});

// Project Modal Popup
const modal = document.getElementById("projectModal");
const closeModal = document.getElementById("closeModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalTech = document.getElementById("modalTech");
const modalRepo = document.getElementById("modalRepo");
const modalLive = document.getElementById("modalLive");

document.querySelectorAll(".open-modal").forEach((btn) => {
  btn.addEventListener("click", () => {
    modalTitle.textContent = btn.dataset.title;
    modalDesc.textContent = btn.dataset.desc;
    modalTech.textContent = btn.dataset.tech;
    modalRepo.href = btn.dataset.repo;
    modalLive.href = btn.dataset.live;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
  });
});

function hideModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

closeModal.addEventListener("click", hideModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) hideModal();
});

// Footer Year
document.getElementById("year").textContent = new Date().getFullYear();