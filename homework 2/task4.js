/* Напишите ф-цию с помощью которой можно выполнять действия с задержкой */

const sleep = ms => {
    return new Promise(res => {
        setTimeout(res, ms);
    })
};

sleep(5000).then(() => {
    console.log('Выполнилось через 5 секунд');
});
