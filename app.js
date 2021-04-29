var btnTranslate=document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
var outputBox=document.querySelector("#OUTPUT");
// function clickHandler()
// {
// console.log("clicked ! ");
// console.log("input ::", textInput.value);
// };


function clickHandler(){
outputBox.innerText = "ASDFG" + textInput.value
};
btnTranslate.addEventListener("click", clickHandler);

//sample queryselector name 
// for textarea tag : #textarea
// for btn-primary : #btn-primary
// for id : #input-btn
// for attribute : "input[name='translater]"
           