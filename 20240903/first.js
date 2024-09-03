let age = 25;
console.log(age); 

let courseName = "Intro to Programming";
let amountOfCredits = 5;
let startDate = "2021-09-01";

console.log("You are studying " + courseName + ". Course has started on " + startDate + " and it is worth " + amountOfCredits + " credits.");

let x = 5, y = 10, z = 15;
let result;
result = x + y;
console.log("x = " + x + ", y = " + y + ", z = " + z + ", result = " + result);
result = y - x;
console.log("x = " + x + ", y = " + y + ", z = " + z + ", result = " + result);
result = x * y;
console.log("x = " + x + ", y = " + y + ", z = " + z + ", result = " + result);
result = y / x;
console.log("x = " + x + ", y = " + y + ", z = " + z + ", result = " + result);
result = x % 2;
console.log("x = " + x + ", y = " + y + ", z = " + z + ", result = " + result);
x++;
console.log("x = " + x + ", y = " + y + ", z = " + z + ", result = " + result);
y--;
console.log("x = " + x + ", y = " + y + ", z = " + z + ", result = " + result);

x = 5; 
y = "5"; 
z = 3;

result = x + y;
console.log("x = " + x + ", y = " + y + ", z = " + z + ", result = " + result);

result = x + z;
console.log("x = " + x + ", y = " + y + ", z = " + z + ", result = " + result);

result = y + z;
console.log("x = " + x + ", y = " + y + ", z = " + z + ", result = " + result);

result = x + y + z;
console.log("x = " + x + ", y = " + y + ", z = " + z + ", result = " + result);

result = x + z + y;
console.log("x = " + x + ", y = " + y + ", z = " + z + ", result = " + result);

process.stdout.write("Hello");
process.stdout.write(x.toString() + "\n ");

process.stdin.on("data",function(inputFromUser)
{
    let givenInput = inputFromUser;
    process.stdout.write("\nYou have entered: " + givenInput);
    process.exit();
});
