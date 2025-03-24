const sortByAge = {
  user1: { name: 'John', age: 30 },
  user2: { name: 'Jane', age: 25 },
  user3: { name: 'Bob', age: 35 },
};

const userArr = Object.entries(sortByAge);

console.log(userArr.sort((a, b) => b.age - a.age));
