const welcomeEl = document.getElementById("welcome-el")

// Give the function a parameter, greeting, that replaces "Welcome back"
function greetUser(greeting) {
    greeting.textContent = "Welcome back, Per Harald Borgen 👋"    
}

greetUser(welcomeEl)