let taskAtHand = 0; // 0=choice 1=adding task 2=removing task 3=print menu
let taskNames = new Array;
let taskDates = new Array;
process.stdout.write("\n************************ TODO ************************");
process.stdout.write("\n1 - Add task");
process.stdout.write("\n2 - Print todo");
process.stdout.write("\n3 - Print today's tasks");
process.stdout.write("\n4 - Remove task");
process.stdout.write("\n0 - Exit");
process.stdout.write("\n******************************************************");
process.stdout.write("\nChoice: ");
process.stdin.on("data", function( inputFromUser ) {
    
    switch (taskAtHand) {
        case 0:
            let choice = Number(inputFromUser);
            switch (choice) {
                case 1: // add task
                    taskAtHand = 1;
                    process.stdout.write("Name: ");
                    break; 
                case 2: // print todo
                    for ( let i = 0; i < taskNames.length; i++ ) {
                        process.stdout.write("\n" + taskNames[i]);
                    }
                    taskAtHand = 3;
                    break;
                default:
                    break;
            }
            break;
        case 1:
            let taskName = inputFromUser.toString().trim();
            taskNames.push(taskName);
            process.stdout.write("Task " + taskName + " added");
            taskAtHand = 3;
            break;
       }
        if (taskAtHand == 3) {
            process.stdout.write("\n************************ TODO ************************");
            process.stdout.write("\n1 - Add task");
            process.stdout.write("\n2 - Print todo");
            process.stdout.write("\n3 - Print today's tasks");
            process.stdout.write("\n4 - Remove task");
            process.stdout.write("\n0 - Exit");
            process.stdout.write("\n******************************************************");
            process.stdout.write("\nChoice: ");   
            taskAtHand = 0;
        }
});
