var container = document.getElementById("container");


var ul = document.createElement("ul");
var li1 = document.createElement("li");
li1.innerText = "Html"; 
var li2 = document.createElement("li"); 
li2.innerText = "CSS"; 
var li3 = document.createElement("li"); 
li3.innerText = "JS"; 
var li4 = document.createElement("li"); 
li4.innerText = "React";

ul.append(li1,li2,li3,li4);

container.appendChild(ul);

function remove(){
    ul.lastChild.remove();
}