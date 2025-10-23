 
 // - remove all occurrences of a value from an array
// - remove nth element from array
// - cancel a setTimeout after 4 seconds
// - switch syntax
 // - .reduce(): count occurrences of a value 
// - remove all occurrences of a value from an array
// - remove nth element from array
// - cancel a setTimeout after 4 seconds 
 // - running async functions without await 
// - destructuring (destructure array of 10 elements in 3 variables)
// - remove keys correspond to non-strings in object
 // - countdown timer that ticks to 0 and stops 
// - tomorrow’s date in DD/MM/YYYY format


// for of loop: Iterates over iterable values like strings or arrays.

// for in loop: Iterates over enumerable properties of an object.

// Promise.race vs Promise.any: race resolves/rejects on the first settled promise, while any resolves on the first fulfilled promise.

// delete: Removes a property from an object.

// undefined vs null: undefined means a variable is declared but not assigned; null is an assigned empty value.

// use strict: Enables strict mode, catching common coding errors.

// Callback hell: Nesting multiple callbacks, leading to hard-to-read code.

// Clean-up functions: Used in useEffect or event listeners to clean resources when a component unmounts.

// Applications of closure: Encapsulation, data hiding, and maintaining state in functions.

// Shadowing: Declaring a variable in a nested scope with the same name as an outer scope variable.

// Array.some: Checks if at least one element in an array passes a test.

// DOM manipulation methods: Methods like getElementById, querySelector, and appendChild modify the DOM.

// Deep copy vs shallow copy: Deep copy duplicates nested objects; shallow copy only duplicates references.

// map vs forEach: map returns a new array; forEach executes a function for each element without returning.

// default parameters: Allows functions to have default values for parameters.

// callbacks: Functions passed as arguments to other functions.

// Error objects: Built-in objects for handling errors with properties like message and name.

// typeof vs instanceof: typeof checks type of a value; instanceof checks prototype chain for object type.

// HOF example: A function like map or filter that takes another function as an argument.

// Function borrowing in JS: Using call, apply, or bind to use methods from one object on another.

// promise.allSettled: Resolves when all promises settle, with statuses of each promise.

// Optional chaining: Access nested object properties safely with ?..

// yield vs return: yield pauses generator execution; return exits a function.





// Prototype chain: Mechanism for inheritance in JavaScript objects.

// OOPS concepts: Includes encapsulation, inheritance, abstraction, and polymorphism.

// Rest operator: Collects arguments into an array.

// process.nextTick(): Executes a callback after the current operation but before the next event loop tick.

// setImmediate: Executes a callback immediately after the I/O phase of the event loop.

// proxy object: Intercepts and customizes operations on objects.

// Prototype pollution: Security issue where prototype objects are modified maliciously.

// nullish operator: Returns the right-hand operand if the left-hand operand is null or undefined.

// flatMap: Maps and flattens nested arrays into a single-level array.

// event delegation: Using a single event listener for dynamically generated elements.
// event propagation: Includes event capturing, bubbling, and delegation.

// object methods: Includes keys, values, entries, and assign for object manipulation.

// WeakRef: Creates weak references to objects for memory management.

// Arrow functions: Compact syntax for defining functions.

// event emitter: Object pattern for event-driven programming in Node.js.

// polyfills: Code that adds missing features in older JavaScript environments.


// --------------------------------Web API

// Purpose:
// Browser-provided APIs for tasks like DOM, fetch, timers, etc.

// Advantage: Simplifies complex operations.
// Disadvantage: Available only in browser environments.

// -----------------------------------Event Loop

// Purpose:
// Manages the execution of synchronous and asynchronous code in JS.

// Advantage: Enables non-blocking behavior.
// Disadvantage: Harder debugging for async operations.

// ---------------------------------Design Pattern

// Purpose:
// Reusable solutions for common coding problems.

// Example Patterns:
// Singleton, Factory, Observer, Module.
// ----------------------------------------Pure Functions

// Purpose:
// A function that always returns the same output for the same input and causes no side effects.

// Advantage: Predictable and testable.
// Disadvantage: Can’t handle async or external state.

// -------------------------------------------Arrow Functions

// Purpose:
// Short syntax for writing functions without their own this context.

// Advantage: Compact, preserves outer this.
// Disadvantage: Can’t be used as constructors or with arguments.

// ------------------------------------Map Collection

// Purpose:
// Stores key–value pairs with unique keys and preserves insertion order.

// Advantage: Allows any data type as a key.
// Disadvantage: Slightly more memory than objects.

 
// --------------------------------------------Throw Statement

// Purpose:
// Used to manually generate custom errors or exceptions.

// Advantage: Enables custom error handling.
// Disadvantage: Stops program execution unless caught.

// ----------------------------------------Block

// Purpose:
// Used to group multiple statements, usually inside { }, often for scoping let and const.

// Advantage: Prevents variable leakage to outer scope.
// Disadvantage: Variables can’t be accessed outside the block.
      
// --------------------------------------Parent class of Array

// Purpose: Arrays in JS are derived from the Array constructor, which itself extends Object.

// Advantage: Inherits all Object properties like toString, hasOwnProperty.

// Disadvantage: Sometimes confusing when checking types (typeof [] === "object").


// --------------------------------------Map vs Object

// Purpose: Both store key–value pairs, but Map allows any key type.

// Feature	Map                             object
// Key type	Any (even objects)	Only string/symbol
// Order	Maintains insertion order	Not guaranteed
// Iteration	Easier with .forEach	Requires manual iteration


// ----------------------------------------------Object.entries()

// Purpose: Converts an object into an array of [key, value] pairs.

// Advantage: Makes iteration and transformation easy.
// Disadvantage: Not suitable for very large objects due to memory overhead.


// --------------------------------------eval()

// Purpose: Executes a string of JS code.

// Advantage: Dynamically run code at runtime.
// Disadvantage: Highly insecure and slow (avoid in production)


// --------------------------------Properties of Error()

// Purpose: Provides structured error details.

// Main Properties:

// name

// message

// stack

// ----------------------------------Running async function without await

// Purpose: Execute async tasks without blocking.

// Advantage: Non-blocking execution.
// Disadvantage: You can’t catch errors easily.


// -------------------------------------Boxing

// Purpose: JS wraps primitive values into objects when needed (like new Number(5) automatically).

// Advantage: Allows using methods on primitives.
// Disadvantage: Slight performance cost.


