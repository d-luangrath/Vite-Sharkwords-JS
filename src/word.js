let word;

function setupWord(element, initWord) {
    word = initWord;
    word.split('').forEach(() => {
        element.insertAdjacentHTML(
            'beforeend',
            `<div class="letter-box"></div>`
        );
    });
}
    
function isLetterInWord(letter) {
    return word.includes(letter);
}

function revealLetterInWord(letter) {
    const letterBoxes = document.querySelectorAll('.letter-box');
    word.split('').forEach((l, i) => {
        if (l === letter) {
            letterBoxes[i].innerHTML = l;
        }
    })
}

export { setupWord, isLetterInWord, revealLetterInWord }
