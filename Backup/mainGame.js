/*
----------------------
Button Functionalities
----------------------
*/

var sequenceRandom = false // to remove the randomness 
var num =  document.getElementById("score");
var temp = parseInt(num.innerHTML)
var n = temp + 1 + modifierOfTheSteps;
var graph = build_graph();
var onoff = [];
for(var y = 0; y < n; y++){
    onoff.push(false);
}

var gameCond = true;

//Game condition which shows the Modal either win or lose
function gameCondition(score){
   
    var allSet = check();
    var words = "";
    if(score == 1 && !allSet){ //When score is 1
        words = "* You Lose *";
        printEnd(words)
    }
    else if(allSet){
        words = "* You Win! *";
        printEnd(words);
    }
}

function printEnd(words){
    var title = document.getElementById("titleModal");
    title.innerHTML = words;
    var modalGame = document.getElementById('myEnd');
    window.setTimeout(function(){
        showModal();
    },700);
}

function showModal(){
    var modalGame = document.getElementById('myEnd');
    modalGame.style.display = "block"
}

//Reducing the step of the score
function reduceStep(){
    var getSteps = document.getElementById("score")
    var step = parseInt(getSteps.innerHTML);
    
    if(step > 0){
        var finalStep =  step - 1;
        getSteps.innerHTML = finalStep;
    }
    return step;
}



function selecting(index){
    var indexInt = parseInt(index);
    var onoffStatus = selectionAlgorithm(indexInt,onoff,graph);
    switchAnimation(onoffStatus);
    
    // Reducing step and call game condition wether lose or win
    var score = reduceStep();
    gameCondition(score);
}


function switchAnimation( status ){
    for(var i = 0; i < status.length ; i++){
        if(status[i] == true){   
            onTheButton(i)
        }
        else{
            offTheButton(i)
        }
    }
}


function selectionAlgorithm(i, onoff, ranges){
    onoff[i] = !onoff[i];
    
    for(var j = 0; j < ranges[i].length; j++){
        var loop = ((ranges[i].length) + 1) - ranges[ranges[i][j]].length;
        for(var k = 0; k < loop+1; k++){
            onoff[ranges[i][j]] = !onoff[ranges[i][j]];
        }
    }
    return onoff;
}


// Build the graph as described in theory
function build_graph(){
    var ranges = new Array();
    for( var i = 0; i < n ; i++){
        ranges.push(new Array());
    }
    var total = 0;
    var numb = n;
    
    var rank = new Array();
    for( var j = 0; j < n ; j++){
        rank.push(-1);
    }
    
    while(total < n){
        var rand = parseInt(Math.random() * n);
        var pos = rand % n;
        if (rank[pos] == -1){
            rank[pos] = numb - 1;
            numb -= 1;
            total += 1;
        }
    }
    
    if(sequenceRandom == false){
        rank = sequencePosition;
    }
    
    var realRank = new Array();
    for( var k = 0; k < n ; k++){
        realRank.push(-1);
    }
    
    for( var l = 0; l < n ; l++){
        realRank[rank[l]] = l;
    }
    
    var word = "";
    for( var j = 0; j < n ; j++){
        ranges[realRank[j]] = word;
        word += String(realRank[j])
    }
    
    var final = [];
    for( var k = 0; k < n ; k++){
        final.push(ranges[k].split(""));
    }
    
    var integerFinal = [];
    for( var i= 0; i < n ; i++){
        var temp = []
        for(var j = 0; j < final[i].length; j++){
            temp.push(parseInt(final[i][j]));
        }
        integerFinal.push(temp);
    }
    
    return integerFinal;
    
}