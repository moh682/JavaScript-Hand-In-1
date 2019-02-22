# JavaScript-1 Assignment. #

## Explain the differences between Java and JavaScript. You should include both topics related to the fact that Java is a compiled language and JavaScript a scripted language, and general differences in language features. ##

Java and JavaScript may sound nearly identical to the untrained eye, so we are going to mention some differences between
these programming languages.

| Java | JavaScript |
|:----------------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------:|
| Java is a Compiled language like C  and Pascal, meaning it need to be  compiled before being able to run. | JavaScript is an interpreted language, because  JavaScript was made for the web, the browsers  interpreter reads the code and execute it. |
| Java Is a strict typed language  which means you have to specify a  type when declaring a variable/object. | JavaScript is also a Dynamic typed language, meaning you don't need to declare the type when instantiating |
| Java is also a synchronous, which means that it execute the code line by line. | JavaScript on the other hand is the opposite, which is Asynchronous. This means you will be able to execute lines in parallel. | 

## Explain the two strategies for improving JavaScript: ES6 (es2015) + ES7, versus Typescript. What does it require to use these technologies: In our backend with Node and in (many different) Browsers. ##

### JavaScript ES6(es2015) and ES7: #

* The natural evolution of JavaScript, bringing features like arrow functions, Classes and Inheritance, promises, Generators and much more.
* Can be used with NodeJS (almost) out of the box with LTS v6.x(Long Term Support stream), otherwise via a transpiler (Babel)

Babel is a essentially an ECMAScript 6 to ECMAScript 5 compiler. It allows you to use ES6 features in your projects and then compiles ES5 for you to use in production.

### Useful features, that came with ES6 and compare it with ES5: #

This is how the code would look like, if you wanted to have a default value for the arguments. 
```javascript
var getAccounts = function(limit) {
  var limit = limit || 10
  ...
}
```
But with ES6, the option to type it would be inside the parameters.
```javascript
var getAccounts = function(limit = 10) {
  ...
}
```    
### Important features for developers in es2016+: #

The huge game changer for language is the "async" function. By just adding "async" in front of a function, you can make the code act in a synchronous flow. The exact opposite of what we were used to previously, as JavaScript being an asynchronous language. 

* With this feature, working with AJAX requests must easier. 
* Waiting for Promises and process to finish is easier as well. 

An example of the feature below.

```javascript
async function createEmployeeWorkflow(cb){
  var err;

  try {
    var employee = await createEmployee();
    
    if (employee.needsManager()){
      var manager = await selectManager(employee);
      employee.manager = manager;
    }
    
    await saveEmployee(employee);
  } catch (ex) {
    err = ex;
  }

  cb(err, employee);
}
```
This is how you could use the async feature, to make your code synchronous. 

### TypeScript

Now that we have talked about features given to us by ES6(es2015) and ES7. some features are not supported in some browsers. This mean the features are not compatible in some browsers, alleviating programmers performance. There are also moment when the program you are building need a strict typed language and don't want to learn a new language. 

TypeScript solves all of the above. 

* TypeScript is a free open source language, developed and maintained by Microsoft. It is a strict superset of JavaScript, and adds optional static typing and many of the features from es2015 and es2016.
* TypeScript can be used in all browsers when compiled into ES5.
* TypeScript can be used with NodeJS with a typescript compiler, which would be node.js or git.
* TypeScript can be used in both Angular and React.
* TypeScript is strongly supported by Microsoft and is included as a first-class programming language in Microsoft Visual Studio 2013 Update 2 and later, beside C# and other Microsoft languages.

## Explain generally about node.js, when it “makes sense” and npm, and how it “fits” into the node echo system.##

Node.js is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications.
It uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.

### Why node ? 

* Because of it's non blocking API
* Builds high-performance servers
* Node, combined with a browser, a document DB (ex. MongoDB) and JSON offers a Unified JavaScript Development Stack

### Why NOT node ? 

* under constant development, some versions might be unsupported
* Existing packages changes all the time (always check versions)
* Unhandled errors will shutdown the server, because node is non-blocking thanks to JS

### Best Suited For

* Application involving a lot of IO
* Real Time chat server
* Web servers
* Rest servers
* Streaming servers
* Games 

### NOT Suited for

* Heavy CPU intensive application 

## Explain about the Event Loop in Node.js. ##

The event loop is explained in java through the stack, which explain when each expression is called. it explains why javascript is non-blocking and will just skip to the next method. and thats why we have the callback issues. 

