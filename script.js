document.addEventListener("DOMContentLoaded", () => {
  /* =========================
     MENU TOGGLE
  ========================= */
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  /* =========================
     SMOOTH SCROLL
  ========================= */
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        // Close mobile menu after click
        navLinks.classList.remove("active");
      }
    });
  });

  /* =========================
     SCROLL REVEAL ANIMATION
  ========================= */
  const revealElements = document.querySelectorAll(".card");

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 },
  );

  revealElements.forEach((el) => {
    revealObserver.observe(el);
  });

  /* =========================
     ACTIVE NAV LINK
  ========================= */
  const sections = document.querySelectorAll("section");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;

      if (scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    document.querySelectorAll(".nav-links a").forEach((a) => {
      a.classList.remove("active");

      if (a.getAttribute("href") === "#" + current) {
        a.classList.add("active");
      }
    });
  });

  /* =========================
     STICKY NAV EFFECT
  ========================= */
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.style.background = "rgba(0,0,0,0.9)";
      navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.5)";
    } else {
      navbar.style.background = "rgba(0,0,0,0.6)";
      navbar.style.boxShadow = "none";
    }
  });

  /* =========================
     FORM INTERACTION
  ========================= */
  const form = document.querySelector(".contact-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const inputs = form.querySelectorAll("input, textarea");

      let isValid = true;

      inputs.forEach((input) => {
        if (!input.value.trim()) {
          input.style.border = "1px solid red";
          isValid = false;
        } else {
          input.style.border = "none";
        }
      });

      if (isValid) {
        alert("Message sent successfully!");
        form.reset();
      }
    });
  }
});
