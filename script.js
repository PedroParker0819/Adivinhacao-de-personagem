let currentImageIndex = 0;
let points = 0;
const images = ["yuta.jpg", "download.jpg", "character3.jpg"]; // add more images to the array
const characterNames = ["Yuta", "Edward", "Character 3"]; // add more character names to the array
function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    const characterImage = document.getElementById("character-image");
    characterImage.src = images[currentImageIndex];
}

function updateScore() {
    const scoreElement = document.getElementById("score");
    scoreElement.textContent = `Pontos: ${points}`;
}

document.getElementById("submit-button").addEventListener("click", () => {
    const characterNameInput = document.getElementById("character-name");
    const characterName = characterNameInput.value.trim();
    
    // TO DO: implement logic to check if the character name is correct
    const correctGuess = checkGuess(characterName);
    
    if (correctGuess) {
        points++;
        updateScore();
    }
    
    characterNameInput.value = "";
    changeImage();
});

function checkGuess(inputName) {
    const nameLowerCase = inputName.toLowerCase();
    return characterNames.some(name => name.toLowerCase() === nameLowerCase);
}