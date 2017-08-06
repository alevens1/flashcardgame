module.exports = BasicCard;

var inquirer = require ("inquirer");

function BasicCard (front, back){
    this.front = front;
    this.back = back;
    this.ShowQuestion = function(){
        if(this.front){
            console.log(this.front)
        };
    };
    this.ShowAnswer = function(){
        if(this.back){
            console.log(this.back)
        };
    };
};


var joker= new BasicCard("Who is Gotham City's public enemy #1?", "The Joker");

var dracula = new BasicCard("Who vants to suck your blood?", "Dracula");

var hannibal = new BasicCard("Who will eat your liver with some fava beans and a nice chianti?", "Hannibal Lecter");

var freddy = new BasicCard("Who haunts the dreams of the children on Elm Street?", "Freddy Krueger");

var cruella = new BasicCard("Who kidnapped dalmatians for their fur?", "Cruella De Vil");

var ripper = new BasicCard("Who was a serial killer in Victorian London?", "Jack the Ripper");

var fawkes = new BasicCard("Who planned to blow up parliament in 1605?", "Guy Fawkes");

var lucifer = new BasicCard("Who was the fallen angel and God's enemy?", "Lucifer");

var hitler = new BasicCard("Who was the leader of the Nazis?", "Hitler");

var goliath = new BasicCard("Who was the biblical giant who battled David?", "Goliath");

var smith = new BasicCard("Who was the agent that keeps order in 'The Matrix'?", "Agent Smith");

var simon = new BasicCard ("Who is the blunt 'American Idol' judge?", "Simon Cowell");

var grinch = new BasicCard("Who tried to steal Christmas?", "The Grinch");

var shredder = new BasicCard("Who is the enemy of the ninja turtles?", "Shredder");

var terminator= new BasicCard("Who was the T-1000 or other robotic killers?", "Terminator");


joker.ShowAnswer();
joker.ShowQuestion();
dracula.ShowAnswer();
dracula.ShowQuestion();
hannibal.ShowAnswer();
hannibal.ShowQuestion();
freddy.ShowQuestion();
freddy.ShowAnswer();
cruella.ShowQuestion();
cruella.ShowAnswer();
ripper.ShowQuestion();
ripper.ShowAnswer();
fawkes.ShowQuestion();
fawkes.ShowAnswer();
lucifer.ShowQuestion();
lucifer.ShowAnswer();
hitler.ShowQuestion();
hitler.ShowAnswer();
goliath.ShowQuestion();
goliath.ShowAnswer();
smith.ShowQuestion();
smith.ShowAnswer();
simon.ShowQuestion();
simon.ShowAnswer();
grinch.ShowQuestion();
grinch.ShowAnswer();
shredder.ShowQuestion();
shredder.ShowAnswer();
terminator.ShowQuestion();
terminator.ShowAnswer();
