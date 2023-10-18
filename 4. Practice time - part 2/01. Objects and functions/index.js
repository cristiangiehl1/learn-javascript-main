// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country
let person = {
	name: "Cristian",
	age: 29,
	country: "Brazil",
}

// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 35 years old and lives in Norway"
const logData = (object) => {
	console.log(`${object.name} is ${object.age} years old and lives in ${object.country}.`);
}

// Call the logData() function to verify that it works
logData(person)