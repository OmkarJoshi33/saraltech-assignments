// Select elements
const nameInput = document.getElementById('nameInput');
const greetButton = document.getElementById('greetButton');
const greetingMessage = document.getElementById('greetingMessage');
const errorMessage = document.getElementById('errorMessage');

// Add event listener to the button
greetButton.addEventListener('click', () => {
    const name = nameInput.value.trim(); // Trim whitespace from the input

    

    if (name === '') {
        // Show error if input is empty
        errorMessage.textContent = 'Please enter your name!';
    } else {
        // Display the greeting message
        greetingMessage.textContent = `Hello, ${name}! Welcome!`;
        greetingMessage.classList.add('show');
    }
});
