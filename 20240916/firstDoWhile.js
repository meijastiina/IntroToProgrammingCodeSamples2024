// Ask user to enter their name
process.stdout.write("Name: ");
// Read in user input
process.stdin.on("data", function( inputFromUser ){
    // Create a counter variable
    let counter = 0;
    // Repeat 5 times
    do {
        // Print out name
        process.stdout.write(inputFromUser);
        // Increment counter
        // counter = counter + 1;
        counter++;
    } while ( counter < 5 );
    // Terminate process
    process.exit();
});
    