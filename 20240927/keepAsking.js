process.stdout.write("Enter something: ");

process.stdin.on("data", function(inputFromUser){
    let allNumbersEntered = false; // a flag variable to keep count of whether all numbers have been entered
    
    process.stdout.write("You entered " + inputFromUser);

    if ( Number(inputFromUser) == 0 || allNumbersEntered ) {
        // user entered 0 OR all numbers have been entered -> exit 
        process.exit();
    } else {
        // Let's keep asking
        process.stdout.write("Enter something else: ");
    }
})