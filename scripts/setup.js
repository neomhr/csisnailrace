
// Change Table BG
var elements = document.getElementsByTagName('td');
for (var i = 0; i < elements.length; i++) {
    (elements)[i].addEventListener("click", function () {
        this.style = "background-color: #f6f6f6;";
    });
}

// //#region Delete Button Dialogs
// Set variables
var deleteRaceButton = document.getElementById('deleteRaceBtn');
var deleteSnailButton = document.getElementById('deleteSnailBtn');

//Add onclick event
deleteRaceButton.onclick = function () {
    // // Sweet Alert Libary Code
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
// //#endregion

function openAddSnailModal() {
    document.getElementById('addSnailModal').style.display = "block";
}

function closeAddSnailModal() {
    document.getElementById('closeAddSnailModal').style.display = "none"
}

window.onclick = function (event) {
    if (event.target == addSnailModal) {
        addSnailModal.style.display = "none";
    }
}

function openEditSnailModal() {
    document.getElementById('editSnailModal').style.display = "block";
}