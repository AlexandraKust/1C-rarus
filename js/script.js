const menuBurger = document.querySelector('.header__burger');
const mobileClose = document.querySelector('.mobile-catalog__close');
const mobileCatalog = document.querySelector('.mobile-catalog');

menuBurger.addEventListener("click", function (e) {
	mobileCatalog.classList.add('active');
	document.body.classList.add('lock');
});
mobileClose.addEventListener("click", function (e) {
	mobileCatalog.classList.remove('active');
	document.body.classList.remove('lock');
});

window.addEventListener('resize', function () {
	if (window.innerWidth > 767.98 && this.document.body.classList.contains('lock')) {
		document.body.classList.remove('lock');
	}
});





