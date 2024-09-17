/*
3.3 Task 3: Looping through Strings
Create a program with the following functionality:
1. Ask the user to enter a string.
2. Loop through the string and print out the string letter by letter saying “1.
character is [first letter of given string.]”
Hint! You might need the following String methods: charAt() and trim() and
property length. Check them out in documentation.
*/

// Ask the user to enter a string
process.stdout.write("Please enter a string: ");
// Read the user input
process.stdin.on("data", function( inputFromUser ){
    // store user input in a variable and make it a string
    let enteredString = inputFromUser.toString().trim();
    // Loop through the string
    for ( let i = 0; i < enteredString.length; i++ ) {
        // Print out current letter
        process.stdout.write(i + 1 + ". character is " + enteredString.charAt(i) + "\n");
    }
    // STOP ASKING FOR INPUT!
    process.exit();
});