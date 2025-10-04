//            mongo task 

// A == db.EmployeesInfo.find().sort({Salary:-1}).skip(2).limit(1);

// B ==  db.EmployeesInfo.aggregate([ { $group: { _id: { EmpId: "$EmpId", EmpFname: "$EmpFname", EmpLname: "$EmpLname", Department: "$Department", Salary: "$Salary" }, count: { $sum: 1 } } }, { $match: { count: { $gt: 1 } } }] );

// C == db.EmployeesInfo.aggregate([ { $project: { EmpId: 1, type: { $cond: { if: { $eq: [{ $mod: ["$EmpId", 2] }, 0] }, then: "Even", else: "Odd" } } } }, { $group: { _id: "$type", count: { $sum: 1 } } }] );

// D ==  db.EmployeesInfo.find().sort({ _id: 1 }).limit(1);
//       db.EmployeesInfo.find().sort({ _id: -1 }).limit(1);

// E == db.EmployeesInfo.aggregate([{ $match: {} }, { $out: "EmployeeInfoCopy" }]);

// F == db.EmployeesInfo.aggregate([ { $group: { _id: "$Department", employees: { $push: "$$ROOT" } } }, { $match: { employees: { $exists: true, $ne: [] } } }] );

// G == db.EmployeesInfo.find().sort({ _id: -1 }).limit(3);

// H == db.EmployeesInfo.find({ EmpLname: { $regex: /^.{4}a$/i } });

//                          task 2

// A == db.marketing.insertMany([
//    {
//       "Age" : "Middle",
//       "Gender" : "Male",
//       "OwnHome" : "Own",
//       "Married" : "Single",
//       "Location" : "Close",
//       "Salary" : 65000,
//       "Children" : 1,
//       "History" : "Medium",
//       "Catalogs" : 12,
//       "AmountSpent" : 1800
//    },
//    {
//       "Age" : "Young",
//       "Gender" : "Female",
//       "OwnHome" : "Rent",
//       "Married" : "Single",
//       "Location" : "Far",
//       "Salary" : 48000,
//       "Children" : 0,
//       "History" : "High",
//       "Catalogs" : 10,
//       "AmountSpent" : 1200
//    },
//    {
//       "Age" : "Old",
//       "Gender" : "Male",
//       "OwnHome" : "Own",
//       "Married" : "Married",
//       "Location" : "Close",
//       "Salary" : 90000,
//       "Children" : 2,
//       "History" : "Low",
//       "Catalogs" : 15,
//       "AmountSpent" : 3200
//    },
//    {
//       "Age" : "Young",
//       "Gender" : "Female",
//       "OwnHome" : "Rent",
//       "Married" : "Single",
//       "Location" : "Far",
//       "Salary" : 40000,
//       "Children" : 1,
//       "History" : "Medium",
//       "Catalogs" : 14,
//       "AmountSpent" : 700
//    }
// ]);

// B == db.marketing.find().skip(2).limit(1);

// C == db.marketing.aggregate([ { $match: { Catalogs: { $gt: 10 } } }, { $group: { _id: null, averageAmountSpent: { $avg: "$AmountSpent" } } }] );

// D == db.marketing.aggregate([ { $match: { Children: { $gte: 1 } } }, { $group: { _id: null, averageSalary: { $avg: "$Salary" }, totalAmountSpent: { $sum: "$AmountSpent" } } }] );


//                       task 3

// A  ==  db.movies.aggregate([ { $group: { _id: "$director", /* Group by director*/ movies: { $push: { title: "$title", year: "$year", actors: "$actors" } } } }, { $match: { "movies.1": { $exists: true } /* Only include directors with more than one movie*/ } }] );

//                      task 4 

// A ==  db.orders.aggregate([ { $lookup: { from: "inventory", localField: "item", foreignField: "sku",  as: "inventoryData" } }, { $unwind: { path: "$inventoryData", preserveNullAndEmptyArrays: true  } }, { $project: { item: 1, price: 1, quantity: 1, instock: "$inventoryData.instock" } }] );

//                      task 5

// A == db.classes.aggregate([ { $lookup: { from: "members",localField: "enrollmentlist",foreignField: "name",as: "enrolledMembers" } }, { $project: {title: 1, days: 1, enrollmentlist: 1, enrolledMembers: 1 } }] );

//                     task 6 

// A == db.players.aggregate([
//    { $group: { _id: "$battingHand", count: { $sum: 1 } } },
//    { $sort: { count: -1 } }  
// ]);


// B == db.players.aggregate([
//    { $group: { _id: "$country", playerCount: { $sum: 1 } } },
//    { $sort: { playerCount: -1 } }  
// ]);

// C == db.players.aggregate([
//    { $group: { _id: { country: "$country", battingHand: "$battingHand" }, count: { $sum: 1 } } },
//    { $sort: { "_id.country": 1, "_id.battingHand": 1 } }  
// ]);


