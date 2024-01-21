"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Q12
function cancatw_array(arr1, arr2) {
    let array = arr1.toString();
    let array2 = arr2.toString();
    let concate_array = array + array2;
    let concate_array3 = concate_array.split(",");
    return concate_array3;
}
let arr1 = ["ali", "hassan", "hamid"];
let arr2 = ["zain", "hussain"];
console.log(cancatw_array(arr1, arr2));
