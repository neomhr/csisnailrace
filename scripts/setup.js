// Schneckenrennen

// Open and close Modals

function addModalToggle(modalName, openBtnName, closeBtnName) {
    try {
        var openBtn = document.getElementById(openBtnName);
        var closeBtn = document.getElementById(closeBtnName);
        var modal = document.getElementById(modalName);

        openBtn.addEventListener("click", () => {
            modal.style.display = "block";
        });

        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });

        window.addEventListener("click", (event) => {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        });
    } catch (e) {
        console.log("An error occured during the addition of modal events " + e);
    }
}
addModalToggle("addSnailModal", "openAddSnailModalBtn", "closeAddSnailModal");
addModalToggle("editSnailModal", "openEditSnailModalBtn", "closeEditSnailModal");
addModalToggle("addRaceModal", "openAddRaceModalBtn", "closeAddRaceModal");
addModalToggle("editRaceModal", "openEditRaceModalBtn", "closeEditRaceModal");

// const addSnailModal = document.getElementById('addSnailModal');
// const addSnailModalContent = document.getElementById('addModContent')
// const openAddSnailModalBtn = document.getElementById('openAddSnailModalBtn');
// const closeAddSnailModal = document.getElementById('closeAddSnailModal');

// openAddSnailModalBtn.addEventListener('click', () => {

//     addSnailModal.style.display = 'block';

// });

// closeAddSnailModal.addEventListener('click', () => {

//     addSnailModal.style.display = 'none';

// });

// window.addEventListener('click', (event) => {
//     if (event.target == addSnailModal) {
//         addSnailModal.style.display = "none";
//     }
// });

// const editSnailModal = document.getElementById('editSnailModal');
// const openEditSnailModalBtn = document.getElementById('openEditSnailModalBtn');
// const closeEditSnailModal = document.getElementById('closeEditSnailModal');

// openEditSnailModalBtn.addEventListener('click', () => {

//     editSnailModal.style.display = 'block';

// });

// closeEditSnailModal.addEventListener('click', () => {

//     editSnailModal.style.display = 'none';

// });

// window.addEventListener('click', (event) => {
//     if (event.target == editSnailModal) {
//         editSnailModal.style.display = "none";
//     }
// });

// const addRaceModal = document.getElementById('addRaceModal');
// const openAddRaceModalBtn = document.getElementById('openAddRaceModalBtn');
// const closeAddRaceModal = document.getElementById('closeAddRaceModal');

// openAddRaceModalBtn.addEventListener('click', () => {

//     addRaceModal.style.display = 'block';

// });

// closeAddRaceModal.addEventListener('click', () => {

//     addRaceModal.style.display = 'none';
//     window.location.reload();

// });

// window.addEventListener('click', (event) => {
//     if (event.target == addRaceModal) {
//         addRaceModal.style.display = "none";
//     }
// });

// const editRaceModal = document.getElementById('editRaceModal');
// const openEditRaceModalBtn = document.getElementById('openEditRaceModalBtn');
// const closeEditRaceModal = document.getElementById('closeEditRaceModal');

// openEditRaceModalBtn.addEventListener('click', () => {

//     editRaceModal.style.display = 'block';

// });

// closeEditRaceModal.addEventListener('click', () => {

//     editRaceModal.style.display = 'none';
//     window.location.reload();

// });

// window.addEventListener('click', (event) => {
//     if (event.target == editRaceModal) {
//         editRaceModal.style.display = "none";
//     }
// });

// Creates the table rows and populates values from localStorage (for the snails)
const buildSnailTableRows = () => {

    let snailTableBody = document.getElementById('snailTableBody');
    let lsNames = JSON.stringify(localStorage);
    let parsedLsNames = JSON.parse(lsNames);
    let lsNamesObj = Object.keys(parsedLsNames);
    let filteredKeys = lsNamesObj.filter((key) => {
        return key.includes('snail_');
    });

    for (let i = 0; i < filteredKeys.length; i++) {

        let splittedStr = filteredKeys[i].split('_');
        let finalStr = new Array(splittedStr[1]);

        for (let i = 0; i < finalStr.length; i++) {

            let values = finalStr;
            let newRow = snailTableBody.insertRow();
            let newTd = newRow.insertCell();
            newTd.innerHTML = values;
            newRow.classList.add('snail-row');

        }

    }

    let placeholder = document.getElementById('empty');

    if (snailTableBody.firstChild) {

        placeholder.style.display = 'none';

    } else {

        snailTableBody.style.display = 'block'

    }
};

