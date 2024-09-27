// Create an array
let fruits = ["banana", "apple", "kiwi", "orange"];
// Print out first item
process.stdout.write("First item in the array is " + fruits[0]);
// Loop through the array backwards
for (let i = fruits.length - 1; i >= 0; i--) {
    process.stdout.write("\n" + fruits[i]);
}
// Add new fruit
fruits.unshift("grapefruit");
// Print out the array
process.stdout.write("\n" + fruits.toString());
// Add yet another
fruits.push("watermelon");
// Print out the array
process.stdout.write("\n" + fruits.join(" "));
// Sort z-a
fruits.sort().reverse();
// Print out the array
process.stdout.write("\n" + fruits.join(" / "));
