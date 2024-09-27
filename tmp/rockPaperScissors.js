process.stdout.write("\n*************** ROCK, PAPER, SCISSORS ***************\n");
process.stdout.write("\nYour choice: (r/p/s) ");
process.stdin.on("data", function( inputFromUser ){
    let userChoice = inputFromUser.toString().trim();
    let computerChoice = Math.floor(Math.random() * 3); // 0=r, 1=p, 2=s
    switch (userChoice) {
        case 'r':
            if ( computerChoice == 0 ) {
                process.stdout.write("\nMy choice: Rock!");
                process.stdout.write("\nTie!");
            } else if ( computerChoice == 1 ) {
                process.stdout.write("\nMy choice: Paper!");
                process.stdout.write("\nI win!");
            } else {
                process.stdout.write("\nMy choice: Scissors!");
                process.stdout.write("\nYou win!");
            }
            break;
        case 'p':
            if ( computerChoice == 0 ) {
                process.stdout.write("\nMy choice: Rock!");
                process.stdout.write("\nYou win!");
            } else if ( computerChoice == 1 ) {
                process.stdout.write("\nMy choice: Paper!");
                process.stdout.write("\nTie!");
            } else {
                process.stdout.write("\nMy choice: Scissors!");
                process.stdout.write("\nI win!");
            }
            break;
            case 's':
                if ( computerChoice == 0 ) {
                    process.stdout.write("\nMy choice: Rock!");
                    process.stdout.write("\nI win!");
                } else if ( computerChoice == 1 ) {
                    process.stdout.write("\nMy choice: Paper!");
                    process.stdout.write("\nYou win!");
                } else {
                    process.stdout.write("\nMy choice: Scissors!");
                    process.stdout.write("\nTie!");
                }
                break;
        default:
            process.stdout.write("Invalid choice");
            break;
    }
    process.stdout.write("\n*************** ROCK, PAPER, SCISSORS ***************\n");
    process.stdout.write("\nYour choice: (r/p/s) ");
})
