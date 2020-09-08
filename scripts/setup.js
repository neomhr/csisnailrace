
// Change Table BG
var elements = document.getElementsByTagName('td');
for (var i = 0; i < elements.length; i++) {
    (elements)[i].addEventListener("click", function () {
        this.style = "background-color: #f6f6f6;";
    });
}


// Delete Button Dialogs

// Get Button and add an Eventhandler
document.getElementById('deleteSnailBtn').onclick = function () {
    // //#region  Sweet Alert Libary Code //#endregion
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                swal("Poof! Your imaginary file has been deleted!", {
                    icon: "success",
                });
            } else {
                swal("Your imaginary file is safe!");
            }
        });
}

// Exactly the same, for the deleteSnailBtn
document.getElementById('deleteSnailBtn').onclick = function () {
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                swal("Poof! Your imaginary file has been deleted!", {
                    icon: "success",
                });
            } else {
                swal("Your imaginary file is safe!");
            }
        });
}
