const numbers = [1, 2, 3];

//
// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i]);
// }

// Функциональный forEach
numbers.forEach(num => console.log(num));

// Указываем параметр idx если нужен доступ к счетчику
numbers.forEach((num, idx) => console.log(`index ${idx}, value ${num}`));

const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // [2, 4, 6]

const users = [
  { name: 'Mango', isActive: true },
  { name: 'Poly', isActive: false },
  { name: 'Ajax', isActive: true },
];

// Для каждого элемента коллекции (user) вернем значение поля name
const names = users.map(user => user.name);

console.log(names); // ["Mango", "Poly", "Ajax"]