// Creates the table rows and populates values from localStorage (for the races)
const buildRaceTableRows = () => {

    let raceTableBody = document.getElementById('raceTableBody');
    let lsRaces = JSON.stringify(localStorage);
    let parsedRaces = JSON.parse(lsRaces);
    let racesObj = Object.keys(parsedRaces);
    let filterRaceKeys = racesObj.filter((key) => { return key.includes('race_'); });

    for (let i = 0; i < filterRaceKeys.length; i++) {

        let splitKey = filterRaceKeys[i].split('_');
        let raceNameKey = new Array(splitKey[1]);

        for (let i = 0; i < raceNameKey.length; i++) {

            let values = raceNameKey;
            let newRow = document.createElement('tr');
            newRow.classList.add('race-row');
            let newData = document.createElement('td');
            raceTableBody.appendChild(newRow);
            newRow.appendChild(newData);
            newData.innerHTML = values;

        }

    }

    let placeholder = document.getElementById('empty2');

    if (raceTableBody.firstChild) {

        placeholder.style.display = 'none';

    } else {

        raceTableBody.style.display = 'block'

    }
};

// Checks if the table has entries and adjusts the appearance
const checkTableChilds = () => {

    let snailTableBody = document.getElementById('snailTableBody');
    let raceTableBody = document.getElementById('raceTableBody');

    if (snailTableBody.firstChild) { } else {

        snailTableBody.style.display = 'none';

    }

    if (raceTableBody.firstChild) { } else {

        raceTableBody.style.display = 'none';

    }
};

// Check the availability of localStorage
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
            e.code === 22 ||
            e.code === 1014 ||
            e.name === 'QuotaExceededError' ||
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            storage.length !== 0;
    };

};

// KEYS
// For Snails: `snail_${enteredSnailName}`
// For Snail-Speed: `snailSpeed_${enteredSnailName}_${enteredSnailSpeed}`
// For Races: `race_${enteredRaceName}`
// For Race-Participants: `${enteredRaceName}_raceParticipant${addedSnailName}`

// Snail Constructor Function
function Snail(name, speed) {
    this.name = name;
    this.speed = speed;
}

// {name: 'Neo', speed: '8'}

// Race Constructor Function 
function Race(name, participants, participantCount) {
    this.name = name;
    this.participants = participants; // Array of all Participating Snails (Snail Keys for easy acces on race page)
    this.participantCount = participantCount; // (Num) Sum of all Participating Snails
}

// {name: 'raceName', participants: ['snail_Neo', 'snail_Alex', 'snailPaul'], participantCount: 3}



