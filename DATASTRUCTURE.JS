
// https://medium.com/@muhammedshaheerr/data-structure-and-algorithm-af546e8ff268

// DATA STRUCTURE:
//  A data structure is a way of organizing and storing data to perform operations efficiently.


// Algorithm : A set of well defined instructions to solve a particular problem.
// 	Should have a well defined inputs and outputs
// 	Should be language independent

// Absolute running time of an algorithm cannot be predicted , since it depends on several factors

// Time Complexity : Amount of time taken by an algorithm to run, as a function of input size
// Space Complexity: Amount of memory taken by an algorithm to run , as a function of input size
// ___________________________________________________________________________________________________________________________________________________________________________


// Representing complexity :
// 1. Big O notation (Worst case complexity)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
// 2. Omega notation (Best case complexity)
// 3. Theta notation (average case complexity)

// ___________________________________________________________________________________________________________________________________________________________________________

// Big O notation:

// Big O notation is a way to describe the time complexity of an algorithm, expressing how the running time or space requirements grow as the input size increases.
// Big-O notation is used to describe the worst-case performance of an algorithm.


// O(1): Constant time complexity. The algorithm's performance does not depend on the size of the input.

// O(log n): Logarithmic time complexity. Common in algorithms that divide the problem into smaller subproblems.

// O(n): Linear time complexity. The running time grows linearly with the size of the input.

// O(n log n): Linearithmic time complexity. Often seen in efficient sorting algorithms like merge sort and quicksort.

// O(n^2): Quadratic time complexity. Common in algorithms with nested iterations over the input data.

// O(n^k): Polynomial time complexity, where k is a constant.

// O(2^n): Exponential time complexity. Often seen in algorithms with recursive solutions that explore all possible combinations.



// Expressed in terms of the input 
// It focuses on bigger picture without getting caught in the minute details

// As the size of the input increases , the time complexity also increases


// If two nested loops the time complexity is quadratic
// If three nested loops the time complexity is Cubic
// If input size reduces by half every iteration , it is Logarithmic time complexity
 

// _______________________________________________________________________________________________________________________________________________________________________

// Recursion : 
// ----------
// Recursion is a problem solving technique where the solution depends on solutions to smaller instances of same problem
// When a function calls itself

// Every recursive function must have a base case. The base case is the simplest scenario that does not require further recursion. 
// This is a termination condition that prevents the function from calling itself indefinitely.
// Without a proper base case, a recursive function can lead to infinite recursion.

// ___________________________________________________________________________________________________________________________________________________________________________
// Recursive Fibonacci:

// function recFibo(n){
//   if(n<2){
//     return n
//   }
//   return recFibo(n-1) + recFibo(n-2)
// }


// Iterative: Big-O = O(n)   Linear time complexity
// Recursive: Big-O = O(2^n)   exponential time complexity, 

// ___________________________________________________________________________________________________________________________________________________________________________

// Recursive Factorial 

// function recFactorial(n){
//   if(n === 0){
//     return 1
//   }
//   return n * recFactorial(n-1)
// }

// Recursive: Big-O =  O(n)   Linear time complexity
// ___________________________________________________________________________________________________________________________________________________________________________

// Linear Search

// let arr = [-5,2,10,4,6]
// function linearSearch(arr,t){
 
//   for(let i = 0 ; i < arr.length ; i++){
//     if(arr[i] == t){
//       return i
//     }
//   }
//   return -1
// }

// Big-O = O(n)  Linear time complexity

// ___________________________________________________________________________________________________________________________________________________________________________

// Binary Search:
// Array should be sorted at first
	

// function binarySearch(array, target){
//   let leftInd = 0
//   let rightInd = array.length - 1

//   while(leftInd <= rightInd){
//     let middleInd = Math.floor((leftInd + rightInd)/2)
//     if(target === array[middleInd]){
//       return middleInd
//     }
//     if(target < array[middleInd]){
//       rightInd = middleInd - 1
//     }else{
//       leftInd = middleInd + 1
//     }
//   }
//   return -1
// }

// Big O NOtation: O(logn )     // logarithmic time complexity    //because input size reduced to half on each iteration

// ___________________________________________________________________________________________________________________________________________________________________________

// Recursive binary search:


// function recursiveBinarySearch(arr , target){
//   return search(arr, target, 0 , arr.length - 1)
// }

// function search(arr, target, leftInd, rightInd){
//   if(leftInd > rightInd){
//   return -1
//   }

//   let middleInd = Math.floor((leftInd +rightInd)/2)
//   if(target === arr[middleInd]){
//     return middleInd
//   }
//   if(target < arr[middleInd]){
//   return search(arr, target, leftInd, middleInd -1)
//   }else{
//     return search(arr,target, middleInd + 1 , rightInd)
//   }
// }

