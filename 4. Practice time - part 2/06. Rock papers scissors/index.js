let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array
const randomArr = (arr) => {
	let arrLength = arr.length
	let randomIndex = Math.floor(Math.random() * arrLength)
	return arr[randomIndex] 
}

console.log(randomArr(hands));

