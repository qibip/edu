// let

//     Используется для переменных, значение которых может изменяться.
//     Область видимости ограничена блоком { ... }.

// const

//     Используется для переменных, значение которых не изменяется.
//     Требует присвоения значения при объявлении.
//     Однако, если это объект или массив, их содержимое может меняться.

//Создай переменную let с любым числом. Увеличь её значение на 10.
let asi = 20;
asi += 10;
console.log(asi);

//Объяви массив через const и добавь в него два элемента.
const array = [2, 56, 7, 88, 23];
array.push(2);
console.log(array);

//Попробуй использовать переменную let вне блока { ... } и посмотри, что произойдет.
let i = 0;
while (i < 10) {
  let k = 20;
  console.log(k);
  i++;
}
// console.log(k);

//Напиши стрелочную функцию, которая возвращает сумму двух чисел.
const summ = (a, b) => a + b;
console.log(summ(17, 3));

//Напиши стрелочную функцию, которая принимает число и возвращает его квадрат.
const coub = (c) => c * c;
console.log(coub(3));

//Используй стрелочную функцию с методом массива map, чтобы удвоить значения [5, 10, 15].
let array4 = [5, 10, 15];
array4 = array4.map((m) => m * 2); // (m) => m * 2 анонимная функция внутри метода мап, применяется к каждому элементу
console.log(array4);