// BIG O = O(logn)   // logarithmic time complexity 

// ___________________________________________________________________________________________________________________________________________________________________________


// Static memory allocation:
// Allocation of memory during the time of compiling code

// Dynamic memory allocation:
// Allocation of memory during the time of execution
// ___________________________________________________________________________________________________________________________________________________________________________


// Memory Allocation:

// Memory allocation is the process of setting aside a portion of a computer's memory for a program to use. In programming, memory is essential for storing data and program instructions. There are two main types of memory allocation: 

// 1. STACK Allocation (LIFO) 
// 	Purpose: It is used for local variables and function call management.
// 	Allocation/Deallocation: Memory is automatically allocated and deallocated as functions are called and return.
// 	Allocated and deallocated in an order

// 2. HEAP Allocation ( The heap is a region of memory that operates more freely, allowing for dynamic memory allocation)
// 	Purpose: It is used for dynamic data structures like arrays and linked lists.
// 	Allocation/Deallocation: The programmer explicitly requests memory from the heap using functions like malloc (in C), new (in C++). Also programmer needs to release the allocated memory using free (in C) or delete (in C++) to avoid memory leaks.
// 	Allocated and deallocated in random order.

// * malloc() , calloc() , realloc(), free()  (Built in functions for allocating and deallocating memory in heap)



// ___________________________________________________________________________________________________________________________________________________________________________

// Memory Leak:

// A memory leak occurs when a program allocates memory from the heap but fails to release it when it's no longer needed. Over time, this can lead to a gradual depletion of available memory, potentially causing the program to slow down, crash, or even lead to system instability.


// * Failure to Free Allocated Memory:
// If memory is allocated using functions like malloc or new, it must be explicitly freed using free or delete when it's no longer needed. Forgetting to do so results in a memory leak.

// * Lost References:
// Losing all references to a block of dynamically allocated memory without freeing it leads to a memory leak. This can happen when variables or pointers that hold the memory address go out of scope or are reassigned without releasing the memory.

// * Circular References:
// In languages with automatic garbage collection, circular references( when a group of objects reference each other in a cycle, forming a closed loop of references)
//  between objects that are not properly handled by the garbage collector can lead to memory leaks.

// ___________________________________________________________________________________________________________________________________________________________________________

// Complexity analysis:
// Time complexity and space complexity

// Data Structure complexities:
// ---------------------------

// Data Structure     		Insert 		Delete		Search  
		
// 1- Unsorted array :  		O(1)		O(1)		O(n)
// 2- Sorted array : 		O(n)		O(n)		log(n)
// 3- Stack :			O(1)		O(1)		O(n)
// 4- Queue : 			O(1)		O(1)		O(n)
// 5- Unsorted linked list:	O(1)		O(1)		O(n)
// 6- Sorted linked list:		O(n)		O(n)		O(n)
// 7- Binary Tree: 		O(n)		O(n)		O(n)
// 8- Binary search tree		O(n)		O(n)		O(n)
// 9- Balanced Bnry Srch tree	log(n)		log(n)		log(n)
// 10- Hashing 			O(1)		O(1)		O(1)
// 11- Btree			logn 		logn 		logn


// ___________________________________________________________________________________________________________________________________________________________________________

 
// ARRAY  :
// --------
// An array is a data structure that stores a collection of elements, each identified by an index or a key. The elements are stored in contiguous memory locations, and the index serves as a reference to access a specific element.


// ___________________________________________________________________________________________________________________________________________________________________________


// Linked List :
// ------------
// A linked list is a linear data structure that consists of a sequence of elements, where each element points to the next one in the sequence. Each element, often called a "node," contains data and a reference (or link) to the next node in the sequence.

// The first node in a linked list is called the head.
// The head serves as the starting point for traversing the linked list.

// The last node in a linked list is called the tail.
// The tail node points to null, indicating the end of the list.

// Unlike arrays, linked lists do not use contiguous memory. Nodes can be scattered in memory, and they are connected through references.


// Singly Linked List:
// In a singly linked list, each node points only to the next node in the sequence.
// Access/Search: O(n)
// Insertion/Deletion at the beginning: O(1)
// Insertion/Deletion at the end: O(n)
// Insertion/Deletion in the middle (with given pointer/reference to the node): O(1)

// Doubly Linked List:
// In a doubly linked list, each node points to both the next and the previous nodes in the sequence, allowing for easier traversal in both directions.
// Access/Search: O(n)
// Insertion/Deletion at the beginning: O(1)
// Insertion/Deletion at the end: O(1)
// Insertion/Deletion in the middle (with given pointer/reference to the node): O(1)


