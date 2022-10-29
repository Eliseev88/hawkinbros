/* Переписать код на async/await */

async function lottery() {
    console.log("Вы начали игру");
    try {
        let result = await new Promise(function (resolve, reject) {
            setTimeout(function () {
              Math.random(0) > 0.5 ? resolve() : reject("Вы промахнулись");
            }, 1000);
          });
        console.log("Вы выиграли");
        console.log("Вам заплатили");
    } catch(e) {
        console.log(e)
    } finally {
        console.log("Игра закончена")
    }
  }
  
  lottery();
  