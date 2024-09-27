let questions = [
    [
        'Who is the president of Finland?',
        ['Alexander Stubb', true],
        ['Sanna Marin', false],
        ['Heidi Fagerholm', false],
        ['Ville Virtanen', false]
    ],
    [
        'Who is the president of OAMK?',
        ['Alexander Stubb', false],
        ['Sanna Marin', false],
        ['Heidi Fagerholm', true],
        ['Matti Virtanen', false]

    ],
    [
        'What is the capital of Finland?',
        ['Turku', false],
        ['Oulu', false],
        ['Rovaniemi', false],
        ['Helsinki', true]

    ]
];
let question = Math.floor(Math.random() * questions.length);
process.stdout.write(questions[question][0]);
process.stdout.write("\n1.) " + questions[question][1][0]);
process.stdout.write("\n2.) " + questions[question][2][0]);
process.stdout.write("\n3.) " + questions[question][3][0]);
process.stdout.write("\n4.) " + questions[question][4][0] + "\n");
process.stdin.on("data", function( inputFromUser ){
    let userAnswer = Number(inputFromUser);
    if ( questions[question][userAnswer][1]) {
        process.stdout.write("You are right!")
    } else {
        process.stdout.write("Nope, sorry! The correct answer is " );
        for ( let i = 1; i < questions[question].length; i++ ) {
            if ( questions[question][i][1]) {
                process.stdout.write(questions[question][i][0]);
            }
        }
    }
    question = Math.floor(Math.random() * questions.length);
    process.stdout.write("\n" + questions[question][0]);
    process.stdout.write("\n1.) " + questions[question][1][0]);
    process.stdout.write("\n2.) " + questions[question][2][0]);
    process.stdout.write("\n3.) " + questions[question][3][0]);
    process.stdout.write("\n4.) " + questions[question][4][0] + "\n");
});