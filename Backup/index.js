//Tutorial Modal


// Get the modal
var tutorialModal = document.getElementById('myTutorial');

// Get the <span> element that closes the modal
var closeTutorial = document.getElementsByClassName("tutorial")[0];

// When the user clicks on the button, open the modal 
closeTutorial.onclick = function() {
    tutorialModal.style.display = "none";
}


var STORAGE_KEY = "tutorialBool";
//Get local storage
var tutorialStorage = localStorage.getItem(STORAGE_KEY);
//Timeout


 if (!tutorialStorage){
        localStorage.setItem(STORAGE_KEY, "1");
    
}

        var currentStorage = localStorage.getItem(STORAGE_KEY);
        if(currentStorage == "1"){
        //Show modal
        setTimeout(function(){
            tutorialModal.style.display = "block";
        },2000);
    }

 //tutorialModal.style.display = "block";

//Tutorial
var theText = document.getElementById("text");
setTimeout(function() { 
  theText.innerHTML = "' Click one of the switch! '";
},  1000);






/*
//HTML

<div id="slideshow">
       <div>
         <font color="#ffa800">&#x25cf;</font> &#x25cf; &#x25cf;<br><br>
           <FONT style="font-family: 'Bungee', cursive;'"> Switch ON All of Them!</FONT>
           <BR><BR>
            <label class="switch">
              <input id="tut1" type="checkbox" >
              <span  class="slider"></span>
            </label> <BR> <BR>
           <label class="switch">
              <input id="tut2" type="checkbox" >
              <span  class="slider"></span>
            </label> <BR> <BR>
           <label class="switch">
              <input id="tut3" type="checkbox" >
              <span  class="slider"></span>
            </label> <BR> <BR>

       </div>
       <div>
           &#x25cf;<font color="#ffa800"> &#x25cf;</font> &#x25cf;<br><br>



       </div>
       <div>
           &#x25cf; &#x25cf; <font color="#ffa800">&#x25cf;</font><br>
         <br> <br>
           Pretty cool eh? You can continue by pressing the button below.<br><br>
            <button onclick="location.href='info.html'" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent button" style="background-color:#ffcc6a; color:black;">
            continue <i id="closeTutorial" class="material-icons" >play_arrow</i>
            </button> <br><br>

       </div>
    </div>

//Here



//Slide Show!
$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  3000);


//First Tutorial

var switchTutorial1 = document.getElementById("tut1");
var switchTutorial2 = document.getElementById("tut2");
var switchTutorial3 = document.getElementById("tut3");

setTimeout(function(){
    
    switchTutorial1.setAttribute("checked","checked");
    switchTutorial1.checked = true;  
    switchTutorial2.setAttribute("checked","checked");
    switchTutorial2.checked = true;    
    switchTutorial3.setAttribute("checked","checked");
    switchTutorial3.checked = true;
    
},1000)
   
setInterval(function(){
    switchTutorial1.checked = false; 
    switchTutorial2.checked = false; 
    switchTutorial3.checked = false; 
        
},4000)
setInterval(function(){
     switchTutorial1.checked = true; 
     switchTutorial2.checked = true; 
     switchTutorial3.checked = true; 
},5000);
*/