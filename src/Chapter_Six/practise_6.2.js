// 1. Create an array of descriptive words
const adjectives = ['Curious', 'Brave', 'Clever', 'Kind', 'Adventurous', 'Joyful', 'Strong', 'Creative'];

// 2. Create a function that contains a prompt asking the user for a name
function generateNickname() {
    // Use prompt() to ask the user for their name (works in browser environments)
    const userName = prompt("Please enter your name:");

    // Check if a name was entered
    if (userName) {
        // 3. Select a random value from the array using Math.random
        // The calculation here selects a random index based on the array's length
        const randomIndex = Math.floor(Math.random() * adjectives.length);
        const randomAdjective = adjectives[randomIndex];

        // 4. Output into the console the prompt value and the randomly selected array value.
        console.log(`Hello, ${userName}! Your randomly generated nickname is: ${randomAdjective} ${userName}`);
    } else {
        console.log("No name was entered. Please try again.");
    }
}

// 5. Invoke the function.
// Note: This script will run as expected in a web browser's console or a development environment that supports the 'prompt' and 'console.log' functions.
generateNickname();
