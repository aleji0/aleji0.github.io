//the variables which contain the status of the game, and DOM elements 
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;
var questionsEl = document.getElementById('questions');
var timerEl = document.getElementById('time');
var choicesEl = document.getElementById('choices');
var submitBtn = document.getElementById('submit');
var startBtn = document.getElementById('start');
var initialsEl = document.getElementById('initials');
var feedbackEl = document.getElementById('feedback');

function startQuiz() {
  // hides the start screen
  var startScreenEl = document.getElementById('start-screen');
  startScreenEl.setAttribute('class', 'hide');

  // reveals the start screen
  questionsEl.removeAttribute('class');

  // starts the timer
  timerId = setInterval(clockTick, 1000);

  // display starting time
  timerEl.textContent = time;

  getQuestion();
}

function getQuestion() {
  // gets question object from array
  var currentQuestion = questions[currentQuestionIndex];

  // changes title to current question
  var titleEl = document.getElementById('question-title');
  titleEl.textContent = currentQuestion.title;

  // deletes choices
  choicesEl.innerHTML = '';

  // for loop
  for (var i = 0; i < currentQuestion.choices.length; i++) {
    var choice = currentQuestion.choices[i];
    var choiceNode = document.createElement('button');
    choiceNode.setAttribute('class', 'choice');
    choiceNode.setAttribute('value', choice);

    choiceNode.textContent = i + 1 + '. ' + choice;

    choicesEl.appendChild(choiceNode);
  }
}

function questionClick(event) {
  var buttonEl = event.target;

  // if the clicked element is not a choice button, do nothing.
  if (!buttonEl.matches('.choice')) {
    return;
  }

  // look for incorrect answer
  if (buttonEl.value !== questions[currentQuestionIndex].answer) {
    // subtracts time from timer
    time -= 15;

    if (time < 0) {
      time = 0;
    }

    timerEl.textContent = time;

    feedbackEl.textContent = 'Wrong!';
  } else {
    
    feedbackEl.textContent = 'Correct!';
  }

  feedbackEl.setAttribute('class', 'feedback');
  setTimeout(function () {
    feedbackEl.setAttribute('class', 'feedback hide');
  }, 1000);

  // goes to the next questions
  currentQuestionIndex++;

  // if there is not time left or there are no questions left, end the quiz
  if (time <= 0 || currentQuestionIndex === questions.length) {
    quizEnd();
  } else {
    getQuestion();
  }
}

// declares function which ends the quiz
function quizEnd() {
  
  clearInterval(timerId);

  // show end screen
  var endScreenEl = document.getElementById('end-screen');
  endScreenEl.removeAttribute('class');

  // show final score
  var finalScoreEl = document.getElementById('final-score');
  finalScoreEl.textContent = time;

  // hide questions section
  questionsEl.setAttribute('class', 'hide');
}

function clockTick() {
  // update time
  time--;
  timerEl.textContent = time;

  // check if user ran out of time
  if (time <= 0) {
    quizEnd();
  }
}

function saveHighscore() {
  // get value of input box
  var initials = initialsEl.value.trim();

  //checks for value to not be empty
  if (initials !== '') {
    // get 
    var highscores =
      JSON.parse(window.localStorage.getItem('highscores')) || [];

    // format new score object for current user
    var newScore = {
      score: time,
      initials: initials,
    };

    // saves scores
    highscores.push(newScore);
    window.localStorage.setItem('highscores', JSON.stringify(highscores));

    window.location.href = 'highscores.html';
  }
}

function checkForEnter(event) {
  if (event.key === 'Enter') {
    saveHighscore();
  }
}

// defines buttons
submitBtn.onclick = saveHighscore;
startBtn.onclick = startQuiz;
choicesEl.onclick = questionClick;
initialsEl.onkeyup = checkForEnter;
