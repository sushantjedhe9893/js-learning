// JSON.parse( ) : Convert JSON to Object
// JSON.stringify( ): Covert an object to JSON

let person = {
    name: "Gajanan",
    city: "Pune",
    experience: 10,
    isMarried: true,
    skills: ["HTML", "CSS", "JavaScript"],
    address:{
      street: "Wakad",
      city: "Pune"
    }
} 
console.log(`Type of person is: ${typeof person}`);
const result = JSON.stringify(person);
console.log(`Type of after conversion is: ${typeof result}`);
console.log(result);

const personJSON = `
{
    "name": "Gajanan",
    "city": "Pune",
    "experience": 10,
    "isMarried": true,
    "skills": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "address": {
      "street": "Wakad",
      "city": "Pune"
    }
  }
`;
console.log(person.skills[0]);
console.log(`======== Convert JSON to Object ===========`);
const personObject = JSON.parse(personJSON);
console.log(typeof personObject);
console.log(personObject);