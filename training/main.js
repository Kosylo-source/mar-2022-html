// for (let i = 0; i < 20; i++) {
//     document.write('<div><h2>Hello World</h2></div>');
// }
// for (let i = 0; i < 20; i++) {
//     document.write(`<div><h2>Hello World ${i}</h2></div>`);
// }

// let i = 0;
// while (i < 20) {
//     document.write('<div></div><h1>"gdsgsdf"</h1></div>');
//     i++
// }
// let i = 0;
// while (i < 20) {
//     document.write(`<div></div><h1>gdsgsdf ${i}</h1></div>`);
//     i++
// }

// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// document.write(`<ul>`)
// function foo () {
//     for (const argument of listOfItems) {
//                 document.write(`<li>${argument}</li>`)
// }
//     document.write(`</ul>`)
// }
// foo(listOfItems)

// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];

// document.write('<div class="product-wrap">')
// for (const product of products) {
//     document.write('<div class="product-card">')
//         document.write(`<h3 class="product-title">Title - ${product.title}</h3>
//                         <img src="${product.image}" alt="" class="product-image">      
//                         <h3>Price - ${product.price}</h3>`)
//     document.write('</div>')
// }
// document.write('</div>')

// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
// let reduce = users.reduce((accum, card) => {
//         if (card.status === 'true') {
//             accum.spades.push(card);
//         } else if (card.status === 'false') {
//             accum.diamonds.push(card);
//         } else {
//             accum.joker.push(card);
//         }
//         return accum;
//     }, {
//         spades: [],
//         diamonds: [],
//         hearts: [],
//         clubs: [],
//         joker: []
//     }
// );
// console.log(reduce);

// function foo () {
//     for (const argument of users) {
//         if (argument.age === 31) {
//             console.log(argument);
//         }
//     }
// }
// foo (users)
//
// console.log('---------------');
//
// let a = users.filter(e=>e.age === 31)
// for (let i = 0; i < a.length; i++) {
//     const aElement = a[i];
//     console.log(aElement);
// }
//
// console.log('---------------');
//
// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     if (user.age === 31) {
//         console.log(user);
//     }
// }
//
// console.log('---------------');

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
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
// function foo (arr) {
//     for (const arrElement of arr) {
//         document.write(`<ul>`)
//         document.write(`<li>${arrElement.id} ${arrElement.name} ${arrElement.age} </li>`)
//         document.write(`</ul>`)
//     }
// }
// foo (array)
//
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
// function foo (i) {
//     let min = i[0];
//     for (const minElement of i) {
//         if (minElement<min) {
//             min = minElement
//             console.log(min);
//         }
//     }
// }
// foo (array)

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
// //
// function foo (arr) {
//     let sum = 0;
//     for (const arrElement of arr) {
//         sum = sum +  arrElement
//
//     }
//     return sum
// }
// console.log(foo(array));
// fu
// nction foo(arr){
//     let sum = 0;
//     for (const arrElement of arr) {
//         sum += arrElement;
//     }
//     return sum;
// }
// console.log(foo(array));

// - Знайти та вивести довижину настипних стрінгових значень
// let str1 = 'hello world';
// let str2 = 'lorem ipsum';
// let str3 = 'javascript is cool';
// console.log(str1.length, str2.length, str3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// console.log(str1.toUpperCase(), str2.toUpperCase(), str3.toUpperCase());
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// console.log(str1.toUpperCase().toLowerCase(), str2.toUpperCase().toLowerCase(), str3.toUpperCase().toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// let s = str.trim();
// console.log(s);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// // let a = str.split(' ')
// let b = (splitToArray) => splitToArray.split (' ');
// let c =b(str);
//
// for (let i = 0; i < c.length; i++) {
//     const bElement = c[i];
//     document.write(`<ul>`)
//     document.write(`<li>${bElement}</li>`)
//     document.write(`</ul>`)
// }
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// let str = 'Ревуть воли як ясла повні';
// let stringToArray = (str) => str.split(' ');
// console.log(stringToArray(str));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на
// стрінгові.
// let arr = [10,8,-7,55,987,-1011,0,1050,0];
// let a = arr.toString(value => value+' ')
// console.log(a);
// let array = [10,8,-7,55,987,-1011,0,1050,0];
// let strings1 = array.map(value => value.toString());
// let strings2 = array.map(value => value + '');
// let strings3 = array.map(value => String(value));
// console.log(strings1);
// console.log(strings2);
// console.log(strings3);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
// let nums = [11,12,13,10,9,2,-1]
// //
// let sort = (arr, direction) => {
//     if (direction === 'ascending') {
//         arr.sort((a,b)=>a-b)
//     } else if (direction === 'decsending') {
//         arr.sort ((a,b) => b-a)
//     }
//     return arr
// }
// console.log(sort (nums, 'ascending'));