// -----------------------Labels

// Purpose: Used with loops for breaking specific loops.

// Advantage: Helps control nested loops.
// Disadvantage: Reduces readability.


//---------------------------------- static (in class)

// Purpose: Declares methods/properties that belong to the class, not instances.

// Advantage: Useful for utility methods.
// Disadvantage: Can’t be accessed via object instances.

// -------------------------closures
// 🧠 Purpose

// A closure allows a function to “remember” variables from its outer scope even after that outer function has finished executing.
// closure: Function with access to its parent scope even after the parent has closed.

// ✅ Advantages

// Enables data privacy (like private variables in OOP).

// Useful for function factories and event handlers.

// Keeps state between function calls.

// ⚠️ Disadvantages

// Can cause memory leaks if large objects are retained accidentally.

// Harder to debug due to hidden state.
// -------------------------------Starvation
// 🧠 Purpose / Meaning

// Starvation occurs when some operations never get CPU time or never execute because other tasks are hogging resources.

// It’s a scheduling problem — not a feature.

// ✅ Advantage

// (None directly — it’s usually something to avoid.)

// Can be used in stress tests to identify performance bottlenecks.

// ⚠️ Disadvantages

// Leads to unresponsive applications.

// Certain async tasks or I/O operations may never execute.

// Bad user experience.
// ------------------------------------------this Context
// 🧠 Purpose

// this refers to the object that is currently executing the function.
// Its value changes depending on how a function is called.

// ✅ Advantages

// Enables object-oriented programming in JavaScript.

// Allows methods to operate on the data they belong to.

// ⚠️ Disadvantages

// Can be confusing in nested or callback functions.

// Arrow functions don’t bind their own this, which can lead to bugs.


// --------------------------finally

// Purpose:
// Used in try...catch...finally to run cleanup code (e.g., closing DB, ending connection) regardless of success or failure.

// Advantages:

// Ensures code executes no matter what.

// Avoids code duplication for cleanup.

// Disadvantages:

// Can hide errors if not used carefully (e.g., throwing inside finally)


// ----------------------------Nullish Coalescing (??)

// Purpose:
// Provides a default value only if the variable is null or undefined (not for 0 or "").

// Advantages:

// Safer defaulting than || (which treats 0, "" as false).

// Disadvantages:

// Limited to null and undefined (not falsy values like 0)


// n----------------------------------Hoisting: Normal vs Arrow Function

// Purpose:
// Hoisting moves function declarations to the top of scope.

// Advantages:

// Regular functions can be used before declaration.

// Disadvantages:

// Arrow functions assigned to variables are not hoisted.

// -----------------------------ECMAScript (ES

// Purpose:
// ECMAScript is the standard on which JavaScript is based (e.g., ES5, ES6, ES2020).

// Advantages:

// Defines consistent JS behavior across browsers.

//-------------------------- ES6 Alternative for IIFE

// Purpose:
// IIFE: Immediately Invoked Function Expression runs immediately after being defined.

// In ES6 modules, top-level code runs in its own scope — no need for IIFE.

// Example:

// // Before ES6
// (function() {
//   console.log("IIFE running");
// })();

// // ES6 module
// {
//   const msg = "Scoped variable";
//   console.log(msg);
// }

// -------------------------------Symbol

// Purpose:
// A unique and immutable primitive value used as object keys.

// Advantages:

// Avoids property name collisions.

// Disadvantages:

// Not enumerable (harder to debug or iterate).

// const id = Symbol("id");
// const user = { [id]: 123 };
// console.log(user[id]); // 123


// ---------------------------------JIT (Just-In-Time Compilation)

// Purpose:
// JIT compiles JS code at runtime for faster execution.

// Advantages:

// Improves performance dynamically.

// Disadvantages:

// May consume more memory/time during compilation.

// V8 Engine (Chrome/Node) uses JIT
// let sum = (a, b) => a + b;
// console.log(sum(5, 10));

// Array cloning: Duplicate arrays using slice, concat, or the spread operator.


//-------------------------------Spread operator

// Spread operator: Expands elements of arrays or objects.

// -------------------------------------Memoization

// Purpose:
// Memoization: Caching results of expensive function calls for reuse.

// Caches function results to improve performance on repeated calls.

// Advantages:

// Faster repeated computations.

// Reduces redundant work.

// Disadvantages:

// Uses more memory for cache storage.

// function memoizedAdd() {
//   const cache = {};
//   return (x) => {
//     if (cache[x]) return cache[x];
//     console.log("Computing...");
//     return (cache[x] = x + 10);
//   };
// }
// const add = memoizedAdd();
// console.log(add(5)); // Computing... 15
// console.log(add(5)); // From cache 15


// ----------------------------------Class Syntax and Methods

// Purpose:
// Provides clean OOP-style syntax in JS.

// Advantages:

// Encapsulation, reusability, inheritance.

// Disadvantages:

// Slightly more abstract (hidden prototype behavior).

// Example:

// class Car {
//   constructor(brand) {
//     this.brand = brand;
//   }
//   start() {
//     console.log(`${this.brand} started`);
//   }
// }

// const car1 = new Car("Tesla");
// car1.start();


// -----------------------------------------JAVASCRIPT
//  Javascript Is a synchronous single-thread language.
//  Everything in javascript happens in the execution context, there are two
//  components in the execution context, memory or variable environment
//  where the key value is stored and the code or thread of execution. This is
//  where the code is executed line by line
//  Javascript is used to create dynamic and interactive web content like
//  applications and browsers.
//  ● WebApplications, Mobile Applications, Games
//  ● Execution Context- Everything in JavaScript happens inside a global
//  .----------------------------------execution context

//  ● -----------------------------Call Stack

//  The Call stack maintains the order of execution context.
//  ● - --------------------------Undefined Datatypes
// A variable has been declared but not initialized with a
//  value
//  ● Notdefined-
//  Variable doesn't exist
//  ● --------------------------Primitive

//  primitive data structure is predefined by the programming
//  language-
//  int, float, char, boolean

//  ● ----------------------------Non-primitive

//  is a data structure that is built up from primitive data

//  .---------------------------------structures

//  arrays, objects, classes and functions


// //--------------for each--------------------
// -used to loop through elements of an array and execute a function for each element.

// Advantages-----

// Cleaner syntax — Easier to read and understand than a traditional for loop.

// No need for index handling — Automatically gives you element and index.

