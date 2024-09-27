let phoneBook = [
    ['John Doe', '123456'],
    ['Jane Doe', '7861325'],
    ['John Deer', '787778'],
    ['Matti Virtanen', '456789']
];
// "1 - John Doe - 123456"
for (let i = 0; i < phoneBook.length; i++) {
    process.stdout.write((i + 1).toString());
    for ( let j = 0; j < phoneBook[i].length; j++) {
        process.stdout.write("\t" + phoneBook[i][j]);
    }
    process.stdout.write("\n");
}