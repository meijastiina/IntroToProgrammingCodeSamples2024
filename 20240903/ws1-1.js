/*
1.1 Task 1: Number Guessing Game
Create a simple game in which the user has to guess the secret number. Game has the following
functionality:
1. Program asks the user to enter a number.
2. Set secret number to be entered number plus one.
3. Print out whether the user won or not.
*/

// Program asks the user to enter a number.
process.stdout.write("Enter a number: ");
// Read user input
process.stdin.on("data", function(inputFromUser) {
    // Number() function parses a string and returns an integer.
    let numericInput = Number(inputFromUser);
    // Set secret number to be entered number plus one.
    let secretNumber = numericInput + 1; 
    // 3. Print out whether the user won or not.
    process.stdout.write("You typed in " + numericInput + ".\n");
    process.stdout.write("My number is " + secretNumber + ".\n");
    process.stdout.write("Sorry, you lost. I won. The game is over.");
    
    process.exit();
});