// Prevents infinite loops — Can’t accidentally forget increment like in for.

// Perfect for array operations like printing, modifying, or updating items.

// Disadvantages------

// Cannot use break or continue — Can’t stop the loop early.

// Does not return a value — Unlike map() or filter().

// Slightly slower than a for loop for large arrays.

// Synchronous only — Doesn’t work well with async/await directly.

// Functional style — Encourages declaative programming.

//  const number = [1, 2, 3, 4, 5];

//-- const foreach = number.forEach((number,index)=>console.log(index+':'+number))

//-- number.forEach((num,index)=>console.log(num))

//output
// Element at index 0: 1
// Element at index 1: 2
// Element at index 2: 3
// Element at index 3: 4
// Element at index 4: 5  it modify on original array 


// //-------------------map---------------------------

// -- Used to transform each element of an array and return a new array with the transformed values.

// Advantages----

// Returns a new array (doesn’t modify the original).

// Can be chained with other methods.

// Perfect for data transformation.

// Disadvantages------

// Slightly slower than forEach for simple loops.

// Not suitable for side effects (printing, logging).

// const number = [1,2,3,4,5]

// const map =number.map((number)=> number *2)

//  console.log(map)  //output:[4,5,6,7,8]

// //--------------------filter-------------------------

// Used to filter elements of an array based on a condition — returns only those that match.

// Advantages---

// Returns a new filtered array.

// Doesn’t change the original.

// Easy to use for search or filtering conditions.

// Disadvantages---

// Can’t directly modify elements (only filter).

// Slightly less efficient for large arrays if filtering deeply.

// const number = [1,2,3,4,5]

// const filter = number.filter((num,acc)=>{
//   console.log(num,acc);
// })

// console.log(filter);
 
// ------------------------  reduce  ----------------------

// Used to reduce an array to a single value (sum, average, object, etc.).

// Advantages

// Very powerful and flexible (sum, count, merge, etc.).

// Can perform complex data transformations.

// Works well for aggregating data.

//  Disadvantages

// Harder to read for beginners.

// Debugging inside reduce can be confusing.

// const number = [
//   {name:'nihal',age:19},
//   {name:'shihad',age:17}
// ]

// const newnumber = number.filter((num)=>
// num.name=='nihal'

// )
// console.log(newnumber)

// --------------hoisting----------------------

// Hoisting is JavaScript’s behavior of moving variable and function declarations to the top of their scope before code execution.
// Hoisting: Moves variable and function declarations to the top of their scope.

// Advantages

// Lets you use functions before declaring them.

// Helps organize code freely.

// ❌ Disadvantages

// Can cause confusion or bugs if misunderstood.

// let and const are hoisted but not initialized, causing ReferenceError if used before declaration.

// 🎯 Use Case

// When defining functions at the bottom but using them earlier in code.

// hoist()
// function hoist(){
//   console.log('hoisted')
// }
//--------------------------------currying-----------------------------------
// currying: Transforming a function with multiple arguments into nested single-argument functions.

// Breaking a function that takes multiple arguments into a series of functions that take one argument at a time.

// Advantages

// Reusability and flexibility (can fix one argument).

// Makes functions more modular.

// Useful in functional programming.

// ❌ Disadvantages

// Harder for beginners to read.

// Too many nested functions can hurt readability.

// 🎯 Use Case

// Used in frameworks (like React or Redux) for function composition and partial application.

  // function sum(a){
  //   return function (b){
  //     return function (c){
  //       return a+b+c
  //     }
  //   }
  // }
  // console.log(sum(1)(2)(3));
  
// ------------------    closure   -------------------------

// A closure is when a function remembers its outer scope variables, even after the outer function has finished executing.

// Advantages

// Keeps data private and secure.

// Useful for maintaining state in functions.

// Helps create function factories.

// ❌ Disadvantages

// Can cause memory leaks if not managed.

// Overuse can make debugging hard.

// 🎯 Use Case

// Used in event handlers, callbacks, and modules to store private data.

// function a(){
//   let x=10;
//   function b(){
//      let y=290;
//      function c(){
//       let z=243
//       console.log(x+y+z);
//      }
//    c() 
//   }
//  b()
// }
// a()

// ------------------    slice   --------------------------

// Used to copy or extract a portion of an array without modifying the original.

// Advantages

// Doesn’t change original array.

// Simple for copying or subarrays.

// ❌ Disadvantages

// Creates new array → slightly more memory use.

// 🎯 Use Case

// Copying arrays or getting specific portions.

//  const originalArray = [1, 2, 3, 4, 5];
// const slicedArray=originalArray.slice(1,3)

//  console.log(slicedArray); // Output: [2, 3, 4]
// console.log(originalArray); // Output: [1, 2, 3, 4, 5] (original array remains unchanged)

// ---------------      splice    -------------

// Used to add or remove elements from an array and modifies the original array.

// ✅ Advantages

// Can add, remove, or replace in one method.

// Very flexible.

// ❌ Disadvantages

// Modifies the original array (side effects).

// Not ideal when immutability is needed.

// 🎯 Use Case

// Updating or deleting elements in-place.

// const originalArray = [1, 2, 3, 4, 5];
// const removedElements= originalArray.splice(2,1,3,4)
//  console.log(originalArray); // Output: [1, 3,4,4,5] (original array is modified)
//  console.log(removedElements); // Output: [3] (elements that were removed)

// --------------------push------------------

// Adds elements to the end of an array.

// Advantages

// Simple and fast.

// Returns new length.

// ❌ Disadvantages

// Modifies the original array.

// 🎯 Use Case

// Appending new data to lists.

// const fruits = ['apple', 'orange', 'banana'];
// const newLength = fruits.push('grape', 'kiwi');

// console.log(fruits);      // Output: ['apple', 'orange', 'banana', 'grape', 'kiwi']
// console.log(newLength);   // Output: 5 (length of the modified array)

// ----------------pop--------------------

// Removes the last element from an array.

// Advantages

// Easy to use.

// Efficient for stack-like operations (LIFO).

// ❌ Disadvantages

// Changes the array.

// Can’t remove from front.

// 🎯 Use Case

// Stack operations, undo actions.

// const colors = ['red', 'blue', 'green'];
// const removedColor = colors.pop();

// console.log(colors);       // Output: ['red', 'blue']
// console.log(removedColor); // Output: 'green' (the last element that was removed)