// Circular Linked List:
// In a circular linked list, the last node points back to the first node, forming a circle.
// Access/Search: O(n)
// Insertion/Deletion at the beginning: O(1)
// Insertion/Deletion at the end: O(1)
// Insertion/Deletion in the middle (with given pointer/reference to the node): O(1)


// ___________________________________________________________________________________________________________________________________________________________________________


// Linear Data Structures: Elements are stored sequentially, and traversal follows a linear order.
// Non-Linear Data Structures: Elements have a hierarchical or interconnected structure, and traversal depends on the specific organization.

// ___________________________________________________________________________________________________________________________________________________________________________

// Contiguous:
// In a contiguous memory arrangement, elements are stored in adjacent memory locations, one after the other. This allows for direct and efficient access to elements using indices or pointers. 

// Non-Contiguous:
// In a non-contiguous memory arrangement, elements are stored at arbitrary memory locations, and access is achieved through references or pointers. This can lead to less efficient access times compared to contiguous structures. 

// ___________________________________________________________________________________________________________________________________________________________________________


// Garbage collection is an automatic memory management process used by programming languages to reclaim memory that is no longer in use by the program. The primary goal of garbage collection is to identify and de-allocate memory that is no longer reachable or referenced by the program, preventing memory leaks and improving overall memory efficiency.
// In js, memory allocation and releasing happens automatically. And this routine is done by garbage collecter.(Releases memory if a location is not reachable.

// Mark and sweep algorithm : Starts searching which all value have refernces. Then mark will mark all the refernced items ,and locations without any reference will not be marked. Then sweep will release or clear all the locations which are not marked. 

// Newer browsers are able to be compatible with circular refernce.

// ___________________________________________________________________________________________________________________________________________________________________________

// String :
// -------
// String is a primitive data type that represents a sequence of characters. They are used to store and manipulate text in a program.Strings in javascript are immutable ,such that once it is created it cant be edited or changed unless we create a new string.



// ___________________________________________________________________________________________________________________________________________________________________________

// Sorting Algorithms
// ------------------

// Bubble sort: 
// * Poor sorting algorithm.
// * Compare adjacent elements in the array and swap the positions if they are not in the intended order.
// * Simple but not efficient for large datasets

// Big O = O(n^2)  Quadratic time complexity

// _______________________________________________

// Insertion sort:
// * Virtually split the array to a sorted and an unsorted part.
// * shift to the right so array[j+1] = array[j]
// * NTI should be compared with each elements of the sorted part

//  Big O = O(n^2)  Quadratic time complexity

// _______________________________________________

// Selection Sort
// * It stores a minimum index in each iteration and swaps the elements by using that minIndex element.
// Big O  =  O(n^2)  Quadratic time complexity

// _______________________________________________

// Quick sort 
// * Identify the pivot element in the array
// * Uses recursion

// Average Case: O(n log n)   linearithmic time complexity.
// Worst Case: O(n^2)   Quadratic time complexity

// _______________________________________________

// Merge Sort
// * Done by splitting the array to sub arrays containing only single elements. Then merging it back using an temp sortedArray
 
// Big O = O(n log n)   linearithmic time complexity.


// ___________________________________________________________________________________________________________________________________________________________________________
// ___________________________________________________________________________________________________________________________________________________________________________

// Stack and Queue
// ---------------
// STACK: A stack is a data structure that follows the Last In, First Out (LIFO) principle, meaning that the last element added to the stack is the first one to be removed. Think of it as a collection of elements with two main operations: "push," which adds an element to the top of the stack, and "pop," which removes the top element.

// Push , Pop ,Peek (View the top element without removing it) , isEmpty , size  = O(1)  [ each of them is constant Time complexity ]

// _______________________________________________

// Queue :
// A queue is a data structure that follows the First In, First Out (FIFO) principle, meaning that the first element added to the queue is the first one to be removed. 
// Enqueue() , Front() (View the first element without removing it) , isEmpty , size  = O(1)  [ each of them is constant Time complexity ]  
// Except Dequeue Which is a linear time complexity as it has to fill the gap made by the deque in the first position.

// ___________________________________________________________________________________________________________________________________________________________________________

// Hash Table : (hash map)
// It is a data structure used to store data in key value pairs.
// with a key we can associate a value with that key for very fast lookup.

// They are implemented where constant time lookup and insertion are required.

// Hash Function: A hash function takes an input (often a key) and produces a fixed-size string of characters, which is usually a hash code or hash value. This hash value is used to determine the index where the corresponding value will be stored or looked up.

// Types of hashing:
// Division Modulo Hashing: Division hashing is one of the simplest forms of hashing, where the hash function computes the hash value by taking the remainder of the key divided by the size of the hash table.  
//  key % size of hashtable = index

