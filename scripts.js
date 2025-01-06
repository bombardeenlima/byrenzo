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

  // Get the browser's language (first preference)
  // This will get the full language code (e.g., 'es-MX', 'es-ES', 'en-US')
  const fullBrowserLanguage = navigator.language || navigator.userLanguage;
  // Get just the primary language code (e.g., 'es', 'en')
  const browserLanguage = fullBrowserLanguage.split("-")[0];

  // Get any previously saved language preference (second preference)
  const savedLanguage = localStorage.getItem("preferredLanguage");

  // Determine which language to use
  // First check if the browser language is one we support (currently 'en' or 'es')
  const supportedLanguages = ["en", "es"];
  const initialLanguage = supportedLanguages.includes(browserLanguage)
    ? browserLanguage
    : savedLanguage || "en"; // fallback to saved language or English

  // Set the selector to the initial language
  languageSelector.value = initialLanguage;

  // Apply the initial language immediately
  changeLanguage(initialLanguage);

  // Save the initial language preference
  localStorage.setItem("preferredLanguage", initialLanguage);

  // Add event listener for manual language changes
  languageSelector.addEventListener("change", function (e) {
    const language = e.target.value;
    changeLanguage(language);
    localStorage.setItem("preferredLanguage", language);
  });

  function changeLanguage(language) {
    // Update the HTML lang attribute
    document.documentElement.lang = language;

    // Select all elements with data-en and data-es attributes
    const elements = document.querySelectorAll("[data-en][data-es]");

    elements.forEach((element) => {
      // Update the text content based on the selected language
      element.textContent = element.getAttribute(`data-${language}`);
    });

    // Update the language selector to match (in case called programmatically)
    languageSelector.value = language;

    // Optional: You could also update meta tags for SEO
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
