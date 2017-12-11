var a = document.getElementById("tut1");
var b = document.getElementById("tut2");
var c = document.getElementById("tut3");

var modifierOfTheSteps = 0;

var sequencePosition = [2,0,1]
//Clear all
var num =  document.getElementById("score");
var scoreTemp = num.innerHTML;
var onoff = [];

function resetting(){
    
    a.checked = false;
    b.checked = false;
    c.checked = false;
   
    a.removeAttribute("checked");
    b.removeAttribute("checked");
    c.removeAttribute("checked");
    
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
    
    if(a.checked == false){
        return false;
    }
    
    if(b.checked == false){
        return false;
    }
    if(c.checked == false){
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
            a.setAttribute("checked","checked");
            a.checked = true; 
            break;
        case 1:
           b.setAttribute("checked","checked");
            b.checked = true;
            break;
        case 2:
          c.setAttribute("checked","checked");
            c.checked = true;
            break;
    }
}



function offTheButton(index){
    switch(index){
        case 0:
             if(a.checked){
                a.checked = false;
             }
            break;
        case 1:
             if(b.checked){
                b.checked = false;
             }   
            break;
        case 2:
             if(c.checked){
                c.checked = false;
             }
            break;

    }
    
}







