var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");
var d = document.getElementById("d");

var modifierOfTheSteps = 0;

var sequencePosition = [3,2,0,1]
//Clear all
var num =  document.getElementById("score");
var scoreTemp = num.innerHTML;
var onoff = [];

function resetting(){
    
    console.log(a.hasAttribute("checked"))
    a.checked = false;
    b.checked = false;
    c.checked = false;
    d.checked = false;
   
    a.removeAttribute("checked");
    b.removeAttribute("checked");
    c.removeAttribute("checked");
    d.removeAttribute("checked");
    
    onoff = [];
    for(var y = 0; y < sequencePosition.length; y++){
        onoff.push(false);
    }
    

    num.innerHTML = scoreTemp;
}
resetting();


// check all switches condition
function check(){
    
    if(a.checked == false){
        return false;
    }
    
    if(b.checked == false){
        return false;
    }
    if(c.checked == false){
        return false;
    }
    if(d.checked == false){
        return false;
    }
    return true;
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
        case 3:
            d.setAttribute("checked","checked");
            d.checked = true;
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
        case 3:
             if(d.checked){
                d.checked = false;
             }
            break;
    }
    
}







