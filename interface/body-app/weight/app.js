// 
// BodyWeightByDay
// BodyWeightByWeek


// @TODO: реализовать формулу, которая из таблицы массы по дням создать/заполняет таблицу массы по неделям
// (1) ф-я: которая дробит массив по неделям, возвращает массив массивов
function separateDaysByWeeks(daysList) {
	const daysByWeeksList = [];

	let tmp = [];
	for(let i = 0; i < daysList.length; i++) {
		if( (i + 1) % 7 === 0) {
			tmp.push(daysList[i].value)
			daysByWeeksList.push(tmp);
			tmp = [];
		} else {
			tmp.push(daysList[i].value);
		}
	}

	return daysByWeeksList;
}


// (2) ф-я: котрая сортирует массив по возрастанию
function ascDefaultSort(list) {
	return list.sort((a, b) => (a < b && -1) || (a > b && 1) || 0);
}


// (3) ф-я: которая считает среднее значение массива
function averageCalc(list) {
	let result = 0;

	for(let i = 0; i < list.length; i++) {
		result += list[i];
	}

	result = result / list.length;
	result = Number(Math.round(result + 'e1') + 'e-1');

	return result;
}
// (4) ф-я: которая в формате текста создаёт единицу записи типа BodyWeightByWeek для копипаста




// app init
const startWeekNumber = 29; // ???
let separatedDaysByWeeks = separateDaysByWeeks(BodyWeightByDay);
let separatedDaysByWeeksAsc = [];
for(let i = 0; i < separatedDaysByWeeks.length; i++) {
	let week = separatedDaysByWeeks[i];
	let sortedWeekValues = ascDefaultSort(week);
	let minValue = sortedWeekValues[0];
	let maxValue = sortedWeekValues[sortedWeekValues.length - 1];
	let averageValue = averageCalc(sortedWeekValues);
	let weekNumber = startWeekNumber + i;

	BodyWeightByWeek.push({ weekNumber, min: minValue, max: maxValue, average: averageValue });
}