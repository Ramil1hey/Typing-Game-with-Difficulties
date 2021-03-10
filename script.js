const gameBlock = document.querySelector('#gameBlock');
const selector = document.querySelector('#difficulty');
const timerHTML = document.querySelector('#timer');
const scoreHTML = document.querySelector('#score');
const currentWord = document.querySelector('#word');
const inputType = document.querySelector('#type');
const settings = document.querySelector('#settings');
const header = document.querySelector('.header');

// some variables
const endGamePattern = `<h1 class="endgame__title">Time ran out</h1>
                        <div class="final__score">Your final score is <span id="finalScore">0</span></div>
                        <button id="reload">Reload</button>`;
const randomWordsArr = ['ectene', 'unpetrified', 'bever', 'hyaluronidase', 'helve', 'subfloor', 'convalescing', 'stupor', 'campe', 'ariose',
                        'relabelling', 'fissural', 'car', 'petulant', 'destitutely', 'gastrocnemian', 'sallowy', 'unfinanced', 'prebestowal',
                        'transurethral', 'cartesian', 'opaquely', 'shaded', 'curzon', 'stupa', 'frodina', 'undiametrical', 'staminal', 
                        'austerity','nonglacial'];

let randomNum = Math.random();
    randomNum = Math.floor((randomNum * 29) + 1);

let TIMER = setInterval(function() {    
    timerHTML.innerHTML = Number(timerHTML.innerHTML) - 1;
    if (Number(timerHTML.innerHTML) === 0) {
        clearInterval(TIMER);
        gameBlock.innerHTML = endGamePattern;
        document.querySelector('#finalScore').innerHTML = scoreHTML.innerHTML;
        document.querySelector('#reload').onclick = () => location.reload();
    }
}, 1000)


function GameStart() {
    randomNum = Math.random();
    randomNum = Math.floor((randomNum * 29) + 1);
    currentWord.innerHTML = randomWordsArr[randomNum];

    inputType.oninput = () => {
        if (selector.value === 'easy' && currentWord.innerHTML === inputType.value) {
            inputType.value = '';
            scoreHTML.innerHTML = Number(scoreHTML.innerHTML) + 1; 
            timerHTML.innerHTML = Number(timerHTML.innerHTML) + 3;
            randomNum = Math.random();
            randomNum = Math.floor((randomNum * 29) + 1);
            currentWord.innerHTML = randomWordsArr[randomNum];
        }
        else if (selector.value === 'medium' && currentWord.innerHTML === inputType.value) {
            inputType.value = '';
            scoreHTML.innerHTML = Number(scoreHTML.innerHTML) + 1; 
            timerHTML.innerHTML = Number(timerHTML.innerHTML) + 2;
            randomNum = Math.random();
            randomNum = Math.floor((randomNum * 29) + 1);
            currentWord.innerHTML = randomWordsArr[randomNum];
        }
        else if (selector.value === 'hard' && currentWord.innerHTML === inputType.value) {
            inputType.value = '';
            scoreHTML.innerHTML = Number(scoreHTML.innerHTML) + 1; 
            timerHTML.innerHTML = Number(timerHTML.innerHTML) + 2;
            randomNum = Math.random();
            randomNum = Math.floor((randomNum * 29) + 1);
            currentWord.innerHTML = randomWordsArr[randomNum];
        }
    }
}
GameStart();


let k = 0;
settings.addEventListener('click', () => {
    if (k === 0) {
        header.style.marginTop = '-70px';
        k++;
    }
    else {
        header.style.marginTop = '0px';
        k--;
    }
})