// enum example of string
var info;
(function (info) {
    info["name"] = "name";
    info["class"] = "class";
    info["school"] = "school";
})(info || (info = {}));
console.log(info.name);
console.log(info.school);
export {};
