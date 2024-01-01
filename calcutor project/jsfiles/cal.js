function main() {
    let num1 = 5;
    let num2 = 10;
    let operation = "+";
    if (operation = "+") {
        sum(num1, num2);
    }
    else if (operation = "-") {
        sub(num1, num2);
    }
    else if (operation = "*") {
        multiply(num1, num2);
    }
    else if (operation = "/") {
        division(num1, num2);
    }
    else {
        console.log("Invaild operation");
    }
}
function sum(num1, num2) {
    var result = num1 + num2;
    console.log("sum", result);
}
function sub(num1, num2) {
    var result = num1 - num2;
    console.log("sub", result);
}
function multiply(num1, num2) {
    var result = num1 * num2;
    console.log("multiply", result);
}
function division(num1, num2) {
    var result = num1 / num2;
    console.log("division", result);
}
export {};