if (storageAvailable('localStorage')) {

    // Add Snail
    const snailValue = document.getElementById('snailName');
    let snailSpeedVal = document.getElementById('snailSpeed');
    const insertBtn = document.getElementById('addSnailSubmitBtn');

    insertBtn.addEventListener('click', () => {

        const valueSnail = snailValue.value;
        let snailSpeed = snailSpeedVal.value;

        if (valueSnail.length == 0) {

            swal('Ups', 'Bitte gib einen Namen an, um fortzufahren.', 'error');

        } else if (valueSnail == 'snail_' || valueSnail == 'snailSpeed_') {

            swal('Syntax Error', 'Der von dir eingegebene Name enthält ein reserviertes Keyword. "snail_" und "snailSpeed_" dürfen nicht als Name verwendet werden.', 'error');

        } else if (valueSnail == 'race_' || valueSnail == '_raceParticipant_') {

            swal('Syntax Error', 'Der von dir eingegebene Name enthält ein reserviertes Keyword. "race_" und "raceParticipant_" dürfen nicht als Name verwendet werden.', 'error');

        } else if (valueSnail == 'nicht belegt') {

            swal('Syntax Error', 'Der von dir eingegebene Name enthält ein reserviertes Keyword. "nicht belegt" darf nicht als Name verwendet werden.', 'error');

        } else if (snailSpeed.length == 0) {

            swal('Ups', 'Bitte gib eine Geschwindigkeit an, um fortzufahren.', 'error');

        } else if (isNaN(snailSpeed) || snailSpeed.length == null) {

            swal('Syntax Error', 'Die Geschiwndigkeit muss einer positiven Zahl zwischen 1 und 10 entsprechen.', 'error');

        } else if (snailSpeed == 0) {

            swal('Ups', 'Die Geschiwndigkeit muss einer positiven Zahl zwischen 1 und 10 entsprechen.', 'error');

        } else if (snailSpeed > 10 || snailSpeed < 1) {

            swal('Syntax Error', 'Die Geschwindigkeit muss einer positiven Zahl zwischen 1 und 10 entsprechen.', 'error');

        }
        else {

            let newSnail = new Snail(valueSnail, snailSpeed);
            let parsedSnail = JSON.stringify(newSnail)
            localStorage.setItem('snail_' + valueSnail, parsedSnail);
            window.location.reload();

        }

    });

    // Edit Snail
    // Load Input Values
    let openModalBtn = document.getElementById('openEditSnailModalBtn');
    openModalBtn.addEventListener('click', () => {

        const newNameInp = document.getElementById('newSnailName');
        const newSpeedInp = document.getElementById('newSnailSpeed');
        let snailRows = document.getElementsByClassName('snail-row');

        for (let i = 0; i < snailRows.length; i++) {
            if (snailRows[i].classList.contains('active')) {

                let snailValue = snailRows[i].firstChild.innerHTML; // <td>/value of active row
                let lsKeys = Object.keys(localStorage);
                let snailKeys = lsKeys.filter((key) => { return key.includes('snail_'); });

                for (let i = 0; i < snailKeys.length; i++) {
                    if (snailKeys[i] == 'snail_' + snailValue) {

                        let snail = localStorage.getItem(snailKeys[i])
                        let parsedSnail = JSON.parse(snail)
                        console.log(parsedSnail)

                        let snailName = parsedSnail.name;
                        newNameInp.value = snailName;
                        let snailSpeed = parsedSnail.speed;
                        newSpeedInp.value = snailSpeed

                    }
                }

            }

        }

    });

    // Update Values
    const newSnailNameInp = document.getElementById('newSnailName');
    let newSnailSpeedInp = document.getElementById('newSnailSpeed');
    const refreshBtn = document.getElementById('editSnailSubmitBtn');

    refreshBtn.addEventListener('click', () => {
        const nameVal = newSnailNameInp.value;
        let speedVal = newSnailSpeedInp.value;
        let snailRows = document.getElementsByClassName('snail-row');

        for (let i = 0; i < snailRows.length; i++) {
            if (snailRows[i].classList.contains('active')) {

                let snailValue = snailRows[i].firstChild.innerHTML; // <td>/value of active row

                localStorage.removeItem('snail_' + snailValue); // Remove Current Snail

                let newSnail = new Snail(nameVal, speedVal);
                let newSnailStr = JSON.stringify(newSnail);
                let lsKeys = Object.keys(localStorage);
                let raceKeys = lsKeys.filter((key) => { return key.includes('race_'); });

                for (let i = 0; i < raceKeys.length; i++) {
                    let raceKey = raceKeys[i];
                    let raceObject = JSON.parse(localStorage.getItem(raceKey));
                    let raceParticipantsArray = raceObject.participants;

                    for (let i = 0; i < raceParticipantsArray.length; i++) {
                        let raceParticipant = raceParticipantsArray[i];
                        if (raceParticipant == 'snail_' + snailValue) {
                            let indexOfSnail = raceParticipantsArray.indexOf(raceParticipant);
                            raceObject.participants[indexOfSnail] = 'snail_' + nameVal;
                            console.log('race_' + raceObject.name, JSON.stringify(raceObject))
                            localStorage.removeItem('race_' + raceObject.name);
                            localStorage.setItem('race_' + raceObject.name, JSON.stringify(raceObject))
                        }
                    }

                }

                localStorage.setItem('snail_' + nameVal, newSnailStr);

            }

        }

        window.location.reload();

    });

    // Delete Snail
    const deleteSnailBtn = document.getElementById('deleteSnailBtn');
    deleteSnailBtn.addEventListener('click', () => {
        swal({
            title: "Bist du dir sicher?",
            text: "Du kannst deine Schnecke nicht wiederherstellen.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {

                if (willDelete) {

                    let snailTable = document.getElementById('snailTableBody');
                    let snailRows = snailTable.getElementsByClassName('snail-row');

                    for (let i = 0; i < snailRows.length; i++) {

                        if (snailRows[i].classList.contains('active')) {

                            let nameValue = snailRows[i].firstChild.innerHTML;
                            let objKeys = Object.keys(localStorage);
                            let snailKeys = objKeys.filter((key) => { return key.includes('snail_') });
                            let raceKeys = objKeys.filter((key) => { return key.includes('race_') });

                            // Delete Snail Name Keys
                            for (let i = 0; i < snailKeys.length; i++) {

                                if (snailKeys[i] == 'snail_' + nameValue) {

                                    let selectedSnailKey = snailKeys[i];
                                    localStorage.removeItem(selectedSnailKey);

                                }
                            }

                        }

                    }

                    window.location.reload();

                }

            });

    });

    // Add Race
    function loadSelectValues() {

        let snailKeys = Object.keys(localStorage).filter((key) => { return key.includes('snail_') });
        const select = document.getElementById('participatingSnails');

        for (let i = 0; i < snailKeys.length; i++) {

            let parsedSnailKeys = JSON.parse(localStorage.getItem(snailKeys[i]))

            let name = parsedSnailKeys.name;

            let newOption = document.createElement('option');
            select.appendChild(newOption);
            newOption.innerHTML = name;
        }

    };

    const addSnailToRaceBtn = document.getElementById('addSnailToRacetableBtn');
    let raceParticipants = [];

    addSnailToRaceBtn.addEventListener('click', () => {


        const select = document.getElementById('participatingSnails');
        const list = document.getElementById('participatingSnailsList');
        const placeholder = document.getElementById('participatingSnailsListPlaceholder');
        let selectedValue = select.options[select.selectedIndex].value;
        console.log(selectedValue)
        let snailKeys = Object.keys(localStorage).filter((key) => { return key.includes('snail_') });
        console.log(snailKeys)

        // Build Snails List
        if (list.childElementCount <= 2) { // Max of 3 li's (Race Participants)

            var newListEntry = document.createElement('li');
            list.appendChild(newListEntry);
            newListEntry.innerHTML = selectedValue;
            newListEntry.classList.add('addRaceLi');

            for (let i = 0; i < snailKeys.length; i++) {
                if (snailKeys[i] == 'snail_' + selectedValue) {
                    let selectedSnailKey = snailKeys[i];
                    console.log(selectedSnailKey)
                    raceParticipants.push(selectedSnailKey);
                }
            }

        } else {

            swal('Maximale Teilnehmeranzahl erreicht', 'Du kannst nur maximal 3 Schnecken zu einem Rennen hinzufügen', 'info');

        }

        placeholder.style.display = 'none';

    });

    // Add Race to Storage
    let insertRaceBtn = document.getElementById('addRaceSubmitBtn')
    insertRaceBtn.addEventListener('click', () => {

        const raceValue = document.getElementById('raceName')
        const valueRace = raceValue.value;

        if (valueRace.length == 0) {

            swal('Ups!', 'Bitte gib deinem Rennen einen Namen um fortzufahren', 'error');

        } else if (raceParticipants.length == 0 || raceParticipants.length == 1) {

            swal('Ups!', 'Du musst mindestens 2 Schnecken hinzufügen.', 'error');

        } else {

            let newRace = new Race(valueRace, raceParticipants, raceParticipants.length);
            console.log(newRace)

            let newRaceString = JSON.stringify(newRace);
            localStorage.setItem('race_' + newRace.name, newRaceString);

            window.location.reload();
        }

    });

    // // Edit Race
    // // Load Values
    const editRaceBtn = document.getElementById('openEditRaceModalBtn');
    const newNameInp = document.getElementById('newRaceName');
    const raceRows = document.getElementsByClassName('race-row');
    const list = document.getElementById('newParticipatingSnailsList');
    const placeholder = document.getElementById('newParticipatingSnailsListPlaceholder');
    let updatedRaceParticipants = []; // Holds Data until it gets uploaded on Localstorage

    // Populate Snail Values for Select
    // Triggered by Window Load
    function loadEditSelectValues() {
        const select = document.getElementById('newParticipatingSnails');
        let snailKeys = Object.keys(localStorage).filter((key) => { return key.includes('snail_') });


        for (let i = 0; i < snailKeys.length; i++) {

            let parsedSnailKeys = JSON.parse(localStorage.getItem(snailKeys[i]))

            let name = parsedSnailKeys.name;

            let newOption = document.createElement('option');
            select.appendChild(newOption);
            newOption.innerHTML = name;
        }

    }

    // Load Input Value and List for clicked Race
    // Triggered by Open Race Modal Button Click
    editRaceBtn.addEventListener('click', () => {

        for (let i = 0; i < raceRows.length; i++) {

            // Get the clicked row
            if (raceRows[i].classList.contains('active')) {

                let selectedRace = raceRows[i].firstChild.innerHTML; // Value of the clicked Row (== to Value of Race or Second part of Key)
                let newSelect = document.getElementById('newParticipatingSnails');
                let raceKeys = Object.keys(localStorage).filter((key) => { return key.includes('race_') });
                let snailKeys = Object.keys(localStorage).filter((key) => { return key.includes('snail_') });

                for (let i = 0; i < raceKeys.length; i++) {

                    if (raceKeys[i] == 'race_' + selectedRace) {

                        let raceObject = JSON.parse(localStorage.getItem(raceKeys[i])); // Get Value as JSON
                        console.log(raceObject)

                        newNameInp.value = raceObject.name; // Set Input value to == Race Name Property

                        var participants = raceObject.participants; // Get Participants from Race Object
                        console.log(participants)

                        // loop through Participants
                        for (let i = 0; i < participants.length; i++) {
                            console.log(participants[i])
                            let snailObj = JSON.parse(localStorage.getItem(participants[i]));
                            let snailName = snailObj.name

                            if (list.childElementCount <= 2) {
                                let newLi = document.createElement('li');
                                list.appendChild(newLi);
                                newLi.innerText = snailName;
                                newLi.classList.add('editRaceLi');
                            }
                        }

                        placeholder.style.display = 'none';

                    }
                }
            }
        }


    });

    // Add new snails to race
    const addNewSnailsToRaceBtn = document.getElementById('addSnailToNewRaceTableBtn');
    addNewSnailsToRaceBtn.addEventListener('click', () => {

        const select = document.getElementById('newParticipatingSnails');
        const list = document.getElementById('newParticipatingSnailsList');
        let listItems = document.getElementsByClassName('new');
        const placeholder = document.getElementById('newParticipatingSnailsListPlaceholder');
        let selectedSnail = select.options[select.selectedIndex].value;

        if (list.childElementCount <= 2) { // Max of 3 Participants

            let newListEntry = document.createElement('li');
            list.appendChild(newListEntry);
            newListEntry.innerHTML = selectedSnail;
            // raceParticipants.push(selectedSnail);


        } else {

            swal('Maximale Teilnehmeranzahl erreicht', 'Du kannst nur maximal 3 Schnecken zu einem Rennen hinzufügen', 'info');

        }

        placeholder.style.display = 'none';

    });

    // Save new Values
    const addUpdatedRaceSubmitBtn = document.getElementById('addUpdatedRaceSubmitBtn');

    addUpdatedRaceSubmitBtn.addEventListener('click', () => {

        for (let i = 0; i < raceRows.length; i++) {

            if (raceRows[i].classList.contains('active')) {

                let selectedRace = raceRows[i].firstChild.innerHTML;
                localStorage.removeItem('race_' + selectedRace); // Delete Race of clicked Row

                // Create New/Updated Race
                let newRaceName = document.getElementById('newRaceName').value; // New Race Name
                let newRaceNameInput = document.getElementById('newRaceName');
                let newRaceNameInputVal = newRaceNameInput.value;
                let newRaceParticipants = [];

                let newRaceParticipatingSnailsList = document.getElementById('newParticipatingSnailsList');
                let newParticipatingSnails = newRaceParticipatingSnailsList.querySelectorAll('li');

                for (let i = 0; i < newParticipatingSnails.length; i++) {

                    let listItemValue = newParticipatingSnails[i].innerText; // New Race Participants
                    console.log(listItemValue);

                    // Get the Keys of the list Items
                    let snailKeys = Object.keys(localStorage).filter((key) => { return key.includes('snail_') });
                    for (let i = 0; i < snailKeys.length; i++) {
                        if (snailKeys[i] == 'snail_' + listItemValue) {
                            let snailKey = snailKeys[i];
                            newRaceParticipants.push(snailKey); // Push right Key to New Participants Array
                        }
                    }

                }

                console.log(newRaceParticipants)

                if (newRaceNameInputVal.length == 0) {

                    swal('Ups!', 'Bitte gib deinem Rennen einen Namen um fortzufahren', 'error');

                } else if (newRaceParticipants.length == 0 | newRaceParticipants.length == 1) {

                    swal('Ups!', 'Du musst mindestens 2 Schnecken hinzufügen.', 'error');

                } else {
                    // Create New Race Object
                    let newRace = new Race(newRaceName, newRaceParticipants, newRaceParticipants.length);
                    // Store new Race in Localstorage
                    localStorage.setItem('race_' + newRaceName, JSON.stringify(newRace));

                    newRaceParticipants.length = 0; // Clear Participants Array
                }

                // Create New Race Object
                let newRace = new Race(newRaceName, newRaceParticipants, newRaceParticipants.length);
                // Store new Race in Localstorage
                localStorage.setItem('race_' + newRaceName, JSON.stringify(newRace));

                newRaceParticipants.length = 0; // Clear Participants Array
            }

        }


        window.location.reload()

    })

    // Delete Race
    const deleteRaceBtn = document.getElementById('deleteRaceBtn');
    deleteRaceBtn.addEventListener('click', () => {

        swal({
            title: "Bist du dir sicher?",
            text: "Du kannst deine Rennen nicht wiederherstellen",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {

                    for (let i = 0; i < raceRows.length; i++) {
                        if (raceRows[i].classList.contains('active')) {
                            let selectedRow = raceRows[i];
                            let selectedRace = selectedRow.firstChild.innerHTML;
                            console.log(selectedRace)
                            localStorage.removeItem('race_' + selectedRace)
                        }
                    }

                    window.location.reload();

                }

            });

    });

} else {

    swal('Cookies deaktiviert',
        'Diese Anwendung verwendet den Localstorage, um deine Spieldaten zu speichern. Bitte aktiviere die Speicherung von Daten in deinen Browsereinstellungen, um fortzufahren.',
        'error'
    );

};

