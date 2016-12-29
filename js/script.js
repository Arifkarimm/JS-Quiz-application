var quizQuistions = {

    name:"Super Hero Name Quiz",
    description:"How many super heroes can you name?",
    headline:"What is the real name of ",
    mainquestions: [
        { "question": "Superman", "answer": "Clarke" },
        { "question": "Batman", "answer": "Bruce" },
        { "question": "Wonder Woman", "answer": "Dianna" }
      ]
}

// dom element grab
var $finalScore = document.getElementById("score");
var $ListOfquestions = document.getElementById('question');
var $ListOfFeedback = document.getElementById('feedback')


function updateDom(element, content, klass){
  var p = element.firstChild || document.createElement("p");
  p.textContent = content;
  element.appendChild(p);
  if(klass){
    p.className = klass;
  }

}

play(quizQuistions);


function play(quizQuistions){
  var score = 0;
  updateDom($finalScore, score);

  for(var i=0; i<quizQuistions.mainquestions.length; i++) {
    var question = quizQuistions.mainquestions[i].question;
    var answer = ask(question);
    check(answer);
  }

  gameOver();

  function ask(question) {
    updateDom($ListOfquestions, quizQuistions.headline + question )
    return prompt("Enter Your Desire Answer");
  }

  function check(answer) {
    if(answer === quizQuistions.mainquestions[i].answer){
      updateDom($ListOfFeedback, "Answer Correct", "right");
      score++;
      updateDom($finalScore, score);
    } else {
      updateDom($ListOfFeedback, "Answer Wrong", "wrong");
    }
  }

  function gameOver(){
      updateDom($ListOfquestions, "Gameover, Your scored is " +score+ " points");
  }
}
