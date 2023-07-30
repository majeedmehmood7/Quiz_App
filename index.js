const questions = [{
    'que' : 'which of the following is a markup language',
    'a': 'HTML',
    'b': 'CSS',
    'c': 'JavaScript',
    'd' : 'PHP',
    'correct' : 'a'
},
{
    'que' : 'which of the following is backend language',
    'a': 'HTML',
    'b': 'CSS',
    'c': 'JavaScript',
    'd' : 'PHP',
    'correct' : 'd'
},
{
    'que' : 'JS is stand For',
    'a': 'HTML',
    'b': 'CSS',
    'c': 'JavaScript',
    'd' : 'PHP',
    'correct' : 'c'
},
{
    'que': "Which of the following is a client site language?",
    'a': "Java",
    'b': "C",
    'c': "Python",
    'd': "JavaScript",
    'correct': "d",
},
{
    'que': "What does HTML stand for?",
    'a': "Hypertext Markup Language",
    'b': "Cascading Style Sheet",
    'c': "Jason Object Notation",
    'd': "Helicopters Terminals Motorboats Lamborginis",
    'correct': "a",
},
{
    'que': "What year was JavaScript launched?",
    'a': "1996",
    'b': "1995",
    'c': "1994",
    'd': "none of the above",
    'correct': "b",
},
{
    'que': "What does CSS stands for?",
    'a': "Hypertext Markup Language",
    'b': "Cascading Style Sheet",
    'c': "Jason Object Notation",
    'd': "Helicopters Terminals Motorboats Lamborginis",
    'correct': "b",
}

]
let index=0;
let total = questions.length;
let right =0;
let wrong = 0;
const quesbox = document.getElementById("questionBox");
const optionInput = document.querySelectorAll('.options')
const loadQuestion = () => {
    if(index === total)
    {
        return endQuiz()
    }
    reset();
    const data = questions[index]
    console.log(data)
    quesbox.innerText = `${index+1}) ${data.que}`;
    optionInput[0].nextElementSibling.innerText = data.a;
    optionInput[1].nextElementSibling.innerText = data.b;
    optionInput[2].nextElementSibling.innerText = data.c;
    optionInput[3].nextElementSibling.innerText = data.d;
}



const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer();
    if( ans === data.correct){
        right++;
    }
    else {
        wrong++;
    }
    index++;
    loadQuestion();
    return ;

}

const getAnswer = () => {
    let answer;
    optionInput.forEach(
        (input) => {
            if(input.checked)
            {
                answer = input.value
            }
            
        }
    )
    return answer;
}

const reset = () => {
    optionInput.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = 
    ` <div style="text-align:center">
      <h3> Thank You For Playing Quiz </h3>
      <h2> ${right} / ${total} are correct </h2>
      </div>
    `
}


loadQuestion();