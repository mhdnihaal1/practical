

// emulator -avd <Pixel_4_API_34>

// JavaScript = theory side , done pratical ,logical side , basic side

// NodeJs     = theory side ,done practical 

// MongDB     = theory side ,undone practical , logical side 

// DataStructure = theory side , done practical side 

// ReactJs    = theory side , practical side


//                                                                Javascript topics
// ==============================================================================================================================================================


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

// closure: Function with access to its parent scope even after the parent has closed.

// setImmediate: Executes a callback immediately after the I/O phase of the event loop.

// currying: Transforming a function with multiple arguments into nested single-argument functions.

// proxy object: Intercepts and customizes operations on objects.

// Prototype pollution: Security issue where prototype objects are modified maliciously.

// nullish operator: Returns the right-hand operand if the left-hand operand is null or undefined.

// flatMap: Maps and flattens nested arrays into a single-level array.

// Do-while syntax: Executes a block at least once and continues as long as the condition is true.

// call: Invokes a function with a specific this context and arguments.

// apply: Similar to call but takes arguments as an array.

// bind: Returns a new function bound to a specific this context.

// coercion: Implicit or explicit conversion between types.

// event propagation: Includes event capturing, bubbling, and delegation.

// event delegation: Using a single event listener for dynamically generated elements.

// WeakRef: Creates weak references to objects for memory management.

// promise: Represents the eventual result of an asynchronous operation.

// object methods: Includes keys, values, entries, and assign for object manipulation.

// generator function: Produces an iterable sequence using function*.

// polyfills: Code that adds missing features in older JavaScript environments.

// event emitter: Object pattern for event-driven programming in Node.js.

// Hoisting: Moves variable and function declarations to the top of their scope.

// Array methods: Methods like filter, map, reduce, and find manipulate arrays.

// Array cloning: Duplicate arrays using slice, concat, or the spread operator.

// Spread operator: Expands elements of arrays or objects.

// Memoization: Caching results of expensive function calls for reuse.

// Arrow functions: Compact syntax for defining functions.

// IIFE: Immediately Invoked Function Expression runs immediately after being defined.




//                                                                         Nodejs
// =============================================================================================================================================================

// practicals
// ---------

// fs.writeFile(file, data, callback)  :Writes data to a file, replacing the file if it already exists.

// fs.appendFile(file, data, callback) :Appends data to a file. Creates the file if it doesn’t exist.

// fs.readFile(file, options, callback) :Reads the entire contents of a file asynchronously.

// fs.unlink(path, callback) :Deletes a file.

// theory
// ------

// Patch & Put: PUT updates the entire resource; PATCH updates part of a resource.

// Option Method: HTTP method used for CORS preflight and server capabilities.

// Middlewares: Functions in Express to handle requests, responses, and errors.

// Callback: A function executed after another function completes.

// Set-immediate: Executes a callback after the I/O phase of the event loop.

// Error middleware: Custom middleware for centralized error handling in Express.

// fs - modules: Node.js module to work with the file system.

// Events: EventEmitter handles event-driven programming in Node.js.

// HTTP modules - createServer(): Creates an HTTP server in Node.js.

// package.js dependencies: Manages the required modules and versions for a Node.js app.

// Routing: Defining application endpoints in Express.

// Query Parameters: Key-value pairs appended to URLs for passing data.

// Session and cookie: Session stores server-side data; cookies store client-side data.

// View engine: Renders dynamic templates like EJS, Pug, or Handlebars.

// Hbs: Handlebars.js view engine for Express.

// Get vs Post difference: GET retrieves data; POST submits data to the server.

// 400 error: Client-side error, usually due to bad requests.

// 500 error: Server-side error indicating an issue with the server.

// Cors in detail: Mechanism for sharing resources between different origins.

// Body parser: Middleware for parsing incoming request bodies.

// Applied file, write file: fs.readFile reads files; fs.writeFile writes files.

// Global execution context: Base scope created during the execution of JavaScript code.

// package.js: Metadata file for Node.js projects.

// Morgan: HTTP request logger middleware for Node.js.

// NPM: Node Package Manager for managing dependencies.

// PM2: Process manager for Node.js applications.

// Postman: API testing tool to send requests and view responses.

// Error handling in express: Using middleware to manage errors centrally.

// Types of errors: Syntax, runtime, and logical errors.

// app.use: Mounts middleware in an Express app.

// MVC: Model-View-Controller design pattern for separating concerns.

// TRACE: HTTP method for debugging server requests.

