# JavaScript-1 Assignment. #

### Explain the differences between Java and JavaScript. You should include both topics related to the fact that Java is a compiled language and JavaScript a scripted language, and general differences in language features. ##

Java and JavaScript may sound nearly identical to the untrained eye, so we are going to mention some differences between
these programming languages.

| Java | JavaScript |
|:----------------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------:|
| Java is a Compiled language like C  and Pascal, meaning it need to be  compiled before being able to run. | JavaScript is an interpreted language, because  JavaScript was made for the web, the browsers  interpreter reads the code and execute it. |
| Java Is a strict typed language  which means you have to specify a  type when declaring a variable/object. | JavaScript is also a Dynamic typed language, meaning you don't need to declare the type when instantiating |

### Explain the two strategies for improving JavaScript: ES6 (es2015) + ES7, versus Typescript. What does it require to use these technologies: In our backend with Node and in (many different) Browsers. ##

##### JavaScript ES6(es2015) and ES7:

* The natural evolution of JavaScript, bringing features like arrow functions, Classes and Inheritance, promises, Generators and much more.
* Can be used with NodeJS (almost) out of the box with LTS v6.x(Long Term Support stream), otherwise via a transpiler (Babel)

Babel is a essentially an ECMAScript 6 to ECMAScript 5 compiler. It allows you to use ES6 features in your projects and then compiles ES5 for you to use in production.

###### Some very nice features, that came with ES6 and compare it with ES5

This is how the code would look like, if you wanted to have a default value for the arguments.
```
var getAccounts = function(limit) {
  var limit = limit || 10
  ...
}
```
But with ES6, the option to type it would be inside the parameters.
```
var getAccounts = function(limit = 10) {
  ...
}
```    


### Explain generally about node.js, when it “makes sense” and npm, and how it “fits” into the node echo system.##

### Explain about the Event Loop in Node.js. ##

### Explain (some) of the purposes with the tools Babel and WebPack, using  examples from the exercises. ##

### Explain the purpose of “use strict” and Linters, exemplified with ESLint. ##