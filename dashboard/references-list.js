// plain data object
const referencesList = {
	content: [

		{
			id: `1`,
			link: `https://www.youtube.com/watch?v=3aGSqasVPsI`,
			title: `Node JS - Быстрый курс за 1 час`,
			info: {
				theme: `NodeJS`,
				author: ``,
				duration: `01:01:51`,
				description: ``,
			},
		},

		{
			id: `2`,
			link: `https://www.youtube.com/watch?v=8bE_PBRriyU&t=37s`,
			title: `NodeJS, Express, MongoDB - Приложение целиком`,
			info: {
				theme: `NodeJS`,
				author: ``,
				duration: `00:46:48`,
				description: ``,
			},
		},


		{
			id: `3`,
			link: `https://www.youtube.com/watch?v=wG7hX8Np1Pg&t=9s`,
			title: `Деплой NodeJS. Heroku (бесплатный хостинг)`,
			info: {
				theme: `NodeJS`,
				author: ``,
				duration: `00:13:20`,
				description: ``,
			},
		},


		{
			id: `4`,
			link: `https://www.youtube.com/watch?v=V1rhxheJg4A`,
			title: `React JS - Приложение целиком (Контекст, Хуки, Анимации, Деплой)`,
			info: {
				theme: `SPA/React`,
				author: ``,
				duration: ``,
				description: ``,
			},
		},

		{
			id: `5`,
			link: `https://www.youtube.com/watch?v=7KwtXNoYQEY`,
			title: `Курс React Native. Пишем Мобильное Приложение на JavaScript`,
			info: {
				theme: `React Native`,
				author: `Владилен Минин`,
				duration: `02:42:18`,
				description: ``,
			},
		},

		{
			id: `6`,
			link: `https://www.youtube.com/watch?v=ivDjWYcKDZI&t=5s`,
			title: `MERN - Сокращение Ссылок с Нуля до Деплоя (Mongo, Express, React, Node)`,
			info: {
				theme: `MERN`,
				author: `Владилен Минин`,
				duration: `03:34:30`,
				description: ``,
			},
		},

		{
			id: `7`,
			link: `https://www.youtube.com/watch?v=-cZOdWjFwXw`,
			title: `React JS: 50 вопросов на собеседование`,
			info: {
				theme: `job interview`,
				author: `Владилен Минин`,
				duration: ``,
				description: `job interview`,
			},
		},

		{
			id: `8`,
			link: `https://www.youtube.com/watch?v=ncaWoyLINoI&t=18s`,
			title: `Как пройти собеседование по JS? И зачем? | Odessa Frontend Community Meetup | Юрий Федоренко`,
			info: {
				theme: `job interview`,
				author: `Юрий Федоренко`,
				duration: ``,
				description: `job interview`,
			},
		},

		{
			id: `9`,
			link: `https://www.youtube.com/watch?v=HsXKiKNdeTI`,
			title: `Как пройти собеседование по JS? И зачем? vol.2 + викторина | OdessaFrontend Meetup | Юрий Федоренко`,
			info: {
				theme: `job interview`,
				author: `Юрий Федоренко`,
				duration: ``,
				description: `job interview`,
			},
		},

		{
			id: `10`,
			link: `https://www.youtube.com/watch?v=M_pclb-58ZY`,
			title: `JavaScript интервью. Полный курс по JS собеседованию`,
			info: {
				theme: `job interview`,
				author: `Владилен Минин`,
				duration: ``,
				description: `job interview`,
			},
		},

		{
			id: `11`,
			link: `https://www.youtube.com/watch?v=nyIpDs2DJ_c`,
			title: `TypeScript - Полный Курс. Уроки TypeScript`,
			info: {
				theme: `TypeScript`,
				author: `Владилен Минин`,
				duration: `01:07:59`,
				description: ``,
			},
		},

		{
			id: `12`,
			link: `https://www.youtube.com/watch?v=aQkgUUmUJy4&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT`,
			title: `Сложный JavaScript простым языком`,
			info: {
				theme: `JavaScript`,
				author: `Владилен Минин`,
				duration: ``,
				description: ``,
			},
		},

		{
			id: `13`,
			link: `https://www.youtube.com/watch?v=Ti2Q4sQkNdU`,
			title: `EcmaScript - Полный курс (ES6, ES7, ES8)`,
			info: {
				theme: `EcmaScript`,
				author: `Владилен Минин`,
				duration: ``,
				description: ``,
			},
		},

		{
			id: `14`,
			link: `https://www.youtube.com/watch?v=YzEUQXePaVE`,
			title: `Собеседование в компанию INMYROOM frontend-разработчиком с ЗП 100k`,
			info: {
				theme: `job interview`,
				author: `Archakov Blog`,
				duration: ``,
				description: ``,
			},
		},

		{
			id: `15`,
			link: `https://www.youtube.com/watch?v=HJBpubsXONM`,
			title: `Front-end 2020 Roadmap & Trends | Что учить в 2020?`,
			info: {
				theme: `Vector`,
				author: `WebDev`,
				duration: `00:13:33`,
				description: ``,
			},
		},

		{
			id: `16`,
			link: `https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%BE%D0%B3%D1%80%D0%B5%D1%81%D1%81%D0%B8%D0%B2%D0%BD%D0%BE%D0%B5_%D0%B2%D0%B5%D0%B1-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5`,
			title: `Прогрессивное веб-приложение`,
			info: {
				theme: `PWA`,
				author: `wikipedia`,
				duration: ``,
				description: ``,
			},
		},

		{
			id: `17`,
			link: `https://developers.google.com/web/progressive-web-apps?hl=ru`,
			title: `Progressive Web Apps`,
			info: {
				theme: `PWA`,
				author: `https://developers.google`,
				duration: ``,
				description: ``,
			},
		},

		{
			id: `18`,
			link: `https://habr.com/ru/post/418923/`,
			title: `PWA — это просто`,
			info: {
				theme: `PWA`,
				author: `habr`,
				duration: ``,
				description: ``,
			},
		},

		{
			id: `19`,
			link: `https://habr.com/ru/post/340514/`,
			title: `Тестирование React-Redux приложения`,
			info: {
				theme: `TDD/BDD`,
				author: `habr`,
				duration: ``,
				description: ``,
			},
		},

		{
			id: `20`,
			link: `https://habr.com/ru/company/infowatch/blog/315760/`,
			title: `Тестирование в React`,
			info: {
				theme: `TDD/BDD`,
				author: `habr`,
				duration: ``,
				description: ``,
			},
		},

		{
			id: `21`,
			link: `https://medium.com/@karafizi/%D1%82%D0%B5%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-react-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D0%BE%D0%B2-%D1%81-jest-%D0%B8-enzyme-%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4-985dcab18b7e`,
			title: `Тестирование React компонентов с Jest и Enzyme (перевод)`,
			info: {
				theme: `TDD/BDD`,
				author: `madium`,
				duration: ``,
				description: ``,
			},
		},

		{
			id: `22`,
			link: `https://medium.com/devschacht/what-and-how-to-test-with-jest-and-enzyme-full-instruction-on-react-components-testing-d3504f3fbc54`,
			title: `Что и как тестировать с помощью Jest и Enzyme. Полная инструкция по тестированию React-компонентов`,
			info: {
				theme: `TDD/BDD`,
				author: `medium`,
				duration: ``,
				description: ``,
			},
		},

		{
			id: `23`,
			link: `https://monsterlessons.com/project/series/redux-js-dlya-nachinayushih`,
			title: `Redux js для начинающих`,
			info: {
				theme: `Redux`,
				author: `monsterlessons`,
				duration: ``,
				description: ``,
			},
		},

		{
			id: `24`,
			link: `https://www.youtube.com/watch?v=M_pclb-58ZY`,
			title: `JavaScript интервью. Полное пособие (типы данных, контекст, прототипы и многое другое)`,
			info: {
				theme: `job interview`,
				author: ``,
				duration: ``,
				description: ``,
			},
		},

		{
			id: `25`,
			link: `https://tproger.ru/translations/14-templates-to-answer-interview-questions/`,
			title: `14 шаблонов, которые помогут ответить на любой вопрос по коду на собеседовании`,
			info: {
				theme: `job interview`,
				author: ``,
				duration: ``,
				description: ``,
			},
		},

		{
			id: `26`,
			link: `https://tproger.ru/translations/common-javascript-interview-challenges/`,
			title: `Собеседование на должность JavaScript-разработчика: популярные задачи с разбором решений`,
			info: {
				theme: `job interview`,
				author: ``,
				duration: ``,
				description: ``,
			},
		},

		{
			id: `27`,
			link: `https://www.cat-in-web.ru/45-js-questions/`,
			title: `45 вопросов по JavaScript с собеседований`,
			info: {
				theme: `job interview`,
				author: ``,
				duration: ``,
				description: ``,
			},
		},

		{
			id: `28`,
			link: `https://maxpfrontend.ru/vebinary/voprosy-dlya-sobesedovaniya-javascript-razrabotchika/`,
			title: `Вопросы для собеседования javascript разработчика`,
			info: {
				theme: `job interview`,
				author: ``,
				duration: ``,
				description: ``,
			},
		},

		{
			id: `29`,
			link: `https://habr.com/ru/post/231071/`,
			title: `Собеседование на должность JavaScript разработчика`,
			info: {
				theme: `job interview`,
				author: ``,
				duration: ``,
				description: ``,
			},
		},

		{
			id: `30`,
			link: `https://proglib.io/p/9-js-questions/`,
			title: `9 вопросов для получения должности JavaScript-разработчик`,
			info: {
				theme: `job interview`,
				author: ``,
				duration: ``,
				description: ``,
			},
		},

		{
			id: `31`,
			link: `https://github.com/kix/reverse-interview/blob/master/README.md`,
			title: `Обратное собеседование(Список вопросов, которые нужно не забыть задать работодателю при собеседовании)`,
			info: {
				theme: `job interview`,
				author: ``,
				duration: ``,
				description: ``,
			},
		},

		{
			id: `32`,
			link: ` https://www.youtube.com/watch?v=hFOZYaVHD6A`,
			title: `Как стать программистом! 3 бесплатных крутых шага! (JavaScript, Front-end)`,
			info: {
				theme: `job interview`,
				author: ``,
				duration: ``,
				description: ``,
			},
		},

		{
			id: `33`,
			link: `https://getinstance.info/articles/react/learning-react-router/`,
			title: `Новый уровень React: React Router`,
			next: `34`,
			info: {
				theme: `React`,
				author: `.getInstance`,
				duration: ``,
				description: ``,
			},
		},

		{
			id: `34`,
			link: `https://getinstance.info/articles/react/learning-react-container-components/`,
			title: `Новый уровень React: Компоненты-контейнеры`,
			next: `35`,
			info: {
				theme: `React`,
				author: `.getInstance`,
				duration: ``,
				description: ``,
			},
		},

		{
			id: `35`,
			link: `https://getinstance.info/articles/react/learning-react-redux/`,
			title: `Новый уровень React: Redux`,
			info: {
				theme: `React/Redux`,
				author: `.getInstance`,
				duration: ``,
				description: ``,
			},
		},

		{
			id: `36`,
			link: `https://rajdee.gitbooks.io/redux-in-russian/`,
			title: `Redux-in-russian (tutorial)`,
			info: {
				theme: `Redux`,
				author: ``,
				duration: ``,
				description: `Перевод офф. руководства по Редаксу и его использованию`,
			},
		},

		{
			id: `37`,
			link: `https://xsltdev.ru/react/redux/intro/`,
			title: `React Redux (tutorial, app с использованием VK API)`,
			info: {
				theme: `React/Redux, VK API`,
				author: `xsltdev.ru`,
				duration: ``,
				description: ``,
			},
		},

		{
			id: `38`,
			link: `https://znanion.ru/programming/redux-react/`,
			title: `Redux + React: основы`,
			info: {
				theme: `React/Redux`,
				author: `znanion.ru`,
				duration: ``,
				description: ``,
			},
		},

		{
			id: `39`,
			link: `http://prgssr.ru/development/pogruzhenie-v-react-redux.html`,
			title: `Погружение в React: Redux`,
			info: {
				theme: `Redux`,
				author: `prgssr.ru, Брэд Вестфолл`,
				duration: ``,
				description: ``,
			},
		},

		{
			id: `40`,
			link: `https://redux.js.org/`,
			title: `Redux`,
			info: {
				theme: `Redux`,
				author: `https://redux.js.org/`,
				duration: ``,
				description: `official`,
			},
		},

		{
			id: `41`,
			link: `https://tuhub.ru/posts/redux-i-thunk-vmeste-react-rukovodstvo-dlya-chajnikov`,
			title: `Redux и Thunk вместе с React. Руководство для чайников.`,
			info: {
				theme: `React/Redux`,
				author: `tuhub.ru`,
				duration: ``,
				description: ``,
			},
		},

		{
			id: `42`,
			link: `https://habr.com/ru/post/439104/`,
			title: `Redux. Простой как грабли`,
			info: {
				theme: `Redux`,
				author: `habr`,
				duration: ``,
				description: ``,
			},
		},

		{
			id: `43`,
			link: `https://habr.com/ru/post/269831/`,
			title: `С 0 до 1. Разбираемся с Redux`,
			info: {
				theme: `Redux`,
				author: `habr`,
				duration: ``,
				description: ``,
			},
		},

		{
			id: `44`,
			link: `https://medium.com/devschacht/redux-step-by-step-e6c42a9b00cd`,
			title: `Redux: шаг за шагом`,
			info: {
				theme: `Redux`,
				author: `medium.com, Maxon Vislogurov`,
				duration: ``,
				description: ``,
			},
		},

		{
			id: `45`,
			link: `https://tproger.ru/translations/redux-for-beginners/`,
			title: `Краткое руководство по Redux для начинающих`,
			info: {
				theme: `Redux`,
				author: `tproger.ru`,
				duration: ``,
				description: ``,
			},
		},

		{
			id: `46`,
			link: `https://metanit.com/web/react/5.3.php`,
			title: `Redux`,
			info: {
				theme: `Redux`,
				author: `metanit.com`,
				duration: ``,
				description: ``,
			},
		},

		{
			id: `47`,
			link: `https://habr.com/ru/post/486820/`,
			title: `70 вопросов по JavaScript для подготовки к собеседованию`,
			info: {
				theme: `test-list`,
				author: `habr`,
				duration: ``,
				description: ``,
			},
		},

		{
			id: `?`,
			link: ``,
			title: ``,
			info: {
				theme: ``,
				author: ``,
				duration: ``,
				description: ``,
			},
		},

		{
			id: `?`,
			link: ``,
			title: ``,
			info: {
				theme: ``,
				author: ``,
				duration: ``,
				description: ``,
			},
		},

		{
			id: `?`,
			link: ``,
			title: ``,
			info: {
				theme: ``,
				author: ``,
				duration: ``,
				description: ``,
			},
		},
	],
};