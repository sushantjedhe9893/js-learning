// let person = {
//     name: "Sushant",
//     id: "E00245",
//     Role: ["Dev", "DBA"],
//     Age: 23,
//     DOJ : "11-12-2019",
//     isMarried : false ,
//     Address: {
//       Street : "32, Laham St." ,
//       City : "Innsbruck",
//       Country : "Austria"
//     },
//     "Referred-by" : "E0012"
//     };


let newperson = `{
    "name": "Sushant",
    "id": "E00245",
    "Role": ["Dev", "DBA"],
    "Age": 23,
    "DOJ" : "11-12-2019"
    "Married" : false,
    "Address": [
      "Street" : "32, Laham St. ",
      "City" : "Innsbruck",
      "Country" : "Austria"
    ],
    "Referred-by" : "E0012"
    };
`
console.log(newperson.Role[0]  );
console.log(`======== Convert JSON to Object ===========`);
const personObject = JSON.parse(newperson);
console.log(personObject);
