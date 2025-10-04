//================insertOne and insertMany===============

db.collectionName.insertOne({ name: "Alice", age: 25, city: "New York" });

db.collectionName.insertMany([
  { name: "Bob", age: 30, city: "San Francisco" },
  { name: "Charlie", age: 28, city: "Los Angeles" }
]);


//=======================find()=========================

db.collectionName.find({ city: "New York" });


//===============updateOne and updateMany========================

db.collectionName.updateOne({ name: "Alice" }, { $set: { age: 26 } });

db.collectionName.updateMany({ city: "Los Angeles" }, { $set: { city: "San Diego" } });


//======================deleteOne and deleteMany=================

db.collectionName.deleteOne({ name: "Charlie" });

db.collectionName.deleteMany({ city: "San Diego" });

// ===================sorting======================

db.collectionName.find().sort({ age: 1 }); // Sort by age in ascending order
db.collectionName.find().sort({ age: -1 }); // Sort by age in descending order

//==================limit====================

db.collectionName.find().limit(3); // Limit to 3 results

//======================count===============

db.collectionName.countDocuments({ city: "New York" }); // Count documents with city "New York" 


//========================create a index===============

db.collectionName.createIndex({ name: 1 }); // Create an index on the name field

//=========================drop a collection========================

db.collectionName.drop();
