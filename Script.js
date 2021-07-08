let addBtn = document.getElementById("add");
let field = document.getElementById("inputField");
let list = document.getElementById("lists");

addBtn.addEventListener("click",function(){
var paragraph = document.createElement("p");
paragraph.classList.add("paragraph-style")
paragraph.innerText =field.value;
list.appendChild(paragraph);
field.value = "";
paragraph.addEventListener("click",function(){
    paragraph.style.textDecoration ="line-through";

})
paragraph.addEventListener("dblclick", function(){
    list.removeChild(paragraph);
})


})