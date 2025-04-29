let timeLeft = document.querySelector(".time-left");
 let quizContainer = document.getElementById("container");
 let nextBtn = document.getElementById("next-button");
 let countOfQuestion = document.querySelector(".number-of-question");
 let displayContainer = document.getElementById("display-container");
 let scoreContainer = document.querySelector(".score-container");
 let restart = document.getElementById("restart");
 let userScore = document.getElementById("user-score");
 let startScreen = document.querySelector(".start-screen");
 let startButton = document.getElementById("start-button");
 let questionCount;
 let scoreCount = 0;
 let count = 11;
 let countdown;
 
 
 
 const quizArray = [
     {
         id: "0",
         question: "Which Year Chandrayana 3 was Launched",
         options: ["2020", "2023", "2024", "2022"],
         correct: "2023",
     },
     {
         id: "1",
         question: "Which is the only continent in the world without a desert?",
         options: ["North America", "Asia", "Africa", "Europe"],
         correct: "Europe",
     },
     {
         id: "2",
         question: "Who invented Computer?",
         options: ["Charles Babbage", "Henry Luce", "Henry Babbage", "Charles Luce"],
         correct: "Charles Babbage",
     },
     {
         id: "3",
         question: "What does HTML stand for?",
         options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Language", " Hyperlink and Text Markup Language"],
         correct: "Hyper Text Markup Language",
     },
     {
         id: "4",
         question: " Which HTML element is used to create a hyperlink?",
         options: ["link tag", "a tag", "hyperlink tag", "url"],
         correct: "a tag",
     },
     {
         id: "5",
         question: "What property is used to change the text color in CSS?",
         options: ["text-color", "font-color", "color", "text-style"],
         correct: "color",
     }, {
         id: "6",
         question: "Which CSS property is used to control the spacing inside an element's",
         options: ["margin", "border-spacing", "padding", "spacing"],
         correct: "padding",
     },
     {
         id: "7",
         question: "Google (www.google.com) is a:",
         options: ["Search Engine", "Number in Math", "Directory of images", "Chat service on the web"],
         correct: "Search Engine",
     },
     {
         id: "8",
         question: "Which is not an Internet protocol?",
         options: ["HTTP", "FTP", "STP", "IP"],
         correct: "STP",
     },
     {
         id: "9",
         question: "Which of the following is not a valid domain name?",
         options: ["www.yahoo.com", "www.yahoo.co.uk", "www.com.yahoo", "www.yahoo.co.in"],
         correct: "www.com.yahoo",
     },
     {
         id: "10",
         question: "Which HTML tag is used for creating an ordered list?",
         options: ["ol", "ul", "li", "dd"],
         correct: "ol",
     },
     {
         id: "11",
         question: "Expand CSS",
         options: ["Cyclic Style Sheet", "Cascading Style Sheet", "Cool shape sheet", "Control Style Sheet"],
         correct: "Cascading Style Sheet",
     },
     {
         id: "12",
         question: "Which is the most widely spoken language in the world?",
         options: ["Spanish", "Mandarin", "English", "German"],
         correct: "Mandarin",
     },
     {
         id: "13",
         question: "Technology used for Front-end",
         options: ["HTML", "Python", "C", "C#"],
         correct: "HTML",
     },
     {
         id: "14",
         question: "HTML created in the year",
         options: ["1991", "1993", "1990", "1992"],
         correct: "1993",
     },
 ];
 
 //Restart Quiz
 restart.addEventListener("click", () => {
     initial();
     displayContainer.classList.remove("hide");
     scoreContainer.classList.add("hide");
 });
 
 //Next Button
 nextBtn.addEventListener(
     "click",
     (displayNext = () => {
       
         questionCount += 1;
         
         if (questionCount == quizArray.length) {
             //hide question container and display score
             displayContainer.classList.add("hide");
             scoreContainer.classList.remove("hide");
             
             userScore.innerHTML =
                 "Your score is " + scoreCount + " out of " + questionCount;
         } else {
             
             countOfQuestion.innerHTML =
                 questionCount + 1 + " of " + quizArray.length + " Question";
             
             quizDisplay(questionCount);
             count = 11;
             clearInterval(countdown);
             timerDisplay();
         }
     })
 );
 
 //Timer
 const timerDisplay = () => {
     countdown = setInterval(() => {
         count--;
         timeLeft.innerHTML = `${count}s`;
         if (count == 0) {
             clearInterval(countdown);
             displayNext();
         }
     }, 1000);
 };
 
 //Display quiz
 const quizDisplay = (questionCount) => {
     let quizCards = document.querySelectorAll(".container-mid");
    
     quizCards.forEach((card) => {
         card.classList.add("hide");
     });
     //display current question card
     quizCards[questionCount].classList.remove("hide");
 };
 
 //Quiz Creation
 function quizCreator() {
     //randomly sort questions
     quizArray.sort(() => Math.random() - 0.5);
     
     for (let i of quizArray) {
         i.options.sort(() => Math.random() - 0.5);
         let div = document.createElement("div");
         div.classList.add("container-mid", "hide");
         //question number
         countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
         //question
         let question_DIV = document.createElement("p");
         question_DIV.classList.add("question");
         question_DIV.innerHTML = i.question;
         div.appendChild(question_DIV);
         //options
         div.innerHTML += `
     <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
     `;
         quizContainer.appendChild(div);
     }
 }
 
 //Checker Function to check if option is correct or not
 function checker(userOption) {
     let userSolution = userOption.innerText;
     let question =
         document.getElementsByClassName("container-mid")[questionCount];
     let options = question.querySelectorAll(".option-div");
 
     //if user clicked answer == correct option stored in object
     if (userSolution === quizArray[questionCount].correct) {
         userOption.classList.add("correct");
         scoreCount++;
     } else {
         userOption.classList.add("incorrect");
         //For marking the correct option
         options.forEach((element) => {
             if (element.innerText == quizArray[questionCount].correct) {
                 element.classList.add("correct");
             }
         });
     }
 
     //clear interval(stop timer)
     clearInterval(countdown);
     options.forEach((element) => {
         element.disabled = true;
     });
 }
 
 //initial setup
 function initial() {
     quizContainer.innerHTML = "";
     questionCount = 0;
     scoreCount = 0;
     count = 11;
     clearInterval(countdown);
     timerDisplay();
     quizCreator();
     quizDisplay(questionCount);
 }
 
 //when user click on start button
 startButton.addEventListener("click", () => {
     startScreen.classList.add("hide");
     displayContainer.classList.remove("hide");
     initial();
 });
 
 //hide quiz and display start screen
 window.onload = () => {
     startScreen.classList.remove("hide");
     displayContainer.classList.add("hide");
 };