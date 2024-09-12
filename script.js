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

setTimeout(() => {
	if (window.location.href.includes('visitor-info.html#alcohol')) {
		const alcohol = document.getElementById('alcohol');
		alcohol.style.border = '2px solid #f00';
	}
}, 500);