// let nums = [11,21,3];
// let sortNums = (arr, direction) => {
//     if (direction ==='ascending' ) {
//         arr.sort((a, b) => a - b);
//     }else if (direction ==='descending') {
//         arr.sort((a,b) => b-a);
//         }
//     return arr;
// }
// console.log(sortNums(nums, 'descending'));

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // -- відсортувати його за спаданням за monthDuration
// let ss = (arr) => arr.sort((a,b) => a.monthDuration - b.monthDuration);
// console.log(ss(coursesAndDurationArray));
// let filter = (array) => array.sort((a,b) => b.monthDuration - a.monthDuration)
// console.log(filter(coursesAndDurationArray));
//
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let filter = (array) => array.filter(value => value.monthDuration > 5);
// console.log(filter);

// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
//
// let deckOfCards = [
//     {
//         cardSuit: null,
//         value: 'Joker',
//         color: 'black'
//     },
//     {
//         cardSuit: null,
//         value: 'Joker',
//         color: 'red'
//     },
//     {
//         cardSuit: 'spade',
//         value: 'ace',
//         color: 'black'
//     },
//     {
//         cardSuit: 'clubs',
//         value: 'ace',
//         color: 'black'
//     },
//     {
//         cardSuit: 'diamond',
//         value: 'ace',
//         color: 'red'
//     },
//     {
//         cardSuit: 'heart',
//         value: 'ace',
//         color: 'red'
//     },
//     {
//         cardSuit: 'spade',
//         value: 'king',
//         color: 'black'
//     },
//     {
//         cardSuit: 'clubs',
//         value: 'king',
//         color: 'black'
//     },
//     {
//         cardSuit: 'diamond',
//         value: 'king',
//         color: 'red'
//     },
//     {
//         cardSuit: 'heart',
//         value: 'king',
//         color: 'red'
//     },
//     {
//         cardSuit: 'spade',
//         value: 'queen',
//         color: 'black'
//     },
//     {
//         cardSuit: 'clubs',
//         value: 'queen',
//         color: 'black'
//     },
//     {
//         cardSuit: 'diamond',
//         value: 'queen',
//         color: 'red'
//     },
//     {
//         cardSuit: 'heart',
//         value: 'queen',
//         color: 'red'
//     },
//     {
//         cardSuit: 'spade',
//         value: 'jack',
//         color: 'black'
//     },
//     {
//         cardSuit: 'clubs',
//         value: 'jack',
//         color: 'black'
//     },
//     {
//         cardSuit: 'diamond',
//         value: 'jack',
//         color: 'red'
//     },
//     {
//         cardSuit: 'heart',
//         value: 'jack',
//         color: 'red'
//     },
//     {
//         cardSuit: 'spade',
//         value: '10',
//         color: 'black'
//     },
//     {
//         cardSuit: 'clubs',
//         value: '10',
//         color: 'black'
//     },
//     {
//         cardSuit: 'diamond',
//         value: '10',
//         color: 'red'
//     },
//     {
//         cardSuit: 'heart',
//         value: '10',
//         color: 'red'
//     },
//     {
//         cardSuit: 'spade',
//         value: '9',
//         color: 'black'
//     },
//     {
//         cardSuit: 'clubs',
//         value: '9',
//         color: 'black'
//     },
//     {
//         cardSuit: 'diamond',
//         value: '9',
//         color: 'red'
//     },
//     {
//         cardSuit: 'heart',
//         value: '9',
//         color: 'red'
//     },
//     {
//         cardSuit: 'spade',
//         value: '8',
//         color: 'black'
//     },
//     {
//         cardSuit: 'clubs',
//         value: '8',
//         color: 'black'
//     },
//     {
//         cardSuit: 'diamond',
//         value: '8',
//         color: 'red'
//     },
//     {
//         cardSuit: 'heart',
//         value: '8',
//         color: 'red'
//     },
//     {
//         cardSuit: 'spade',
//         value: '7',
//         color: 'black'
//     },
//     {
//         cardSuit: 'clubs',
//         value: '7',
//         color: 'black'
//     },
//     {
//         cardSuit: 'diamond',
//         value: '7',
//         color: 'red'
//     },
//     {
//         cardSuit: 'heart',
//         value: '7',
//         color: 'red'
//     },
//     {
//         cardSuit: 'spade',
//         value: '6',
//         color: 'black'
//     },
//     {
//         cardSuit: 'clubs',
//         value: '6',
//         color: 'black'
//     },
//     {
//         cardSuit: 'diamond',
//         value: '6',
//         color: 'red'
//     },
//     {
//         cardSuit: 'heart',
//         value: '6',
//         color: 'red'
//     }
// ]
//
// - знайти піковий туз
//
// let find = deckOfCards.find(value => value.cardSuit === 'spade' && value.value === 'ace')
// let find = deckOfCards.find(value => value.cardSuit === 'spade' && value.value === 'ace');
// console.log(find);
//
// - всі шістки
//
// let filter = deckOfCards.filter(value => value.value === 6);
// console.log(filter);
//
// - всі червоні карти
//
// let filter = deckOfCards.filter(value => value.color === 'red');
// console.log(filter);
//
// - всі буби
//
// let filter = deckOfCards.filter(value => value.cardSuit === 'diamond');
// console.log(filter);
//
// - всі трефи від 9 та більше
//
// let filter = deckOfCards.filter(value => value.cardSuit === 'spade' && value.value > 8 || typeof value.value === 'string' &&
//     value.cardSuit === 'spade' || value.value === 'Joker' && value.color === 'black');
// console.log(filter);
//
// let filter = deckOfCards.filter(value => value.cardSuit === 'spade' && value.value > '8' || value.value === '10' &&
// value.cardSuit === 'spade' || value.value === 'Joker' && value.color === 'black');
// console.log(filter);
// {
//     spades:[],
//         diamonds
// :
//     [],
//         hearts
// :
//     [],
//         clubs
// :
//     []
// }
//

