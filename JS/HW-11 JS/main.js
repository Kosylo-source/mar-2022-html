// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
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
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//
//     this.info = function () {
//         for (const item in this) {
//             console.log(`${item} -- ${this[item]}`);
//         }
//     }
//
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed;
//         console.log(this.maxSpeed);
//     }
//
//     this.changeYear = function (newYear) {
//         this.year = newYear
//         console.log(this.year);
//     }
//     this.addDriver = function (driver) {
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
// function Cinderella(name, age, footSize) {
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
// }
//
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
//
// function Prince (name, age, findSize) {
//     this.name = name;
//     this.age = age;
//     this.findSize = findSize;
// }
// let newPrince = new Prince('Vasya', 27, 37);
//
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