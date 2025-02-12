// Деструктуризация массива
const array = [20, 7, 75, 43];
const [one, two, three] = array;
console.log(one);
console.log(two);
console.log(three);
// Пропускаем элементы массива
const [, , a, b] = array;
console.log(a);
console.log(b);
// Добавим свои элементы при деструктуризации
const [, , , , m = 8] = array;
console.log(m);

// Деструктуризация объекта
const herBrain = { name: 'Vlad', age: 17 };
const { name, age } = herBrain;
console.log(name);
console.log(age);

// Деструктуризация объекта со своими переменными
const { name: Names, age: Ages } = herBrain;
console.log(Names);
console.log(Ages);

// Деструктуризация вложенных объектов
const newBrain = {
  namer: 'Boss',
  age: 20,
  adress: { street: 'Puska', house: 45 },
};
const { namer, age: Ag, adress: add } = newBrain;
console.log(namer, Ag, add.street, add.house);

// ЗАДАНИЯ
// Из массива [100, 200, 300] извлеки второе значение в переменную b.
const arrays = [100, 200, 300];
const [, o, ,] = arrays;
console.log(o);

// Из объекта { title: "JS Developer", level: "Junior" } извлеки title и level в отдельные переменные.
const array3 = { title: 'JS Developer', level: 'Junior' };
const { title: prof, level: stage } = array3;
console.log(prof, stage);

// Из объекта { x: 10, y: { z: 20 } } достань значение z.
const obj = { x: 10, y: { z: 20 } };
const { x: ix, y: iy } = obj;
console.log(iy.z);
