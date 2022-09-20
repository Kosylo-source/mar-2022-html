// Написати функцію, яка приймає будь яке неваліднет імя та валідизує його в наступний вигляд
// const s1 ='      Harry-2324-      Potter3333       ';
// const s2 ='      Harry-%#$*^%    -  **Potter3333         ';
// const s3 ='         Harry--        +Potter      ';
//
// const normalize = (str) => {
//     let string =str.split('')
//     .map(value => (value >="A" && value<= 'Z' ) || (value >= 'a' && value <= 'z') ? value : ' ')
//         .join ('')
//         .trim();
//     while (string.includes('  ')){
//         string = string.replace('  ', ' ');
//
//     }
//     return string
// }
// console.log(normalize(s1));
// console.log(normalize(s2));
// console.log(normalize(s3));

//Написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. Масив вивести в консоль.
// function rec(startElement) {
//     let newArr = [];
//     for (const item of startElement) {
//         if (item.children) {
//             newArr.push(...rec(item.children));
//         }
//         newArr.push(...item.classList);
//     }
//     return newArr;
// }
//     console.log(rec(document.body.children));

//Створити під кожен елемент окремий блок. В цьому блоці, під кожну властивість та властивості внутрішніх об'єктів створити свої окремі блоки.
//
// let userlist= [
//     {
//         id: 1,
//         name: 'Vova',
//         username: 'gfdggds',
//         email: 'sdgg@gmail.com',
//         adress: {
//             street: 'Adag fasdf',
//             suite: 'Apt. 25',
//             city: 'Tgfsgsg',
//             zipcode: '825252',
//             geo: {
//                 lat: '-37.12512',
//                 lng: '81.21512'
//         }
//     },
//         phone: '25215125125'
// }];
//
// const content = document.createElement('div');
//
// for (const user of userlist) {
//     const userDiv = document.createElement('div');
//     userDiv.style.marginTop ='10px';
//
//     for (const userKey in user) {
//         const innerDiv = document.createElement('div');
//
//         if (typeof user[userKey] !=='object') {
//             innerDiv.innerText =`${userKey} : ${user[userKey]}`;
//         }else {
//             innerDiv.innerText = `${userKey}`;
//             for (const item in user[userKey]) {
//                 const itemDiv = document.createElement('div');
//
//                 if (typeof user[userKey][item] !== 'object') {
//                     itemDiv.innerText = `${item} : ${user[userKey][item]}`
//                 } else {
//                         itemDiv.innerText = `${item}`
//
//                         for (const itemDivElement in user[userKey][item]) {
//                             const itemElement = document.createElement('div');
//                             itemElement.innerText = `${itemDivElement} : ${user[userKey][item][itemDivElement]}`
//                             itemDiv.append(itemElement);
//                         }
//                     }
//                     innerDiv.append(itemDiv);
//                 }
//             }
//         userDiv.append(innerDiv);
//     }
//     content.append(userDiv);
// }
// document.body.append(content);

//За допомогою рекурсії перебрати структуру сторінки, зробити об'єкт, всі заголовки покластив  (масив) характеристику (headings),
// всі параграфи покласти в характеристику (масив) paragraphs.
// const ps = [];
// const hs = [];
//
// const rec = (item) => {
//     for (const element of item.children) {
//         if (element.localName === 'h2') hs.push(element.innerText);
//         if (element.localName === 'p') ps.push(element.innerText);
//         if (element.children) rec(element);
//     }
// }
// const element = document.getElementById('wrap');
// rec (element);
//
// const obj = {
//     title: hs,
//     paragraph: ps
// }
// console.log(obj);

//Зробити div contenteditable ввести будь яке ціле число та при настисканні табуляції перетворитит його на подвійний тег.
//
// let divElement = document.createElement('div');
// document.body.append(divElement);
//
// divElement.setAttribute('contenteditable', true);
// divElement.style.height = '100px';
// divElement.style.border = '1px solid black';
//
// divElement.onkeydown = (e) => {
//     const name = (e.key);
//
//     if (name==='Tab') {
//         divElement.innerText = `<${divElement.innerText}></${divElement.innerText}>`;
//     }
// }

//Створити три чекбокси. Кожен з них активує фільтр для масиву.
// const content = document.getElementById('content');
// const form = document.forms.form;
//
// const save = (users) =>{
//     content.innerHTML = '';
//     users.forEach(user =>{
//         const userDiv = document.createElement('div');
//         userDiv.innerText = JSON.stringify(user);
//         content.append(userDiv)
//     })
// }
// save(usersWithAdress);
//
// form.onchange = () => {
//     let filter = userWithAdress;
//     if (form.status.checked) {
//         filter =filter.filter(value => !value.status);
//     }
//     if(form.city.checked) {
//         filter=filter.filter(value => value.adress.city === 'Kyiv')
//     }
//     if (form.age.checked) {
//         filter = filter.filter(value => value.age>=29);
//     }
//     save(filter);
// }

//Створити під кожен об'єкт свій блок з колонкою "додати до улюблених", при натисканні на яку, об'єкт потрапляє
//до масиву faivorite у локальному сховищі.
// const   faivoriteKey = 'faivorites';
// localStorage.setItem(faivoriteKey, JSON.stringify([]));
// const container = document.getElementById('container');
//
// users.forEach(user => {
//     const userDiv = document.createElement('div');
//
//     const content = document.createElement('div');
//     content.innerText = `Name: ${user.name}\nAge: ${user.age}\nStatus: ${user.status}`;
//
//     let btn = document.createElement('button');
//     btn.innerText = 'Add to favourites';
//     btn.onclick = () => {
//         JSON.parse(localStorage.getItem(favouritesKey)) || [];
//         favourites.push(user);
//         localStorage.setItem(faivoriteKey, JSON.stringify(favourites));
//         btn.disabled = true;
//     }
//     userDiv.append(content, btn);
//     container.append(userDiv)
// })

//При виділенні сегменту тексту на сторінці він стає жирний або якось інакше змінює свій стан.
// let bold = document.getElementById('bold')[0];
// bold.onmouseup = function () {
//     let select = document.getSelection().toString();
//     bold.innerHTML = bold.innerText.replace(`select, <b>${select}</b>`)
// }

//Проміси
let one = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve(1)
    }, 2000)
})

let two = new Promise((resolve, reject) => {
    setTimeout(()=> {
        reject(2)
    }, 1000)
})
let three = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve(3)
    }, 4000)
})

// Promise.race([one, two, three]).then(value => {
//     console.log(value);
// })

// Promise.all([one, two, three]).then(value => {
//     console.log(value);
// })

// Promise.allSettled([one, two, three]).then(value => {
//     console.log(value);
// })