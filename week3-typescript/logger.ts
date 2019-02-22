function logger(a,b){
  console.log(`Value of number: ${a}, Value of msg: ${b}`)
}

var a = 12, b = "Hello Class";

//logger(a,b);

function loggerV2(a : number, b : string){
  console.log(`Value of number: ${a}, Value of msg: ${b}`)
}

//loggerV2(a,b);

interface IPerson {name : string}
interface IAddress {street : string}

function loggerV3(p : IPerson, a : IAddress){
  console.log(`Person: ${p.name}, Street: ${a.street}`)
}
const person = {name : 'Kurt Wonnegut'};
const address = {street : 'lyngbyvej 23'};

//loggerV3(person, address);

class Person implements IPerson {
  public name: string;
  constructor(name : string){
    this.name = name;
  }
}

class Address implements IAddress{
  public street: string;
  constructor(street : string){
    this.street = street;
  }
}

//loggerV3(new Person('Kurt'), new Address('Some Road 46'));

function loggerV4<T,U>(p : T, a : U){
  console.log(`Person: ${p}, Street: ${a}`)
}

loggerV4(person,address);

// Generic Logger !
class GenericLogger<T,U>{
  log = (a : T , b : U) => console.log('Val 1: '+ a, 'Val 2: ' + b); 
}

const personLogger = new GenericLogger<IPerson,IAddress>();
const personLoggerV2 = new GenericLogger<number,IAddress>();
personLogger.log(person ,address);
personLoggerV2.log(1 ,address);
