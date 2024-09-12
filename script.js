// Get the elements
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');
const closeButton = document.getElementById('close-menu');

// Toggle the active class to show/hide the menu
menuIcon.addEventListener('click', () => {
	navLinks.classList.toggle('active');
});

closeButton.addEventListener('click', () => {
	navLinks.classList.toggle('active');
});