// Child process: Enables execution of shell commands in Node.js.

// Phases of an event loop: Include timers, I/O callbacks, idle, poll, and close callbacks.

// Authentication vs Authorization: Authentication verifies identity; authorization grants permissions.

// Preflight request: CORS check sent by browsers using OPTIONS to verify permissions.

// libuv: C library that handles Node.js’s asynchronous I/O.

// Reactor pattern: Handles I/O operations asynchronously in Node.js.

// Option methods: Used to query server-supported HTTP methods.

// Express methods: Include get, post, put, delete, etc., for routing.

// JWT signature: Verifies the authenticity of a token.

// fs link: Creates hard links for files using `fs.link


//                                                                          Mongodb
// =============================================================================================================================================================
//  Basic Operations:

// accumulator (min, max, avg): Operators to perform calculations during aggregation.

// regex(): Allows pattern matching in strings.

// find(): Retrieves documents matching a query.

// findOne(): Retrieves a single document matching a query.

// count(): Counts documents matching a query.

// sort(): Orders query results based on specified fields.

// skip(): Skips a specified number of documents in results.

// limit(): Limits the number of documents returned in results.

// group(): Groups documents by specific fields during aggregation.

// match(): Filters documents during aggregation.

// project(): Selects fields to include or exclude in results.

// distinct(): Finds unique values for a specified field.

// insertOne(): Inserts a single document.

// insertMany(): Inserts multiple documents.

// updateOne(): Updates a single document based on criteria.

// updateMany(): Updates multiple documents matching a query.

// replaceOne(): Replaces an entire document.

// deleteOne(): Deletes a single document matching a query.

// deleteMany(): Deletes all documents matching a query.

// createIndex(): Creates an index on specified fields for faster querying.

// dropIndex(): Deletes an index.

// Array Methods:

// $push: Adds elements to an array field in a document.

// $pushAll: Adds multiple elements to an array (deprecated).

// $addToSet: Adds unique elements to an array.

// $pop: Removes the first or last element from an array.

// $pull: Removes matching elements from an array.

// $pullAll: Removes multiple specified elements from an array.

// $elemMatch: Matches documents with an array element meeting criteria.

// $size: Matches documents based on array size.

// $exists: Checks for the existence of a field.

// $all: Matches documents where an array contains all specified elements.

// $position: Specifies an index for inserting elements in an array.

// $each: Modifies an array with multiple elements.

// Advanced MongoDB:

// Collection: A group of MongoDB documents, similar to a table.

// CRUD: Create, Read, Update, Delete operations.

// Lookup: Performs a join operation across collections.

// Unwind: Deconstructs arrays into separate documents.

// Capped Collection: A fixed-size collection that overwrites old data.

// Alias: Provides alternative names for fields during queries.

// Mongo Utilities: Tools for database management like mongodump, mongoexport.

// Indexing: Enhances query performance by indexing fields.

// Logical Operator: Combines query conditions using $and, $or, $not, etc.

// Comparison Operator: Compares fields with $eq, $gt, $lt, etc.

// Namespace: Collection names prefixed with database names.

// addToSet(): Adds unique values to an array field.

// Sharding: Distributes data across multiple servers for scalability.

// Insert vs Save: insert adds documents, save updates or inserts.

// BSON: Binary representation of JSON used by MongoDB.

// Data Type: Supported types like string, number, date, objectId, etc.

// Update Operators: $set, $unset, $inc modify fields.

// Out: Sends aggregation results to a new collection.

// Find one and update: Finds and modifies a document.

// Replication: Synchronizes data across multiple servers for redundancy.

// Aggregation: Processes data and computes results.

// Normalization: Structures data to reduce redundancy.

// Replica Set: A group of servers maintaining the same data for reliability.

// GridFS: Stores and retrieves large files like images and videos.

// Distinct: Retrieves unique values for a specified field.

// Accumulators: Aggregation operators for calculations.

// Count: Counts documents matching criteria.

// TTL Indexing: Automatically deletes documents after a set time.

// Mongo Server: The database server component of MongoDB.

// Aggregation Pipeline: A framework for data transformations in stages.

// Different types of indexing: Single field, compound, text, hashed, etc.

// Replica set: Configurations for replication.







//                                                                         Data structure
// =============================================================================================================================================================


//  Binary search and replace target with 0: Search a sorted array for a target and replace its value with 0.

// Merge sort: A divide-and-conquer sorting algorithm that recursively splits and merges arrays.

// Segment: A data structure for range queries and updates on arrays.

