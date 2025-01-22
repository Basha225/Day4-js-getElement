function toggleBox() {
    var container = document.getElementById("box-container");
    var Box = document.getElementById("new-box");

    if (Box) {
        container.removeChild(Box);
    } 
    else {
        var box = document.createElement("div");
        box.id = "new-box";
        box.style.width = "300px";
        box.style.height = "300px";
        box.style.border = "3px solid green"
        box.style.backgroundColor = "yellow";
        container.appendChild(box);
    }

}