// ------------------unshift------------------

// Adds elements to the beginning of an array.

// Advantages

// Easy to add at start.

// ❌ Disadvantages

// Shifts all elements — slower for big arrays.

// Modifies array.

// 🎯 Use Case

// When you need to prepend elements.

// const fruits = ['orange', 'banana'];
// const newLength = fruits.unshift('apple', 'grape');

// console.log(fruits);      // Output: ['apple', 'grape', 'orange', 'banana']
// console.log(newLength);   // Output: 4 (length of the modified array)

// ----------------------shift------------------------------

// Removes the first element from an array.

// Advantages

// Simple to use.

// Good for queue-like behavior (FIFO).

// ❌ Disadvantages

// Re-indexes entire array — slower for large arrays.

// Modifies array.

// 🎯 Use Case

// Queue operations, processing items in order.

// const colors = ['red', 'blue', 'green'];
// const removedColor = colors.shift();

// console.log(colors);      // Output: ['blue', 'green']
// console.log(removedColor); // Output: 'red' (the first element that was removed)

// -----------------------------------map single manipulation-------------------------------------
// const originalArray = [1, 2, 3, 4, 5]

// const manipulatedArray = originalArray.map((element, index) => {

//   if (index === 0) {

//     return element * 2;
//   }

//   return element;
// });

// // console.log(originalArray)   // Output: [1, 2, 3, 4, 5]
// console.log(manipulatedArray)

//---------------------------------------Object-------------------------------

// Used to store data as key–value pairs in JavaScript.

// Advantages

// Stores complex data in a structured way.

// Easy access via keys.

// Supports nesting and dynamic properties.

// ❌ Disadvantages

// Unordered keys.

// Can be accidentally modified unless frozen/sealed.

// 🎯 Use Case

// Representing real-world entities (users, items, etc.).

// const obj ={
//     name:'nihal',
//     dob:'10,10,2004',
//     place:'vadakara'
// }
// console.log(obj)


// -----------------------------------Boxing

// 🎯 Purpose:
// Boxing automatically converts primitive values (like numbers, strings, booleans)
// into object wrappers (Number, String, Boolean) when you call object methods.

// ✅ Advantages:

// Lets primitives use object methods (like .toUpperCase() or .toFixed()).

// ❌ Disadvantages:

// Creates temporary objects → slightly less efficient.

// 💻 Example:

// let str = "hello";
// console.log(str.toUpperCase()); // "HELLO" — behind the scenes, JS boxes 'str' into a String object

// ---------------------------------Labels

// 🎯 Purpose:
// Labels are used with loops to control nested loops using break or continue.

// ✅ Advantages:

// Helps exit from multiple nested loops cleanly.

// ❌ Disadvantages:

// Can make code less readable if overused.

// 💻 Example:

// outerLoop: for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     if (i === 1 && j === 1) break outerLoop;
//     console.log(i, j);
//   }
// }

// ---------------------Callback Hell & String Coercion
// Callback Hell

// Purpose: Handling async operations using nested callbacks.

// ✅ Advantage:

// Works with async operations (like file, DB, API).

// ❌ Disadvantage:

// Difficult to read and maintain (“pyramid of doom”).

// 💻 Example:

// doSomething(() => {
//   doNext(() => {
//     doMore(() => {
//       console.log("Done!");
//     });
//   });
// });

// ----------------------------Object.create() vs Constructor Pattern

// Purpose: Both create objects but differently.

// ✅ Advantage:

// Object.create() → Simpler inheritance.

// Constructor → Creates multiple instances easily.

// ❌ Disadvantage:

// Object.create() → No automatic constructor setup.

// Constructor → More verbose syntax.

// 💻 Example:
// // Object.create
// const personProto = {
//   greet() { console.log(`Hi, I'm ${this.name}`); }
// };
// const person1 = Object.create(personProto);
// person1.name = "Nihal";
// person1.greet();

// // Constructor Pattern
// function Person(name) {
//   this.name = name;
// }
// Person.prototype.greet = function() {
//   console.log(`Hi, I'm ${this.name}`);
// };
// const person2 = new Person("Ali");
// person2.greet();

// ---------------------------Passed by Value vs Passed by Reference

// Purpose: Defines how data is sent to functions.

// ✅ Advantage:

// Value: Prevents original data from being changed.

// Reference: Allows modifying original data directly.

// ❌ Disadvantage:

// Value: Copying large data can be slower.

// Reference: Unintended changes to original data.

// 💻 Example:
// let a = 10;
// let b = a; // Passed by value
// b = 20;
// console.log(a); // 10 (unchanged)

// let obj1 = { name: "Nihal" };
// let obj2 = obj1; // Passed by reference
// obj2.name = "Ali";
// console.log(obj1.name); // "Ali" (changed)

// -------------------------------JIT (Just-In-Time Compilation)

// Purpose: JIT compiles JavaScript into machine code at runtime for faster execution.

// ✅ Advantage:

// Improves performance by optimizing code on the fly.

// ❌ Disadvantage:

// First-time execution can be slightly slower due to compilation time.

// 💻 Example (Concept):
// // JS engines like V8 use JIT internally:
// function add(a, b) {
//   return a + b;
// }
// add(5, 10);

// -----------------------------------callback---------------------------------

// A function passed as an argument to another function, executed later.

// Advantages

// Enables asynchronous operations.

// Reusable and flexible function design.

// ❌ Disadvantages

// Can cause callback hell (nested functions).

// Hard to manage flow for large async chains.

// 🎯 Use Case

// Asynchronous code (e.g., file reading, API calls, event listeners).

// function nihal (name,call){
//         console.log(`hello  ${name}`);
//         call("How")
// }

// function kp(greet){
//   console.log(greet+' are you')
// }

// nihal('Muhammed Nihal',kp)                                                                                                                                                                                        

//--------------------------------- shallow copy------------------------------------

// Copies only top-level properties of an object; nested objects still reference the original.

// Advantages

// Fast and simple.

// Works for small, flat objects.

// ❌ Disadvantages

// Nested objects share same reference (can cause bugs).

// 🎯 Use Case

// Quick duplication when deep cloning isn’t needed.

// const originalArray = [1, 2, [3, 4]];
// const shallowCopy = originalArray.slice();

// shallowCopy[2].push(5)

// console.log(originalArray); // Output: [1, 2, [3, 4]]
// console.log(shallowCopy);   // Output: [1, 2, [3, 4, 5]]

//-------------DEEP COPY-------

// Creates a complete independent copy, including nested objects.

// Advantages

// Full independence from original.

// Prevents side effects.

// ❌ Disadvantages

// Slower for big objects.

// Loses functions or special object types (like Date).

// 🎯 Use Case

// When you must avoid shared references (immutability, React state).

// const originalArray = [1, 2, [3, 4]];
// const deepCopy =JSON.parse(JSON.stringify(originalArray))

// deepCopy[2].push(5)

// console.log(originalArray); // Output: [1, 2, [3, 4]]
// console.log(shallowCopy);   // Output: [1, 2, [3, 4]]

//-----------sealedobject------------

// Prevents adding or deleting properties but allows modifying existing ones.

// Advantages

// Controls object structure.

// Prevents accidental property additions.

// ❌ Disadvantages

// Can’t extend object later.

// 🎯 Use Case

// Lock object structure but allow updates to values.

// const obj={
//   name:'nihal',
//   age:19
// }

// Object.seal(obj)

//  obj.age=20

//  console.log(obj)
// /*

// ----------------------------object.freeze------------

// Makes object completely immutable — can’t add, remove, or change anything.

// Advantages

// Protects data from mutation.

// Useful for constants or configs.

// ❌ Disadvantages

// Can’t modify at all.

// Doesn’t deep freeze nested objects.

// 🎯 Use Case

// Immutable constants and configuration objects.

//   const Object = {
//     prop1: 40,
//     prop2: "Hello",
//   };
  
//   Object.freeze(Object);// it cannot changable

// console.log(Object)

// */

//-------------type casting (coercion)------------

// Manually converting one data type to another (explicit conversion).

// Advantages

// Full control over conversion.

// Prevents unwanted type coercion.

// ❌ Disadvantages

// Manual effort for every conversion.

// Can cause NaN if invalid.

// 🎯 Use Case

// When input data needs manual conversion before use.

// let str = "42";
// let num = Number(str); // Using Number constructor for explicit type conversion
// console.log(num); // Output: 42

//----------------type conversion--------------

// Automatic or explicit conversion between data types.

// Advantages

// Makes JS flexible.

// Saves time for simple cases.

// ❌ Disadvantages

// Implicit conversions can cause unexpected results ("5" + 2 → "52").

// 🎯 Use Case

// When working with user input or mixed data types.

// let number = 10;
// let string = "5";

// let result = number + string; // JavaScript converts number to a string for concatenation
// console.log(result); // Output: "105"

//----------finding value in which index using ------indexOf----findIndex-----

// Finds the first index of a given element in an array.

// Advantages

// Simple and direct.

// Fast for small arrays.

// ❌ Disadvantages

// Returns -1 if not found (must check manually).

// Works only with primitive comparisons.

// 🎯 Use Case

// Checking existence or position of an element.

// const myArray = 'nihal'
// const elementToFind = 'i';

// const index = myArray.charAt(3);

// console.log(index)

// -----------findIndex---------

// Finds the index of the first element that satisfies a given condition.

// Advantages

// Flexible with conditions.

// Works for complex data (objects, etc.).

// ❌ Disadvantages

// Stops after first match only.

// Slightly slower than indexOf.

// 🎯 Use Case

// Finding index based on condition (e.g., user.id === 5).

// -------------typeOf-----------------

// Checks the data type of a variable.

// Advantages

// Quick type checking.

// Works for all built-in types.

// ❌ Disadvantages

// Returns "object" for null (historical bug).

// Doesn’t identify arrays clearly (typeof [] === "object").

// 🎯 Use Case

// Type checking before performing operations.

// let x = 42;
// let y = "Hello, World!";
// let z = true;
// let obj = { key: "value" };
// let arr = [1, 2, 3];

// console.log(typeof x);  // Output: "number"
// console.log(typeof y);  // Output: "string"
// console.log(typeof z);  // Output: "boolean"
// console.log(typeof obj); // Output: "object"
// console.log(typeof arr); // Output: "object"

//--------------------trim---------------------

// Removes whitespace from the beginning and end of a string.

// Advantages

// Useful for user input cleaning.

// Fast and reliable.

// ❌ Disadvantages

// Doesn’t remove spaces inside the string.

// 🎯 Use Case

// Cleaning form input or API data.

// let stringWithWhitespace = "   Hello, World!   ";
// let trimmedString = stringWithWhitespace.trim();

// console.log(trimmedString);
// Output: "Hello, World!"

//------------------------------------ normal promise  ----------------------------------------

// Used to handle asynchronous operations (like API calls) cleanly.

// Advantages

// Handles async code better than callbacks.

// Prevents callback hell.

// Supports chaining with .then() and .catch().

// ❌ Disadvantages

// Syntax can still be long for multiple async operations.

// Need to handle rejection carefully.

// 🎯 Use Case

// API calls, reading files, timers, or async logic.

// const prom =new Promise((reject,resolve)=>{
// let a=798
// if(a===798){
//   console.log(567);
// }else{
//   console.log(0);
// }
// })

// prom.then((result)=>console.log('result',result),((reject)=>console.log(reject)))

//--------------------------------promise any,all and race---------------------------------------

// Purpose: Resolves as soon as any one promise fulfills (ignores rejections).
// ✅ Advantage: Fastest successful result.
// ❌ Disadvantage: Fails if all promises reject.

// Purpose: Waits for all promises to fulfill or rejects if any fails.
// ✅ Ensures all results are ready together.
// ❌ One rejection stops all.

// Purpose: Resolves/rejects with the first settled promise.
// ✅ Good for timeout or speed-based operations.
// ❌ Doesn’t guarantee correct result, only first.

// const pro1 = Promise.reject(10)
// const pro2 = Promise.resolve(20)
// const pro3 = Promise.resolve(30)

// Promise.race([pro1,pro2,pro3]).then((result)=>console.log(result))


//------------------------------setTimeout in async and await---------------------

// Purpose: Runs a function after a delay.
// ✅ Useful for async actions or animations.
// ❌ Can cause callback hell if nested.

//  function late(){
//   return new Promise ((resolve)=>{
//   setTimeout(()=>{
//  resolve(1000)
//   },1000)
 
// })
//  }

//  async function call (){
//   const fir = await late()
// console.log(fir);
//  }
//  call()

