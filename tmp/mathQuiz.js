let number1, number2;
let score = 0;
process.stdout.write("\n*********************MATH QUIZ*********************");
number1 = Math.floor(Math.random() * 10);
number2 = Math.floor(Math.random() * 10);
process.stdout.write("\n" + number1 + " + " + number2 + " = ");
process.stdin.on("data", function( inputFromUser ){
    let answer = Number( inputFromUser );
    if ( answer == number1 + number2 ) {
        process.stdout.write("Correct answer!");
        score++;
    } else {
        process.stdout.write("Incorrect answer!");
    }
    process.stdout.write("\nScore: " + score);
    if ( score >= 10 ) {
        process.stdout.write("\nYou won!\n");
        process.exit();
    } else {
        number1 = Math.floor(Math.random() * 10);
        number2 = Math.floor(Math.random() * 10);
        process.stdout.write("\n" + number1 + " + " + number2 + " = ");    
    }
})