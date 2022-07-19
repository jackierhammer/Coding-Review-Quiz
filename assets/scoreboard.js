var mostRecentScore = localStorage.getItem('finalScore');
var scoreMessage = document.querySelector('#final-score');
var submitButton = document.querySelector('#submit');
var clearButton = document.querySelector('#clear-button');

// Displays the user's score
if (mostRecentScore !== null){
    scoreMessage.textContent = "Your final score is " + mostRecentScore + ".";
}


// When the user clicks the submit button, their score is saved with the initials they provided
submitButton.addEventListener('click', function() {
    var inputText = document.getElementById('input-initials').value;
    localStorage.setItem(mostRecentScore, inputText);
    document.location.reload();
});

// Checks for every possible score and only renders names for scores that exist. If two users have gotten the same score, the more recent one has overwritten the older one
for (let i = 0; i < 75; i++) {
    const scoreName = localStorage.getItem(i);
    if (scoreName !== null) {
        var listItem = document.createElement('li');
        listItem.textContent = scoreName + ": " + i;
        document.querySelector('ul').appendChild(listItem);
    }
}

clearButton.addEventListener('click', function() {
    localStorage.clear();
    document.location.reload();
})


