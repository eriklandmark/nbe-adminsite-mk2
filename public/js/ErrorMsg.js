function error(msg) {
    var dimmer = document.getElementById("error_dimmer");
    var box = document.getElementById("error_box");
    var text = document.getElementById("error_text");
    var button = document.getElementById("error_button");
    button.backgroundColor = "lightgray";
    box.style.backgroundColor = "white";
    text.innerHTML = msg;
    dimmer.style.display = "flex";
}

function msg(msg) {
    var dimmer = document.getElementById("error_dimmer");
    var box = document.getElementById("error_box");
    var text = document.getElementById("error_text");
    var button = document.getElementById("error_button");
    box.style.backgroundColor = "lightgreen";
    button.backgroundColor = "white";
    text.innerHTML = msg;
    dimmer.style.display = "flex";
}