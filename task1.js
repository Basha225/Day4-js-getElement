var container = document.getElementById("container");

function generate(){
    var para = document.createElement("p");
    para.innerText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi sint et omnis, quod tempore mollitia accusamus ea nemo saepe voluptas dicta nostrum voluptates incidunt magnam a repellat, officiis, explicabo veritatis.";
    para.style.color = "red";
    para.style.textAlign = "justify";
    para.style.fontSize = "1.2rem";
    para.style.padding = "10px";
    container.append(para);
}
