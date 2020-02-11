const tmplReferenceItem = (item, mode) => {
	if(mode === `list-item`) {
		return `
			<li class="simple-list__item">
				<a href="${item.link}" target="_blank" class="simple-list__link">${item.title}</a>
			</li>
		`;
	}


	return `<div class="reference-item" style="margin-bottom: 25px;">
				<span style="color: #ccc; font-weight: bold;">#${item.id}</span>
				<a href="${item.link}" target="_blank" style="color: #551a8b;">${item.title}</a>
				<span style="font-size: 10px; color: gray;">${item.info.duration}</span>
				<span style="font-size: 10px; font-weight: bold;">${item.info.theme}</span>
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
			<div class="dashboard-topic__header"><span>${topic.header}</span></div>
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
		console.log(key, filteringReferencesListByThemes(keyList[key].searchKey) );

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
