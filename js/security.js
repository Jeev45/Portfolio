// Disable right-click
document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

// Disable developer tools shortcuts
document.addEventListener('keydown', function (e) {
  if (e.key === "F12" || 
      (e.ctrlKey && e.key === 'u') || 
      (e.ctrlKey && e.key === 's') || 
      (e.ctrlKey && e.shiftKey && ['I', 'C', 'J'].includes(e.key))) {
    e.preventDefault();
  }
});

// Disable text selection and copy
document.addEventListener('selectstart', function (e) {
  e.preventDefault();
});

document.addEventListener('copy', function (e) {
  e.preventDefault();
});

// Disable drag for images
document.addEventListener('dragstart', function (e) {
  if (e.target.tagName === 'IMG') {
    e.preventDefault();
  }
});
