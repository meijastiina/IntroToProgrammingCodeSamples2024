// Let's ask user for two numbers separated by spaces
process.stdout.write( "\n Please, enter two numbers separated with single comma characters : " ) ;
// Let's read in user input
process.stdin.on( "data", function( inputFromUser ) {
  
    // toString() converts input to string, split splits the string in to parts divided by space
    let numbersInString = inputFromUser.toString().split(",");

    // To get a specific part of the split string, we can use square brackets []. Indices start from 0. 
    process.stdout.write("First number is " + numbersInString[0] + "\n");
    process.stdout.write("Second number is " + numbersInString[1]);
  
    process.exit();
});
