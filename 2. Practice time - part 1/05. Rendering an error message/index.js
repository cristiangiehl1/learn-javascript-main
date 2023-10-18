// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".
let error_msg = document.getElementById("error")
let purchase_btn = document.getElementById("purchase-btn")

purchase_btn.addEventListener('click', function() {
	error_msg.textContent = "Something went wrong, please try again."
})


