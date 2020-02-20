const $mainNavi = document.getElementById(`main-navi`);

$mainNavi.querySelectorAll(`.js-nav-list > li`).forEach( (item) => {
	item.addEventListener('click', (evt) => {
		evt.preventDefault();
		const idPage = evt.target.getAttribute(`href`).slice(1);
		const pageItems = document.querySelectorAll(`.page-item`);

		pageItems.forEach( (pageItem) => {
			if(pageItem.getAttribute(`id`) === idPage) {
				pageItem.classList.add(`page-item--active`);
			} else {
				pageItem.classList.remove(`page-item--active`);
			}
		});

		
	});
});