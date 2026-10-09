const navbar = document.querySelector(".navbar");
const menuToggle = navbar?.querySelector(".menu-toggle");

if (navbar && menuToggle) {
	const setMenuOpen = (isOpen) => {
		navbar.classList.toggle("menu-open", isOpen);
		menuToggle.setAttribute("aria-expanded", String(isOpen));
		menuToggle.setAttribute("aria-label", isOpen ? "Tutup menu" : "Buka menu");
	};

	menuToggle.addEventListener("click", () => {
		setMenuOpen(!navbar.classList.contains("menu-open"));
	});

	navbar.querySelectorAll(".menu a").forEach((link) => {
		link.addEventListener("click", () => setMenuOpen(false));
	});

	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape") setMenuOpen(false);
	});
}
