"use strict";
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
let c = Color.Red;
console.log(c);
var color1;
(function (color1) {
    color1[color1["Red"] = 1] = "Red";
    color1[color1["green"] = 2] = "green";
    color1[color1["blue"] = 3] = "blue";
})(color1 || (color1 = {}));
let ColorName = color1[3];
console.log(ColorName);
var color2;
(function (color2) {
    color2[color2["Red"] = 1] = "Red";
    color2[color2["green"] = 2] = "green";
    color2[color2["blue"] = 3] = "blue";
})(color2 || (color2 = {}));
