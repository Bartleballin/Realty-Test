// Example: Alert for video click (replace with real video embed if needed)
document.querySelectorAll('a[href="#video"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    alert('Video would play here! Embed a YouTube video in a real setup.');
  });
});

// Form submission placeholder
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Form submitted! In a real site, connect to a backend like EmailJS.');
  });
});
