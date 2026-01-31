"use strict"


document.addEventListener('click', documentActions)

function documentActions(e) {
	const targetElement = e.target

	if (targetElement.closest('.header-nav__button')) {
		document.documentElement.toggleAttribute('data-menu-open')
	}

};

const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('header--scroll-state');
  } else {
    header.classList.remove('header--scroll-state');
  }
});