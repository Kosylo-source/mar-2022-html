//promis
// let energy = 200;
//
// function wakeUp(energy) {
//     return new Promise((resolve, reject) => {
//         setTimeout (() => {
//             energy -= 500;
//             if (energy<=0) {
//                 reject('Ha-ha');
//                 return;
//             }
//             console.log('Прокинувся');
//             resolve(energy);
//         },2000)
//     })
// }
//
// function eat (energy) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             energy += 200;
//             console.log('Поїв');
//             resolve(energy);
//         },1500)
//     })
// }
//
// function goToWork (energy) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             energy -=500;
//             if (energy<=0) {
//                 reject('Ha-ha');
//                 return;
//             }
//             console.log('Відпрацював');
//             resolve(energy);
//         },1000)
//     })
// }
//
// wakeUp(energy)
// .then(value => {
//     console.log(`'Енергія' ${value}`);
//     console.log('----------------');
//     return eat(value);
// })
// .then(value => {
//     console.log(`'Енергія' ${value}`);
//     console.log('----------------');
//     return goToWork(value);
// })
// .then(value => {
//     console.log(`'Енергія' ${value}`);
//     console.log('----------------');
// })
// .catch(err => {
//     console.log(err);
// })

//asynk
// let energy = 800;
//
// function wakeUp(energy) {
//     return new Promise((resolve, reject) => {
//         setTimeout (() => {
//             energy -= 500;
//             if (energy<=0) {
//                 reject('Ha-ha');
//                 return;
//             }
//
//             resolve(energy);
//         },2000)
//     })
// }
//
// function eat (energy) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             energy += 200;
//
//             resolve(energy);
//         },1500)
//     })
// }
//
// function goToWork (energy) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             energy -=500;
//             if (energy<=0) {
//                 reject('Ha-ha');
//                 return;
//             }
//
//             resolve(energy);
//         },1000)
//     })
// }
//
// function message(msg, data) {
//     console.log(msg);
//     console.log(`Залишилось ${data}`);
//     console.log('--------------');
// }
//
// async function start(energy) {
//     try {
//         let data = await wakeUp(energy);
//         message('Прокинувся', data);
//
//         data = await eat(energy);
//         message('Поїв', data)
//
//         data = await goToWork(energy);
//         message('Дійшов', data)
//
//     }
//     catch (err) {
//         console.log(err);
//     }
// }
// start(energy);

// CallBack
// let energy = 0;
// function wakeUp (energy, cb) {
//     setTimeout(() => {
//         energy -=500;
//         if (energy <=0) {
//             cb('Не прокинувся', null);
//             return;
//         }
//         console.log('Прокинувся');
//         cb(null, energy)
//     },1000)
// }
// function eat (energy, cb) {
//     setTimeout(() => {
//         energy +=300;
//         console.log('Поїв');
//         cb(null, energy)
//     },1100)
// }
// function goToWork (energy, cb) {
//     setTimeout(() => {
//         energy -=400;
//         if (energy <=0) {
//             cb('Не дійшов', null);
//             return;
//         }
//         console.log('Дійшов');
//         cb(null, energy)
//     },900)
// }
// wakeUp(energy, (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(`Енергія ${data}`);
//     console.log(`------------`);
// })
//     eat(energy, (err, data) => {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         console.log(`Енергія ${data}`);
//         console.log(`------------`);
//     })
//         goToWork(energy, (err, data) => {
//             if (err) {
//                 console.log(err);
//                 return;
//             }
//             console.log(`Енергія ${data}`);
//             console.log(`------------`);
//         })

