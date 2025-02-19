const member = {
  name: 'Alex',
  age: 20,
  tel: '3 - 33 - 3',
  number: 17,
};

const arr = [34, 'Peter', 76, 'Jobs'];

// Обход объектов в JavaScript

// Когда работаешь с объектами, нужно уметь эффективно извлекать и перебирать данные.

// ✅ for...in – перебор всех ключей объекта
// ✅ for...of – перебор значений массива или итерируемого объекта
// ✅ Object.keys() – получение массива ключей
// ✅ Object.values() – получение массива значений
// ✅ Object.entries() – получение массива пар [ключ, значение]

// for...in – Перебор ключей объекта
// for...in перебирает все ключи объекта.
// for (let e in member) {
//   const summ = (i) => i + 1;
//   console.log(summ(e));
// }
// const user = { name: "Vlad", age: 35, city: "Moscow" };
// for (let key in user) {
//   console.log(`${key}: ${user[key]}`); // Обращение к значению идет не  точечно а через []
// }

// for...of – Перебор значений (только для массивов и итерируемых объектов)
// Используется для массивов, Map, Set, но не для объектов.
// В JavaScript изначально итерируемыми являются:
// ✅ Массивы
// ✅ Строки
// ✅ Map и Set
// ✅ NodeList (в DOM)
// ✅ TypedArray (Uint8Array и другие)
// ✅ Arguments (внутри функций)
// Обычные объекты ({}) НЕ являются итерируемыми. Их нельзя перебирать for...of, но можно for...in.
// for (const element of arr) {
//   console.log(element);
// }

// Object.keys() – Получение массива ключей
// Возвращает массив ключей объекта.
// console.log(Object.keys(member));

// Object.values() – Получение массива значений
// Возвращает массив значений объекта.
// console.log(Object.values(member));

// Object.entries() – Получение массива пар [ключ, значение]
// Возвращает массив, где каждый элемент – пара [ключ, значение].
// console.log(Object.entries(member));

// ЗАДАЧИ

// Используя for...in, перебери и выведи все ключи и значения объекта:
// const car = { brand: "Tesla", model: "Model S", year: 2022 };
// const car = { brand: 'Tesla', model: 'Model S', year: 2022 };
// for (let e in car) {
//   console.log(e, car[e]);
// }

// // Используя Object.keys(), получи массив всех ключей объекта member.
// console.log(Object.keys(member));

// // Используя Object.values(), получи массив всех значений объекта member.
// console.log(Object.values(member));

// // Используя Object.entries(), выведи массив пар [ключ, значение] для объекта member.
// console.log(Object.entries(member));
