document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav");
  const navLinks = document.querySelectorAll(".nav__link");
  let menuOpen = false;

  const toggleMenu = () => {
    if (!menuOpen) {
      menuBtn.textContent = "Close";
      nav.classList.add("open");
      menuOpen = true;
    } else {
      menuBtn.textContent = "Menu";
      nav.classList.remove("open");
      menuOpen = false;
    }
  };

  menuBtn.addEventListener("click", toggleMenu);

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuBtn.textContent = "Menu";
      nav.classList.remove("open");
      menuOpen = false;
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const languageSelector = document.getElementById("languageSelector");

  const fullBrowserLanguage = navigator.language || navigator.userLanguage;
  const browserLanguage = fullBrowserLanguage.split("-")[0];

  const savedLanguage = localStorage.getItem("preferredLanguage");

  const supportedLanguages = ["en", "es"];
  const initialLanguage = supportedLanguages.includes(browserLanguage)
    ? browserLanguage
    : savedLanguage || "en";

  languageSelector.value = initialLanguage;

  changeLanguage(initialLanguage);

  localStorage.setItem("preferredLanguage", initialLanguage);

  languageSelector.addEventListener("change", function (e) {
    const language = e.target.value;
    changeLanguage(language);
    localStorage.setItem("preferredLanguage", language);
  });

  function changeLanguage(language) {
    document.documentElement.lang = language;

    const elements = document.querySelectorAll("[data-en][data-es]");

    elements.forEach((element) => {
      element.textContent = element.getAttribute(`data-${language}`);
    });

    languageSelector.value = language;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        language === "es"
          ? "Desarrollador Web y Diseñador con experiencia en soluciones personalizadas"
          : "Web Developer and Designer specializing in custom solutions",
      );
    }
  }

  // Log for debugging purposes
  console.log("Browser language:", browserLanguage);
  console.log("Initial language set to:", initialLanguage);
});
