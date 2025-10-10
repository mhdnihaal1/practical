// Week 6

 
// Javascript
//  ✓ DOM
//  ✓ CDN vs Download
//  ✓ Event Listener

//  ✓ Closure=
 
// ✓ Scope and types of scope

// 1450
// 1512
// 1518
// 94
// 144
// 175
// 1598
// 2185
// 2210
// Node, Express


// Mongo DB practical 
// -----------------------
//  ◦ accumulator(min,max,avg)
//  ◦ regex()
//  ◦ find()
//  ◦ findOne()
//  ◦ count()
//  ◦ sort()
//  ◦ skip()
//  ◦ limit()
//  ◦ group()
//  ◦ match()
//  ◦ project()
//  ◦ distinct():for finding the unique array values
//  ◦ insertOne():one document 
//  ◦ insertMany():many document
//  ◦ updateOne()(set,unset,inc)
//  ◦ updateMany()
//  ◦ replaceOne()
//  ◦ deleteOne()
//  ◦ deleteMany()
//  ◦ createIndex()
//  ◦ dropIndex()
//  ◦ 

// array methods
// -------------
//  ◦ $push:used to add elements to an array field in a document. 
//  ◦ $pushAll
//  ◦ $addToSet
//  ◦ $pop
//  ◦ $pull
//  ◦ $pullAll
//  ◦ $elemMatch
//  ◦ $size
//  ◦ $exists
//  ◦ $all
// $position
// $each

// Mongo DB
//  ◦ Collection
//  ◦ CRUD
//  ◦ Lookup
//  ◦ Unwind
//  ◦ In was all
//  ◦ Capped collection
//  ◦ Alias
//  ◦ Mongo Utilities
//  ◦ Mongo Dump
//  ◦ Indexing
//  ◦ Logical operator
//  ◦ Comparison operator
//  ◦ Namespace
//  ◦ addtoSet()
//  ◦ Sharing
//  ◦ Insert vs save
//  ◦ BSON
//  ◦ Mongo export
//  ◦ Data type
//  ◦ Mongo Server
//  ◦ Update operators - set unset inc
//  ◦ Distinct - unique
//  ◦ Accumulators
//  ◦ Count
//  ◦ Out
//  ◦ Express
//  ◦ Find one and update
//  ◦ Indexing
//  ◦ Replication
//  ◦ Aggregation
//  ◦ Normalisation
//  ◦ Aggregation Pipeline
//  ◦ Replica set
//  ◦ Different types of indexing




// String methods:

// In JavaScript, there are several string methods that you can use to manipulate and work with strings. Here is a list of commonly used string methods in JavaScript:

// 1. **`concat()`**: Combines two or more strings and returns a new string.

// 2. **`charAt(index)`**: Returns the character at the specified index in the string.

// 3. **`charCodeAt(index)`**: Returns the Unicode value (integer) of the character at the specified index.

// 4. **`substring(start, end)`**: Returns a new string that includes the characters from the "start" index up to but not including the "end" index.

// 5. **`slice(start, end)`**: Returns a new string that includes the characters from the "start" index up to but not including the "end" index (similar to `substring`).

// 6. **`substr(start, length)`**: Returns a new string starting from the "start" index and including the specified "length" of characters.

// 7. **`indexOf(searchValue, startIndex)`**: Returns the index of the first occurrence of the specified "searchValue" within the string, starting the search at the "startIndex." Returns -1 if not found.

// 8. **`lastIndexOf(searchValue, startIndex)`**: Returns the index of the last occurrence of the specified "searchValue" within the string, starting the search at the "startIndex." Returns -1 if not found.

// 9. **`startsWith(searchString, position)`**: Checks if the string starts with the specified "searchString" and returns a Boolean.

// 10. **`endsWith(searchString, length)`**: Checks if the string ends with the specified "searchString" and returns a Boolean.

// 11. **`includes(searchString, position)`**: Checks if the string contains the specified "searchString" and returns a Boolean.

// 12. **`replace(searchValue, replaceValue)`**: Replaces the first occurrence of "searchValue" with "replaceValue" in the string.

// 13. **`replaceAll(searchValue, replaceValue)`**: Replaces all occurrences of "searchValue" with "replaceValue" in the string. (Introduced in ECMAScript 2021)

