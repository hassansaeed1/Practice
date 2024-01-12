var directions;
(function (directions) {
    directions[directions["north"] = 2] = "north";
    directions[directions["easth"] = 3] = "easth";
    directions[directions["west"] = 4] = "west";
    directions[directions["south"] = 5] = "south";
})(directions || (directions = {}));
let Directions = directions.north;
console.log(Directions);
console.log(directions.west);
console.log(Directions);
export {};
