/* Удалите из массива дубликаты */
let arr = [1, 2, 3, 5, 1, 6, 2, 5, 6, 7];

arr = Array.from(new Set(arr));
