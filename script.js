// alert('hello');

// const result = confirm('how are you?');

// console.log(result)

// const prm = prompt('Сколько Вам лет', '');
// console.log(typeof(prm));

// const answers = [];

// answers[0] = prompt('как вас зовут?', '');
// answers[1] = prompt('фамилия?', '');
// answers[2] = prompt('сколько лет?', '');

// console.log(answers);


// *** Задание на использование циклов и условий ***

// for (let i = 5; i<=10; i++) {
//   console.log(i);
// }

// for (let i = 20; i > 10; i--) {
//   console.log(i);
//   if(i === 13) {
//     break;
//   }
// }

// for( let i = 1; i <= 10; i++) {
//   if( i % 2 == 0) {
//     console.log(i);
//   }
// }

//  for (let i = 2; i <= 16; i++) {
//    if (i % 2 === 0) {
//      continue;
//    } else {
//      console.log(i);
//    }
//  }

//  let i = 2
//  while (i<=16) {
//   if(i % 2 === 0) {
//     i++;
//     continue;
//   } else {
//     console.log(i)
//     i++;
//   }
//  } 

// const arrayOfNumbers = [];

// for( let i = 5; i <= 10; i++ ) {
//  arrayOfNumbers[i - 5] = i;
// }

// console.log(arrayOfNumbers);

    // const arr = [3, 5, 8, 16, 20, 23, 50];
    // const result = [];

    // for( let i = 0; i < arr.length; i++) {
    //   result[i] = arr[i];
    // }

    // console.log(result);

// const data = [5, 10, 'Shopping', 20, 'Homework'];
    
// for(let i = 0; i < data.length; i++) {
//   if (typeof data[i] === 'number') {
//     data[i] = data[i] * 2;
//   }else {
//     data[i] = `${data[i]} - done`;
//   }
// }

// console.log(data);

    // const data = [5, 10, 'Shopping', 20, 'Homework'];
    // const result = [];
    // for(let i = 1; i <= data.length; i++) {
    //   result[i - 1] = data[data.length - i];
    // }

    // console.log(result)

    // const lines = 5;
    // let result = '';

    // for(let i = 0; i <= lines; i++ ) {
    //   for(let j = 0; j < lines - i; j++) {
    //     result += ' ';
    //   }
    //   for(let j = 0; j < 2 * i + 1; j++) {
    //     result += '*';
    //   }

    //   result += '\n';
    // }

    // console.log(result);

    // *** Функции ***

    // function showFirstMessage() {
    //   console.log('hello World');
    // }

    // showFirstMessage();

        // let num = 20
        // function showFirstMessage(text) {
        //   console.log(text);
        //   num = 25;
        // }

        // showFirstMessage('Hi mister Proper');
        // console.log(num);

  // function calc(a, b) {
  //   return (a + b);
  // }

  // console.log(calc(4, 6))
  // console.log(calc(56, 6))
  // console.log(calc(4, 62))
  // console.log(calc(4, 46))

  // let num = 10;

  // function ret() {
  //   let num = 50;
  //   return num;
  // }

  // const ant = ret();

  // console.log(num)
  // console.log(ant)

//   const logger = function() {
//     console.log('hello');
//   };

// logger();


// const calc = (a, b) => {
//  return a + b;
// };

// const usdCurr = 28;
// const eurCurr = 32

// function convert(amount = 1, curr = 1) {
//   console.log(curr * amount);
// }

// convert(500);
// convert(500, usdCurr);
// convert(500, eurCurr);

// const usdCurr = 28;
// const discount = 0.9;

// function convert(amount = 1, curr = 1) {
//   return curr * amount;
// }

// function promotion(result) {
//   console.log(result * discount);
// }

// const res = convert(500, usdCurr);

// promotion(res);

// function test() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i) 
//       if(i===3) {
//         return;
//       }
    
//   }
//   console.log('Done');
// }

// test();

// function doNothing() {};
// console.log(doNothing() === undefined);

// *** Задание на работу с функциями ***

// function sayHello(yourName) {
//   return `Привет, ${yourName}`;
// }

// function returnNeighboringNumbers(number) {
//   const arr = [];
//   arr[0] = number - 1;
//   arr[1] = number;
//   arr[2] = number + 2;
//   return arr; 
// }

// function getMathResult(a, b) {
//   let result = '';
//   if(typeof a == 'number' && typeof b =='number' && b > 0){
//     for(let i = 1; i <= b; i++) {
//       if(i === b) {
//         result += `${a *i }`;
//       }else {
//         result += `${a * i}---`;
//       }
//     }
//     return result;
//   }else {
//     console.log(a);
//     return a;
//   }
// }