// 14. **`toUpperCase()`**: Converts the string to uppercase.

// 15. **`toLowerCase()`**: Converts the string to lowercase.

// 16. **`trim()`**: Removes leading and trailing whitespace from the string.

// 17. **`split(separator, limit)`**: Splits the string into an array of substrings using the specified "separator." The "limit" parameter limits the number of splits.

// 18. **`trimStart()` or `trimLeft()`**: Removes leading whitespace from the string.

// 19. **`trimEnd()` or `trimRight()`**: Removes trailing whitespace from the string.

// 20. **`match(regexp)`**: Searches for a match between the string and a regular expression and returns an array of matches.

// 21. **`search(regexp)`**: Searches for a match between the string and a regular expression and returns the index of the first match.

// 22. **`toString()`**: Returns the string.

// 23. **`valueOf()`**: Returns the primitive value of the string.

// These are some of the most commonly used string methods in JavaScript. Keep in mind that JavaScript provides a wide range of methods for working with strings, and you can explore the MDN Web Docs for more information and additional methods.







// ARRAY METHODS
// Here's a more comprehensive list of commonly used array methods in JavaScript:

// 1. **`push(element1, element2, ...)`**: Adds one or more elements to the end of an array and returns the new length of the array.

// 2. **`pop()`**: Removes the last element from an array and returns that element.

// 3. **`unshift(element1, element2, ...)`**: Adds one or more elements to the beginning of an array and returns the new length of the array.

// 4. **`shift()`**: Removes the first element from an array and returns that element.

// 5. **`concat(array1, array2, ...)`**: Combines two or more arrays and returns a new array.

// 6. **`join(separator)`**: Joins all elements of an array into a string, separated by the specified separator.

// 7. **`slice(start, end)`**: Returns a shallow copy of a portion of an array as a new array without modifying the original array.

// 8. **`splice(start, deleteCount, element1, element2, ...)`**: Changes the contents of an array by removing or replacing existing elements and/or adding new elements.

// 9. **`map(callback)`**: Creates a new array with the results of applying a provided function to each element in the array.

// 10. **`filter(callback)`**: Creates a new array with all elements that pass a test implemented by the provided function.

// 11. **`reduce(callback, initialValue)`**: Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

// 12. **`reduceRight(callback, initialValue)`**: Similar to `reduce`, but processes the array from right to left.

// 13. **`forEach(callback)`**: Calls a function for each element in the array without creating a new array.

// 14. **`find(callback)`**: Returns the first element in the array that satisfies the provided testing function.

// 15. **`findIndex(callback)`**: Returns the index of the first element in the array that satisfies the provided testing function.

// 16. **`every(callback)`**: Tests whether all elements in the array pass the test implemented by the provided function.

// 17. **`some(callback)`**: Tests whether at least one element in the array passes the test implemented by the provided function.

// 18. **`sort(compareFunction)`**: Sorts the elements of an array in place and returns the sorted array. If no `compareFunction` is provided, the array elements are converted to strings and sorted.

// 19. **`reverse()`**: Reverses the order of the elements in an array in place.

// 20. **`includes(element, fromIndex)`**: Determines whether an array includes a certain element, returning `true` or `false` as appropriate.

// 21. **`indexOf(element, fromIndex)`**: Returns the first index at which a given element can be found in the array, or -1 if it is not present.

// 22. **`lastIndexOf(element, fromIndex)`**: Returns the last index at which a given element can be found in the array, or -1 if it is not present.

// 23. **`flat(depth)`**: Creates a new array with all sub-array elements concatenated up to the specified depth.

// 24. **`flatMap(callback)`**: Maps each element using a function and flattens the result into a new array.

// 25. **`fill(value, start, end)`**: Changes all elements in an array to a static value from the start index (inclusive) to the end index (exclusive).

// These are some of the most commonly used array methods in JavaScript, and they provide powerful tools for working with arrays and data manipulation.


// Yes, there are more array methods in JavaScript. Here are a few additional array methods:

// 26. **`copyWithin(target, start, end)`**: Copies a sequence of array elements to the target position within the array, overwriting the existing values.

// 27. **`entries()`**: Returns a new array iterator object that contains key-value pairs for each index in the array.

// 28. **`keys()`**: Returns a new array iterator object that contains the keys (indices) of the array.

