var mostRecentScore = localStorage.getItem('finalScore');
var scoreMessage = document.querySelector('#final-score');
var submitButton = document.querySelector('#submit');

// Displays the user's score
scoreMessage.textContent = "Your final score is " + mostRecentScore + ".";

// When the user clicks the submit button, their score is saved with the initials they provided
submitButton.addEventListener('click', function() {
    var inputText = document.getElementById('input-initials').value;
    localStorage.setItem(mostRecentScore, inputText);
});

// Checks for every possible score and only renders names for scores that exist. If two users have gotten the same score, the more recent one has overwritten the older one
for (let i = 0; i < 75; i++) {
    const scoreName = localStorage.getItem(i);
    console.log(scoreName);
    if (scoreName !== null) {
        var listItem = document.createElement('li');
        listItem.textContent = scoreName + ": " + i;
        document.querySelector('ul').appendChild(listItem);
    }
}



