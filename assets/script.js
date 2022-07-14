var timer = document.querySelector('#timer-display');
var button = document.querySelector('#button');

function countdown() {

    var timeLeft = 75;
    var timeInterval = setInterval( function() {
        if (timeLeft > 0) {
            timer.textContent = 'Time: ' + timeLeft;
            timeLeft--;
        } else {
            timer.textContent = 'Time: 0';
            clearInterval(timeInterval);
        }
    }, 1000);
}
  
button.addEventListener("load",countdown);