//---------------------------promise method---------async and await----------try  and catch-------------------------------

// .then() → handle success

// .catch() → handle error

// .finally() → always runs
// ✅ Clear async flow
// ❌ Hard to debug with many layers

// async function call(){
//   const prom = new Promise((resolve,reject)=>{
//     let a=10
//     if(a===10){
//       resolve(`100        0`)
//     }else{
//       resolve(0)
//     }
//   })

//   let fir =await prom
//   console.log(fir);
// }
// call()

//----------try  and catch------------

// Purpose: Handle runtime errors gracefully.
// ✅ Prevents app crashes.
// ❌ Doesn’t catch syntax errors.

//---------------------destructuring-------------------

// Purpose: Extract values from objects/arrays easily.
// ✅ Cleaner syntax.
// ❌ Can throw errors if undefined.

// const person = {
//   name:'John', 
//   age:30,
//   place:'New York'
  
// };

// // Using destructuring to extract only the 'age'
// const {place} = person;

// console.log(place);  // Output: New York


//-------------------spread------------------

// Purpose: Expands array/object elements.
// ✅ Useful for merging or copying.
// ❌ Shallow copy only.

// let arr1=[10,20,30,40]
// let arr2=[1,2,3,4]
// let arr3=[...arr1,...arr2]
// arr3.push(50)
// console.log(arr3)

//--------------rest parameter-------------------

// Purpose: Collects remaining arguments into an array.
// ✅ Flexible function arguments.
// ❌ Slower for large inputs.

// const number =[1,2,3,4,5]

// cosnt [First,...rest]=number

// console.log(rest)

//----------------generator function------------
// generator function: Produces an iterable sequence using function*.

// Purpose: Yields multiple values lazily.
// ✅ Memory efficient.
// ❌ Harder to debug.

// function* countUpTo(limit) {
//   let count = 0;
//   while(count <= limit) {
//     yield count;
//     count++;
//   }
// }

// const iterator = countUpTo(5);

// console.log(iterator.next()); // Output: { value: 1, done: false }
// console.log(iterator.next()); // Output: { value: 2, done: false }
// console.log(iterator.next()); // Output: { value: 3, done: false }
// console.log(iterator.next()); // Output: { value: 4, done: false }
// console.log(iterator.next()); // Output: { value: 5, done: false }
// console.log(iterator.next()); // Output: { value: undefined, done: true }

//----------------------generator new method------------------------
// function* evenNumbers(arr) {
//     for (let num of arr) {
//         if (num % 2 === 0) {
//             yield num; 
//         }
//     }
// }

// let arr = [1, 2, 3, 4, 5, 6];
// let iterate = evenNumbers(arr);

// console.log(iterate.next().value); // Output: 2
// console.log(iterate.next().value); // Output: 4
// console.log(iterate.next().value); // Output: 6
// console.log(iterate.next().done);  // Output: true

// ,,,

// next(), return(), throw() — control execution.
// ✅ Fine control over iteration.
// ❌ Complex for beginners.

// function *a(){
//   console.log('stop 1');
//   yield 100;

//   console.log('stop 2')
//   yield 200

//   console.log('stop 3');
//   yield 300
// }
//  const iterate = a()
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())

//------------------------------factory function----------------------------

// Purpose: Returns new objects without new.
// ✅ Simple object creation.
// ❌ No shared prototype (less efficient).
 
// function hello(name,age){
//   return{
//     name:name,
//     age:age,
//     sayhello(){
//       console.log(`my name is ${this.name} and age is ${this.age}`);
//     }
//   }
// }
// const hell=hello('nihal',19)
// hell.sayhello()
// // --------------------------constructor function------------------------

// Purpose: Used with new to create objects.
// ✅ Shared methods via prototype.
// ❌ Needs new, else breaks.

// function hello(name,age){
//   this.name=name,
//   this.age=age,

//    this.hi=function(){
//      return `i am ${this.name} and age is ${this.age}`
//   }
// }
// const per=new hello('nihal',19)

// console.log(per.hi());


//-------------------------------higher order function(Hof)--------------------

// Purpose: Takes or returns another function.
// ✅ Powerful for functional programming.
// ❌ Can be confusing to trace.

// function  num(num1,num2,number){
//   return number(num1,num2)
// }

// function sum(a,b){
//   return a+b
// }

// function multiple(a,b){
//   return a*b
// }
// console.log(num(23,54,sum));
// console.log(num(45,21,multiple));



//-----------------------weekset--------------------------------

// Purpose: Stores only objects weakly (no memory leaks).
// ✅ Auto garbage collection.
// ❌ Not iterable.

// let weakSet = new WeakSet();

// let obj1 = { key: 'value1' }
// let obj2 = { key0: 'value2' }

// weakSet.add(obj1);
// weakSet.add(obj2);

// console.log(weakSet.has(obj1)); // Output: true

// weakSet.delete(obj1);

// console.log(weakSet.has(obj1)); // Output: false

//-----------------immediate invoke function (IIFC)-------------

// Purpose: Executes instantly after definition.
// ✅ Avoids polluting global scope.
// ❌ Harder to reuse.

// (function (){
// console.log('hello');
// })()

//----------------------------do-while---------------------------

// Purpose: Runs loop at least once.
// Do-while syntax: Executes a block at least once and continues as long as the condition is true.

// ✅ Guaranteed one run.
// ❌ Can run unnecessarily once.

//  let count = 1;

// do{
// console.log(count);
// count++
// }while(count<5)

//---------------------------while----------------------

// Purpose: Loops while condition true.
// ✅ Great for unknown counts.
// ❌ Risk of infinite loops.

// let count = 1;

// while (count < 5) {
//   console.log(count);
//   count++;
// }

// //-----------------------optional chaining--------------------

// Purpose: Access nested props safely.
// ✅ Prevents errors on undefined.
// ❌ Might hide logic errors.

// const person = {
//     name: 'John',
//     address: {
//       city: 'New York'
//     }
//   };

//   const cityName = person?.address?.city

//   console.log(cityName);   


//------------------------async and await---------------------

// Purpose: Handle async code like sync.
// ✅ Cleaner than .then().
// ❌ Must be inside async function.

// function getName(){
//      return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("nihal");
//     },3000)
// })
// }

// function getname(){
//     return new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//        resolve("nihalkp");
//    },2000)
// })
// }

