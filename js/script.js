  var quizQuistions = {

      name:"Super Hero Name Quiz",
      description:"How many super heroes can you name?",
      headline:"What is the real name of ",
      mainquestionList: [
          { "questionName": "Superman", "answer": "Clarke" },
          { "questionName": "Batman", "answer": "Bruce" },
          { "question": "Wonder Woman", "answer": "Dianna" }
        ]
  }

  // dom element grab
  var $finalScore = document.getElementById("score");
  var $ListOfquestions = document.getElementById('displayQuestion');
  var $ListOfFeedback = document.getElementById('feedback')
  var $startButton = document.getElementById('button');
  var $mainForm = document.getElementById('mainform');
  var $clockTimer = document.getElementById('clocktimer');



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
    // initialize time and set up an interval that counts down every second
    var time = 20;
    updateDom($clockTimer, time);
    var interval = window.setInterval(timeCoutdown, 1000)

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
      var questionVal = quizQuistions.mainquestionList[i].questionName;
      ask(questionVal);
    }

    function ask(questionAskParamater) {
      updateDom($ListOfquestions, quizQuistions.headline + questionAskParamater )
      $mainForm[0].value = "";
      $mainForm[0].focus();
    }

    function check(answer) {
      if(answer === quizQuistions.mainquestionList[i].answer){
        updateDom($ListOfFeedback, "Answer Correct", "right");
        score++;
        updateDom($finalScore, score);
      } else {
        updateDom($ListOfFeedback, "Answer Wrong", "wrong");
      }
      // check if any quistion available
      i++
      if(i === quizQuistions.mainquestionList.length){
        finalGameOver()
      } else {
        chooseQuestion();
      }
    }
    // time countdown and decrease the time
    function timeCoutdown(){
      time --;
      updateDom($clockTimer, time);
      if(time <= 0){
        finalGameOver();
      }
    }
    // game over
    function finalGameOver(){
        updateDom($ListOfquestions, "Gameover, Your scored is " +score+ " points");
        window.clearInterval(interval);
        hide($mainForm);
        show($startButton);
    }
  }
