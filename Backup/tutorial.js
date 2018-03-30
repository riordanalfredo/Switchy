var pos1 = document.getElementById("tut1");
var pos2 = document.getElementById("tut2");
var pos3 = document.getElementById("tut3");

var modifierOfTheSteps = 0;

var sequencePosition = [2,0,1]
//Clear all
var num =  document.getElementById("score");
var scoreTemp = num.innerHTML;
var onoff = [];

function resetting(){
    
    pos1.checked = false;
    pos2.checked = false;
    pos3.checked = false;
   
    pos1.removeAttribute("checked");
    pos2.removeAttribute("checked");
    pos3.removeAttribute("checked");
    
    onoff = [];
    for(var y = 0; y < sequencePosition.length; y++){
        onoff.push(false);
    }
    

    num.innerHTML = scoreTemp;
}
resetting();


// check all switches condition
function check(){
    theText.innerHTML = ". . .";
    setTimeout(function(){
            theText.innerHTML = "' It affects the other buttons '"
    },500)
    
    if(pos1.checked == false){
        return false;
    }
    
    if(pos2.checked == false){
        return false;
    }
    if(pos3.checked == false){
        return false;
    }
    
    gotoNext();
    return true;
}
var theButton = document.getElementById("continueButton");
theButton.style.visibility = "hidden"

var STORAGE_KEY = "tutorialBool";
function gotoNext(){
    
    theText.innerHTML = ". . .";
    setTimeout(function(){
        theText.innerHTML = "Congratulations! <br>You Solve the Puzzle!";
    },500)
   
    theButton = document.getElementById("continueButton");
    theButton.style.marginTop = "20px";
    theButton.style.marginBottom= "20px";
    theButton.style.visibility = "visible";
    
    localStorage.setItem(STORAGE_KEY, "0");
}


function onTheButton(index){
    switch(index){
        case 0:
            pos1.setAttribute("checked","checked");
            pos1.checked = true; 
            break;
        case 1:
            pos2.setAttribute("checked","checked");
            pos2.checked = true;
            break;
        case 2:
            pos3.setAttribute("checked","checked");
            pos3.checked = true;
            break;
    }
}



function offTheButton(index){
    switch(index){
        case 0:
             if(pos1.checked){
                pos1.checked = false;
             }
            break;
        case 1:
             if(pos2.checked){
                pos2.checked = false;
             }   
            break;
        case 2:
             if(pos3.checked){
                pos3.checked = false;
             }
            break;

    }
    
}







