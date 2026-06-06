// Navigation
const navLinks = document.querySelectorAll('.navbar-link');
const pages = document.querySelectorAll('.page');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Remove active from all
    navLinks.forEach(l => l.classList.remove('active'));
    pages.forEach(p => p.classList.remove('active'));
    
    // Add active
    link.classList.add('active');
    document.getElementById(link.getAttribute('data-page')).classList.add('active');
  });
});

// Toggle Contacts in Sidebar
const toggleBtn = document.getElementById('toggle-contacts');
const contactsSection = document.getElementById('contacts-section');

toggleBtn.addEventListener('click', () => {
  contactsSection.classList.toggle('hidden');
  const icon = toggleBtn.querySelector('i');
  icon.classList.toggle('fa-chevron-down');
  icon.classList.toggle('fa-chevron-up');
});

// Simple form submission (Contact page)
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Message sent successfully! (Demo)");
    form.reset();
  });
}

// Make all project cards visible by default
document.querySelectorAll('.project-item').forEach(item => {
  item.classList.add('active');
});
