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
var $startButton = document.getElementById('button');
var $mainForm = document.getElementById('mainform');



function updateDom(element, content, klass){
  var p = element.firstChild || document.createElement("p");
  p.textContent = content;
  element.appendChild(p);
  if(klass){
    p.className = klass;
  }

}

//hide function
function hide(element){
  element.style.display = "none";
}

//hide show button
function show(element){
  element.style.display = "block";
}


// event listener for click button
$startButton.addEventListener('click', function (){
  play(quizQuistions);
}, false);

// Initial hide main form
hide($mainForm);


function play(quizQuistions){
  var score = 0;
  updateDom($finalScore, score);

  //hide button but show form
  hide($startButton);
  show($mainForm);

  // main form event listener
  $mainForm.addEventListener('submit', function(event){
    event.preventDefault();
    check($mainForm[0].value);
  }, false);

  var i = 0;
  chooseQuestion();

  function chooseQuestion(){
    var question = quizQuistions.mainquestions[i].question;
    ask(question);
  }

  function ask(question) {
    updateDom($ListOfquestions, quizQuistions.headline + question )
    $mainForm[0].value = "";
    $mainForm[0].focus();
  }

  function check(answer) {
    if(answer === quizQuistions.mainquestions[i].answer){
      updateDom($ListOfFeedback, "Answer Correct", "right");
      score++;
      updateDom($finalScore, score);
    } else {
      updateDom($ListOfFeedback, "Answer Wrong", "wrong");
    }
    // check if any quistion available
    i++
    if(i === quizQuistions.mainquestions.length){
      finalGameOver()
    } else {
      chooseQuestion();
    }
  }
  // game over
  function finalGameOver(){
      updateDom($ListOfquestions, "Gameover, Your scored is " +score+ " points");
      hide($mainForm);
      show($startButton);
  }
}
