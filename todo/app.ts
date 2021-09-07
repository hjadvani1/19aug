let addToDoButton :HTMLElement = document.getElementById('addToDo');
let toDoContainer :HTMLElement = document.getElementById('toDoContainer');
let inputField : HTMLInputElement  = document.getElementById('inputField');
 

addToDoButton.addEventListener('click', function() :void{
    var paragraph :HTMLElement = document.createElement('p');

    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;

    toDoContainer.appendChild(paragraph);

   
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";

    })

    paragraph.addEventListener('click', function(){
        toDoContainer.removeChild(paragraph);
    })

})