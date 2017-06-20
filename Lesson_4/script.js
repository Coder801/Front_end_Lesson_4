
//console.clear();

// ## 0 Проверка диапазона
//
// Напишите код который б проверял длинну телефонного номера
// Длинна номера не должна быть не меньше 9 и не больше 11

// * Your code Start *
/*var userPhone = prompt("Please add your phone number", '');//Не работает
	if (userPhone >= 9 && userPhone <= 11) {
	alert ("Your phone number is accepted");
	} else if (userPhone < 9) {
	alert ("Your phone number is too small");
	} else if (userPhone > 11) {
	alert ("Your phone number is too big");
	} else {
	alert ("Enter a phone number");
	}
*/
/*var value = prompt("Please add your phone number", ''); // Как использовать знаки равенства в конструкции switch/case
var number = +value;
	switch (number) {
	case 9:
	case 10:
	case 11:
	alert ("Your phone number is accepted");
	break;
	case 1:
	case 2:
	case 3:
	case 4:
	case 5:
	case 6:
	case 7:
	case 8:
	alert ("Your phone number is too small");
	break;
	case 12:
	alert ("Your phone number is too big");
	break;
	default:
	alert ("Enter a phone number");
}*/




// * Your code End *


// ## 1 Клонирование обьектов
//
// Склонируйте обьект objectA в objectB при помощи цикла

/*var objectA = {
  name: 'John',
  lastname: 'Dou',
  age: 50
};

var objectB = {};

for (var key in objectA) {
	objectB[key] = objectA[key];
}
*/

// * Your code End *
/*
// Переопределяем значения обьекта objectA
objectA.name = 'Chris';
objectA.name = 'Couer';
objectA.name = '45';

// Если обьект objectB склонирован, значения в нем меняться не будут
// Выводим значения склонированного обьекта для проверки
console.log(objectB.name); // John
console.log(objectB.lastname); // Dou
console.log(objectB.age); // 50


// ## 2 Ветвление
// При помощи конструкци switch/case выведете текущую дату
// Название месяца должно иметь вид строки
// Например = 14 Июня 2017

var date = new Date(2017, 6, 19); //Не совсем понял задание. В таком формате и так все работает, что именно мы должны сделать?
var day = date.getDate(); // Текущий день
var month = date.getMonth(); // Текущий месяц (от 0 до 11)
var year = date.getFullYear(); // Текущий год
var monthName = ''; // Переменная для значения

// * Your code Start *



// * Your code End *

console.log(`Today is: ${day} ${monthName} ${year}`) // Пример: 14 Июня 2017



// ## 3 Взаимодействие с пользователем
//
// Запросите через prompt у пользователя его имя;
// Запрашивайте имя пользователя, пока одно из имен не будет совпадать с одним из массива users
// После того как пользователь введет имя которое есть в обьекте users, запросите у него пароль
// -- Если пароль введен не верно выведете alert об этом и вернитесь на повторый ввод имени
// -- Если пароль совпадает - вывести сообщение о том что пароль верный и прервите цикл

var users = [{
  name: 'Alex',
  password: 123
}, {
  name: 'Chris',
  password: 456
}, {
  name: 'Bill',
  password: 789
}];

// * Your code Start */

/*var userName = prompt("Enter your name");
    for (var i = 0; i < users.length; i++) {
        if (userName == users[i].name) {
        	var userPassword = +prompt("Enter your password");
        if (userPassword == users[i].password) {
        	alert ('Your password is right');
			} else {
			alert ('Your password is false');
		}
    }
}*/

/*var userName = prompt("Enter your name");//Почему не работает?
    for (var i = 0; i < users.length; i++) {
    	for(var n = 0; n < users.length; n++) {
        	if (userName == users[i][n]) {
        		alert ("dd");
        		var userPassword = prompt("Enter your password");
        	if (userPassword == users[i][n]) {
        		alert ('Your password is right');
				} else {
				alert ('Your password is false');
			}
		}
    }
}*/


// * Your code End *
