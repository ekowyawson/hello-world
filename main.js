alert("Hey You!!");
alert("You have stumbled on an awesome website about DNS! Exciting, right?!");

let userInput = prompt("What does DNS stand for? For a million dollars, Alex...");

document.write(`Awwww daaaamn! Someone may have just won a million dollars. Let's see what your answer was: [${userInput}]`);

let para = document.createElement('div');
let userInputDiv = document.getElementById('user-input');

userInput = userInput.toLowerCase();

if (userInput == "domain name service") {
    para.textContent = `DING DING DING! We have a winner!`
    para.style.color = 'green';
} else {
    para.textContent = `WOMP WOMP WOOOMP! Sorry, but you failed. Better luck next time.`
    para.style.color = 'red';
}

userInputDiv.appendChild(para);