// Multiplication Hashing: Multiplication hashing involves multiplying the key by a constant A extracting the fractional part, and then multiplying it by the size of the hash table to get the hash value. 

// Mid square method: It is done by sqiuaring the key and taking the middle digits as the index for hash table.

// Folding method: First divide/group the key into multiple equal parts, then continue it till it gets a index available in the table. 

// Collision Handling: Collisions occur when two different keys hash to the same index. There are various techniques to handle collisions, including:
// https://youtu.be/j612Fj-mgCY?si=JmYvim7kHSBmZhsf
// Separate Chaining(Open Hashing): Each bucket stores a linked list of key-value pairs that hash to the same index.
// Open Addressing(CLosed Hashing): When a collision occurs, the algorithm searches for the next available slot in the array.
// 	1.Linear Probing = Adds to next available space
// 	2.Quadratic probing = 0+ 1^2 value % 6  = 1 , 0 + 2^2 mod 6 = 4  will be the index Uses  a quadratic function.
// 	3.Double hashing 



// Insertion and Retrieval: To insert a key-value pair into the hash table, the hash function is applied to the key to determine the index, and the key-value pair is stored in the corresponding bucket. To retrieve a value, the hash function is again applied to the key to find the index, and the value is retrieved from the bucket at that index.

// Hash tables provide constant-time average-case complexity for insertion, deletion, and retrieval operations when the hash function distributes keys evenly across the array. However, in the worst case (due to collisions), the time complexity may degrade to O(n), where n is the number of elements.

// Hash tables are widely used in computer science and programming because of their efficiency in searching, insertion, and deletion operations. They are employed in various applications, including databases, caches, and language implementations, such as JavaScript objects in web development.


// In other words, hash tables store key-value pairs but the key is generated through a hashing function. So the search and insertion function of a data element becomes much faster as the key values themselves become the index of the array which stores the data. During lookup, the key is hashed and the resulting hash indicates where the corresponding value is stored.

// Set - To store a key value pair
// Get - To retrive a value given its key
// Remove - To delete a key value pair

// Applications:
// Used where constant time lookups and insertion are required.

// ___________________________________________________________________________________________________________________________________________________________________________

// load factor:
//  used to evaluate the efficiency and performance of a hash table. It represents the ratio of the number of stored elements to the total number of buckets in the hash table. The load factor is calculated using the formula:

// Load Factor = Number of Stored Elements / Total Number of Buckets

//  A well-designed hash table aims to keep the load factor within a certain optimal range.

// ___________________________________________________________________________________________________________________________________________________________________________

// Methods to prevent collission :
// 1.Good Hash Function Design:
// 2. Use of Cryptographic Hash Functions:
// Cryptographic hash functions are designed to be collision-resistant, making them suitable for applications where collision prevention is crucial, such as in secure hashing and digital signatures.
// 3. Increase Hash Table Size:
// A larger hash table reduces the chance of collisions.

// 4. Dynamic Resizing (Rehashing):
// Implement dynamic resizing strategies that involve increasing the size of the hash table when the load factor (the ratio of the number of stored elements to the table size) exceeds a certain threshold.
// After resizing, rehashing is performed to redistribute existing elements into the larger table, reducing the likelihood of collisions.

// 5. Separate Chaining:
// Each bucket in the hash table is associated with a linked list. Collisions are resolved by appending elements to the linked list corresponding to their hash value.

// 6. Open Addressing:
// In open addressing, collisions are resolved by finding the next available slot in the hash table.
// Subtypes include linear probing, quadratic probing, and double hashing.

// 7. Double Hashing:
// Uses two hash functions to determine both the initial position and the step size for resolving collisions.

// 8.Perfect Hashing:
// Guarantees no collisions for a specific set of keys. Suitable for situations where the set of keys is known in advance and fixed.

// ___________________________________________________________________________________________________________________________________________________________________________


// Stack Underflow:

// Definition: A stack underflow occurs when an attempt is made to pop an element from an empty stack.
// Scenario: In a stack, the "pop" operation removes the top element from the stack. If the stack is empty, attempting to perform a pop operation results in a stack underflow.


// Stack Overflow:

// Definition: A stack overflow occurs when the stack size limit is exceeded due to excessive recursion or a large number of function calls.
// Scenario: In many programming environments, the stack has a finite amount of space allocated for function calls and local variables. If this space is exhausted due to a deep or infinite recursion, it results in a stack overflow.


// ___________________________________________________________________________________________________________________________________________________________________________

// Divide and conquer strategy :

// The "divide and conquer" strategy is a fundamental algorithmic design paradigm used in computer science and problem-solving. The basic idea is to break down a complex problem into smaller, more manageable subproblems, solve these subproblems independently, and then combine their solutions to solve the original problem. The approach is often recursive in nature.

