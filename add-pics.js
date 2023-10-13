
function getPics(num) {
    const getPicsElement = document.getElementById('add-pics');
    const createFigure = document.createElement('figure');
    const createFigCaption = document.createElement('figcaption');
    const createImg = document.createElement('img');

    createImg.src = 'dns-image.png';
    createFigCaption.textContent = `Picture #${num}`;

    createFigure.appendChild(createImg);
    createFigure.appendChild(createFigCaption);
    getPicsElement.prepend(createFigure);
}


function getNumInput() {
    let askNum = prompt(`Enter a number from 1-10.\nDont worry, it's a surprise.`);

    while (isNaN(askNum) || askNum == null || askNum == '' || Number(askNum) > 10) {
        askNum = prompt(`The value you supplied is not a number or is not in the range of 1-10.\n You can do it! Type a number betweeen 1 and 10.`);
    }
    
    return parseInt(askNum);
};


function putPics() {
    const inputNumber = getNumInput();

    for (let i = 1; i <= inputNumber; i++) {
        getPics(i);
    }
}

putPics();