// Password Generator

// Arrays of characters, numbers, and symbols
let chars: string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers: string = "1234567890";
let symbols: string = "!@#$%^&*(){}_-()=?@#$%^&+=;',./;<";

// Function to generate a random password
function generatePassword(length: number): string {
    let allCharacters: string = chars + numbers + symbols; // Combining all the characters
    let password: string = ""; // Empty password initially

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters[randomIndex]; // Add random character to password
    }

    return password;
}

// Generate a password with the desired length (e.g., 14 characters)
let password = generatePassword(30);

// Output the generated password
if (password.length >= 8) {
    console.log("The Stronger Password is: " + password);
} else {
    console.log("Something went wrong");
}


