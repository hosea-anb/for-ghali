const answerButton = document.getElementById('answerButton');
const response = document.getElementById('response');

// When the user clicks the "nah" button, make it move away
answerButton.addEventListener('click', function() {
    // Move the button slightly away from the mouse position
    const randomX = Math.random() * 500 - 250;
    const randomY = Math.random() * 500 - 250;
    
    answerButton.style.transform = `translate(${randomX}px, ${randomY}px)`;

    response.textContent = "Oops! You poor ass tried to click 'nah'! Try again looser.";
});

// When the user clicks "Yes", show a message
document.body.addEventListener('click', function(event) {
    if (event.target !== answerButton) {
        response.textContent = "u zesty af";
    }
});
