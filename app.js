var btnTranslate=document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
var outputBox=document.querySelector("#OUTPUT");
var serverURL="https://api.funtranslations.com/translate/german-accent.json"
// function clickHandler()
// {
// console.log("clicked ! ");
// console.log("input ::", textInput.value);
// };

function getTranslatedURL(input)
{
    return serverURL+"?"+"text="+input;
}

function clickHandler(){
    var inputT=textInput.value;  //taking input
    fetch(getTranslatedURL(inputT)) //feching input
    .then(Response=>Response.json()) //get input respose
    .then(json=>
        {
            var translatedText=json.contents.translated;
            outputBox.innerText=translatedText;
        })
    // .catch(errorHandler)
};
btnTranslate.addEventListener("click", clickHandler);

//sample queryselector name 
// for textarea tag : #textarea
// for btn-primary : #btn-primary
// for id : #input-btn
// for attribute : "input[name='translater]"
           