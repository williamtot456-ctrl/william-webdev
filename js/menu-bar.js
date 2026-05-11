function hamburgerMenu() {
  const hamburger = document.getElementById("hamburger");
  const sidebar = document.getElementById("sidebar");
  const closeBtn = document.getElementById("side-close");
  history.scrollRestoration = "manual";

  if (hamburger && sidebar && closeBtn) {
    hamburger.addEventListener("click", () => {
      sidebar.classList.add("active");
      document.documentElement.classList.add("no-scroll");
    });

    closeBtn.addEventListener("click", () => {
      sidebar.classList.remove("active");
      document.documentElement.classList.remove("no-scroll");
    });
    document.querySelectorAll("#sidebar a").forEach((link) => {
      link.addEventListener("click", () => {
        sidebar.classList.remove("active");
        document.documentElement.classList.remove("no-scroll");
      });
    });
  }
}
hamburgerMenu();
