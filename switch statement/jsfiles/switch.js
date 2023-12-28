"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let personAge = 33;
switch (true) {
    case personAge >= 0 && personAge <= 12:
        console.log("Person is a kid");
        break;
    case personAge >= 13 && personAge <= 19:
        console.log("person is Adult");
        break;
    case personAge >= 20 && personAge <= 30:
        console.log("Person is a Toddler");
        break;
    case personAge >= 31 && personAge <= 50:
        console.log("Person Is Elder");
        break;
    default:
        console.log("Person is Old");
}
