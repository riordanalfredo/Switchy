var pos1 = document.getElementById("a");
var pos2 = document.getElementById("b");
var pos3 = document.getElementById("c");
var pos4 = document.getElementById("d");
var pos5 = document.getElementById("e");
var pos6 = document.getElementById("f");

var modifierOfTheSteps = 0;

//Clear all

var sequencePosition = [5,3,0,1,4,2]
var num =  document.getElementById("score");
var scoreTemp = num.innerHTML;

var onoff = [];

function resetting(){
    pos1.checked = false;
    pos2.checked = false;
    pos3.checked = false;
    pos4.checked = false;
    pos5.checked = false;
    pos6.checked = false;
    
    pos1.removeAttribute("checked");
    pos2.removeAttribute("checked");
    pos3.removeAttribute("checked");
    pos4.removeAttribute("checked");
    pos5.removeAttribute("checked");
    pos6.removeAttribute("checked");
    
    onoff = [];
    for(var y = 0; y < sequencePosition.length; y++){
        onoff.push(false);
    }
    var scoring =  document.getElementById("score");
    scoring.innerHTML = 0;
    
}
resetting();

// check all switches condition
function check(){
    
    if(pos1.checked == false){
        return false;
    }
    
    if(pos2.checked == false){
        return false;
    }
    if(pos3.checked == false){
        return false;
    }
    if(pos4.checked == false){
        return false;
    }
    if(pos5.checked == false){
        return false;
    }
    if(pos6.checked == false){
        return false;
    }
    return true;
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
        case 3:
            pos4.setAttribute("checked","checked");
            pos4.checked = true;
            break;
        case 4:
            pos5.setAttribute("checked","checked");
            pos5.checked = true;
            break;
        case 5:
            pos6.setAttribute("checked","checked");
            pos6.checked = true;
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
        case 3:
             if(pos4.checked){
                pos4.checked = false;
             }
            break;
        case 4:
             if(pos5.checked){
                pos5.checked = false;
             }
            break;
        case 5:
             if(pos6.checked){
                pos6.checked = false;
             }
            break;
    }
    
}