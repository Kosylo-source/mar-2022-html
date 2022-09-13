// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// const div = document.createElement('div');
// div.setAttribute('id', 'text');
// div.innerText = 'Hello!';
//
// const button = document.createElement('button');
// button.innerText = 'Click';
//
// document.body.append(div, button);
//
// button.onclick = function () {
//     div.style.display = 'none';
// }

//
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let input = document.createElement('input');
// input.type  = 'number';
//
// let button = document.createElement('button');
// button.innerText = 'Click';
//
// document.body.append(input, button);
//
// button.addEventListener('click', function (){
//     if (input.value >=18) {
//         alert ('Hello!')
//     }else {
//         alert('blocked')
//     }
//     input.value = '';
// })

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// let button = document.getElementById('but');
// button.addEventListener('click', function (){
//     console.log(document.forms.form0ne.input0ne.value);
//     console.log(document.forms.form0ne.inputTwo.value);
//     console.log(document.forms.formTwo.inputThree.value);
//     console.log(document.forms.formTwo.inputFour.value);
// })

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додаткова частина для завдання)
// const input0ne = document.createElement('input');
// const inputTwo = document.createElement('input');
// const inputThree = document.createElement('input');
// let button = document.createElement('button');
//
// button.innerText = 'Click';
// document.body.append(input0ne, inputTwo, inputThree, button);
//
// button.addEventListener('click', function (){
//     const tr = input0ne.value;
//     const td = inputTwo.value;
//     const inputText = inputThree.value;
//     function creatorTable(tr, td, text) {
//         const table = document.createElement('table');
//         document.body.append(table);
//
//         for (let i = 0; i < tr; i++) {
//             let tr = document.createElement('tr');
//             table.appendChild(tr);
//
//             for (let j = 0; j < td; j++) {
//                 let td = document.createElement('td');
//                 td.innerText = `${text}`;
//                 td.style.border = '1px solid red';
//                 tr.appendChild(td);
//             }
//         }
//     }
// creatorTable(tr, td, inputText);
// })

