"use strict";
/*They think of something you could store in a TypeScript Object. Write a program that creates
 Objects containing these items.*/
var item1 = { name: "appale", price: 15, quantity: 12 };
var item2 = { name: "Banana", price: 20, quantity: 12 };
var item3 = { name: "orange", price: 35, quantity: 6 };
console.log(item1);
console.log(item2);
console.log(item3);
var items = [{ modle: "oppo", features: "Camera", price: 27000 },
    { modle: "samsung", features: "Amoled Display", price: 550000 },
    { model: "vivo", features: "In display Finger Print", price: 36000 }
];
for (let i = 0; i < items.length; i++) {
    console.log(`Modle: ${items[i].modle} features: ${items[i].features} price: ${items[i].price}`);
}
