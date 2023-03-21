"use strict";


// Присваивание обьекта к строке
// let obj =  {};
// alert(obj);


// Использование обьекта как ключ
// // let another = {};
// // another[obj] = 123; 
// // console.log (another[obj]);


// Преобразование к намберу
// let obj1 = {};
// let obj2 = {}; 
// console.log (typeof(obj1 - obj2)); 


// Преобразование к строке обьекты
// let obj1 = {}; 
// let obj2 = {};
// console.log(typeof(obj1 + obj2));


// Логические операторы такие как */-%** и тд Преобразуют обьекты в числовый тпи данных
// let obj1 = {}; 
// let obj2 = {}; 
// console.log(typeof(obj1 *= obj2));


// Числовое явное преобразование
// let obj = {};
// let num = Number(obj); 
// console.log (typeof num)


// Приминения хинтов на обьект
// let user = {
//     name: "Nick",
//     age: 500,
//     logic: true,

//     [Symbol.toPrimitive](hint) {
//        alert (`Хинтяра ${hint}`);
//        return  hint == "string" ? `{name: ${this.name}}` : this.age
//     }
// }
// alert (user);
// alert (+user);


// Start metod call and apply
// function typeUser(c, d) {
//     console.log (this.a + this.b + c + d);
// }

// let obj = {a: 1, b: 2};

// typeUser.apply(obj, [3, 5]);
// // add.typeUser(obj [3, 4]);


// Call фукнция
// let small = {
//     a: 1,

//     go(b, c, d) {
//         console.log (this.a + b + c + d);
//     }
// };
// let large = {
//     a: 100
// };

// small.go(2, 3, 4);
// small.go.call(large, 2, 3, 4);




// BIND()
// let GlobalObj = {
//     num: 1,
//     work(mike, carl, john) {
//        console.log (this.num + mike + carl + john);
//     }
// }
// let newObj = {
//     num: 200
// };
// let bindTest = GlobalObj.work.bind(newObj, 2);
// console.log (bindTest);
// bindTest(3, 4);


// let GlobalVar = {
//     a: 1,
//     b: 1,
//     c: 1,

//     home(apple, melon, cherry) {
//         console.log (this.a + apple + melon + cherry);
//     },
//     work(mike, carl, john) {
//         console.log (this.b + mike + carl * john);
//     },
//     go(mersedes, bmw, dodge) {
//         console.log (this.c + mersedes + bmw % dodge); 
//     }
// }
// let varA = {
//     a: 100
// };
// let varB = {
//     b: 200
// };
// let varC = {
//     c: 300
// }

// BIND()///////////    ^^^^^^^^^^^^^^^code
// let bindTestOne = GlobalVar.home.bind(varA, 4);
// console.log(bindTestOne);
// bindTestOne(5, 5);

//Apply()///////////////////
// let bindTestTwo = GlobalVar.work.bind(varB, 4);
// console.log (bindTestTwo);
// bindTestTwo(5, 5);

// let bindTestThree = GlobalVar.go.bind(varC, 30);
// console.log (bindTestThree);
// bindTestThree(30, 30);

// standart/////////////
// GlobalVar.home.call(varA, 4, 5, 5);  //114
// GlobalVar.work.call(varB, 4, 5, 5);  //214
// GlobalVar.go.call(varC, 30, 30, 30); //330

// GlobalVar.home(4, 5, 5); //15
// GlobalVar.work(2, 5, 10); //80
// GlobalVar.go(2, 7, 5); //5


















