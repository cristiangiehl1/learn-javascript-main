let myPoints = 3

// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable
function add3Points() {
	myPoints += 3
}

function remove1Point() {
	myPoints -= 1
}



// Call the functions to that the line below logs out 10
console.log(myPoints)

let n = 100

function result(number) {
	while (number > myPoints) {
		add3Points()
	}
	while (number < myPoints) {
		remove1Point()
	}	
}

result(n)

console.log("My points = " + myPoints)