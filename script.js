const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }

});

// Close menu after clicking a navigation link

document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";

    });

});
// PORTFOLIO FILTER FUNCTIONALITY

const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioCards = document.querySelectorAll(".portfolio-card");

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Remove active class from all buttons
        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        // Activate clicked button
        button.classList.add("active");

        // Get selected category
        const filterValue = button.getAttribute("data-filter");

        // Filter portfolio projects
        portfolioCards.forEach(function(card) {

            const category = card.getAttribute("data-category");

            if (filterValue === "all" || filterValue === category) {

                card.classList.remove("hide");

            } else {

                card.classList.add("hide");

            }

        });

    });

});
// NOVIDACLE CONTACT FORM

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get form information
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value.trim();

    // Check form fields
    if (!name || !email || !service || !message) {
        alert("Please complete all fields.");
        return;
    }

    // Prepare WhatsApp message
    const whatsappMessage =
        `Hello Novidacle!

My name is: ${name}

My Email: ${email}

Service Needed: ${service}

Project Details:
${message}

I would like to discuss this project with your team.`;

    // Encode message for WhatsApp URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Open WhatsApp
    const whatsappURL =
        `https://wa.me/2349121607077?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");

});
// AUTOMATIC COPYRIGHT YEAR

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// NAVBAR SCROLL EFFECT

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});