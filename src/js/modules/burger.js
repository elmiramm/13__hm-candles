export function burger() {
	const header = document.querySelector('.header');
	const burger = header.querySelector('.burger');
	const menu = header.querySelector('.menu');
	header.addEventListener('click', function (e) {
		const target = e.target;
		if (target === burger || target.closest('.burger')) {
			menu.classList.toggle('menu--open');
			burger.classList.toggle('active-burger');
		}

	})
}