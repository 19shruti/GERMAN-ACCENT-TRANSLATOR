var btnTranslate=document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
var outputBox=document.querySelector("#OUTPUT");
var serverURL=https://orthosie-old-english-translator-v1.p.rapidapi.com/oldenglish.json"
// function clickHandler()
// {
// console.log("clicked ! ");
// console.log("input ::", textInput.value);
// };

function getTranslatedURL(text)
{
    return serverURL+"?"+"text="+text;
}

function clickHandler(){
    var inputT=textInput.value;
    fetch(getTranslatedURL(inputT))
    .then(Response=>Response.json)
    .then(json=>console.log(json.contents.translated))
    .catch(errorHandler)
};
btnTranslate.addEventListener("click", clickHandler);

//sample queryselector name 
// for textarea tag : #textarea
// for btn-primary : #btn-primary
// for id : #input-btn
// for attribute : "input[name='translater]"
           