// Continue to Race Button
let continueBtn = document.getElementById('continueToRaceBtn');
let url = document.URL;
let searchParams = URLSearchParams;
let raceRows = document.getElementsByClassName('race-row');
let keys = Object.keys(window.localStorage);
let raceKeys = keys.filter((key) => { return key.includes('race_') });

continueBtn.addEventListener('click', () => {

    for (let i = 0; i < raceRows.length; i++) {

        if (raceRows[i].classList.contains('active')) {

            let raceNameValue = raceRows[i].firstChild.innerHTML;
            let raceKey = 'race_' + raceNameValue; // Table Row InnerText with Prefix == Key

            window.location.href = `/race.html?race=${raceKey}`; // Append Key to URL

        }
    }

});


// Adds "Click" Event Handlers to the table rows
const addRowActiveClass = () => {

    let rows = document.querySelectorAll("tr.snail-row, tr.race-row");

    for (i = 0; i < rows.length; i++) {

        rows[i].addEventListener('click', (event) => {

            for (let i = 0; i < rows.length; i++) {

                rows[i].classList.remove('active');

            }

            event.target.parentElement.classList.add('active');

        });

    }

};

// BUTTON STATES
// Default State: Add Buttons enabled, all others disabled
// Snail-Row-State: Snail Edit, Snail Delete enabled, all others disabled
// Race-Row-State: Race-Edit, Race-Delete, Continue Race enabled, all others disabled