// ___________________________________________________________________________________________________________________________________________________________________________

// Types of Queues:

// Linear Queue:
// Simplest form of a queue, elements are added at the rear and removed from the front.
// Circular Queue:

// Similar to a linear queue, but the rear is connected to the front, forming a circle.
// Allows for more efficient use of space.
// Priority Queue:

// Elements have priorities assigned.
// Higher priority elements are processed before lower priority elements.
// Double-ended Queue (Deque):

// Allows insertion and deletion at both ends.
// Can operate as a queue or a stack.
// Blocking Queue:

// A type of queue where enqueue or dequeue operations may block if certain conditions are not met.
// Often used in concurrent programming.

// ___________________________________________________________________________________________________________________________________________________________________________

// Diiffernce between hashtable and objects:

// Key Types:
// Objects in JavaScript only allow string and symbol keys. Any other key type is implicitly converted to a string.
// Built-in Methods:
// Objects in JavaScript come with built-in methods and behaviors, such as toString, hasOwnProperty, and others.
// Prototype Chain:
// Objects in JavaScript are part of a prototype chain, allowing for inheritance and property lookup in the prototype chain.

// -------------

// Key Types:

// Hash tables allow keys of any data type (including objects, functions, etc.). These keys are hashed to map to specific locations in the table.
// Built-in Methods:

// Hash tables do not have built-in methods in the same way objects do. Operations on hash tables are generally more manual and involve hash code calculation, collision handling, etc.
// Prototype Chain:

// Hash tables do not have a prototype chain. Each key is hashed to a specific location, and the hash table directly stores values at those locations.
// Usage:

// Hash tables are often used for associative arrays, caches, and situations where quick access to values based on keys is crucial. They are used when the keys are not limited to strings or symbols.
// Implementation Details:

// Hash tables often involve more complex implementation details like hash functions, collision resolution strategies (chaining, probing), and resizing mechanisms.

// ___________________________________________________________________________________________________________________________________________________________________________
// ______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
									
// 									 3rd WEEK DATA STRUCTURE

// _________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________


// Tree and graph : Non linear data strucure
// Multiple levels of data (Form of heirarchy)
// Grows from top to bottom 
// Consists of root and nodes
// Trees can be defined as a collection of entities (node) linked together to stimulate a heirarchy.

// Root:
// Node that doesnt have any parent is called Root
// The root node is the initial node of the tree in data structures.


// Parent node : The immediate Predecessor of a node is parent node.
// child node : The immediate successor of a node is child node.
// Leaf node (external nodes): The node which is having no child is leaf node.
// non-leaf node (internal nodes) : Nodes having atleast one child.
// Path: Sequence of consecutive edges from the sourch node to the destination node.
// Ancestor Node: Any predecessor node on the path from the root to that node is ancestor node.
// Descendant Node: Any successor node on the path from the node to the leaf node.
// Subtree : A subtree is a tree formed by a node and all its descendants in the original tree.

// Sibling: Child node of same parent node
// Degree : No of child nodes of a given node
// Degree of tree : Max degree of any node in the entire tree
// Depth of node: Length of the path from root to that node.
// Height of a node: no. of edges in the longest path from that node to a leaf. 
	
// 	Height of tree = Height of the root node
// 	Level of tree = height of the tree

// Level of Node: no of edges from root to that node. (equal to depth of node)
// root is at level 0 in a tree.

// n nodes => (n - 1 ) edges

// Application : File system , Quick search 


// ___________________________________________________________________________________________________________________________________________________________________________


// The tree is a nonlinear hierarchical data structure and comprises a collection of entities known as nodes. It connects each node in the tree data structure using "edges”, both directed and undirected.

// The Necessity for a Tree in Data Structures:-
// Other data structures like arrays, linked-list, stacks, and queues are linear data structures, and all these data structures store data in sequential order.Time complexity increases with increasing data size to perform operations like insertion and deletion on these linear data structures. 
// The non-linear structure of trees enhances the data storing, data accessing, and manipulation processes by employing advanced control methods traversal through it.

// Edge 
// In a tree in data structures, the connecting link of any two nodes is called the edge of the tree data structure.

// Siblings
// In trees in the data structure, nodes that belong to the same parent are called siblings.

// ------------------------------
// General Applications of Trees:
// File System:
// Trees are used to represent the hierarchical structure of directories and files in a file system.

// Organization Chart:
// Trees can represent the hierarchical structure of an organization or a company.

// HTML DOM (Document Object Model):
// The structure of HTML documents is represented as a tree in the DOM, facilitating manipulation through scripting languages like JavaScript.
// ___________________________________________________________________________________________________________________________________________________________________________

// Binary trees:
//  A tree in which each node can have atmost two child nodes(children)
// Maximum number of nodes in binary tree = (2 ^ h+1) - 1
// Minimum number of nodes in binary tree = h+1
 
