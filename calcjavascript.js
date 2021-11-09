function display(value) {
    document.getElementById("result").value += value;
}
function clearall() {
    document.getElementById("result").value = "";
}
function calc() {
    var a = document.getElementById("result").value;
    var b = eval(a);
    // if (a==b){
    //     document.getElementById("result").value = "invalid";
    // }
    // else{
    //     document.getElementById("result").value = b;
    // }
    document.getElementById("result").value = b;
}