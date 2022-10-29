const loadBtn = document.querySelector(".js-load");
const resultsContainer = document.querySelector(".js-results");
const searchInput = document.querySelector(".js-input");

loadBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  const searchValue = searchInput.value.trim().toLowerCase();
  fetch(`https://api.github.com/users/${searchValue}`)
    .then(response => response.json())
    .then(
      (data) =>
        (resultsContainer.innerHTML = `<div class="response-container">
                  <img src="${data.avatar_url}">
                  <p> Имя: <span>${data.name ? data.name : 'Пользователь не указал имя'}</span><p>
                  <p> О себе: <span>${data.bio ? data.bio : 'Пользователь не указал о себе'}</span><p>
                  <p> Кол-во репозиториев: <span>${data.public_repos}</span><p>
              </div>`)
    );
});


/* Получение данных от пользователях с помощью Axios */
const getUsers = async () => {
  const users = await axios.get('https://jsonplaceholder.typicode.com/users');
  users.data.forEach(user => {
    const div = document.createElement('div');
    div.innerHTML = `
        <p>${user.name}</p>
        <p>${user.phone}</p>
        <p>${user.email}</p>
      `;
    resultsContainer.append(div);
  });
}

getUsers();