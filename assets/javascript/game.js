
var superheros = ["thor", "ironman", "rocket", "hulk", "deadpool"];
var word = Math.floor(Math.random()*superheros.length);
var answer = superheros[word];
var ansLength = answer.length;

console.log(answer);
console.log(ansLength);

var display=[ansLength];
var win = ansLength;
var letters = answer.split('');
var triesLeft = ansLength + 5;
var output = "";
var userChoiceText = document.getElementById("userchoice-text");

console.log("tries left: "+ triesLeft);

var setup = function(){
    for (var i = 0; i< answer.length; i++)
    {
        display[i] = "_ ";
        output = output + display[i];
    }
    document.getElementById("wordgoeshere").innerHTML = output;
    output ="";
}

window.onload = function(){
    setup();
}
var UsetLetter = "";
document.onkeyup = function(event) {
        var userLetter = event.key;
        console.log(userLetter);
            for (var c = 0; c< answer.length; c++){
                console.log(letters[c]);
                if (userLetter == letters[c]);
                {
                    display[c] = userLetter;
                    win--;
            }
            output = output + display[c] + " ";}

            document.getElementById("wordgoeshere").innerHTML = output;
            output="";
            triesLeft--;
            console.log(triesLeft);

            if (win <1){
                document.getElementById("Game-Status").innerHTML = "You Win!";
            }
            else if (triesLeft < 1){
                document.getElementById("Game-Status").innerHTML = "You Lose!";
            }
            else{
                document.getElementById("Game-Status").innerHTML = "You have " + triesLeft + " tries left!";
            }
            }
    