// let reduce =deckOfCards.reduce((accum, card)=>{
//     if (card.cardSuit === 'spade') {
//         accum.spades.push(card)
//     } else if (card.cardSuit ==='diamond') {
//         accum.diamonds.push (card)
//     } else if (card.cardSuit === 'heart') {
//         accum.heart.push (card)
//     } else if (card.cardSuit === 'clubs')  {
//         accum.clubs.push (card)
//     }else {
//         accum.joker.push (card)
//     }
//     return accum
// },{
//     spades: [],
//     diamonds: [],
//     heart: [],
//     clubs: [],
//     joker: []
// })
// console.log(reduce);
// let reduce = deckOfCards.reduce((accum, card) => {
//         if (card.cardSuit === 'spade') {
//             accum.spades.push(card);
//         } else if (card.cardSuit === 'diamond') {
//             accum.diamonds.push(card);
//         } else if (card.cardSuit === 'heart') {
//             accum.hearts.push(card);
//         } else if (card.cardSuit === 'clubs') {
//             accum.clubs.push(card);
//         } else {
//             accum.joker.push(card);
//         }
//         return accum;
//     }, {
//         spades: [],
//         diamonds: [],
//         hearts: [],
//         clubs: [],
//         joker: []
//     }
// );
// console.log(reduce);
//
// let str = '   $%^&Harry   @#$%^&*()  Potter   @#$%';
// const norm = (st) => {
//     let string = st.split('').map(value => (value >= 'A' && value <= 'Z') || (value >= 'a' && value <= 'z') ? value : ' ').join('').trim();
//     while (string.includes('  ')) {
//         string = string.replace('  ', ' ');
//     }
//     return string;
// }
// console.log(norm(str));

// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// function AAA(id, name, age) {
//     this.id = id;
//     this.name = name;
//     this.age = age;
// }
//
// let a1 = new AAA(2, 'olya', 31)
// let a2 = new AAA(1, 'olyaa', 32)
// let a3 = new AAA(4, 'olyaaa', 33)
// let a4 = new AAA(3, 'olyaaaa', 34)
// let arr = [];
// arr.push(a1, a2, a3, a4)
// console.log(arr);
//
// let sor = arr.sort ((a,b)=> a.id-b.id)
// console.log(sor);
// let parne = arr.filter(value => value.id % 2 == 0)
// console.log(parne);
// function User(id, name, surName, email, phone) {
//     this.id = id;
//     this.name = name
//     this.surname = surName;
//     this.email = email;
//     this.phone = phone;
// }
//
// let array = []
// let user1 = new User(2, 'Vasya', 'Pupkin', 'bbb@gmail.com', +38093124124);
// let user2 = new User(5, 'Vasya', 'Pupkin', 'bbb@gmail.com', +38093124124);
// let user3 = new User(32, 'Vasya', 'Pupkin', 'bbb@gmail.com', +38093124124);
// let user4 = new User(65, 'Vasya', 'Pupkin', 'bbb@gmail.com', +38093124124);
// let user5 = new User(41, 'Vasya', 'Pupkin', 'bbb@gmail.com', +38093124124);
// let user6 = new User(37, 'Vasya', 'Pupkin', 'bbb@gmail.com', +38093124124);
// let user7 = new User(21, 'Vasya', 'Pupkin', 'bbb@gmail.com', +38093124124);
// let user8 = new User(22, 'Vasya', 'Pupkin', 'bbb@gmail.com', +38093124124);
// let user9 = new User(26, 'Vasya', 'Pupkin', 'bbb@gmail.com', +38093124124);
// let user10 = new User(53, 'Vasya', 'Pupkin', 'bbb@gmail.com', +38093124124);
//
// array.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);
//
// console.log(array);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filter = array.filter(value => value.id % 2 == 0);
// console.log(filter);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// let sort = array.sort ((a, b) => a.id - b.id);
// console.log(sort);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// class Client {
//     constructor (id, name, surname , email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// class Client {
//     constructor(id, name, surName, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surName;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let array = [];
// let client1 = new Client(2, 'Vasya', 'Vasya', 'cascdsdcsd', 2134354364, [1, 2, 3]);
// let client2 = new Client(1, 'Vasya', 'Vasya', 'cascdsdcsd', 2134354364, [1]);
// let client3 = new Client(3, 'Vasya', 'Vasya', 'cascdsdcsd', 2134354364, [23, 4]);
// let client4 = new Client(5, 'Vasya', 'Vasya', 'cascdsdcsd', 2134354364, [1, 2, 3, 4, 5]);
// let client5 = new Client(89, 'Vasya', 'Vasya', 'cascdsdcsd', 2134354364, [1, 2, 3, 4, 5, 6, 7, 7]);
// let client6 = new Client(12, 'Vasya', 'Vasya', 'cascdsdcsd', 2134354364, [2, 6, 7]);
// let client7 = new Client(25, 'Vasya', 'Vasya', 'cascdsdcsd', 2134354364, [5, 6]);
// let client8 = new Client(56, 'Vasya', 'Vasya', 'cascdsdcsd', 2134354364, [2, 3, 4, 5]);
// let client9 = new Client(65, 'Vasya', 'Vasya', 'cascdsdcsd', 2134354364, [1, 2, 34, 4, 5, 6, 7, 8, 9, 9]);
//
// array.push(client1, client2, client3, client4, client5, client6, client7, client8, client9);
//
// let sort = array.sort((a, b) => a.order.length - b.order.length);
//
// console.log(sort);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Car(model, producer, year, maxSpeed, engine) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;
// //this.drive = function () {
// // console.log();
// //     this.drive = function () {
// //         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
// //     }
//     this.info = function () {
//         for (const arrayElement in this) {
//             console.log(`${arrayElement} --- ${this[arrayElement]}`);
//         }
//     }
//     this.inreaseMaxSpeed = function (newSpeed) {
//             this.maxSpeed +=newSpeed
//             console.log(this.maxSpeed);
//         }
//
// //     this.info = function () {
// //         for (const item in this) {
// //             console.log(`${item} -- ${this[item]}`);
// //         }
// //     }
// //
// //     this.increaseMaxSpeed = function (newSpeed) {
// //         this.maxSpeed += newSpeed;
// //         console.log(this.maxSpeed);
// //     }
// //
// //     this.changeYear = function (newYear) {
// //         this.year = newYear
// //         console.log(this.year);
// //     }
// //     this.addDriver = function (driver) {
// //         this.driver = driver;
// //         console.log(this.driver);
// //     }
// // }
// //     let car = new Car('VolksWagen', 'Deutschland', 2020, 280, 3.5);
// // car.drive();
// // car.info();
// // car.increaseMaxSpeed(100);
// // car.changeYear(2021);
// // car.addDriver("Vova");
// // console.log(car);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна
// швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// class Car{
//     constructor(model, producer, year, maxSpeed, engine) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engine = engine;
//     }
//
//
//     drive () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//
//     info () {
//         for (const item in this) {
//             console.log(`${item} -- ${this[item]}`);
//         }
//     }
//
//     increaseMaxSpeed (newSpeed) {
//         this.maxSpeed += newSpeed;
//         console.log(this.maxSpeed);
//     }
//
//    changeYear (newYear) {
//         this.year = newYear
//         console.log(this.year);
//     }
//     addDriver (driver) {
//         this.driver = driver;
//         console.log(this.driver);
//     }
// }
//     let car = new Car('VolksWagen', 'Deutschland', 2020, 280, 3.5);
// car.drive();
// car.info();
// car.increaseMaxSpeed(100);
// car.changeYear(2021);
// car.addDriver("Vova");
// console.log(car);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
// function Cinderella (name, age, footSize) {
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
// }
//
// let arrCinderella = [
//     new Cinderella('Alisa', 22, 36),
// new Cinderella('Alisa', 22, 37),
// new Cinderella('Inna', 23, 38),
// new Cinderella('Alina', 24, 35),
// new Cinderella('Alisa', 25, 36),
// new Cinderella('Alisa', 26, 34),
// new Cinderella('Alisa', 28, 38),
// new Cinderella('Alisa', 24, 32),
// new Cinderella('Alisa', 25, 35),
// new Cinderella('Alisa', 22, 34),
// ];
// //
// function Prince (name, age, findSize) {
//     this.name = name;
//     this.age = age;
//     this.findSize = findSize;
// }
//     let newPrince = new Prince('Vasya', 27, 37);
// //
//     let find = (arrCind, prince) => {
//         for (const arrCindElement of arrCind) {
//             if (arrCindElement.footSize === prince.findSize) {
//                 return `${arrCindElement.name}`
//             }
//         }
// }
// console.log(find(arrCinderella, newPrince));
// let find = (arrCind, prince) => {
//     for (const item of arrCind) {
//         if (item.footSize === prince.findSize) {
//             return `${item.name}`
//         }
//     }
// }
// console.log(find(arrCinderella, newPrince));
//
// let cind = arrCinderella.find(value => value.footSize === newPrince.findSize);
// console.log(cind);

// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"



// let elementById = document.getElementById('content');
// const text = elementById.innerText
// console.log(text);

// -- отримує текст з блоку з id "rules"
// console.log(document.getElementById(`rules`).innerText);

// -- замініть текст параграфа з id 'content' на будь-який інший
// let elementById=document.getElementById(`content`)
// elementById.innerText = 'Hello';
// elementById.innerHTML = 'Hello';
// elementById.textContent = 'Hello';

// -- замініть текст параграфа з id 'rules' на будь-який інший
// let innerText= document.getElementById(`rules`);
// innerText.innerText = 'Hello';
// innerText.innerHTML = 'Hello';
// innerText.textContent = 'Hello';

// -- змініть кожному елементу колір фону на червоний
// let children = document.body.children;
// for (const child of children) {
//     child.style.background = 'green'
// }

// -- змініть кожному елементу колір тексту на синій
// let elementList = document.querySelectorAll(`*`)
// for (const elementofListElement of elementList) {
//     elementList.style.color = "red"
// }

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
// console.log(document.getElementById('rules').classList);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
// let colorClass = document.getElementsByClassName(`fc_rules`)
// for (const element of colorClass) {
//     element.style.color ='red'
// }

//
// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :

// a) додає клас з назвою групи, елементу з ід main_header
// let elementById = document.getElementById(`main_header`);
// elementById.className = 'Hello';
// elementById.classList.add('Hello1');
// elementById.setAttribute('class', 'Hello3')

