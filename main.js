var i = 0;
function change_theme(){
    if (i == 0){
        document.getElementById("hi").style.color = "red";
        i++;
    } else{
        document.getElementById("hi").style.color = "blue";
        i--;
    }
    
}