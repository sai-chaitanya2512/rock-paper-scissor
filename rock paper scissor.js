var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var siccors = document.getElementById("siccors");
var ranhand = document.getElementById("gopiii");

let arr = ["./hand1.png", "./hand2.png","./hand3.png"]

var random = Math.floor(Math.random() * 3);

var ranarr = arr[random];

function rockkk() {
    if (ranarr == "./hand1.png") {
        alert("D R A W");
        ranhand.style.display = "block";
        ranhand.src = ranarr;

    }
    else if (ranarr == "./hand3.png") {
        ranhand.style.display = "block";
        ranhand.src = ranarr;
        alert("W O N");
    }
    else {
        ranhand.style.display = "block";
        ranhand.src = ranarr;
        alert("YOU LOST");
    }
    paper.setAttribute("disabled", "disabled");
    siccors.setAttribute("disabled", "disabled");
}

function paperr() {
    if (ranarr == "./hand2.png") {
        ranhand.style.display = "block";
        ranhand.src = ranarr;
        alert("D R A W");
    }
    else if (ranarr == "./hand1.png") {
        ranhand.style.display = "block";
        ranhand.src = ranarr;
        alert("W O N");
    }
    else {
        alert("YOU LOST");
        ranhand.style.display = "block";
        ranhand.src = ranarr;
    }
    siccors.setAttribute("disabled", "disabled");
    rock.setAttribute("disabled", "disabled");
}

function siccorrs() {
    if (ranarr == "./hand3.png") {
        ranhand.style.display = "block";
        ranhand.src = ranarr;
        alert("D R A W");
    }
    else if (ranarr == "./hand2.png") {
        ranhand.style.display = "block";
        ranhand.src = ranarr;
        alert("W O N");
    }
    else {
        ranhand.style.display = "block";
        ranhand.src = ranarr;
        alert("YOU LOST");

    }
    rock.setAttribute("disabled", "diabled");
    paper.setAttribute("disabled", "disabled");

}
console.log(ranarr);