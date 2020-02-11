// util, helpers, filters

const filteringReferencesListByThemes = (themesListRaw) => {
	const themesList = themesListRaw.toLowerCase().split(`,`);
	const filteredReferencesList = [];

	

	referencesList.content.forEach( (item) => {
		const itemTheme = item.info.theme.toLowerCase();

		if(themesList.indexOf(itemTheme) > -1) {
			filteredReferencesList.push(item)
		}
	});

	return filteredReferencesList;
};

const getReferenceThemesList = (list) => {
	const themesList = [];

	list.forEach( (item) => {
		const itemTheme = item.info.theme;

		if(themesList.indexOf(itemTheme) === -1) {
			themesList.push(itemTheme);
		}
	});

	return themesList;
};