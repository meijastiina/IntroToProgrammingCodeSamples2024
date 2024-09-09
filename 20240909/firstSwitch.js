// Ask the user to input a number
process.stdout.write("Please enter a number: ");
// Read user input
process.stdin.on("data", function( inputFromUser ){
    // let number = inputFromUser.toString().trim();
    let number = Number(inputFromUser);
    process.stdout.write("You entered " + number + ".");
    // If user entered zero
    switch ( number ) {
        case 0:
            // print out
            process.stdout.write("You entered zero.");
            break;
        default:
        // If user didn't enter zero
            // print out
            process.stdout.write("You entered something else.");
    }
    // Exit process
    process.exit();
});