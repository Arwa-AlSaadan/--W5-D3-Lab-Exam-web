
const questions = [
    {
      questionTitle: "ماهي عاصمه السعوديه؟",
      options: ["الرياض", "جدة", "القصيم", "الكويت"],
      keyAnswer: "الرياض",
    },
    {
      questionTitle: "افضل نادي فالعالم",
      options: ["الاهلي", "النصر", "الهلال", "التعاون"],
      keyAnswer: "الهلال",
    },
    {
      questionTitle: "ماهو افضل لون",
      options: ["احمر", "اصفر", "ازرق", "وردي"],
      keyAnswer: "ازرق",
    },
    {
      questionTitle: "ماهو ناتج ضرب 5*13",
      options: ["70", "60", "65", "55"],
      keyAnswer: "65",
    },
    {
      questionTitle: "ماهي عاصمه الكويت؟",
      options: [""],
      keyAnswer: "الكويت",
    },
    {
      questionTitle: "ماهو ناتج جمع 23+2؟",
      options: [""],
      keyAnswer: "25",
    },
  ];
  
  const qustionsCont = document.getElementById("qustions-cont");
  const qustionsText = document.getElementById("qustions-text");
  const options = document.getElementById("options");
  const timeLeft = document.getElementById("time-left");
  const resultCont = document.getElementById("result-cont");
  const resultText = document.getElementById("result-text");
  
  let currentIndex = 0;
  let score = 0;
  let timer = 10;
  let countDown;
  
  function showQuestion(index) {
    const questin = questions[index];
    qustionsText.innerText = questin.questionTitle;
    options.innerHTML = "";


    // questin.options.forEach((option) => {
    //   const b = document.createElement("button");
    //   b.textContent = option;
    //   options.appendChild(b);
  
    //   b.addEventListener("click", () => {
    //     checkAnswer(option, questin.keyAnswer);
    //   });
    //   // options.insertAdjacentHTML("afterbegin", `<button>${option}</button>`);
    // });

    questin.options.forEach((option) => {
        if (option == ""){
            const b = document.createElement("input");
            b.textContent = option;
            options.appendChild(b);

            b.addEventListener('keypress', function(e){
                if (e.key === 'Enter'){
                checkAnswer(b.value, questin.keyAnswer,"input");}

                // checkAnswer(option, questin.keyAnswer,"input");}
            });


        }else{

        const b = document.createElement("button");
        b.textContent = option;
        options.appendChild(b);
    
        b.addEventListener("click", () => {
          checkAnswer(option, questin.keyAnswer,"button");
        });}
        // options.insertAdjacentHTML("afterbegin", `<button>${option}</button>`);
      }); 


  }
  
  function showTimer() {
    countDown = setInterval(function () {
      timer--;
      timeLeft.textContent = timer;
      if (timer <= 0) {
        clearInterval(countDown);
        checkAnswer("", null);
      }
    }, 1000);
  }
  
  showQuestion(currentIndex);
  showTimer();
  
  function checkAnswer(myAnswer, correctAnswer,typeQuestion) {
    currentIndex++;
    clearInterval(countDown);
  
    // console.log("my answer ="+myAnswer);

  
        if (myAnswer === correctAnswer) {
            score++;
          }
        
          if (currentIndex < questions.length) {
            showQuestion(currentIndex);
            timer = 10;
            timeLeft.textContent = timer;
            showTimer();
          } else {
            showResult();
          }
      
    

   
  }
  
  function showResult() {
    qustionsCont.style.display = "none";
    resultCont.style.display = "flex";
    resultText.textContent = `Your Score is ${score} of ${questions.length}`;
  }