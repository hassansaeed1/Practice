"use strict";
//default parameter
function info(city, country = "pakistan") {
    return `${city} ${country}`;
}
console.log(info("lahore"));
