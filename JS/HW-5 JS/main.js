// - Створити змінні. Присвоїти кожному з них значення:
// 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

// let a1 = 'hello';
// let a2 = 'owu';
// let a3 = 'com';
// let a4 = 'ua';
// let a5 = 1;
// let a6 = 10;
// let a7 = -999;
// let a8 = 123;
// let a9 = 3.14;
// let a10 = 2.7;
// let a11 = 16;
// let a12 = true;
// let a13 = false;
// console.log(a1);
// console.log(a2);
// console.log(a3);
// console.log(a4);
// console.log(a5);
// console.log(a6);
// console.log(a7);
// console.log(a8);
// console.log(a9);
// console.log(a10);
// console.log(a11);
// console.log(a12);
// console.log(a13);

// - Створити об'єкт book з наступними полями :
// назва, (тип string)
// кількість сторінок (числовий тип),
// жанр (string)
// let book1 = {
//     title: 'Bukvar',
//     pages: 100,
//     genre: 'drama',
// };
// console.log(book1);

// - Створити об'єкт book з наступними полями :
// назва, (тип string)
// кількість сторінок (числовий тип),
// жанр (string)
// автори (тип - масив, кожен елемент масиву - це стрінга)
// let book2 = {
//     title: 'Bukvar2',
//     pages: 500,
//     genre: 'fantasy',
//     authors: [
//         'Kosylo V.I.',
//         'Vasya S.F.',
//         'Sergio O.P.']
// }
// console.log(book2);


// - Створити 3 змінних firstName, middleName, lastName,
// наповнити їх своїм ПІБ. З'єднати їх в одну змінну person
// (Не об'єкт, просто за допомоги конкатенації)

// let firstName = 'Volodymyr';
// let middleName = 'Igorovych';
// let lastName = 'Kosylo';
// // let person = firstName + ' ' + middleName + ' ' + lastName;
// let person = `${firstName} ${middleName} ${lastName}`;
// console.log(person);
// let fn = 'Serhii';
// let mn = 'Serhiiyovich';
// let ln = 'Zhuravlov';
//
// // let person = fn + ' ' + mn + ' ' + ln;
//
// let person = `${fn} ${mn} ${ln}`;
// console.log(person);

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими
// Ім`ям, По-Батькові та роками. та вивести в консоль

// let firstname = prompt ('enter your first name');
// let middlename = prompt ('enter your middle name');
// let lastname = prompt('enter your last name');
// let person = `${firstname} ${middlename} ${lastname}`;
// console.log(person);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
// let a = 100;
// let b = '100';
// let c = true;
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);

// - Створити масив об'єктів з назвою books з наступними полями
// - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
// let books = [
//     {title:'name of title 1', pages: '1000', genre: 'drama', authors: ['Kosylo1','Kosylo2','Kosylo3']},
//     {title:'name of title 2', pages: '1010', genre: 'fantasy', authors: ['Kosylo3','Kosylo4','Kosylo5']},
//     {title:'name of title 3', pages: '1020', genre: 'fantsy', authors: ['Kosylo2','Kosylo3','Kosylo1']},
//     {title:'name of title 4', pages: '1030', genre: 'drama', authors: ['Kosylo4','Kosylo3','Kosylo5']},
// ]
// console.log(books[0]);
// console.log(books[1]);
// console.log(books[2]);
// console.log(books[3]);
// console.log(books[3].authors[0]);