Languages like Java is a blocking language which mean when the method runs, it stops until the current code is executed, then jumps to the next, and that is the complete different of what JavaScript does. 

### Call Stack:
Runs first, these are the executed calls from javascript.
 
### WebApi's:
These run and are send away to the browser and to different threads, they complete separately and then when they are finished the go to the task queue.
 
### Task Queue:
Holds the finished webapi processes then when the call stack is empty, it sends them to the call stack again.

### Figure showing the event loop:

<img src="https://cdn-images-1.medium.com/max/1600/1*FA9NGxNB6-v1oI2qGEtlRQ.png" width="500">

**The Event Loop in JavaScript is explained [here](https://www.youtube.com/watch?v=8aGhZQkoFbQ), in this youtube video!** 

## Explain (some) of the purposes with the tools Babel and WebPack, using  examples from the exercises

- Babel is essentially an ECMAScript 6 to ECMAScript 5 compiler. It allows you to use ES6 features in your projects and then compiles ES5 for you to use in production.

* Webpack is a bundler for modules. The main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.good Webpack notes<br/>
* Bundles ES Modules, CommonJS and AMD modules (even combined).
* Can create a single bundle or multiple chunks that are asynchronously loaded at runtime (to reduce initial loading time).
* Dependencies are resolved during compilation, reducing the runtime size.
* Loaders can preprocess files while compiling, e.g. TypeScript to JavaScript, Handlebars strings to compiled functions, images to Base64, etc.
* Highly modular plugin system to do whatever else your application requires.
* we bundle all files into one big file (or a couple files) in order to reduce the number of requests. 
Another common approach to speed up the bundling operation is to “minify” the bundled code. 
Minification is the process of removing unnecessary characters from source code (those only meant for humans).

### Examples
index.html<br />
show our html code with javascript support.
```javascript
<html lang="en">
<head>
    <meta charset="UTF-8">
    
    <title>Getting Started with Webpack</title>
</head>
<body>
    <h1>WebPack is fun</h1>
    <div id="my-table"></div>
    <script src="bundle.js"></script>
</body>
</html>
```
main.js<br />
our javascript code.
```javascript
require('./main.css');
const name = 'Scotch.io';
setTimeout(() => console.log(`Hello there from ${name}`), 300);
```
Webpack.config.js<br />
This file exports our project's webpack configuration object.
```javascript
module.exports = {
    entry: './main.js',
    output: {
        filename: './bundle.js'
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
                loader: "file-loader"
            }
        ],
    }
};
```

## Explain (some) of the purposes with the tools Babel and WebPack, using examples from the exercises. ##

Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments

### What can babel do for you? 

* Transform syntax
* Plyfill features that are missing in you target environment. 
* Source code Transformation

### Babel Example

```javascript
[1, 2, 3].map(n => n ** 2);
```
Arrow functions are not supported in every browser on the internet. By using babel the code above, would be converted to browser-compatible JavaScript, as below. 

```javascript
[1,2,3].map(function (n) {
  return Math.pow(n, 2);
});
```

### What is Module Bundling and why bother?

On a high level, module bundling is simply the process of stitching together a group of modules (and their dependencies) into a single file(or group of files) in the correct order.

#### Why Bundle files?

When you divide your program into modules, you typically organize those modules into different files and folders (think React Components).
As a result, each of those files has to be included in your main HTML file in a <script> tag, which is then loaded by the browser when a user visits your home page.
Having separate <script> tags for each file means that the browser has to load each file individually:
  →This has a cost in terms of page load time.

To get around this problem, we bundle all files into one big file (or a couple files) in order to reduce the number of requests. 
Another common approach to speed up the bundling operation is to “minify” the bundled code. 
Minification is the process of removing unnecessary characters from source code (those only meant for humans).

#### Example of Bundles in real world.

##### Rarely seen
* **CommonJS**
One part of CommonJS is the Module specification. Node.js is a server-side JavaScript runtimes that implement modules based on the CommonJS Module specification
* **Asynchronous module definition (AMD)** 
 AMD is another specification for modules. RequireJS is probably the most popular implementation of AMD. One major difference from CommonJS is that AMD specifies that modules are loaded asynchronously.

##### More common 
* **Native JS (es2015)**
ECMAScript2015 and forward has native support for Modules.
Exporting/importing values from/to modules without global namespace pollution
* **WebPack**
WebPack is built, from the ground up, to help you manage static assets for the front-end


 * **Asynchronous module definition (AMD)**

## Explain the purpose of “use strict” and Linters, exemplified with ESLint. ##
