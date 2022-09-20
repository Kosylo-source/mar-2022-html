// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули

fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(value => value.json())
    .then(value => {
        let htmlDivElement = document.createElement('div');
        htmlDivElement.setAttribute('class', 'globalWrap' )
        document.body.append(htmlDivElement);
        for (const users of value) {

            const divWrap = document.createElement('div');
            divWrap.setAttribute('class', 'divWrap' )
            const textWrap = document.createElement('div');
            textWrap.setAttribute('class', 'textWrap' )

            textWrap.innerHTML = `<h2 class = 'userIdText'>${users.id}. ${users.name}</h2>`;


            const buttonWrap = document.createElement('div');
            buttonWrap.setAttribute('class', 'buttonWrap' )

            divWrap.append(textWrap,buttonWrap)
            htmlDivElement.append(divWrap);



            const button = document.createElement('button');
            button.setAttribute('class', 'button' )
            button.innerHTML = `<a href="../HTML/user-details.html" style="text-decoration: none">Details</a>`
            button.onclick = function () {
                localStorage.setItem('userName', JSON.stringify(`${users.name}`))
                localStorage.setItem('userId', JSON.stringify(`${users.id}`))
                button.disabled = true;
            }
            buttonWrap.append(button)
            divWrap.append(buttonWrap);

        }});

// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.
//
// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
// Стилизация проекта -
// index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.
// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.
// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так, что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)


