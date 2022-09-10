//Приєймає масив та повертає середнє арифметичне.
// let array = [1, 5, 7, 4, 8];
// //
// // function average(arr) {
// //     let av = 0;
// //     for (const avElement of arr) {
// //                 av += avElement;
// //     }
// //     return av/arr.length;
// // }
// // console.log(average(array));
//
// let average = (arr) => {
//     let sum = 0;
//     for (const arrElement of arr) {
//         sum+=arrElement;
//     }
//     return sum/arr.length;
// }
// console.log(average(array));

//Приймає масив, повертає найменше, виводить найбільше
//
// let minMax = (...arg) => {
//     let min = arg[0];
//     let max = arg[0];
//     for (const arrElement of arg) {
//         if (arrElement < min) {
//             min = arrElement
//         }
//         if (arrElement > max) {
//             max = arrElement
//         }
//     }
//     console.log(max);
//     return min;
// }
// console.log(minMax(1, 2, 4, 6));

//Створити масив який заповнюватиметься рандомними числавми
// let random = () => {
//     let arr = [];
//     for (let i = 0; i < 10; i++) {
//         // arr.push(Math.round(Math.random() * 100));
//         arr[i] =Math.round(Math.random() * 100);
//     }
//     return arr;
// }
// console.log(random());

//Створити масив який заповнюватиметься рандомними числавми від 0 до limit
// let random = (limit) => {
//     let arr = [];
//     for (let i = 0; i < limit; i++) {
//         // arr.push(Math.round(Math.random() * 100));
//         arr[i] =Math.round(Math.random() * 100);
//     }
//     return arr;
// }
// console.log(random(5));

// //Функція приймає масив та виводить його у зворотньому порядку
// let arr = [1, 2, 3, 4, 5];
// let rev = (array) => {
//     let newArray = [];
//     // // for (let i = array.length - 1, j=0; i >= 0; i--, j++) {
//     // //      newArray [j] = array[i];
//     // for (let i = array.length - 1; i >= 0; i--) {
//     //     newArray.push(array[i])
//     for (let i = 0; i < array.length; i++){
//         newArray.push(array.length-1-i);
//         }
// return newArray;
// }
// console.log(rev(arr));

//Функція приймає масив з двої об'єкатів та виводить його у зворотньому порядку
// let arr = [
//     {
//         age: 33
//     },
//     {
//         age: 22
//     }];
// // let change = (array) => {
// //     let plate = array[0];
// //     array[0] = array[1];
// //     array[1] = plate;
// //     return array;
// // }
// // console.log(change(arr));
// let change = (array) => [array[0], array[1]] = [array[1], array[0]];
// console.log(change(arr));

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// let rectangle = (a, b) => a*b;
// console.log(rectangle(5, 5));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// let circle = (r) => 3.14*Math.pow(r,2);
// console.log(circle(10));
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
// let arr = [1,2,3,4];
// let view = (array) => {
//     for (const arrayElement of array) {
//         console.log(arrayElement)
//     }
// }
// console.log(view(arr));

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let foo = (text) => {document.write(`<p>${text}</p>`)
// }
// foo('Hello')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let ul = (text) => {document.write(`<ul>
//     <li>${text}</li>
//     <li>${text}</li>
//     <li>${text}</li>
//     </ul>`)}
// ul('Hello');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let foo = (text, num) => {
//     document.write (`<ul>`)
//     for (let i = 0; i < num; i++) {
// document.write(`<li>${text}</li>`)
//     }
//     document.write (`</ul>`)
// }
// foo('hello',5)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// let foo = (arr) => {
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
// let foo =(array) => {
//     for (const arrayElement of array) {
//         document.write(`<div>${arrayElement.id}</div><div>${arrayElement.name}</div><div>${arrayElement.age}</div>`)
//     }
// }
// foo(array)

// - створити функцію яка повертає найменьше число з масиву
//
// let array = [1,2,3,4,-5];
// let foo = (array) => {
//     let min = array[0]
//     for (const arrayElement of array) {
//         if (arrayElement<min)
//             min=arrayElement
//     }
//     return min;
// }
// console.log(foo(array));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//
//
// let arr = [1,2,3,4];
// let foo = (arr) => {
//     let sum = 0;
//     for (const arrElement of arr) {
//         sum+=arrElement
//     }
//     return sum;
// }
// console.log(foo(arr));


