function logger(a, b) {
    console.log("Value of number: " + a + ", Value of msg: " + b);
}
var a = 12, b = "Hello Class";
//logger(a,b);
function loggerV2(a, b) {
    console.log("Value of number: " + a + ", Value of msg: " + b);
}
function loggerV3(p, a) {
    console.log("Value of number: " + p + ", Value of msg: " + a);
}
var person = { name: 'Kurt Wonnegut' };
var address = { street: 'lyngbyvej 23' };
loggerV3(person, address);
