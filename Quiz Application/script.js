const quizQuestions = 
[
    {
      question: "What is the full form of HTML?",
      options: ["HighText Machine Language", "HyperText and links Markup Language", "HyperText Markup Language", "None of these"],
      correctAnswer: "HyperText Markup Language"
    },
    {
      question: "The correct sequence of HTML tags for starting a webpage is -",
      options: ["Head, Title, HTML, body", "HTML, Body, Title, Head", "HTML, Head, Body, Title", "HTML, Head, Title, Body"],
      correctAnswer: "HTML, Head, Title, Body"
    },
    {
      question: "Which of the following element is responsible for making the text bold in HTML?",
      options: ["<pre>", "<a>", "<b>", "<br>"],
      correctAnswer: "<b>"
    },
    {
        question: "Which of the following tag is used for inserting the largest heading in HTML?",
        options: ["<h1>", "<h2>", "<h3>", "<h4>"],
        correctAnswer: "<h1>"
    },
    {
        question: "Which of the following tag is used to insert a line-break in HTML?",
        options: ["<br>", "<a>", "<pre>", "<b>"],
        correctAnswer: "<br>"
    },
    {
        question: "How to create an unordered list (a list with the list items in bullets) in HTML?",
        options: ["<ul>", "<li>", "<ol>", "<i>"],
        correctAnswer: "<ul>"
    },
    {
        question: "Which character is used to represent the closing of a tag in HTML?",
        options: ["!", "/", ".", "\\"],
        correctAnswer: "/"
    },
    {
        question: "How to create an ordered list (a list with the list items in numbers) in HTML?",
        options: ["<ul>", "<ol>", "<li>", "<>"],
        correctAnswer: "<ol>"
    },
    {
        question: "Which of the following tag is used to make the underlined text?",
        options: ["<ul>", "<i>", "<u>", "<pre>"],
        correctAnswer: "<u>"
    },
    {
        question: "Which of the following tag is used to add rows in the table?",
        options: ["<td> and </td>", "<th> and </th>", "<tr> and </tr>" , "None of the above"],
        correctAnswer: "<tr> and </tr>"
    }
  
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  let timeLeft = 100;
  let timerInterval;
  
  function startQuiz() 
  {
    document.getElementById("start-button").style.display = "none";
    displayQuestion();
    startTimer();
  }
  function displayQuestion() 
  {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const questionText = document.getElementById("question-text");
    const answerButtons = document.getElementById("answer-buttons");
    questionText.innerHTML = "";
    answerButtons.innerHTML = "";
    questionText.innerHTML = currentQuestion.question;
    currentQuestion.options.forEach(option => 
    {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("answer-button");
        answerButtons.appendChild(button);
        button.addEventListener("click", function() 
        {
            checkAnswer(option);
        });
    });
  }
  function checkAnswer(selectedOption) 
  {
    const currentQuestion = quizQuestions[currentQuestionIndex];
  
    if (selectedOption === currentQuestion.correctAnswer) 
    {
      score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) 
    {
      displayQuestion();
    } 
    else 
    {
      endQuiz();
    }
  }

  function startTimer() 
  {
    timerInterval = setInterval(function() 
    {
      timeLeft--;
      document.getElementById("timer").textContent = timeLeft;
      if (timeLeft <= 0) 
      {
        endQuiz();
      }
    }, 1000);
  }
  
  function endQuiz() 
  {
    clearInterval(timerInterval);
    const scorePercentage = (score / quizQuestions.length) * 100;
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = `
      <h2>Quiz Completed!</h2>
      <p>Your Score: ${score} out of ${quizQuestions.length}</p>
      <p>Score Percentage: ${scorePercentage}%</p>`;
  }
  document.getElementById("start-button").addEventListener("click", startQuiz);