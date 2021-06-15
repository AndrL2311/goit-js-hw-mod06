// Задание
// Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет
// каждый элемент, значение которого это чётное число, добавляя к нему значение параметра value.

// Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла
// массив чисел numbers, а создавала, наполняла и возвращала новый массив с обновлёнными значениями.

// Тесты
// Объявлена функция changeEven(numbers, value).
// Функция changeEven не изменяет значение параметра numbers.
// Вызов changeEven([1, 2, 3, 4, 5], 10) возвращает новый массив [1, 12, 3, 14, 5].
// Вызов changeEven([2, 8, 3, 7, 4, 6], 10) возвращает новый массив [12, 18, 3, 7, 14, 16].
// Вызов changeEven([17, 24, 68, 31, 42], 100) возвращает новый массив [17, 124, 168, 31, 142].
// Вызов changeEven([44, 13, 81, 92, 36, 54], 100) возвращает новый массив [144, 13, 81, 192, 136, 154].
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.

function changeEven(numbers, value) {
  // Пиши код ниже этой строки

  const filteredNumbers = [];
  //   numbers.forEach(number => {
  //     if (number % 2 === 0) {
  //       filteredNumbers.push(number + value);
  //     } else {
  //       filteredNumbers.push(number);
  //     }
  //   });
  numbers.forEach(number => {
    number % 2 === 0
      ? filteredNumbers.push(number + value)
      : filteredNumbers.push(number);
  });
  return filteredNumbers;

  // Пиши код выше этой строки
}

console.log(changeEven([1, 2, 3, 4, 5], 10));