// Binary tree components: Data element , Pointer to left subtree , Pointer to right subtree

// Hashing, routing data for network traffic, data compression, preparing binary heaps, and binary search trees are some of the applications that use a binary tree.

// ----------------------------------------
// The tree’s minimum height is  h = n - 1

// ___________________________________________________________________________________________________________________________________________________________________________
// Types of binary tree:

// 1. Full / proper / Strict Binary Tree
// It is a special kind of a binary tree that has either zero children or two child nodes.

// It means that all the nodes in that binary tree should either have two child nodes of its parent node or the parent node is itself the leaf node. 
// 	[   number of leaf nodes = number of internal nodes + 1   ]

// max nodes = (2^h+1) - 1
// min nodes = (2^h) + 1
	

// 2. Complete Binary Tree
// A Complete binary tree is another specific type of binary tree where-- all the tree levels are filled entirely with nodes, except the lowest level of the tree . where the nodes are arranged as left as possible.

// max nodes = (2^h+1) - 1
// min nodes = 2^h


// 3. Perfect Binary Tree
// A binary tree is said to be ‘perfect’ if all the internal nodes have strictly two children, and every external or leaf node is at the same level in a tree.
// It is both complete binary and full binary tree.

// 4.Degenerate binary tree
//  BInary tree in which each internal node will have only one child
// Such trees are similar to a linked list performance-wise. 

// ___________________________________________________________________________________________________________________________________________________________________________

// Benefits of a Binary Tree :-
// The search operation in a binary tree is faster as compared to other trees
// Only two traversals are enough to provide the elements in sorted order
// It is easy to pick up the maximum and minimum elements
// Graph traversal also uses binary trees

// Applications of Binary Trees:

// Binary Heap:
// Binary heaps are used in implementing priority queues, where each node has a value less than or equal to its children.

// Huffman Coding Tree:
// Binary trees are used in Huffman coding, a compression algorithm widely used in file compression.

// Game Trees: 
// Binary trees are used to represent possible moves and outcomes in decision trees for games, especially in AI for game-playing.

// ___________________________________________________________________________________________________________________________________________________________________________

// AVL tree:
// AVL (Adelson-Velsky and Landis) trees are a type of self-balancing binary search tree. In an AVL tree, the balance factor of every node (the difference in heights between the left and right subtrees) must be in the range of -1, 0, or 1. If, at any time during an insertion or deletion operation, the balance factor of a node becomes outside this range, the tree is rebalanced to restore the AVL property.

// Convertion of a larger height BST to lower height BST by undergoing rotations.(To convert to a balanced BST) 

// Balance Factor  = Height of left subtree - Height of right subtree 
// Balance factor should not be less than -1 or greater than 1 { -1 , 0 , 1}
// An unbalanced BSTree can be balanced by performing rotations.

// LL-rotation : Single step rotation
// LR-rotatiom : Double step rotation
// RR-rotation : Single step rotation
// RL-rotatiom : Double step rotation

// https://www.youtube.com/watch?v=jDM6_TnYIqE

// Red Black tree have less number of rotations as compared to AVL tree.
// Red Black tree does nt HAVE THAT much strict rule as AVL tree , but is equally efficient as AVL tree.


// Segment tree: 
// A Segment tree is static. Therefore, you won’t be able to modify the structure of a segment tree after it has been built.

// _________________________________________________________________________________________________________________________________________________________________

// Binary Search Tree (BST):

// Mainly used for searching purpose.

// time taken for searching in a BST is the height of the tree.

// A binary search tree is a specific type of binary tree where the values of nodes follow a particular ordering.
// The key property of a BST is that the value of each node must be greater than or equal to all keys in its left subtree and less than or equal to all keys in its right subtree.
// This ordering allows for efficient search, insertion, and deletion operations.


// 1. What are the drawbacks of using a binary search tree?
// It uses a recursive method that takes up more stack space. Binary search has a bad relationship with memory hierarchy, i.e. caching.

// ___________________________________________________________________________________________________________________________________________________________________________

// Tree Traversals:
// Linear data structures have only one way to traverse through the data. But in non-linear DS like a tree can be traversed in different ways.

// Breadth-First Search (BFS) and Depth-First Search (DFS) are algorithms used for traversing or searching tree and graph structures. They differ in their exploration strategies and the order in which they visit nodes.
// ___________________________________________________________________________________________________________________________________________________________________________

// DFS:( Depth first search )
//  The DFS algorithm starts at the root node and explores as far as possible before backtracking.
//  Visits the root node, then visits all nodes in the left subtree and then the right subtree.

// Depending on the order in which we do , 3 types of DFS are:
// 1. Preorder 
// 2. Inorder
// 3. Postorder



