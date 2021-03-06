// Задание
// Нашему сервису необходимо рассчитать среднее время проведённое в одной игре для каждого игрока,
//     и получить общую сумму этих времён.Рассчитать время для каждого из игроков, можно разделив его время(свойство playtime) на
// количество игр(свойство gamesPlayed).

// Тесты
// Объявлена переменная players.
// Значение переменной players это массив объектов игроков.
// Объявлена переменная totalAveragePlaytimePerGame.
// Значение переменной totalAveragePlaytimePerGame это число 1023.
// Для перебора массива players используется метод reduce().

const players = [
  { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
  { name: 'Поли', playtime: 469, gamesPlayed: 2 },
  { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
  { name: 'Киви', playtime: 241, gamesPlayed: 1 },
];
// Пиши код ниже этой строки

const totalAveragePlaytimePerGame = players.reduce(((acc, player) => 
    acc + player.playtime / player.gamesPlayed),0
 );

console.log(totalAveragePlaytimePerGame);