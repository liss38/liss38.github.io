console.log(referencesList.content)

const tmplReferenceItem = (item) => {
	return `<div class="reference-item" style="margin-bottom: 25px;">
				<span style="color: #ccc; font-weight: bold;">#${item.id}</span>
				<a href="${item.link}" target="_blank">${item.title}</a>
				<span style="font-size: 10px; color: gray;">${item.info.duration}</span>
				<span style="font-size: 10px; font-weight: bold;">${item.info.theme}</span>
			</div>
			`;
};

const renderReferencesList = (list) => {
	let htmlReferencesList = list.map(tmplReferenceItem)
	htmlReferencesList = htmlReferencesList.join(``);

	const wrapper = document.createElement('div');
	wrapper.className = 'references-list';
	wrapper.innerHTML = htmlReferencesList;

	document.querySelector('body').appendChild(wrapper);
};
renderReferencesList(referencesList.content);