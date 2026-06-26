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
  // Update active nav link
  document.querySelectorAll('.nav-link').forEach(function(link) {
    link.classList.remove('active');
    if (link.getAttribute('onclick').includes("'" + page + "'")) {
      link.classList.add('active');
    }
  });
  // Trigger count-up animation when About page is shown
  if (page === 'about') animateCountUp();
}

// Count-up animation for stat cards
function animateCountUp() {
  document.querySelectorAll('.count-up').forEach(el => {
    const target = parseFloat(el.dataset.target);
    const decimals = parseInt(el.dataset.decimals) || 0;
    const duration = 1200;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    let step = 0;
    el.textContent = decimals > 0 ? (0).toFixed(decimals) : '0';
    const timer = setInterval(() => {
      step++;
      current = step >= steps ? target : current + increment;
      el.textContent = decimals > 0 ? current.toFixed(decimals) : Math.round(current);
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
  });
}

// Initialize - show About page by default
document.addEventListener('DOMContentLoaded', function() {
  showPage('about');
  
  // Optional: Keyboard support (Left/Right arrows)
  document.addEventListener('keydown', function(e) {
    const pages = ['about', 'resume', 'projects', 'certifications', 'contact'];
    const currentActive = document.querySelector('.nav-link.active');
    if (!currentActive) return;
    
    let currentIndex = pages.indexOf(currentActive.getAttribute('onclick').match(/'(\w+)'/)[1]);
    
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
    
    // Simulate sending
    setTimeout(() => {
      alert("✅ Message sent successfully! Thank you.");
      contactForm.reset();
      btn.innerHTML = originalText;
      btn.disabled = false;
    }, 800);
  });
}

// Make sidebar contacts toggle (if you add the toggle button later)
function toggleContacts() {
  const contacts = document.getElementById('contacts-section');
  if (contacts) {
    contacts.classList.toggle('hidden');
  }
}

// Bonus: Smooth scroll for any internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});
