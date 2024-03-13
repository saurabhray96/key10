let umb3 = document.getElementById("umb3");
let umb2 = document.getElementById("umb2");
let shadows = document.getElementById("shadow");
function shadow() {
    umb3.style.backgroundColor = "black";
    umb3.style.width = "6px";
    umb3.style.height = "108px";
    umb3.style.marginTop = "115px";
    shadows.hidden = false;
}
function shadowOut() {
    shadows.hidden = true;
    umb3.style.backgroundColor = " rgb(64, 59, 59)";
    umb3.style.height = "28px";
    umb3.style.width = "40px";
    umb3.style.marginTop = "190px";
}