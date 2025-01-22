var h = document.createElement("h1");
h.innerText = "Tasks On DOM getElementById";


var a1 = document.createElement("a");
a1.innerText = "Task-1";
a1.href = "./task1.html";

var a2 = document.createElement("a");
a2.innerText = "Task-2";
a2.href = "./task2.html"

var a3 = document.createElement("a");
a3.innerText = "Task-3";
a3.href = "./task3.html"

var a4 = document.createElement("a");
a4.innerText = "Task-4";
a4.href = "./task4.html";

var a5 = document.createElement("a");
a5.innerText = "Task-5";
a5.href = "./task5.html";



document.body.append(h,a1,a2,a3,a4,a5);

