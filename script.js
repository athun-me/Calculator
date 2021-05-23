function clickButton(val){
    document.getElementById("screen").value+=val
}
function clearButton(){
    document.getElementById("screen").value=""
}
function equalButton(val){
    var text=document.getElementById("screen").value

    var result=eval(text)
    document.getElementById("screen").value=val+result
}