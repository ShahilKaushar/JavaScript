const element = document.querySelector("#box");

function changeHeading(){
    element.innerText = "Hello Faisal"
}

const id = setTimeout(changeHeading,3000);

dontChange = function(){
    clearTimeout(id);
}

document.querySelector("#change").addEventListener("click",changeHeading);

document.querySelector("#stop").addEventListener("click",() => {

});
