module.exports = ClozeCard;

var inquirer = require("inquirer");
var BasicCard = require(BasicCard); 

function Cloze(fulltext, partial, cloze){
    this.fulltext = fulltext;
    this.partial = partial;
    this.cloze= cloze;
    this.fulltext= function(){
        if(this.fulltext){
            console.log(fulltext)
        }
    },
    
    this.partial = function(){
        if(this.partial){
            console.log(partial)
        }
    },
    
    this.cloze = function(){
        if(this.cloze){
            console.log(cloze)
        }
    },
};


var joker= new Cloze("The Joker was Gotham City's public enemy #1.", "...was Gotham City's public enemy #1", "The Joker");

var dracula = new Cloze("Dracula vants to suck your blood", "...vants to suck your blood", "Dracula");

var hannibal = new Cloze("Hannibal Lecter will eat your liver with some fava beans and a nice chianti.", "...will eat your liver with some fava beans and a nice chianti", "Hannibal Lecter");

var freddy = new Cloze("Freddy Krueger haunts the dreams of the children on Elm Street.", "...haunts the dreams of the children on Elm Street", "Freddy Krueger");

var cruella = new Cloze("Cruella De Vil kidnapped dalmations for their fur.", "...kidnapped dalmatians for their fur", "Cruella De Vil");

var ripper = new Cloze("Jack the Ripper was a serial killer in Victorian London.", "...was a serial killer in Victorian London", "Jack the Ripper");

var fawkes = new Cloze("Guy Fawkes planned to blow up parliament in 1605.", "...planned to blow up parliament in 1605", "Guy Fawkes");

var lucifer = new Cloze("Lucifer was the fallen angel and God's enemy.", "...was the fallen angel and God's enemy", "Lucifer");

var hitler = new Cloze("Hitler was the leader of the Nazis.", "...was the leader of the Nazis", "Hitler");

var goliath = new Cloze("Goliath was the Biblical giant who battled David.", "...was the Biblical giant who battled David", "Goliath");

var smith = new Cloze("Agent Smith is the agent that keeps order in 'The Matrix'", "...keeps order in the 'Matrix'", "Agent Smith");

var simon = new Cloze ("Simon Cowell is the blunt 'American Idol' judge.", "...is the blunt 'American Idol' judge", "Simon Cowell");

var grinch = new Cloze("The Grinch tried to steal Christmas.", "...tried to steal Christmas", "The Grinch");

var shredder = new Cloze("Shredder is the enemy of the Ninja Turtles.", "...the enemy of the ninja turtles", "Shredder");

var terminator= new Cloze("The Terminator is the T-1000 or other robotic killers.", "...is the T-1000 or other robotic killers", "Terminator");

joker.fulltext();
joker.partial();
joker.cloze();
dracula.fulltext();
dracula.partial();
dracula.cloze();
hannibal.fulltext();
hannibal.partial();
hannibal.cloze();
freddy.fulltext();
freddy.partial();
freddy.cloze();
cruella.fulltext();
cruella.partial();
cruella.cloze();
ripper.fulltext();
ripper.partial();
ripper.cloze();
fawkes.fulltext();
fawkes.partial();
fawkes.cloze();
lucifer.fulltext();
lucifer.partial();
lucifer.cloze();
hitler.fulltext();
hitler.partial();
hitler.cloze();
goliath.fulltext();
goliath.partial();
goliath.cloze();
smith.fulltext();
smith.partial();
smith.cloze();
simon.fulltext();
simon.partial();
simon.cloze();
grinch.fulltext();
grinch.partial();
grinch.cloze();
shredder.fulltext();
shredder.partial();
shredder.cloze();
terminator.fulltext();
terminator.partial();
terminator.cloze();


