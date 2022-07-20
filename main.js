
function clickButton(val){
    document.getElementById('textvalue').value+=val;
}

function solve()
{
let x = document.getElementById("textvalue").value
let y = eval(x)
document.getElementById("textvalue").value = y
}

function reset(){
    document.getElementById('textvalue').value='';
}