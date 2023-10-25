const flatten = (list) => list.reduce((acc, element) => {
  const result = (Array.isArray(element) ? [...acc, ...flatten(element)] : [...acc, element]);
  return result;
}, []);

export default flatten;
// Реализуйте и экспортируйте по умолчанию функцию, которая делает плоским вложенный массив.

// Для решения задачи нельзя использовать готовые методы для выравнивания массивов.

// Примеры
// const list = [1, 2, [3, 5], [[4, 3], 2]];

// flatten(list); // [1, 2, 3, 5, 4, 3, 2]
// Подсказки
// Array.isArray - проверяет, является ли элемент массивом.