// 29. **`values()`**: Returns a new array iterator object that contains the values of the array.

// 30. **`from(arrayLike, mapFn, thisArg)`**: Creates a new array from an array-like or iterable object (e.g., NodeList, Set) and optionally applies a mapping function to each element.

// 31. **`of(element1, element2, ...)`**: Creates a new array with the specified elements as its elements.

// 32. **`isArray(array)`**: Returns `true` if the argument is an array and `false` otherwise.

// 33. **`findLast(callback)`**: Returns the last element in the array that satisfies the provided testing function.


// 35. **`toLocaleString()`**: Returns a string representing the elements of the array in the specified locale.



 

// _________________________________________________________________________________________________________________________________________________________________________

// Math METHODS:


// JavaScript's `Math` object provides a wide range of mathematical methods and constants. Here's a list of some of the commonly used methods and properties available in the `Math` object:

// **Properties:**

// 1. `Math.PI`: Represents the mathematical constant π (pi).

// **Basic Mathematical Methods:**

// 2. `Math.abs(x)`: Returns the absolute value of `x`.
// 3. `Math.ceil(x)`: Returns the smallest integer greater than or equal to `x`.
// 4. `Math.floor(x)`: Returns the largest integer less than or equal to `x`.
// 5. `Math.round(x)`: Returns the value of `x` rounded to the nearest integer.

// **Trigonometric Methods:**

// 6. `Math.sin(x)`: Returns the sine of `x`, where `x` is in radians.
// 7. `Math.cos(x)`: Returns the cosine of `x`, where `x` is in radians.
// 8. `Math.tan(x)`: Returns the tangent of `x`, where `x` is in radians.
// 9. `Math.asin(x)`: Returns the arcsine (inverse sine) of `x`, in radians.
// 10. `Math.acos(x)`: Returns the arccosine (inverse cosine) of `x`, in radians.
// 11. `Math.atan(x)`: Returns the arctangent (inverse tangent) of `x`, in radians.
// 12. `Math.atan2(y, x)`: Returns the angle in radians between the positive x-axis and the point (x, y).

// **Exponential and Logarithmic Methods:**

// 13. `Math.exp(x)`: Returns e (Euler's number) raised to the power of `x`.
// 14. `Math.log(x)`: Returns the natural logarithm (base e) of `x`.
// 15. `Math.log10(x)`: Returns the base 10 logarithm of `x`.
// 16. `Math.pow(x, y)`: Returns `x` raised to the power of `y`.
// 17. `Math.sqrt(x)`: Returns the square root of `x`.

// **Random Number Methods:**

// 18. `Math.random()`: Returns a random floating-point number between 0 (inclusive) and 1 (exclusive).
// 19. `Math.floor(Math.random() * (max - min + 1)) + min`: Generates a random integer between `min` (inclusive) and `max` (inclusive).

// **Additional Methods:**

// 20. `Math.min(x1, x2, ...xn)`: Returns the smallest of the provided values.
// 21. `Math.max(x1, x2, ...xn)`: Returns the largest of the provided values.
// 22. `Math.abs(x)`: Returns the absolute (positive) value of `x`.

// These are some of the key methods and properties available in the `Math` object in JavaScript. They are useful for various mathematical operations and calculations in your code.






// code for product select file in ADMIN SIDE 

// <div class="form-group">
//                 <label for="image">Product Image:</label>
//                 <div class="custom-file">
//                   <input type="file" class="custom-file-input" id="image" name="image" accept="image/*" multiple
//                     required>
//                   <label class="custom-file-label" for="image">Choose Image</label>
//                   <div class="imagePreview d-flex m-5" id="imagePreview"></div>
//                 </div>
//                 <div class="custom-file">
//                   <input type="file" class="custom-file-input" id="image" name="image" accept="image/*" multiple
//                     required>
//                   <label class="custom-file-label" for="image">Choose Image</label>
//                   <div class="imagePreview d-flex m-5" id="imagePreview"></div> m
//                 </div>
//                 <div class="custom-file">
//                   <input type="file" class="custom-file-input" id="image" name="image" accept="image/*" multiple
//                     required>
//                   <label class="custom-file-label" for="image">Choose Image</label>
//                   <div class="imagePreview d-flex m-5" id="imagePreview"></div>
//                 </div>
//               </div>