let sentence = ["Hello ", "my ", "name ", "is ", "Per"] 
let greetingEl = document.getElementById("greeting-el")

// Render the sentence in the greetingEl paragraph using a for loop and .textContent
for (let index = 0; index < sentence.length; index += 1) {
	greetingEl.textContent += sentence[index]
}