// b) робить шириниу елементу ul 400px
// let elementByTag = document.getElementsByTagName('ul')
// for (const elementByTagElement of elementByTag) {
//     elementByTagElement.style.width = '400px';
// }
//
// let elementByTag = document.getElementsByTagName('ul')[0];
// elementByTag.style.width = '400px'

// c) робить шириниу всіх елементів з класом linkList шириною 50%
// let fileWidth = document.getElementsByClassName('linkList');
// for (const fileWidthElement of fileWidth) {
//     fileWidthElement.style.width = '50%';
// }

// d) отримує текст який зберігається в елементі з класом listElement2
// let getText = document.getElementsByClassName('listElement2')
// for (const textElement of getText) {
//     console.log(textElement.innerText);
// }

// e) отримує всі елементи li та змінює ім колір фону на сірий
// let allLi = document.getElementsByTagName('li');
// for (const allLiElement of allLi) {
//     allLiElement.style.background = 'silver'
// }

// f) отримує всі елементи 'a' та додає їм клас anchor
// let elementsByTagName = document.getElementsByTagName('a');
// for (const elementsByTagNameElement of elementsByTagName) {
//     elementsByTagNameElement.className = 'anchor'
// }

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let elementsByTagName = document.getElementsByTagName('a');
// for (const elementsByTagNameElement of elementsByTagName) {
//     if (elementsByTagNameElement.innerText === link3) {
//         elementsByTagNameElement.style.fontSize = '40px'
//     }
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let elementsByTagName = document.getElementsByTagName('a');
// for (const elementsByTagNameElement of elementsByTagName) {
//     elementsByTagNameElement.className = (`element_${elementsByTagNameElement.innerText}`);
// }

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let backColor = prompt('Enter color');
// let elementsByClassName = document.getElementsByClassName('sub-header');
// for (const elementsByClassNameElement of elementsByClassName) {
//     elementsByClassNameElement.style.background = backColor;
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let bG=prompt('Enter color');
//
// let elementsByClassName = document.getElementsByClassName('sub-header');
// for (const elementsByClassNameElement of elementsByClassName) {
//     if (elementsByClassNameElement.innerText === 'content 2 segment') {
//         elementsByClassNameElement.style.color=bG;
//     }
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let text = prompt('Enter text');
// let elementsByClassName = document.getElementsByClassName('content_1');
// for (const elementsByClassNameElement of elementsByClassName) {
//     elementsByClassNameElement.innerText = text;
// }

// l) отримати елементи p та змінити їм padding на 20px
// let elementsByTagName = document.getElementsByTagName('p');
// for (const elementsByTagNameElement of elementsByTagName) {
//     elementsByTagNameElement.style.padding = '20px'
// }

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
// let elementsByClassName = document.getElementsByClassName('text2');
// for (const elementsByClassNameElement of elementsByClassName) {
//     elementsByClassNameElement.innerText = (`march-2022`);
// }