 var btnTranslate=document.querySelector("#btn-translate");
var textInput=document.querySelector("#text-input");
var output=document.querySelector("#OUTPUT");
function clickHandler()
{
    console.log("button is clicked")
    console.log(textInput.value);
    output.innerText="bananatranslator"+textInput.value;
}
btnTranslate.addEventListener("click",clickHandler);