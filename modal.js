//Selectors

var modal = document.getElementById('openBettingOffice');

var btn = document.getElementById('openModalBtn');

var close = document.getElementsByClassName('close')[0];

//Functions

btn.onclick = function () {
    modal.style.display = "block";
}

close.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

btn.onkeyup = function () {
    modal.style.display = "block";
}

close.onkeyup = function () {
    modal.style.display = "none";
}

window.onkeyup = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Bet Amount Slider

var slider = document.getElementById("betAmount");
var output = document.getElementById("amountChosen");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
}
