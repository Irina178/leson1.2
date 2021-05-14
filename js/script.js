'use strict'
//ОБЬЯВЛЕНИЕ ПЕРЕМЕННОЙ
let name = 'Irina'
console.log(name)

let city
city = 'Mosskov'
console.log(city)

const lesson = 'JS'
console.log(lesson)

//ТЗМЕНЕНИЕ ЗНАЧЕНИЯ LET
let cet = 'Visi'
cet = 'Alex'
console.log(cet)

//ПЕРЕДАТЬ ЗНАЧЕНИЕ из одной переменной в другую ТЛЬКО С LET
let age = 30
age = 29

console.log(age)

//ИЗМЕНЕНИЕ ЗНАЧЕНИЙ В const
const lesonJava = {
  video: 230,
  lecture: 185,
  homework: 300,
}
lesonJava.lecture = 168
console.log(lesonJava)

const gasPayments = {
  January: 110,
  February: 40,
  March: 120,
  april: 110,
  May: 63,
}
gasPayments.april = 97
console.log(gasPayments)

//ТИПЫ ДАННЫХ
//Number
let data = 29
console.log(data)
console.log(typeof data)
//string
const masseger = 'С добрым утром Мир, Я счастлива сегодня и сейчас!'
console.log(masseger)
console.log(typeof masseger)
//OBJECT
let the = {
  sun: true,
  rain: false,
}
console.log(the.rain)
console.log(typeof the)
//Boolean
let numder = 1 > 0
console.log(numder)
console.log(typeof numder)
//ПРЕОБРАЗОВАНИЕ ТИПОВ ДАННЫХ
let firstname = '85'
console.log(firstname)
console.log(typeof firstname)

firstname = Number(firstname)
console.log(typeof firstname)
console.log(firstname)

let tea = '26'
console.log(typeof tea)
console.log(tea)
tea = Number(tea)
console.log(typeof tea)
console.log(tea)

//ЧИСЛА
//floor - в меньшую сторону
let one = Math.floor(5.8)
//ceil - в большую сторону
let two = Math.ceil(2.3)
// round - до ближайшего целого числа
let three = Math.round(4.7)
//Math.random() - возвращает псевдослучайное число в диапазоне [0, 1)
console.log(Math.random())
console.log(Math.random())
console.log(Math.random())
//возвращает наиболее меньшее число из перечисленых
console.log(Math.min(5, 58, 49))
console.log(Math.max(5, 58, 49))
//в степень возвести
console.log(Math.pow(5, 8))
console.log(one)
console.log(two)
console.log(three)

//Сколько знаков после ,
let four = 25.124569873
console.log(four.toFixed(3))

//проблема с плавающей , . 0,1 0,2..... видится как 0,1=0,10000000000000002 , при сложении 0,2+0,2 ответ будет не 0,3 , а 0,3000000000004 . решение проблемы ниже в примере
let five = 0.1 + 0.2
console.log((0.1 * 10 + 0.2 * 10) / 10)

//Вывести с 150,58  px = 150
let numFive = parseInt('150.38 px')
console.log(numFive)
console.log(typeof mumFive)

//Вывести с 150,58  px = 150,38
let numSixt = parseFloat('150.38 px')
console.log(numSixt)
console.log(typeof numSixt)

///STRING
let text = 'Привет Ирина !!!'
console.log(text)
console.log(typeof text)

//составление строк с подставлеными згачениями
const cityOne = 'Kiev'
const boos = 'Gunsel'
const dataOne = '17.05.2021 - 06.10'
const vasseger = `Ирина едит в ${cityOne} на автобусе ${boos} ${dataOne}`
console.log(vasseger)
console.log(typeof vasseger)
//перенос строки
const textOne =
  ' Привет \n Я Ирина \n Бугаенко \n и мне летом \n исполнится 30 лет'
console.log(textOne)
//табуляция (абзац)
const textTwo =
  ' Ирина прожила 23 года в городе герой Одесса.\n\t И 7 лет в Киеве.\n\t\t Из них 5 лет на квартире \n\t\t\tи 2 года в собственной.'
console.log(textTwo)

// Слеш как знак припинания по тексту
const textThree = ' Привет, я учу javaScript на курсах GoIt\\Youtube! '
console.log(textThree)

//кавічки внутри текста как знак правописания
const textFour = 'Привет, мне нравится учить , и я выучу "Java Script" !'
console.log(textFour)
//Длина строки (количество символов)
const texetFive = 'Helo Irina Bugaenko! '
console.log(texetFive.length)
//вывести нужный символ строки в консоль
const textSixst = 'Привет!'
const firstSumbol = textSixst[0]
console.log(firstSumbol)
//вывести в консоль каждый символ на новую строку
for (const newww of textSixst) {
  console.log(newww)
}

let boooc = 'Irina'
// регистр - все БОЛЬШИЕ
console.log(boooc.toUpperCase())
//регистр - все маленькие
console.log(boooc.toLowerCase())

const message = 'Welcome to Bahamas!'
console.log(message.toLowerCase())
console.log(message.toUpperCase())
//если в строке нужно найти значение
const string = 'Привет'
console.log(string.indexOf('рив'))

console.log(string.includes('рив'))
let string1 = 'ИРИНА'
console.log(string1.startsWith('РИН'))
console.log(string1.endsWith('А'))
//вывести часть строки
const texst10 = 'Привет!'
console.log(texst10.slice(1, 2))
console.log(texst10.slice(-2, -1))
console.log(texst10.slice(1))

//Циклы
//Цикл WHILE
// let numSeven = 3
// while (numSeven < 25) {
//   console.log(numSeven)
//   numSeven++
// }
// let num = 5;
// while (num){
//   console.log (num);
//   num --;
// }
let counter = 0

while (counter < 10) {
  console.log(counter)
  counter += 1
}

let clientCounter = 18
const maxClients = 25

while (clientCounter < maxClients) {
  console.log(clientCounter)
  clientCounter += 1
}

//  do while

let num = 0
do {
  console.log(num)
  num++
} while (num < 10)

//for
// const max = 10

// for (let i = 0; i < max; i += 1) {
//   console.log(i)
// }

const max = 10;

for (let i = 0; i < max; i += 1) {
  console.log(`${max} % ${i} = `, max % i);
}

//break прекратить работу досрочно

// for (let i = 0; i < 10; i += 1) {
//   if (i === 5) {
//     console.log('Дошли до 5-й итерации, прерываем цикл!');
//     break;
//   }
// }

let num1 = 0;
for ( ; num1 < 5; num1 ++) {
  console.log (num1)
  if (num1 == 3) break;
}
console.log ( `Работа окончена, num1 = ${num1}`)

// continue - досрочно прекратить выполнение части тела и перейти к выполнению следующего круга . В данном примере пропущено 2 
let num2= 0;
for ( ; num2 < 5; num2 ++) {
 
  if (num2 == 3) continue;
  console.log (num2)
}