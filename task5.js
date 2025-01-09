var btn1 = document.getElementById("bt1");

var btn2 = document.getElementById("bt2");




var ul = document.createElement("ul");

var li1 = document.createElement("li");
li1.innerText = "item-1"
var li2 = document.createElement("li");
li2.innerText = "item-2"
var li3 = document.createElement("li");
li3.innerText = "item-3"
var li4 = document.createElement("li");
li4.innerText = "item-4"

ul.append(li1,li2,li3,li4);

var container = document.getElementById("container");

container.append(ul);

function adds(){

    var li5 = document.createElement("li");
    li5.innerText = "item-5";
    ul.append(li5);
}

function remove(){
    ul.lastChild.remove();
}

