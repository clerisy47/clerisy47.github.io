(function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const themeBtn = document.querySelector(".theme-btn");

    // Update active nav link on scroll
    window.addEventListener("scroll", () => {
        let current = "";
        const sections = document.querySelectorAll("section, header");

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active-nav");
            if (link.getAttribute("href").slice(1) === current) {
                link.classList.add("active-nav");
            }
        });
    });

    // Smooth scroll on nav link click
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href");
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Theme toggle
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        localStorage.setItem(
            "theme",
            document.body.classList.contains("light-mode") ? "light" : "dark"
        );
    });

    // Load saved theme preference
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-mode");
    }
})();