// 1. PREORDER TRAVERSAL :

// Preorder traversal is a type of tree traversal algorithm where each node is visited before its children. The order of traversal is:
// * Visit the root node.
// * Traverse the left subtree in preorder.
// * Traverse the right subtree in preorder.


// 2. INORDER TRAVERSAL :

// Inorder traversal is another tree traversal algorithm that visits the nodes of a binary tree in a specific order. For an inorder traversal:
// * Traverse the left subtree in inorder.
// * Visit the root node.
// * Traverse the right subtree in inorder.

// 3. POSTORDER TRAVERSAL

// PostOrder traversal is another tree traversal algorithm that visits the nodes of a binary tree in a specific order. For an postOrder traversal:
// * Traverse the left subtree in postorder
// * Traverse the right subtree in postorder
// * visits the root node


// ___________________________________________________________________________________________________________________________________________________________________________

// BFS (Breadth first search) :
// BFS explores all the neighbors of a node before moving on to the next level of nodes. It uses a queue to keep track of the nodes to be explored.
// Explores all the nodes in the present depth before moving to the next level.

// 1.Create a queue.
// 2.Ennqueue the root node.
// 3.As long as node exists in the queue : 
//   * Dequeue the node from the front
//   * Read the node's value
//   * Enqueue the nodes left child if it exists
//   * Enqueue the nodes right child if it exists


// BFS : Breadth first traversal
// Level Order: It traverses through the nodes of the BST by completing each level starting from left to rigth. Then only it moves to the next level.
// https://www.youtube.com/watch?v=IozGo2kwRYE

// ___________________________________________________________________________________________________________________________________________________________________________

// Node deleting in Binary search tree :
// if left - greatest left side element
// if right - lowest right side element

// ___________________________________________________________________________________________________________________________________________________________________________


// --------------------- H e a p  : ----------------------------------
// A Heap is a special Tree-based data structure in which the tree is a complete binary tree. (Priority Queue.

// Operations of Heap Data Structure:
// Heapify: a process of creating a heap from an array.
// Insertion: process to insert an element in existing heap time complexity O(log N).
// Deletion: deleting the top element of the heap or the highest priority element, and then organizing the heap and returning the element with time complexity O(log N).
// Peek: to check or find the first (or can say the top) element of the heap. O(1)

// Types of Heap Data Structure:
// 1. Max-Heap: In a max-heap, the value of each parent node is greater than or equal to the values of its children nodes.

// 2. Min-Heap : In a min-heap, the value of each parent node is less than or equal to the values of its children nodes.
// ___________________________________________________________________________________________________________________________________________________________________________

// Properties of Heap:
// * Complete Binary Tree: A heap tree is a complete binary tree, meaning all levels of the tree are fully filled except possibly the last level, which is filled from left to right. This property ensures that the tree is efficiently represented using an array.
// * Heap Property: This property ensures that the minimum (or maximum) element is always at the root of the tree according to the heap type.
// * Efficient Insertion and Removal.
// ___________________________________________________________________________________________________________________________________________________________________________

// Heapify:
// For making a tree a Heap tree it should be a ACBT(Almost complete binary tree) and ordering property.(Root element must be the maximum element )

// It is the process to rearrange the elements to maintain the property of heap data structure. It is done when a certain node creates an imbalance in the heap due to some operations on that node. It takes O(log N) to balance the tree. 

// If we perform insert function then we need to perform heapify function to trnsform it to a valid heap. This operation also takes O(logN) time.

// Deletion also takes O(logN) time.

// ___________________________________________________________________________________________________________________________________________________________________________

// Applications of Heap Data Structure:
// 1. Priority Queues: Priority queues can be efficiently implemented using Binary Heap because it supports insert(), delete() and extractmax(), decreaseKey() operations in O(log N) time. 

// 2. Heap Sort:
// Heap data structure is the foundation of the heap sort algorithm. Heap sort is an in-place sorting algorithm that uses a binary heap to build a sorted array efficiently.
// It has a guaranteed O(n log n) time complexity for sorting.

// 3.Graph algorithms: Heaps are used in graph algorithms such as Dijkstra’s shortest path algorithm, Prim’s minimum spanning tree algorithm, and the A* search algorithm.

// 4.File Compression: Heaps are used in data compression algorithms such as Huffman coding, which uses a priority queue implemented as a min-heap to build a Huffman tree.
// ___________________________________________________________________________________________________________________________________________________________________________

// Advantages of Heaps:
// Fast access to maximum/minimum element (O(1))
// Efficient Insertion and Deletion operations (O(log n))
// Flexible size
// Can be efficiently implemented as an array
// Suitable for real-time applications
//  tree is always balanced, which is one of the key properties that makes heaps efficient.