// Promise.all([getname(),getName()]).then((result)=>{
//     console.log(result)
//  })
// async function getUser(){
//     let Name =await  getname()
//     console.log(Name);
//     let name =await  getName()
//     console.log(name);
// }
// getUser()

//---------------------------------type coercoin--------------------

// Purpose: Auto converts one type to another.
// ✅ Convenient for loose checks.
// ❌ Can cause unexpected results.

// console.log('300'==300)

//console.log(6+3+'hi')

//---------------------------exec and test------------------------

// Purpose: RegExp methods.

// test() → Boolean check

// exec() → Returns match details
// ✅ Good for pattern checks.
// ❌ Needs regex knowledge.

// const strg = /hello /;
// const result = strg.test("hello world");

// console.log(result);
// Output: ["hello"]
//---------------------------strict mode--------------

// Purpose: Enforces safer JS rules ("use strict").
// ✅ Prevents silent errors.
// ❌ Throws more errors.

// "use strict";

// function example() {
//   // This will throw an error in strict mode
//   lo = 10;
//   console.log(lo)
// }

// example();

//-----------------------promise  setTimeout  in large question-------------------------------

// function getUser(userId) {
//   return new Promise((resolve, reject) => {
//       console.log('Get user from the database.');
//       setTimeout(() => {
//           resolve({
//               userId: userId,
//               username: 'john'
//           });
//       }, 1000);
//   })
// }

// function getServices(user) {
//   return new Promise((resolve, reject) => {
//       console.log(`Get services of  ${user.username} from the API.`);
//       setTimeout(() => {
//           resolve(['Email', 'VPN', 'CDN']);
//       }, 2 * 1000);
//   });
// }

// function getServiceCost(services) {
//   return new Promise((resolve, reject) => {
//       console.log(`Calculate service costs of ${services}.`);
//       setTimeout(() => {
//           resolve(services.length * 100);
//       }, 3 * 1000);
//   });
// }

// getUser(100)
//     .then(getServices)
//     .then(getServiceCost)
//     .then(console.log);

//------------------------promise chaining--------------------

// Purpose: Chain multiple .then() calls.
// ✅ Cleaner than nested promises.
// ❌ Still linear, can be long.

// var prom = new Promise((resolve)=>{
//   setTimeout(()=>{
//      resolve(10)
//   },3000)
// })

// prom.then((result)=>{
//  console.log(result)
//  return result *2
// }).then((result)=>{
// console.log(result)
// return result *4
// }).then((result)=>{
// console.log(result)
// return result *6
// }).then((result)=>{
// console.log(result)
// return result *8
// })

// const promise=new Promise((resolve,rejects)=>{
//   setTimeout(()=>{
//     resolve('ok')
//   },3000)
// })

// promise.then((result) => {
//   console.log(result);
// }).catch((err) => {
//   console.log(err);
// });

//----------------------------------export-----------------------------------

// function p(){
//   console.log(  'wegyfvsHMVJH')
// }
// function r(){
//   console.log('wEFQGGEGGDG')
// }

// module.exports={
//   p,
//   r
// }

//--------------------------------callback--------------------------------------

// function first (first,second){
// console.log( first *second); 
// }

// function second1(){
// }

// second1(first (2,50))


//---------------------------------callback---------------------------------------

// function person(num1,num2){      
//       return num1*num2
    
//   }
  
//   function call(p){
//      console.log(p)
//   }
  
//   call(person(23,34))


//-------------------------------object keys or values or entries(for key and value)-----------------------------

// const obj={

//   name:'nihal',
//   age:20,
//   place:'vadakara'
// }
// delete obj.place

// const n=Object.values(obj)
// console.log(n)


//--------------------------------default parameter---------------------------------

// function name ( name='nihal'){
//   console.log(name)
// }
// name()


//-------------------------------------weakset--------------------------------------

// Purpose

// WeakSet is similar to a normal Set, but it only stores objects (no primitives) and holds them weakly, meaning if the object is no longer referenced anywhere, it can be garbage-collected automatically.

// Advantages

// Automatic garbage collection — Objects are removed when no longer referenced, avoiding memory leaks.

// Lightweight storage for temporary object tracking.

// Good for private data handling or caching without preventing object cleanup.

// ❌ Disadvantages

// Not iterable — You can’t loop through its elements.

// No size property — Can’t know how many items it holds.

// Only accepts objects — You can’t store strings, numbers, etc.

// const weakSet=new WeakSet()

// const obj1={}
// const obj2={}

// weakSet.add(obj1)
// weakSet.add(obj2)

// console.log(weakSet.has(obj2))

//------------------------------------ weakMap ---------------------------------------

// Purpose: Stores key–value pairs where keys are objects and are weakly referenced (removed automatically if not used elsewhere).

// ✅ Advantages

// Prevents memory leaks (auto garbage collection).

// Useful for storing private or temporary object data.

// ❌ Disadvantages 

// Not iterable.

// Only accepts objects as keys.

// const weakMap = new WeakMap();

// const obj1={}
// const obj2={}

// weakMap.set(obj1,'obj1')
// weakMap.set(obj2,'obj2')

// console.log(weakMap.get(obj1,obj2))



//-----------------class,constructor-----------------------------------------------

// Purpose: A blueprint for creating objects using constructor and methods.

// ✅ Advantages

// Organizes code (OOP style).

// Supports inheritance, encapsulation, polymorphism.

// Easy to read and maintain.

// ❌ Disadvantages

// Slightly slower than factory functions.

// May confuse beginners (especially with this).

// Purpose: A special method in a class that initializes object properties.

// ✅ Advantages

// Automatically runs when an object is created.

// Useful for setting default values.

// ❌ Disadvantages

// Each instance can have its own copy if not managed properly.

// class MyClass {
//   // Constructor method
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//   }
// }

// const myInstance = new MyClass('John', 25);

// myInstance.greet();

//----------------------------------  call ,apply and bind --------------------

//----------------call

// Purpose: Calls a function immediately, allowing you to set this manually and pass arguments individually.
// call: Invokes a function with a specific this context and arguments.

// ✅ Advantages

// Useful for function borrowing.

// Explicit control of this.

// ❌ Disadvantages

// Can be confusing in nested contexts.

// function hello(name){
//   console.log('This is me '+this.name);
// }

// const per={name:'Nihal'}

// hello.call(per)

//----------------------apply

// Purpose: Same as call() but accepts arguments as an array.
// apply: Similar to call but takes arguments as an array.

