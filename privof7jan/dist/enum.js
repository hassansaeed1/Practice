var directions;
(function (directions) {
    directions[directions["north"] = 0] = "north";
    directions[directions["easth"] = 1] = "easth";
    directions[directions["west"] = 2] = "west";
    directions[directions["south"] = 3] = "south";
})(directions || (directions = {}));
let Directions = directions.north;
console.log(Directions);
export {};
