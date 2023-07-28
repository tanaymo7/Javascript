'use strict';

let target= Math.trunc(Math.random()*20)+1;
console.log(target);
let score=20;
let highScore=0;

const displayMsg = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){
    const guessed = Number(document.querySelector('.guess').value);
    // console.log(guessed,typeof guessed);
    if(!guessed){
        displayMsg('⛔ No number!');
    }
    else if(guessed===target) {
        displayMsg('🎉 you win!');
        document.querySelector('.number').textContent=target;
        document.querySelector('body').style.backgroundColor = '#329642';
        if(score > highScore){
            highScore=score;
            document.querySelector('.high').textContent=highScore;
        }
    }else if(guessed!==target) {
        if(score>1){
            displayMsg(guessed > target ? '📈 too high!' : '📉 too low!');
            score--;
            document.querySelector('.score').textContent=score;
        }else{
            displayMsg('💥you lose!');
            document.querySelector('.score').textContent=0;
        }
    }

})
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    target = Math.trunc(Math.random() * 20) + 1;
  
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMsg('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
  
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });


