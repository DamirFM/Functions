const groupBy = (objects, key) => objects.reduce((acc, object) => {

    const groupName = object[key];
    // контейнером группы выступает массив
    // Оператор нулевого слияния возвращает пустой массив, если в аккумуляторе ничего нет
    const group = acc[groupName] ?? [];
    // возвращается новый объект аккумулятора
    // старый аккумулятор деструктурируется, для текущей группы записывается новый массив с данными
    // квадратные скобки нужны, чтобы указать имя группы в качестве ключа
    return { ...acc, [groupName]: group.concat(object) };
  }, {});
  
  export default groupBy;