// getMathResult(2, -5);

// *** Методы свойства строк и цифо ***

// const str = 'Hello world';
// const arr = [1,2,3];

// console.log(str.length);
// console.log(arr.length);
// console.log(str[2]);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.indexOf('world'));
// console.log(str.slice(-6));
// console.log(str.substring(6, 11));
// console.log(str.substr(6, 5))


// const num = 12.2;
// const test = '12.2px';
// // console.log(Math.round(num));
// // console.log(num.toFixed());
// // console.log(parseInt(test))
// // console.log(parseFloat(test));

// *** Продвинутые задания на использование функций 7 ***

// function calculateVolumeAndArea(length) {
//     if (typeof length != 'string' && length > 0 && Number.isInteger(length)) {
//       const volume = length * length * length;
//       const area = 6 * Math.pow(length, 2);
//       console.log(`Объем куба: ${volume}, площадь всей поверхности: ${area}'`);
//       return `Объем куба: ${volume}, площадь всей поверхности: ${area}'`;
//     } else {
//         return 'При вычислении произошла ошибка';
//     }
    
// }

// calculateVolumeAndArea(5.6)

// function getCoupeNumber(site) {
//     if (site >= 1 && site <=36 && typeof site != 'string' && Number.isInteger(site)) {
//         return Math.ceil(site / 4);
//     }else if (site == 0 || site > 36) {
//         console.log('Таких мест в вагоне не существует');  
//     }else {
//         console.log('Ошибка. Проверьте правильность введенного номера места');
//     }
// }

// getCoupeNumber(10.3)


// *** Продвинутые задания на использование функций 8 ***


// Место для первой задачи
// function getTimeFromMinutes(minutes) {
//     if(typeof(minutes) !== 'number' || minutes < 0 || !Number.isInteger(minutes)) {
//         console.log('Ошибка, проверьте данные');
//         return 'Ошибка, проверьте данные';
//     } 

//     const hours = Math.floor(minutes / 60);
//     const min = minutes % 60;

//     let hoursStr = '';

//     switch (hours) {
//         case 0:
//             hoursStr = 'часов';
//             break;
//         case 1:
//             hoursStr = 'час';
//             break;
//         case 2:
//         case 3:
//         case 4:
//             hoursStr = 'часа';
//             break;
//         default:
//             hoursStr = 'часов';
//     }

//     console.log(`Это ${hours} ${hoursStr} и ${min} минут`);

//     return `Это ${hours} ${hoursStr} и ${minutes} минут`;
// }

// getTimeFromMinutes(150);
// // Место для второй задачи
// function findMaxNumber(a, b, c, d) {
//     if (
//       typeof a !== 'number' ||
//       typeof b !== 'number' ||
//       typeof c !== 'number' ||
//       typeof d !== 'number'
//     ) {
//       return 0;
//     } else {
//       return Math.max(a, b, c, d);
//     }
// }

// findMaxNumber(2,74,7)


// *************************************************

// function first() {
//     //  Do something
//     setTimeout(function() {
//         console.log(1);
//     }, 500);
// }
// first();

// function second() {
//     console.log(2);
// }
// second();

// function learnJS(lang, callback) {
//     console.log(`я учу: ${lang}`);
//     callback();
// }

// function done() {
//     console.log('я прошел урок')    
// }

// // learnJS('JS', function() {
// //     console.log('bye')
// // })

// learnJS('JS', done);


// *** Деструктуризация и объекты ***

// const obj = new Object();
// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red',
//     },
//     makeTest: function() {
//         console.log('Test');
//     }
// };

// // options.makeTest();
// const{border, bg} = options.colors
// console.log(border);
// console.log(Object.keys(options).length); // что бы узнать количество ключей в объекте

// console.log(options.name);
// delete options.name;
// console.log(options);

// let counter = 0;
// for(let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     }else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
    
// }
// console.log(counter);


// *** массивы и псевдомассивы ***

