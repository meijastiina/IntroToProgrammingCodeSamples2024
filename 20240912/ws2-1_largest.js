/*
2.1 Task 1: Largest Number v.0.1
Create a simple program in which the user is asked to give two numbers and then
your program prints out which one of them is largest.
*/
// Ask the user two enter two numbers
process.stdout.write("Please enter two numbers separated with commas: ");
// Read in the user input
process.stdin.on("data", function(inputFromUser){
    let inputArray = inputFromUser.toString().split(",");
    let number1 = Number(inputArray[0]);
    let number2 = Number(inputArray[1]);
    process.stdout.write("Entered numbers are " + number1 + " and " + number2);
    // if number1 is bigger
    if ( number1 > number2 ) {
        // print out number1 is bigger
        process.stdout.write(number1 + " is largest");
    } else {
    // else
        // print out number2 is bigger
        process.stdout.write(number2 + " is largest");
    }
    process.exit();
})