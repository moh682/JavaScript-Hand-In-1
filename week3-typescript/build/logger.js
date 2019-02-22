function logger(a, b) {
    console.log("Value of number: " + a + ", Value of msg: " + b);
}
var a = 12, b = "Hello Class";
//logger(a,b);
function loggerV2(a, b) {
    console.log("Value of number: " + a + ", Value of msg: " + b);
}
function loggerV3(p, a) {
    console.log("Person: " + p.name + ", Street: " + a.street);
}
var person = { name: 'Kurt Wonnegut' };
var address = { street: 'lyngbyvej 23' };
//loggerV3(person, address);
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Address = /** @class */ (function () {
    function Address(street) {
        this.street = street;
    }
    return Address;
}());
//loggerV3(new Person('Kurt'), new Address('Some Road 46'));
function loggerV4(p, a) {
    console.log("Person: " + p + ", Street: " + a);
}
loggerV4(person, address);
//# sourceMappingURL=logger.js.map