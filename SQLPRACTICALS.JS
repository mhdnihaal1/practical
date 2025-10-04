 
// ------------------------- Create a new database
// CREATE DATABASE database_name;

// ------------------------ Use a database
// USE database_name;

// --------------------------- Delete a database
// DROP DATABASE database_name;
 
// ----------------------------- Create a table
// CREATE TABLE users (
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   username VARCHAR(50),
//   email VARCHAR(100),
//   password VARCHAR(255),
//   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );

// ------------------------ View table structure
// DESCRIBE users;

// ------------------ Alter a table (e.g., add column)
// ALTER TABLE users ADD age INT;

// ------------------------------ Rename a column
// ALTER TABLE users RENAME COLUMN age TO user_age;

// -------------------------- Delete a column
// ALTER TABLE users DROP COLUMN user_age;

// -------------------------- Drop a table
// DROP TABLE users;
 
// ------------------------------ Insert data
// INSERT INTO users (username, email, password) VALUES ('john', 'john@example.com', 'pass123');

// --------------------------- Insert multiple records
// INSERT INTO users (username, email, password) VALUES 
// ('alice', 'alice@mail.com', 'pass1'),
// ('bob', 'bob@mail.com', 'pass2');

// ---------------------------- Update data
// UPDATE users SET age = 25 WHERE username = 'john';

// ------------------------------- Delete data
// DELETE FROM users WHERE username = 'bob';
 
// ---------------------------- Get all data
// SELECT * FROM users;

// ----------------------------- Get specific columns
// SELECT username, email FROM users;

// ---------------------------------- Use WHERE clause
// SELECT * FROM users WHERE age > 18;

// ------------------------------- Use AND, OR
// SELECT * FROM users WHERE age > 18 AND email LIKE '%gmail.com';

// --------------------------------- Use ORDER BY
// SELECT * FROM users ORDER BY age DESC;

// ----------------------------- Use LIMIT
// SELECT * FROM users LIMIT 5;
// -----------------------aggregate
// SELECT COUNT(*) FROM users;
// SELECT AVG(age) FROM users;
// SELECT MIN(age), MAX(age) FROM users;
// SELECT SUM(age) FROM users;
// --------------------- GROUP BY & HAVING
// -
// SELECT age, COUNT(*) FROM users GROUP BY age;
// SELECT age, COUNT(*) FROM users GROUP BY age HAVING COUNT(*) > 1;
 
// ------------------------ INNER JOIN
// SELECT u.username, o.order_id
// FROM users u
// INNER JOIN orders o ON u.id = o.user_id;

// ----------------------- LEFT JOIN
// SELECT u.username, o.order_id
// FROM users u
// LEFT JOIN orders o ON u.id = o.user_id;

// ------------------------ RIGHT JOIN
// SELECT u.username, o.order_id
// FROM users u
// RIGHT JOIN orders o ON u.id = o.user_id;

// ---------------------- CROSS JOIN
// SELECT * FROM users CROSS JOIN products;
// ---------------------- Subqueries
 
// SELECT username FROM users WHERE age = (SELECT MAX(age) FROM users);
// ------------------------ Views
 
// ------------------------ Create a view
// CREATE VIEW active_users AS SELECT * FROM users WHERE age >= 18;

// ------------------------- Use a view
// SELECT * FROM active_users;

// ----------------------- Drop a view
// DROP VIEW active_users;
// ------------------ Other Important Commands

// -------------------------- Check all databases
// SHOW DATABASES;

// --------------------- Check all tables
// SHOW TABLES;

// -------------------- Check current user
// SELECT USER();

// -------------------- Find current database
// SELECT DATABASE();method= case :  select *, case when score >= 600 then 'Iconics' when score <=600 and score >300 then 'intermedaite' when score <=300 then 'noob' end as categorising_players from sport;


//  select distinct(age) as unique from sport;

//  for printing the coloumn in order = select * from class order by name;

//  for printing the cloumn in desc order = select * from class order by name desc;

//  for printing the whole table =  select * from class;

//  for inserting value to the table = {insert into class (name,address) values ('Nihal','Kochi'); ,,,,insert into class values ('5','Anas','Kasaragod');}

//  for giving a limit to the table =  select * from class limit 2;

//  for skipping the table rows =  select * from class offset 2;

//  for selecting(row) specific name or given character = select * from class where address = 'Kochi';

//  (or)  = select * from class where id = '3' or id = '5';

//  (and) = 

//  for adding coloumn to the table = alter table class add standard integer;

//  for updating the  coloumns = update class set standard = '8';

//  it remove all the elements in the table  and maintain the table = truncate table class;

//  for dropping the table = drop table class; 

//  for dropping the databse  = drop database student;(if we are on the database we can't drop data (we where on another database then we can))

// task{

// ACID properties.
// Normalization  = normalization reduce the redundancy and improve the data intergrity 
// Constrains.
// Relationships.
// Joins.
// 3-Schema architecture.
// Indexing.
// Aggregate functions.
// Scalar functions.
// SQL queries.
// Foreign key Primary key.
// Closure.
// Groupby.
// Having.
// Transactions.
// DML, DDL, DCL.
// }
 
