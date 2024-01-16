"use strict";
//rest parameter 
function pizza(myFav, ...others) {
    return `my favt flavour: ${myFav} others : ${others.join(" ")}`;
}
console.log(pizza("bbq", "lasania", "fajita", "mix"));
