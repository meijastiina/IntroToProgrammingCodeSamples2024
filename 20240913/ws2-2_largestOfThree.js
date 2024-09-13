/*
2.2 Task 2: Largest Number v.0.2
Create a simple program in which the user is asked to give three numbers and then your program prints out which one of them is largest.
*/
// Ask the user two enter three numbers
process.stdout.write("Please enter three numbers separated with commas: ");
// Read in the user input
process.stdin.on("data", function(inputFromUser){
    let inputArray = inputFromUser.toString().split(",");
    let number1 = Number(inputArray[0]);
    let number2 = Number(inputArray[1]);
    let number3 = Number(inputArray[2]);
    let highestNumber = number1;
    process.stdout.write("Entered numbers are " + number1 + " and " + number2 + " and " + number3);
    // if number1 is bigger
    if ( number2 > highestNumber ) {
        // number2 is higher -> set highest number to be number2
        highestNumber = number2;
    } 
    if  ( number3 > highestNumber) {
        // number3 is higher -> set highest number to be number2
        highestNumber = number3;
    }
    process.stdout.write("\nHighest number is " + highestNumber);
    process.exit();
})