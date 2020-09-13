//#region RACE PAGE MODALS

// Define Variables
var modal = document.getElementById('openBettingOffice');
var btn = document.getElementById('openModalBtn');
var close = document.getElementsByClassName('close')[0];


// Display Modal on Button click
btn.onclick = function () {
    modal.style.display = "block";
}

// Hide Modal on [close] Button click
close.onclick = function () {
    modal.style.display = "none";
}

// Hide Modal if onclick target != Modal
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Define Slider Variables
var slider = document.getElementById("betAmount");
var output = document.getElementById("amountChosen");
output.innerHTML = slider.value;

// Display Slider Value 
slider.oninput = function () {
    output.innerHTML = this.value;
}

//#endregion

//#region SETUP PAGE MODALS

//Define Variables
var addSnailModal = document.getElementById('addSnailModal');
var addSnailButton = document.getElementById('addSnailBtn');
var closeAddSnailModal = document.getElementById('closeAddSnailModal');

// Add onclick to display modal on btn click
addSnailBtn.onclick = function () {
    addSnailModal.style.display = "block";
}

//Add onclick to hide modal on close btn click
closeAddSnailModal.onclick = function () {
    addSnailModal.style.display = "none";
}

//Add onclick to hide modal if bg is clicked
window.onclick = function (event) {
    if (event.target == addSnailModal) {
        modal.style.display = "none";
    }
}

