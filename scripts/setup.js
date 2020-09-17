//#region 
//"Delete" Button Dialogs

// Set variables
let deleteRaceButton = document.getElementById('deleteRaceBtn');
let deleteSnailButton = document.getElementById('deleteSnailBtn');

//Add onclick event
deleteRaceButton.onclick = function () {
    // Sweet Alert Libary Code
    swal({
        title: "Bist du dir sicher?",
        text: "Du kannst deine Rennen nicht wiederherstellen",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                swal("Dein Rennen wurde erfolgreich gelöscht", {
                    icon: "success",
                    button: {
                        text: "Okay"
                    }
                });
            } else {
                swal("Dein Rennen wurde nicht gelöscht");
            }
        });
}

// Exactly the same for the snail delete button
deleteSnailButton.onclick = function () {
    // sweet alert libary code
    swal({
        title: "Bist du dir sicher?",
        text: "Du kannst deine Schnecke nicht wiederherstellen.",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                swal("Okay, deine Schnecke wurde gelöscht.", {
                    icon: "success",
                });
            } else {
                swal("Deine Schnecke wurde nicht gelöscht.");
            }
        });
}
//#endregion

//#region 
// Open and Close Modals

// Open and Close "add-snail" Modal
let modal = document.getElementById('addSnailModal');
let openBtn = document.getElementById('addSnailBtn');

// Add onclick event to button and display modal
openBtn.onclick = function () {
    modal.style.display = 'block';
}

// Function to hide modal -> called as an onclick event attribute in the element tag
function hideModal() {
    modal.style.display = 'none';
}

// Function to hide modal if the area outside the modal-content div (the bg) is clicked
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Check if Input is empty and if not – keep the modal displayed
function inputRequired() {
    if (document.getElementById('snailName').value.length == 0) {
        alert("Deine Schnecke hat keinen Namen. Bitte lege einen Namen fest um fortzufahren.");
        return false;
    } else {
        document.getElementById('addSnailModal').style.display = 'none';
    }
}

// Open and Close "edit-snail" Modal

let modal2 = document.getElementById('editSnailModal');
let openBtn2 = document.getElementById('editSnailBtn');

// Add onclick event to button and display modal
openBtn2.onclick = function () {
    modal2.style.display = 'block';
}

// Function to hide modal -> called as an onclick event attribute in the element tag
function hideModal2() {
    modal2.style.display = 'none'
}

// Function to hide modal if the area outside the modal-content div (the bg) is clicked
window.onclick = function (event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

// Open and Close "add-race" Modal

// Get Variables 
let modal3 = document.getElementById('addRaceModal');
let openBtn3 = document.getElementById('addRaceBtn');

// Add onclick event to button and display modal
openBtn3.onclick = function () {
    modal3.style.display = 'block';
}

// Function to hide modal -> called as an onclick event attribute in the element tag
function hideModal3() {
    modal3.style.display = 'none';
}

// Function to hide modal if the area outside the modal-content div (the bg) is clicked
window.onclick = function (event) {
    if (event.target == modal3) {
        modal3.styletyle.display = 'none;'
    }
}

// Open and close "edit-race" Modal

let modal4 = document.getElementById('editRaceModal');
let openBtn4 = document.getElementById('editRaceBtn');

// Add onclick event to button and display modal
openBtn4.onclick = function () {
    modal4.style.display = 'block';
}

// Function to hide modal -> called as an onclick event attribute in the element tag
function hideModal4() {
    modal4.style.display = 'none';
}

// Function to hide modal if the area outside the modal-content div (the bg) is clicked
window.onclick = function (event) {
    if (event.target == modal4) {
        modal4.styletyle.display = 'none;'
    }
}

//#endregion

//#region 
// Tables 

// Display added Snail in Table 
function displayAddedSnail() {

    // Declare Variables (for easy "access")
    let tableBody = document.getElementById("snailTableBody");
    let emptyText = document.getElementById("empty");
    let tableData = document.createElement("td");
    let row = document.createElement("tr");

    // Get Input Value (what the user entered)
    tableData.innerHTML = document.getElementById("snailName").value;

    // Apend td and row (display what the user entered)
    row.appendChild(tableData);
    tableBody.appendChild(row);

    // Hide the placeholder 
    emptyText.style.display = 'none';

}

//#endregion

//#region Web Storage API

// Check if local storage is available (© https://devdocs.io/dom/web_storage_api/using_the_web_storage_api)

function storageAvailable(type) {
    try {
        let storage = window[type],
            x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage.length !== 0;
    }
}

if (storageAvailable('localStorage')) { // If local storgae is available -> execute following code

}

else { // If local storage is not available/is not enabled -> send error message
    alert('Please enable the Web Storage API in your Browser Setting to continue. Hint: if you are browsing in a private window, try using a not-private window.')
}