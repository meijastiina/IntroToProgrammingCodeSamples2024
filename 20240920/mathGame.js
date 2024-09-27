let number1, number2;
number1 =  Math.floor(Math.random() * 10); // Gets a random number 0-9
number2 =  Math.floor(Math.random() * 10); // Gets a random number 0-9
process.stdout.write("\n" + number1 + " + " + number2 + " = "); // Print out the question

process.stdin.on("data", function( inputFromUser ) { // Read in user input
    let answer = Number(inputFromUser); // We want this to be a number to do the comparison
    if ( answer == number1 + number2 ) { // Checks if user's answer is correct
        process.stdout.write("Correct!");
    } else {
        process.stdout.write("Nope, sorry!");
    }
    number1 =  Math.floor(Math.random() * 10); // Gets a random number 0-9
    number2 =  Math.floor(Math.random() * 10); // Gets a random number 0-9
    process.stdout.write("\n" + number1 + " + " + number2 + " = "); // Print out the question
});