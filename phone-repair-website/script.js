
const bookingForm = document.querySelector("#booking-form");


bookingForm.addEventListener("submit", function (event) {
  if (!bookingForm.checkValidity()) {
    bookingForm.reportValidity();
    event.preventDefault();
    return;
  }

  event.preventDefault();


  const formData = new FormData(bookingForm);

  const name = formData.get("name").trim();
  const phone = formData.get("phone").trim();
  const email = formData.get("email").trim();
  const problem = formData.get("problem").trim();
const device = formData.get("device");
const urgency = formData.get("urgency");
  const message = `
Hello Digital Soft Net! I'd like to book a repair.

Name: ${name}
Customer phone: ${phone}
Email: ${email || "Not provided"}
Device: ${device}
Urgency: ${urgency}
Repair needed: ${problem}
  `.trim();

  const whatsappNumber = "96176688304";

  const whatsappURL =
    "https://wa.me/" +
    whatsappNumber +
    "?text=" +
    encodeURIComponent(message);

  window.open(whatsappURL, "_blank");
});

const backToTopButton = document.querySelector("#back-to-top");

backToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

const serviceSearch = document.querySelector("#service-search");
const serviceCards = document.querySelectorAll(
  ".services-grid .service-card"
);
const searchMessage = document.querySelector("#search-message");

if (serviceSearch && serviceCards.length && searchMessage) {
  serviceSearch.addEventListener("input", function () {
    const searchTerm = serviceSearch.value.trim().toLowerCase();
    let visibleCount = 0;

    serviceCards.forEach(function (card) {
      const matches = card.textContent
        .toLowerCase()
        .includes(searchTerm);

      card.hidden = !matches;

      if (matches) {
        visibleCount++;
      }
    });

    if (searchTerm === "") {
      searchMessage.textContent = "";
    } else if (visibleCount === 0) {
      searchMessage.textContent =
        "No matching service found. Contact us for help.";
    } else {
      searchMessage.textContent =
        visibleCount + " matching service(s) found.";
    }
  });
}
const clearSearchButton = document.querySelector("#clear-search");

if (clearSearchButton && serviceSearch) {
  clearSearchButton.addEventListener("click", function () {
    serviceSearch.value = "";
    serviceSearch.dispatchEvent(new Event("input", { bubbles: true }));
    serviceSearch.focus();
  });
}

/* PREMIUM ANIMATIONS — SCROLL REVEAL */

/* PREMIUM ANIMATIONS — SCROLL REVEAL */

const revealSections = document.querySelectorAll(
  ".services-grid, .problems-section, .trust-section, .process-section, .contact-box, #booking"
);

if ("IntersectionObserver" in window) {
  revealSections.forEach((section) => {
    section.classList.add("reveal-on-scroll");
  });

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12
  });

  revealSections.forEach((section) => {
    revealObserver.observe(section);
  });
} else {
  revealSections.forEach((section) => {
    section.classList.add("is-visible");
  });
}
