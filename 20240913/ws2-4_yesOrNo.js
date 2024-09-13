/*
2.4 Task 4: Yes or No
Write a simple program that asks user a simple yes or no question and prints out a
corresponding message. Remember to also handle invalid input.
*/

// Ask user a question
process.stdout.write("Is JavaScript fun? (y/n) ");
// Store user input in a variable
process.stdin.on("data", function(inputFromUser){
    let answer = inputFromUser.toString().trim().toLowerCase();
    process.stdout.write("You entered " + inputFromUser);
    if ( answer == "y") {
    // Check user input: if yes
        // Print out yes message
        process.stdout.write("Yay!");
    }
    // if no
        // Print out no message
    // If something else
        // Print out invalid message
    process.exit();
})
