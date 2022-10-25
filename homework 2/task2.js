/* Объедините 2 объекта */

const obj1 = { id: 1, name: 'userName' };
const obj2 = { id: 1, password: 'qwerty' };

const obj3 = { ...obj1, ...obj2 };
