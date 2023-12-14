var a="To be or not be"
var b=a.charAt(11)
console.log(a)
console.log(b)

//replace()function
var str="to be or not to be"
var b=str.replace("be","Hello")
console.log(str)
console.log(b)

var str="to be or not to be"
var b=str.replace(/be/g,"Hello")
console.log(str)
console.log(b)


var str="to be or not to be"
var b=str.replace(/to/i,"Hello")
console.log(str)
console.log(b)


var str="to be or not to be"
var b=str.replace(/to/gi,"Hello")
console.log(str)
console.log(b)
