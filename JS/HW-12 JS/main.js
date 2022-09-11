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