// AVL tree: A self-balancing binary search tree with height balancing.

// Red-black tree: A binary search tree with specific coloring rules to maintain balance.

// Linear probing: Collision resolution technique in hashing using sequential search.

// Quadratic probing: Collision resolution technique with quadratic steps for searching empty slots.

// Heap: A complete binary tree used for priority queues with max/min properties.

// Hash table: Maps keys to values for fast data retrieval using hashing.

// Asymptotic notation: Describes the growth rate of algorithms, e.g., Big O, Θ, Ω.

// Array vs linked list: Arrays have fixed sizes and sequential access; linked lists are dynamic and use pointers.

// Stack vs queue: Stack follows LIFO (Last In First Out); Queue follows FIFO (First In First Out).

// Quick sort: A divide-and-conquer sorting algorithm using pivot-based partitioning.

// Merge sort: Repeated from point 2 (divide and conquer sorting).

// Insertion sort: Simple sorting algorithm by inserting elements in the correct position.

// Tree vs graph: Trees are hierarchical and acyclic; graphs can have cycles and no root.

// Types of trees and graphs: Trees include binary, AVL, red-black; graphs include directed, undirected, weighted.

// Applications of divide and conquer: Used in sorting, searching, and algorithms like quicksort and mergesort.

// Complexity of bubble sort: Worst-case and average-case complexity is O(n²).

// Double hashing: Uses two hash functions for collision resolution in hash tables.

// Backtracking: A method to solve problems by exploring and backtracking when constraints fail.

// Applications of trie: Used for storing words, autocomplete, and prefix matching.

// Cyclic vs loops in graphs: Cyclic graphs contain cycles; loops are self-edges in graphs.

// Complete binary tree: A binary tree where all levels are filled except possibly the last.

// Disadvantages of recursion: Uses extra memory for stack and can lead to stack overflow.

// Applications of doubly linked list: Efficient for operations like insertions, deletions in both directions.

// Load factor: Ratio of entries to the total capacity of a hash table.

// Degree of a node: Number of edges connected to a graph node.

// Collision resolution techniques: Include chaining, linear probing, and double hashing.

// Worst case of quicksort: Occurs when the pivot always picks the smallest or largest element; O(n²).

//                                                                         React js

// =============================================================================================================================================================


//  Synthetic events: Cross-browser wrapper around native events for consistent behavior.

// Shadow DOM: Isolated DOM subtree used to encapsulate styles and elements.

// Parent to child communication: Pass data via props.

// Child to parent communication: Use callback functions passed as props.

// React Fiber: React's reconciliation engine for efficient rendering.

// useRef: Hook to create a mutable object that persists across renders.

// Siblings communication in React: Use a shared parent to manage state or context.

// Mutable vs Immutable: Mutable objects can be modified; immutable ones cannot.

// Refresh token: A token to obtain a new access token when the original expires.

// Axios cancel token: Cancels Axios requests to prevent memory leaks.

// CSR vs SSR: CSR renders on the client-side; SSR renders on the server-side for SEO benefits.

// Redux reducers: Pure functions that update state based on dispatched actions.

// Error boundary: React component to catch JavaScript errors in its child component tree.

// Fragments: Used to group a list of children without adding extra DOM nodes.

// React Flux: Application architecture pattern focusing on unidirectional data flow.

// Hooks concept: Functions like useState and useEffect for managing state and lifecycle in functional components.

// Custom hooks scenario: Extract reusable logic across components.

// useMemo applications: Optimize performance by memoizing expensive calculations.

// React.lazy: Dynamically load components for code splitting.

// Render props: Share logic between components using a function as a child pattern.

// Hooks used in Redux: useDispatch and useSelector for interacting with the Redux store.

// useCallback vs useMemo: useCallback memoizes functions; useMemo memoizes return values.

// useDispatch hook: Dispatch actions to the Redux store.

// useSelector hook: Access the Redux store's state in components.

// Slice in Redux: Combines actions and reducers for a specific feature.

// Pure components: Components that render only when their props or state change.

// React Profiler: Tool to measure performance of React components.

// Uncontrolled component: Components where form data is managed by the DOM, not React.

// Implement HOC: A function that takes a component and returns a new component with additional functionality.

// Lifecycle in functional components: Managed using hooks like useEffect for side effects.

//                                                                       Unknown

// ===========================================================================================================================================================
// - deadcode elimination 
// -throttling
// -debouncing
// -security
// -rate limiting
// -portals
// -provider syntax
// -LoadFactor
// - partials
// - content negotiation
