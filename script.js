// Animate sections on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");
const scrollTopBtn = document.getElementById("scrollTopBtn");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));

// Smooth scroll for nav links
navLinks.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const targetId = link.textContent.toLowerCase();
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: "smooth" });
    });
});

// Highlight active nav link
window.addEventListener('scroll', () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 130;
        if(pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if(link.textContent.toLowerCase() === current){
            link.classList.add("active");
        }
    });

    // Show scroll-to-top button
    if(window.scrollY > 400){
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
});

// Scroll to top
scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