// Disadvantages of Heaps:
// Not suitable for searching for an element other than maximum/minimum (O(n) in worst case)+
// Extra memory overhead to maintain heap structure
// Slower than other data structures like arrays and linked lists for non-priority queue operations.

// ___________________________________________________________________________________________________________________________________________________________________________

// The structure of a heap is not unique, because there can be multiple valid heap structures for a given set of values. However, the property of being a min heap or a max heap is unique for a given set of values.

// ___________________________________________________________________________________________________________________________________________________________________________

// Construction of Heaps:
// 1. Insert key one by one(O nlogn):
// In this method when a child is added then the parent should be greater than the child , if not they both are swapped.

// 2. Heapify method: (O n)
// This method starts from the second last level to above.
// The number of swaps depends upon the number of levels , so if the swap is taking place in the 2nd level then the maximum possible swaps are 2.
 
// Bulid Heap:
// Create heap class , Build Heap method using the heapify down method by iterating from the lastNonLeafIndex of the tree

// ___________________________________________________________________________________________________________________________________________________________________________


// Heap sort: : : 
// time-Complexity = nlogn

// * Heap sort is a comparison-based sorting technique based on Binary Heap data structure. It is similar to the selection sort where we first find the minimum element and place the minimum element at the beginning. Repeat the same process for the remaining elements.

// First convert the array into heap data structure using heapify, then one by one delete the root node of the Max-heap and replace it with the last node in the heap and then heapify the root of the heap. Repeat this process until size of heap is greater than 1.
// ___________________________________________________________________________________________________________________________________________________________________________

// APPLICATIONS :

// BST: 
// * Dictionary implementation.
// * Balanced trees like AVL and RED-BLACK TREE.
// * Range based search.

// Heap:
// * Priority queues
// * Heap sort algorithms
// * Job scheduling and event handling

// Trie:
// * Auto-Completion and Predictive Text
// * Spell checkers
// * IP Routing Table.

// Graph:
// * Social networks
// * Recommendation system
// * Network routing
// ___________________________________________________________________________________________________________________________________________________________________________

// Trie Ds:
// A trie is a tree-like data structure used to store a dynamic set of strings where the keys are usually sequences, such as words in dictionary.
// and it is also sometimes called a "prefix tree" because it stores prefixes of strings.

// In a trie, each node represents a single character or a portion of a key. 
// The root node represents the empty string, and each edge from a node to its children represents a character. 

// Tries are particularly useful for tasks like storing and searching for words in a dictionary, autocompletion systems, and IP routing tables. They excel in scenarios where there is a lot of shared prefix information among the keys.

// Advantages of tries include efficient prefix searching, fast insertion, and the ability to support various string-related operations. However, they can consume more memory compared to other data structures, and their performance may degrade in scenarios with a large alphabet size.

// Suffix Tree and Prefix Tree are both specialized types of tries, which are tree-like data structures commonly used in string-related algorithms.



// ___________________________________________________________________________________________________________________________________________________________________________

// Graph on DS

// Bidirectional , Unidirectional , Cyclic graph, Disconnected graph , non cyclic , connnected graph , weighted graph

// Facebook mutual friends graph - Use of graph
// Finding shortest difference (In google maps and all)

// A single node can have unlimited amount of connections.

// Node - Vertex , Nodes - Vertices

// Starting node - Vertex ,, Destination next node - edge

// Implemented using hasmap / hashtable
// keeps vertex as key and edge as the value.

// Time complexity and Space : sum of vertices and edges
// ___________________________________________________________________________________________________________________________________________________________________________

// Dijstras algorithm:
// 	Algorithm for single source shortest path problem for a graph with non negative edge weights.

// 	Dijkstra's algorithm has a time complexity of O((V + E) log V) using a priority queue, where V is the number of vertices and E is the number of edges in the graph.
// Relaxation: The process of reducing the path distance of a source node to a vertex node is called relaxation.
// 	the algorithm checks if the distance to reach that neighbor through the current node is shorter than the previously recorded distance.
	
// It may or may not work in the case of negative edged graphs.
// __________________________________________________________________________________________________________________________________________________________________________

// Bellman-fords algorithm: It is used in the case of single source shortest path in negative weighted edge graphs.
// 	It repeatedly relaxes all edges n-1 times. (n = number of vertices)
// In the end all the vertex and source node path distance will be the minimum.

// Time complexity = n^3
// ___________________________________________________________________________________________________________________________________________________________________________

// log n (logarithmic)- The time complexity of an operation increases by constant values when the input size increases.
// n logn (log linear time complexity) = The time complexity of an operation increases with proportion to the change in input size. this is more efficient.
// ___________________________________________________________________________________________________________________________________________________________________________
