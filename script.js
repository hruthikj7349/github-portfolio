// Counter Animation
function animateCounters() {
  const counters = document.querySelectorAll('.count-up');

  counters.forEach(counter => {

    // Prevent re-running animation
    if (counter.dataset.animated === "true") return;

    counter.dataset.animated = "true";

    const target = parseFloat(counter.dataset.target);
    const decimals = parseInt(counter.dataset.decimals || 0);

    let current = 0;
    const duration = 1500;
    const increment = target / (duration / 16);

    function updateCounter() {
      current += increment;

      if (current >= target) {
        counter.textContent = target.toFixed(decimals);
      } else {
        counter.textContent = current.toFixed(decimals);
        requestAnimationFrame(updateCounter);
      }
    }

    updateCounter();
  });
}

// Navigation between pages
function showPage(page) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(function(pageEl) {
    pageEl.classList.add('hidden');
  });

  // Show the selected page
  const targetPage = document.getElementById('page-' + page);
  if (targetPage) {
    targetPage.classList.remove('hidden');
  }

  // Trigger counter animation when About page opens
  if (page === 'about') {
    animateCounters();
  }

  // Update active nav link
  document.querySelectorAll('.nav-link').forEach(function(link) {
    link.classList.remove('active');

    if (link.getAttribute('onclick').includes("'" + page + "'")) {
      link.classList.add('active');
    }
  });
}

// Initialize - show About page by default
document.addEventListener('DOMContentLoaded', function() {

  showPage('about');
  animateCounters();

  // Optional: Keyboard support (Left/Right arrows)
  document.addEventListener('keydown', function(e) {

    const pages = ['about', 'resume', 'projects', 'certifications', 'contact'];
    const currentActive = document.querySelector('.nav-link.active');

    if (!currentActive) return;

    let currentIndex = pages.indexOf(
      currentActive.getAttribute('onclick').match(/'(\w+)'/)[1]
    );

    if (e.key === 'ArrowRight') {
      let next = pages[(currentIndex + 1) % pages.length];
      showPage(next);
    }

    if (e.key === 'ArrowLeft') {
      let prev = pages[(currentIndex - 1 + pages.length) % pages.length];
      showPage(prev);
    }
  });
});

// Contact Form - Demo submission
const contactForm = document.querySelector('#page-contact form');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {

    e.preventDefault();

    const btn = this.querySelector('button');
    const originalText = btn.innerHTML;

    btn.innerHTML = 'Sending... <i class="fa-solid fa-spinner fa-spin"></i>';
    btn.disabled = true;

    setTimeout(() => {
      alert("✅ Message sent successfully! Thank you.");
      contactForm.reset();
      btn.innerHTML = originalText;
      btn.disabled = false;
    }, 800);
  });
}

// Make sidebar contacts toggle
function toggleContacts() {
  const contacts = document.getElementById('contacts-section');

  if (contacts) {
    contacts.classList.toggle('hidden');
  }
}

// Bonus: Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener('click', function(e) {

    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
