const tmplReferenceItem = (item, mode) => {
	if(mode === `list-item`) {
		return `
			<li class="simple-list__item">
				<a href="${item.link}" target="_blank" class="simple-list__link">${item.title}</a>
			</li>
		`;
	}

	return `
		<div class="reference-item">
			<span class="reference-item__field  reference-item__field--id">#${item.id}</span>
			<a class="reference-item__field  reference-item__field--link" href="${item.link}" target="_blank">${item.title}</a>
			<span class="reference-item__field  reference-item__field--duration">${item.info.duration}</span>
			<span class="reference-item__field  reference-item__field--theme">${item.info.theme}</span>
		</div>
	`;
};

const tmplReferencesList = (list, mode) => {
	let html = ``;
	
	list.forEach( (item) => {
		html += tmplReferenceItem(item, `list-item`)
	});
	html = `<ul class="simple-list">${html}</ul>`;
	
	return html;
};

const tmplDashboardTopic = (topic) => {
	return `
		<div class="dashboard-topic  dashboard-topic--${topic.key}" data-topic-key="${topic.key}">
			<div class="dashboard-topic__header">
				<span>${topic.header}</span>
				<span class="dashboard-topic__description">${topic.description}</span>
			</div>
			<div class="dashboard-topic__content">${topic.content}</div>
			<div class="dashboard-topic__footer">${topic.footer}</div>
		</div>
	`;
};



const renderReferenceThemesList = (list) => {
	const $filter = document.getElementById(`js-filtering-references-list-by-themes`);
	let html = ``;

	list.forEach( (item) => html += `<button class='filter-item'>${item}</button>` );

	$filter.innerHTML = html;
};

const renderReferencesList = (list) => {
	let htmlReferencesList = list.map(tmplReferenceItem)
	htmlReferencesList = htmlReferencesList.join(``);

	const wrapper = document.createElement('div');
	wrapper.className = 'references-list';
	wrapper.innerHTML = htmlReferencesList;

	document.querySelector('body').appendChild(wrapper);
};


const renderDashboardTopicsList = (keyList) => {
	const $dashboard = document.getElementById(`dashboard`);
	let html = ``;
	

	for(key in keyList) {
		const topic = {...keyList[key]};

		topic.key = key;
		topic.content = tmplReferencesList( filteringReferencesListByThemes(keyList[key].searchKey) );

		html += tmplDashboardTopic(topic);
	}

	$dashboard.innerHTML = html;
};



// app, init, render
renderReferenceThemesList( getReferenceThemesList(referencesList.content) );

renderDashboardTopicsList(dashbordTopicsList)

renderReferencesList(referencesList.content);