// self join  = a regular join that joins a table with itself.
// cross join = It returns the Cartesian product of two tables.

// indexing
// type of indexing
// why to index
// Partial Index
// denormalization
// view
// Tcl commands
// Cursor 
// Transitive dependency 
// Concat
// Check duplicates in table 
// Union and Intersection 
// Deadlock
// Show primary key
// difference between 2NF and 3NF 
// add a column in existing table 
// how to decide in which column we should create indexing
// write query to get users who have no car 
// SQL order of execution 
// subquery
// data integrity
// composite key
// subquery
// order of execution


// SQL vs MySQL
// Primary key vs Unique key
// CHECK
// DEFAULT
// constraints in SQL
// Foreign keys
// CROSS JOIN
// SELF JOIN
// WHERE vs HAVING
// Entities
// Normalization & normal forms
// TRUNCATE vs DROP
// scalar function
// sub query
// UNION

// 1. unique key
// 2. candidate keys
// 3. ACID properties- refer more
// 4. purpose of normalisation
// 5. 1NF, 2NF, 3NF
// 6. stored procedure.
// 7. views
// 8. how to create a view
// 9. SQL injection, how to prevent SQL injection.
// 10. like and ilike

// - create a table and inset values into it.
// - fetch the details of students starting with a particular letter.


// -difference between consistency and atomicity 
// -how indexing works
// -sql order of execution
// -capitalize the first character of name 
// -write a query to get the name of team with highest trophy
// -create a table with foreign field


// Primary Key	Uniquely identifies each record in a table	
// Foreign Key	Enforces referential integrity between tables
// Unique Key	Ensures all values in a column are unique	
// Candidate Key	Each column uniquely identify row
// Composite Key	Primary key consisting of multiple columns	
// Super Key	Set of columns that uniquely identify a record
// Alternate Key	Candidate keys not chosen as the primary key




// Primary Index	        Automatically created with the primary key	
// Unique Index	        Ensures all values in the indexed column are unique	
// Composite Index	        Index on multiples columns
// Full-Text Index  	Used for full-text searches on large text columns	
// Spatial Index       	Used for indexing spatial data types	
// Bitmap Index	        Uses bitmaps, efficient for columns with low cardinality
// Function-Based Index	Index based on expressions or functions applied to columns	
// Clustered Index	Alters  physical order of table and stores rows in the index	
// Non-Clustered Index     Creates a separate object within the table pointing back to original rows



// Primary Key:   EmployeeID is a unique identifier and auto-increments.
// Not Null:      FirstName and LastName cannot be NULL.
// Unique:        Email must be unique across the table.
// Check:         to ensure that the values in a column (or a set of columns) meet specific conditions.
// Default:       JoiningDate defaults to the current date if not specified.
// Foreign Key:   DepartmentID must reference a valid DepartmentID in the Departments table.



// Atomicity (single, indivisible unit of transactions)
// Consistency (transactions bring the DB from one consistent state to another)
// Isolation (transactions are isolated from each other)
// Durability (committed transactions are permanent and survive system failures)

//   mathematical function 
// ---------------------------

// ABS(x) = SELECT product_id, ABS(sales - target_sales) AS difference FROM sales_data;

// CEIL(x) = SELECT item_id, CEIL(cost_per_unit) AS rounded_cost FROM inventory;

// FLOOR(x) = SELECT department_id, FLOOR(budget) AS allocated_budget FROM department_funds;

// POWER(x, y) = SELECT principal_amount, POWER((1 + interest_rate / 100), years) AS amount_after_interest FROM investments;

// SQRT(x) = SELECT plot_id, SQRT(area) AS side_length FROM plots;
 

//    string function 
// ----------------------

// CONCAT(str1, str2, ...) = SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM employees;

// SUBSTRING(str, start, length) = SELECT phone_number, SUBSTRING(phone_number, 1, 3) AS area_code FROM contacts;

// LENGTH(str) or CHAR_LENGTH(str) = SELECT username, LENGTH(username) AS username_length FROM users;

// TRIM(str) = SELECT username, TRIM(username) AS clean_username FROM users;

// UPPER(str) = SELECT username, UPPER(username) AS uppercase_username FROM users;

// LOWER(str) = SELECT email, LOWER(email) AS lowercase_email FROM users;

// REPLACE(str, old_str, new_str) = UPDATE products SET product_code = REPLACE(product_code, 'OLD', 'NEW') WHERE product_code LIKE 'OLD%';

// LEFT(str, n) = SELECT product_code, LEFT(product_code, 4) AS code_prefix FROM products;

// RIGHT(str, n) = SELECT customer_id, RIGHT(customer_id, 3) AS id_suffix FROM customers;

// REVERSE(str) = SELECT original_string, REVERSE(original_string) AS reversed_string FROM strings_table;