// ✅ Advantages

// Perfect when arguments are already in an array.
// ❌ Disadvantages

// Similar downsides as call.

// function hello(name,name1){
//   console.log(` Hello i am ${name} and they are ${name1} and ${this.name}`)
// }

// const person ={name:'Nihal'}

// hello.apply(person,['shihad','basith'])

//-----------------------bind-------

// Purpose: Returns a new function with a fixed this value and optional preset arguments.
// bind: Returns a new function bound to a specific this context.

// ✅ Advantages

// Useful for event handlers and callbacks.

// Doesn’t execute immediately (unlike call/apply).

// ❌ Disadvantages

// Creates new functions — can use more memory.

// function hello (name){
//   console.log('This is me '+this.name);
// }

// const per={name:"Nihal"}

// const bind=hello.bind(per)

// bind()

// let a = 10;
// let b = 34;
// let c = 90;
// let d=110;

// const { Script } = require("vm");

//======================================
// const obj = { a: 1, b: 2, c: 3 }; 
// for(let x in obj){
//     console.log(x+':'+obj[x]);
// }

//===================================
// const obj = { a: 1, b: 2, c: 3 };
//  const obj1=Object.values(obj)
//  console.log(obj1);

// Object.entries(obj).forEach(([key, value]) => {
//     console.log(key + ': ' + value);
// });


//========================================================
// const obj ={a:1,b:2,c:3}

// for(let key in obj){
//     console.log(key+':'+obj[key]);
// }

//==========================================avg================= 

//const size=[4,7,2,47,8,2,3,4,2,2,]
// //console.log(...size);

// function calculateAverage(...array){
//   //  console.log('hi');
//    const sum=array.reduce((acc,num)=>acc+num) 
//       const avg=sum/array.length
//       console.log(avg);

// }
// calculateAverage(size)

//=========================================reverse string

// function reverseString (string){

// const split =string.split('')
// const reverse=split.reverse()
// const join=reverse.join('')
// console.log(join);

// }

// const string='hello'
// reverseString(string)

//========================================finding max number
//------------------1 method-----------

//  const size=[4,7,2,47,8,2,3,4,2,56,6,808,23,2934,35,2]


//------------------2 method-----------
// let max=0
//  for(let i=0;i<size.length;i++){
//          if(max < size[i]){
//           max = size[i]
//          }
//  }
//  let max2=0
//  for(let i=0;i<size.length;i++){
//   if(max2 < size[i] && size[i] < max ){
//      max2 = size[i]
//   }
//  }
//  console.log(max2)

//--------------3 method--------------

//  function findmax(size){

// const newsize=size.sort((a,b)=>b-a)
// console.log(newsize);

//  const max=newsize[0]
//  console.log(max);

//  }
// findmax(size)

//==========================================first letter capital

// const string = 'HELLO';

// function titleCase(str) {
    
//         return  str[0]+str.slice(1).toLowerCase()
 
// }

// const result = titleCase(string);
// console.log(result); 

//============================================================
// const array=[1,2,3,4,51,2,3,4,6,7,8,9]

//     const newarray=[]

//     for(let i=0;i<array.length;i++){
//           let one=true
//       for(let j=0;j<array.length;j++){
//         if(i!==j&&array[i]==array[j]){
//          one=false
//         }    
//     }
//     if(one){
//         newarray.push(array[i])        
//     }
//     } console.log(newarray);


//===============================================

// function primenumber(limit){
//     let prime=[];

//     for(let i=2;i<=limit;i++){
//         let one=true
//         for(let j=2;j<=Math.sqrt(i);j++){
//            if(i%j==0){
//             one=false
//             break;
//            }
//         }
//         if(one){
//             prime.push(i)
//         }
//     }
//     return prime
// }
// const limit=12;
// const ones=primenumber(limit)
// console.log(ones);



//==========================switch===================

// Purpose: Used for multiple conditional checks, replacing many if-else statements.

// ✅ Advantages

// Cleaner and faster for many conditions.

// Easy to read when comparing one variable.

// ❌ Disadvantages

// Works only with equality checks.

// Must use break to avoid fall-through.

// const cars='bugatti'

// switch (cars){
//     case 'swift': console.log('is swift');  break;
//      case'bugatti': console.log('is bugatti'); break;
//      default: console.log('nothing');
// }
//===================================================
// const a = [1, 2, 324, 456, 87]

// const c = a.join('')
//             .split('')
//             .map(Number); 

// console.log(c);

//=========================finding the frquencies using reduce===========================

// const arr = [1,2,2,3,3,3,4]

// const newarr = arr.reduce((acc,curr)=>{
    
//      acc[curr] = (acc[curr]||0)+1

//     return acc
// },{})
// console.log(newarr)

//=============================================================================
//  const array=[1,2,3,4,5,6,7,8,9]


// const reduce = array.filter((num) =>num>7)
// console.log(reduce);

// const largestNumber = array.reduce((max, current) =>{
//     max+current
    
//     console.log(max,current)
// });
// console.log(largestNumber);
//======================================================
//  const arr = [
//   { name: "John", age: 30 },
//   { name: "alex", age: 20 }
//  ]

//  const filteredArr = arr.filter(obj => obj.age > 20)

//  console.log(filteredArr)
//=====================================================


// const arr=[1,1,2,3,2]

// const filter= arr.filter((elem,index,arr)=>{
//  return arr.indexOf(elem) !== index
// })
// console.log(filter);

//==================================================

// const promise= Promise.resolve(10)
// const promise2=promise.then((result)=>{
//   // console.log(result+'1')
//    return result*2 
//   })

//   console.log(promise2);
//   console.log(promise);

//   promise2.then((result)=>{
//     console.log(result);
//   })

//-===============================finding the length of each index========================

// const sentences = ["please wait", "continue to fight", "continue to win"]
// let count=0;
// let max=0;
// for(let i=0;i<sentences.length;i++){
//   const split=sentences[i].split(" ")
  
//   count=split.length;
//   max=count
// console.log(count);
// }

//======================================date with day/month/years====================

// console.log(new Date().toLocaleDateString({day:'numeric',month:'long',year:'numeric'}))


//-------------------identifying number in string ------------
// const str = "I have 5 pets.";
// const regex = /\d/;  // Matches any digit

// const containsNumber = str.match(regex);

// console.log(containsNumber*2);


// anonymous function
