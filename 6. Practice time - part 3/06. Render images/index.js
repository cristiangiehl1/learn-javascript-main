// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

let container = document.getElementById("container")


const renderImages = (arr) => {
    let imgsDOM = ""
    for (let index = 0; index < arr.length; index += 1) {
        imgsDOM += 
        `
        <img class="team-img" src="${arr[index]}">    
        ` 
    }
    container.innerHTML = imgsDOM
}

renderImages(imgs)
