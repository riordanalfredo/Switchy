var modal = document.getElementById('myModal');
 $('rect#lv1').click(function(){ popUpLevel(1); });
 $('rect#lv2').click(function(){ popUpLevel(2); });
 $('rect#lv3').click(function(){ popUpLevel(3); });
 $('rect#lv4').click(function(){ popUpLevel(4); });
 $('rect#lv5').click(function(){ popUpLevel(5); });
 $('rect#lv6').click(function(){ popUpLevel(6); });
 $('rect#lv7').click(function(){ popUpLevel(7); });
 $('rect#lv8').click(function(){ popUpLevel(8); });
 $('rect#lv9').click(function(){ popUpLevel(9); });
 // Get the modal


    // Get the button that opens the modal
var btn = document.getElementById("modalLevel");
    
function popUpLevel(level){
    var modal = document.getElementById('myModal');
    
    modal.style.display = "block";
    
    var close = document.getElementsByClassName("ext")[0];
    close.onclick = function(){
        modal.style.display = "none";
    }
}