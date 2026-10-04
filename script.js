// Small scroll-reveal effect — no libraries required.
const items = document.querySelectorAll('.section, .project, .timeline-item');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

items.forEach(item => {
  item.style.opacity = '0';
  item.style.transform = 'translateY(16px)';
  item.style.transition = 'opacity .65s ease, transform .65s ease';
  observer.observe(item);
});
