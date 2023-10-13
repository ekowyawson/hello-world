// alert("Hey You! Guess what?");
alert("You have stumbled upon this awesome website about DNS!\nExciting, right?!");

function getUserInput() {
    return prompt("What does DNS stand for?\nFor a million dollars, Alex ...");
};

function evalUserInput() {
    let result = getUserInput();
    while (result === '' || result === null) {
        alert(`You did not enter your aswer.\nLet's try again. You must enter an answer to move on.`);
        result = getUserInput();
    }

    return result;
};

// WRITE RESULTS TO DOM
function revealResults() {
    const userInput = evalUserInput();
    const para = document.createElement('div');
    const userInputDiv = document.getElementById('user-input');
    userInputDiv.appendChild(para);

    document.write(`Awwww shucks! Did you win? Let's see.\
            <br>You answered: <span style="color:orange;">${userInput}<\span>`);

    if (userInput.toLowerCase() == 'domain name system') {
        para.textContent = `DING DING DING! We have a winner!\nYou will now be rewarded with a video!`;
        para.style.color = 'green';
        return;
    }

    para.textContent = `WOMP WOMP WOOOMP! Sorry, but you failed. Better luck next time.`;
    para.style.color = 'red';
};

function hideResults() {
    // Hide created elements
    const userInputClass = document.querySelector('.user-input');
    setTimeout(() => {
        // remove element from DOM
        userInputClass.classList.add('hide');
    }, 5000); // time in milliseconds
}

// LAZY CALL INIT FUNCTION
revealResults();
hideResults();
