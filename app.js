<script>
// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks  = document.querySelector('.nav-links');
const navbar    = document.getElementById('navbar');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close menu when clicking a link (mobile)
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
}

// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    } else if (targetId !== '#') {
      console.warn(`Anchor target not found: ${targetId}`);
    }
  });
});

// Navbar background change on scroll — only added once
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Optional: trigger once on load in case page starts scrolled
  navbar.classList.toggle('scrolled', window.scrollY > 50);
}
</script>