// This function generates a random number and displays it on the webpage
document.getElementById('generate-btn').addEventListener('click', function() {
    var randomNumber = Math.floor(Math.random() * 100) + 1; // generates a random number between 1 and 100
    document.getElementById('random-number').textContent = 'Random Number: ' + randomNumber;
});
