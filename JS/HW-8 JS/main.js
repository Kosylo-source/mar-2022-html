// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function rectangle (a, b) {
//     return a*b; }
// console.log(rectangle(5, 5));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// let Pi = 3.14;
// function circle (Pi, r) {
//     return Pi*r**2;
// }
// console.log(circle(Pi, 10))
// let Pi = 3.14;

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//
// let Pi = 3.14;
//
// function cylinder(h, r, Pi) {
//     return 2 * r * Pi * (h + r);
// }
//
// console.log(cylinder(2, 5, Pi));

// - створити функцію яка приймає масив та виводить кожен його елемент
//
// let array = [1,2,3,4];
// function foo(arr) {
//     for (const arrElement of arr) {
// console.log(arrElement);
//     }
// }
// foo (array);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function txt(sometext) {
//     document.write(`<p>${sometext}</p>`);
// }
// txt('Hello!')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//
// function foo(text) {
//     document.write(`<ul>
// <li>${text}</li>
// <li>${text}</li>
// <li>${text}</li>
// </ul>`)
// }
// foo('Hello');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function liElem (text, num) {
//     document.write(`<ul>`)
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>${text}</li>`);
//
//     }
//     document.write(`</ul>`);
// }
// liElem ('Hello',5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// function foo(arr) {
//     document.write(`<ul>`);
//
//     for (const arrElement of arr) {
//         document.write(`<li>${arrElement}</li>`);
//     }
// }
// document.write(`</ul>`);
// foo(array = [1, 'Hello', true]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.' +
// ' Для кожного об'єкту окремий блок.
//
// let array = [
//     {
//         id: 1,
//         name: 'Vasya',
//         age: 22
//     },
//     {
//         id: 2,
//         name: 'Sasha',
//         age: 23
//     },
//     {
//         id: 3,
//         name: 'Petya',
//         age: 24
//     }
// ]
//
// function foo(arr) {
//     for (const arrElement of arr) {
//         document.write(`<div>${arrElement.id} ${arrElement.name} ${arrElement.age}</div>`)
//     }
// }
// foo(array);

// - створити функцію яка повертає найменьше число з масиву
//
// let array = [1,2,3,4,-5];
// function foo(arr) {
//     let min = arr[0];
//     for (const minElement of arr) {
//         if(minElement<min) {
//             min=minElement;
//         }
//     }
//     return min;
// }
// console.log(foo(array));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//
// let array = [1,2,3,4];
//
// function foo(arr){
//     let sum = 0;
//     for (const arrElement of arr) {
//         sum += arrElement;
//     }
//     return sum;
// }
// console.log(foo(array));
