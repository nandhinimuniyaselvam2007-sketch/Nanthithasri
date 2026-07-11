// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Highlight active navigation link
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

// Hero image animation
const profileImage = document.querySelector(".hero-image img");

if (profileImage) {
    profileImage.addEventListener("mouseenter", () => {
        profileImage.style.transform = "scale(1.08) rotate(5deg)";
    });

    profileImage.addEventListener("mouseleave", () => {
        profileImage.style.transform = "scale(1) rotate(0deg)";
    });
}

// Download Resume button
const resumeButton = document.querySelector("button");

if (resumeButton) {
    resumeButton.addEventListener("click", () => {
        alert("Resume download will be available soon!");
        // To download a resume, replace the alert with:
        // window.location.href = "resume.pdf";
    });
}

// Fade-in animation for cards
const cards = document.querySelectorAll(".project-card, .about-card, .contact-card, .skill");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.2
});

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "all 0.8s ease";

    observer.observe(card);
});