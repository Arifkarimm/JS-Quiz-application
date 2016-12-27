var quiz = {

    name:"Super Hero Name Quiz",
    description:"How many super heroes can you name?",
    headline:"What is the real name of ",
    mainquestions: [
        { "question": "Superman", "answer": "Clarke Kent" },
        { "question": "Batman", "answer": "Bruce Wayne" },
        { "question": "Wonder Woman", "answer": "Dianna Prince" }
      ]
}

var score = 0;

play(quiz);


function play(quiz){

  for(var i=0; i<quiz.mainquestions.length; i++) {
    var question = quiz.mainquestions[i].question;
    var answer = ask(question);
    check(answer);
  }

  gameOver();

  function ask(question) {
    return prompt(quiz.headline + question);
  }

  function check(answer) {
    if(answer === quiz.mainquestions[i].answer){
      alert("Answer is Correct!");
      score++;
    } else {
      alert("Answer is Wrong!");
    }
  }

  function gameOver(){
    alert("Game Over, you scored " + score + " points");
  }
}
