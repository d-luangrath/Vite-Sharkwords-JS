import './style.css';
import getRandomWord from './src/randomWord.js';
import setSharkImage from './src/sharkImage.js';
import { setupWord, isLetterInWord, revealLetterInWord } from './src/word.js';

document.querySelector('#app').innerHTML = `
  <section id="shark-img"></section>

  <section id="game-status"></section>

  <section id="word-container">
  <div class="letter-box"></div>
  <div class="letter-box"></div>
  <div class="letter-box"></div></section>

  <section id="letter-buttons"></section>
`;

const initSharkwords = () => {
  let numWrong = 0;
  const word = getRandomWord();

  // for debugging:
  console.log(`[INFO] Correct word is: ${word}`);

  setSharkImage(document.querySelector('#shark-img'), numWrong);
  setupWord(document.querySelector('#word-container'), word);
  

};

initSharkwords();