// const arr = [21, 12, 3, 6, 8];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//     return a - b
// }

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`)
// });

// console.log(arr.length);

// arr.pop()
// arr.push(10)
// arr.shift();
// arr.unshift(4);
// console.log(arr);

// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// const str = prompt('введите товар', '');
// const product = str.split(', '); // создает массив
// product.sort();
// console.log(product.join('; ')); // склеивает в строку через символ которые напишем в скобках



// **** Копирования объекта ****

// const myObj = {
//    a: 10,
//    b: 5,
//    c: {
//     x: 7,
//     y: 55
//    }
// };

// function copy(obj) {
//     let objCopy = {};

//     let key;
//     for (key in obj) {
//         objCopy[key] = obj[key]
//     }

//     return objCopy;
// }

// const newNumbers = copy(myObj);

// console.log(newNumbers);


// **** Задачи на работу с объектами ****

// const personalPlanPeter = {
//   name: 'Peter',
//   age: '29',
//   skills: {
//     languages: ['ru', 'eng'],
//     programmingLangs: {
//       js: '20%',
//       php: '10%',
//     },
//     exp: '1 month',
//   },
//   showAgeAndLangs: function(plan) {
//     const {age} = plan;
//     const { languages } = plan.skills;
//     let str = `Мне ${age} и я владею языками: `;

//     languages.forEach(function(lang) {
//         str += `${lang.toUpperCase()} `;
//     });
//     return str;
//   }
// };

// function showExperience(plan) {
//     let {skills: {exp}} = plan
    
//     return exp;
// }

// // showExperience(personalPlanPeter);

// function showProgrammingLangs(plan) {
//     let str = '';
//     const {skills: {programmingLangs}} = plan;
//     for(let key in programmingLangs) {
//         str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
//     }
//     return str;
// }

// showProgrammingLangs(personalPlanPeter);



// **** Задачи на работу с массивами ****


// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     let str = '';
//     arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';

//     arr.forEach(member => {
//         str += `${member} `
//     });
//     console.log(str)
//     return str;
// }

// showFamily(family);

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     arr.forEach(a => {
//         console.log(a.toLowerCase());
//     })
// }

// standardizeStrings(favoriteCities);

// const someString = 'This is some strange string';

// function reverse(str) {
//     return str.split('').reverse().join('');
// }

// reverse(someString);

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
//     let str = '';
//     arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';
//     arr.forEach(function(curr, i) {
//         if(curr !== missingCurr) {
//             str += `${curr}\n`;
//         }
//     });

//     console.log(str);
//     return str;
// }

// availableCurr(baseCurrencies, additionalCurrencies);

//  **** Основы ООП, прототипно-ориентированное наследование ****

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHallo: function(){
//         console.log('hello')
//     }
// }

// const jonh = Object.create(soldier);

// jonh.sayHallo();

// const jonh = {
//     health: 100,
// }

// Object.setPrototypeOf(jonh, soldier);

// jonh.sayHallo()


// *** Продвинутая задача на работу с объектами и массивами ***

// const shoppingMallData = {
//   shops: [
//     {
//       width: 10,
//       length: 5,
//     },
//     {
//       width: 15,
//       length: 7,
//     },
//     {
//       width: 20,
//       length: 5,
//     },
//     {
//       width: 8,
//       length: 10,
//     },
//   ],
//   height: 5,
//   moneyPer1m3: 30,
//   budget: 50000,
// };

// function isBudgetEnough(data) {
//     let squere = 0;
//     let volume = 0;

//     data.shops.forEach(shop => {
//         squere += shop.width * shop.length;
//     });

//     volume = data.height * squere;

//     if (data.budget - (volume * data.moneyPer1m3) >= 0) {
//         console.log('Бюджета достаточно');
//         return 'Бюджета достаточно';
//     }else {
//         console.log('Бюджета недостаточно');
//         return 'Бюджета недостаточно';
//     }
// }

// isBudgetEnough(shoppingMallData);

// ***  Продвинутая задача на работу с объектами и массивами ***

// const students = [
//   'Peter',
//   'Andrew',
//   'Ann',
//   'Mark',
//   'Josh',
//   'Sandra',
//   'Cris',
//   'Bernard',
//   'Takesi',
//   'Sam',
// ];

// function sortStudentsByGroups(arr) {
//     arr.sort();
//     const a = [], b = [], c = [], rest = [];

//     for(let i = 0; i < arr.length; i++) {
//         if (i < 3) {
//             a.push(arr[i]);
//         }else if (i < 6) {
//             b.push(arr[i]);
//         }else if (i < 9) {
//             c.push(arr[i]);
//         }else {
//             rest.push(arr[i])
//         }
//     }

//     console.log([
//       a,
//       b,
//       c,
//       `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`,
//     ]);

//    return [a,b,c,`Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`]; 
// }

// sortStudentsByGroups(students);