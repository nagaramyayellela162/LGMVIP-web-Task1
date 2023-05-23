function clearScreen(){
    document.getElementById("result").value="";
}
function display(value){
    document.getElementById("result").value+=value;
}
function calculate(){
    var p=document.getElementById("result").value;
    var q=eval(p);
    document.getElementById("result").value=q;
}
function back(){
    var eq=document.getElementById("result");
    eq.value=eq.value.slice(0,-1);
}