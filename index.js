/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
    var preResult = []; // массив с тэгами до объединения
	var lowerCaseTags = []; // массив тэгов в нижнем регистре
	hashtags.forEach(goLow); // forEach для всех тэгов
	function goLow(lowTag) { // функция по переводу тэгов в нижний регистр
    lowerCaseTags.push(lowTag.toLowerCase()); // добавляем в массив тэги в нижнем регистре
    };
	preResult = lowerCaseTags.filter(uniqueTags); // фильтруем уникальные тэги в массив
    function uniqueTags (hashtag, index) { // функция для уникальных тэгов
        return lowerCaseTags.indexOf(hashtag) === index; // функция возвращает тэги, у которых первое вхождение равно своему индексу
    };
    var result = preResult.join(', '); // записываем в строку объединённые элементы массива
    return result // функция возвращает полученную строку
};