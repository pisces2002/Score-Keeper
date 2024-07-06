const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector('#p2Button');
const reset = document.querySelector('#reset');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const playTo = document.querySelector('#playto');

let p1Score = 0;
let winningScore = 3;
let isGameOver = false;
p1Button.addEventListener('click', function () {
    if (isGameOver===false) {   //if we are still playing the game
        p1Score = p1Score + 1;
        if (p1Score === winningScore) {
            isGameOver = true;
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
    }
    p1Display.innerHTML = p1Score;
});

let p2Score = 0;
p2Button.addEventListener('click', () => {
    if (!isGameOver) {
        p2Score = p2Score + 1;
        if (p2Score === winningScore) {
            isGameOver = true;
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
    }
    p2Display.innerHTML = p2Score;
});

playTo.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset1();

});

reset.addEventListener('click', reset1);


function reset1() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.innerHTML = 0;
    p2Display.innerHTML = 0;
    p1Display.classList.remove('has-text-success', 'has-text-danger');
    p1Display.classList.remove('has-text-success', 'has-text-danger');
    p1Button.disabled = false;
    p2Button.disabled = false;
}