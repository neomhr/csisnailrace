
// Display added Snail in Table 
function displayAddedSnail() {

    // Declare Variables (for easy "access")
    var tableBody = document.getElementById("table-body");
    var tableData = document.createElement("td");
    var row = document.createElement("tr");

    // Get Input Value (what the user entered)
    tableData.innerHTML = document.getElementById("snailName").value;

    // Apend td and row (display what the user entered)
    row.appendChild(tableData);
    tableBody.appendChild(row);
}

$(function () {
    $("#selectable").selectable({
        stop: function () {
            var result = $("#select-result").empty();
            $(".ui-selected", this).each(function () {
                var index = $("#selectable li").index(this);
                result.append(" #" + (index + 1));
            });
        }
    });
});