var readlineSync = require('readline-sync');

var userName = readlineSync.question("What is your name? ");
console.clear();
console.log("Welcome " + userName.toUpperCase() + "💐 ,\n");
console.log("This Quiz is related to Marvel Movies 🔥\n");
console.log("I will give you some questions and you have to give your answer");
console.log("If you give right Answer then you will awarded by +1 marks");
console.log("\n");


// quiz questions

question1 = {
  question: `the way of____ is the second film in the Cameron's Avatar franchise ? 
  a. water
  b. air
  c. land
  d. none`,
  answer: "a",
  full_answer: "water",
  explanation: "the way of water is the second film in the Cameron's Avatar franchise"
}

question2 = {
  question: `What is the correct sequence of the Avatar Cycle ? 
  a. Fire,Earth,Air,Water,...
  b. Air,Fire,Earth,Water,...
  c. Fire,Air,Water,Earth...
  d. Water,Air,Earth,Fire,...`,
  answer: "d",
  full_answer: "Water,Air,Earth,Fire,...",
  explanation: "the correct sequence of Avatar Cycle is: Water,Air,Earth,Fire,..."
}
question3 = {
  question: `How many Avatar movies are there in the franchise ? 
  a. 3
  b. 4
  c. 2
  d. 5`,
  answer: "c",
  full_answer: "2",
  explanation: "The last movie of Avatar movies is, Avatar was Released on December 10, 2009"
}
question4 = {
  question: `Who are the original firebenders ? 
  a. Dragons
  b. Wan
  c. Sun Warriers
  d. Sun`,
  answer: "a",
  full_answer: "Dragons",
  explanation: "The Dragon is the original partitioner of firebending"
}
question5 = {
  question: `Who are the original airbenders? 
  a. Monk Gyatso
  b. Sky Bison
  c. Lion Turtle
  d.Guru Laghima`,
  answer: "b",
  full_answer: " Sky Bison",
  explanation: " Sky Bison, is the original airbenders"
}
question6 = {
  question: ` Who are the original earthbenders? 
  a. Oma and Shu
  b. Badgermoles
  c. Dai Li agents
  d.Toph and Bolin`,
  answer: "b",
  full_answer: "Badgermoles",
  explanation: "'Badgermoles'is the original earthbenders."
}

var questions = [question1, question2, question3, question4, question5, question6];

var score = 0;
var index = 1;

function quiz() {
  // processing

  for (var i = 0; i < questions.length; i++) {
    console.log("--------------------------------");
    var cQuestion = questions[i];
    console.log("\n" + (index++) + ". " + cQuestion.question)
    var userAnswer = readlineSync.question("\n\tYour Answer: ");
    console.log("\n");
    if (userAnswer.toUpperCase() === cQuestion.answer.toUpperCase() || userAnswer.toUpperCase() === cQuestion.full_answer.toUpperCase()) {
      console.log("Wow! You are right 😀");
      score++;
    } else {
      console.log("No! Wrong Answer 😓");
      console.log("Correct Answer is : " + cQuestion.answer.toUpperCase());
    }
    console.log("\n\t" + cQuestion.explanation + "\n");
    console.log("--------------------------------");
  }


  // Final Score

  console.log("\n\n\tYou have Scored: " + score + "/" + questions.length);
  console.log("\n Congrats 🎉🎉! well played \n");
  if (score == 0)
    console.log("\tI think you don't like Marval Movies 🤨");
  else if (score == 1)
    console.log("\tNo! you didn't know about Marval 🙄");
  else if (score == 2)
    console.log("\tNah! you didn't Watch Marvel Movie 😫");
  else if (score == 3)
    console.log("\tok! I think you didn't watch all the series 🙂");
  else if (score == 4)
    console.log("\tYeah! you are near to Give All Answers 😊");
  else if (score == 5)
    console.log("\tWow! you Watch approximatly all the movies of Marvel Series well 🤗");
  else
    console.log("\tAmazing! You Watched Every Movies of Marvel 😍");
}

var permission = readlineSync.question("press enter key to continue or Press e to exit: ");
console.log("\n");

if (permission === "e") {
  console.log("Bye! Have a nice day 👋");
} else
  quiz();