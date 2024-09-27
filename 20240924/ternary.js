// ternary operator syntax
// is ? true : false
let number1 = 1;

if ( number1 < 0 ) {
    process.stdout.write("Number is negative");
} else {
    process.stdout.write("Number is positive");
}

process.stdout.write(number1 < 0 ? "Number is negative" : "Number is positive");