// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    // Close mobile menu after clicking
    const navMenu = document.querySelector(".nav-menu");
    const hamburger = document.querySelector(".hamburger");
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

// Mobile hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
});

// Navbar background on scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.3)";
  } else {
    navbar.style.boxShadow = "none";
  }
});

// Tab switching functionality
function switchTab(tabName) {
  // Hide all tab contents
  document.querySelectorAll(".tab-content").forEach((tab) => {
    tab.classList.remove("active");
  });

  // Remove active class from all tab buttons
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  // Show selected tab content
  document.getElementById(tabName + "-tab").classList.add("active");

  // Add active class to clicked button
  event.target.classList.add("active");
}

// Animate elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe cards and elements
document
  .querySelectorAll(
    ".timeline-item, .research-card, .project-card, .skill-group, .education-summary, .quick-skills"
  )
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });

// Active navigation highlighting
window.addEventListener("scroll", () => {
  let current = "";
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Add resize handler for responsive adjustments
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    document.querySelector(".nav-menu").classList.remove("active");
    document.querySelector(".hamburger").classList.remove("active");
  }
});

// Initialize first tab as active
document.addEventListener("DOMContentLoaded", function () {
  // Ensure the first tab button and content are active on load
  const firstTabBtn = document.querySelector(".tab-btn");
  const firstTabContent = document.querySelector(".tab-content");

  if (firstTabBtn) firstTabBtn.classList.add("active");
  if (firstTabContent) firstTabContent.classList.add("active");
});

// Resume download tracking (optional analytics)
document.addEventListener("DOMContentLoaded", function () {
  const resumeButtons = document.querySelectorAll(
    ".btn-resume, .btn-resume-footer"
  );

  resumeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Optional: Add analytics tracking here
      console.log("Resume downloaded");

      // You can add Google Analytics or other tracking here
      // gtag('event', 'download', {
      //     'event_category': 'resume',
      //     'event_label': 'pdf'
      // });
    });
  });
});