const defaultButtonState = () => {

    const addButtons = document.querySelectorAll('#openAddSnailModalBtn, #openAddRaceModalBtn');
    const allOtherButtons = document.querySelectorAll('#openEditSnailModalBtn, #deleteSnailBtn, #openEditRaceModalBtn, #deleteRaceBtn, #continueToRaceBtn');

    for (let i = 0; i < addButtons.length;) {

        addButtons[i].removeAttribute('disabled');

    }

    for (let i = 0; i < allOtherButtons.length; i++) {

        allOtherButtons[i].setAttribute('disabled', '');

    }

};

const snailRowButtonState = () => {

    const enabledButtons = document.querySelectorAll('#openAddSnailModalBtn, #openEditSnailModalBtn, #deleteSnailBtn, #openAddRaceModalBtn');
    const disabledButtons = document.querySelectorAll('#openEditRaceModalBtn, #deleteRaceBtn, #continueToRaceBtn');

    for (let i = 0; i < enabledButtons.length; i++) {

        enabledButtons[i].removeAttribute('disabled');

    }

    for (let i = 0; i < disabledButtons.length; i++) {

        disabledButtons[i].setAttribute('disabled', '');

    }

};

const raceRowButtonState = () => {

    const enabledButtons = document.querySelectorAll('#openEditRaceModalBtn, #deleteRaceBtn, #continueToRaceBtn, #openAddRaceModalBtn, #openAddSnailModalBtn');
    const disabledButtons = document.querySelectorAll('#openEditSnailModalBtn, #deleteSnailBtn');

    for (let i = 0; i < enabledButtons.length; i++) {

        enabledButtons[i].removeAttribute('disabled');

    }

    for (let i = 0; i < disabledButtons.length; i++) {

        disabledButtons[i].setAttribute('disabled', '');

    }

};

// Removes the active attr on buttons if a button from the other table is clicked
const setButtonState = () => {

    let notRows = document.getElementsByTagName('*:not(.snail-row, .race-row)');
    let rows = document.querySelectorAll('.snail-row, .race-row');

    for (let i = 0; i < rows.length; i++) {

        rows[i].onclick = function () {

            if (this.classList.contains('snail-row')) {

                snailRowButtonState();

            } else if (this.classList.contains('race-row')) {

                raceRowButtonState();

            } else {

                defaultButtonState();

            }
        };

    }

};

// Function Calls on Window Load
window.onload = () => {

    buildSnailTableRows(); // Creates table rows for snails
    buildRaceTableRows(); // Creates table rows for races
    checkTableChilds(); // Checks if there are Table entries and adjusts table height
    loadSelectValues(); // Creates the Select Options for the Race Modal
    loadEditSelectValues();
    addRowActiveClass(); // Adds a row handler to the rows and highlights the clicked one
    setButtonState(); // Sets the disabled attribute on buttons

};
