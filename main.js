var basic = require(BasicCard);

var cloze = require(ClozeCard);

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