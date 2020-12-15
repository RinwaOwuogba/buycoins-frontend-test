const hamburger = document.querySelector('.hamburger__wrapper');

// toggle menu on mobile
hamburger.addEventListener('click', (event) => {
	const header = document.querySelector('header');
	header.classList.toggle('menu--open');
});

// toggle visibility of sticky avatar in nav bar on medium to large
// viewports
window.addEventListener('scroll', () => {
	const navAvatar = document.querySelector('.nav-avatar');
	const profileAvatar = document.querySelector('.profile-info-avatar');
	const rect = profileAvatar.getBoundingClientRect();

	if (rect.height + rect.top <= 0) {
		navAvatar.classList.add('sticky-avatar');
	} else {
		navAvatar.classList.remove('sticky-avatar');
	}
});
