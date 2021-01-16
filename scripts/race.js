// ––––––––––––––––––––––––––––––
// © 2020, CSI Snailrace Neo Mohr
// ––––––––––––––––––––––––––––––

// Script for the Race Page

//#region DATA
// Global Variable Declarations
let urlParams = new URLSearchParams(window.location.search); // Gets the URL Parameter passed
let race = urlParams.get('race'); // Stores the parameter

let raceObject = JSON.parse(localStorage.getItem(race)); // Get Value from Race Key (URL) (GLOBAL)
let snails = raceObject.participants;

// Keys of the Snails
let snailOne = snails[0]; // First Snailkey
let snailTwo = snails[1]; // Second Snailkey
let snailThree = snails[2]; // Third Snailkey (if added)

// Snail Meta Data (for easy global access)
let snailOneName = JSON.parse(localStorage.getItem(snailOne)).name; // First Snail's Name
let snailTwoName = JSON.parse(localStorage.getItem(snailTwo)).name; // Second Snail's Name
if (snails.length == 3) {
    var snailThreeName = JSON.parse(localStorage.getItem(snailThree)).name; // Third Snail's Name
}

let snailOneSpeed = JSON.parse(localStorage.getItem(snailOne)).speed; // First Snail's Speed
let snailTwoSpeed = JSON.parse(localStorage.getItem(snailTwo)).speed; // Second Snail's Speed
if (snails.length == 3) {
    var snailThreeSpeed = JSON.parse(localStorage.getItem(snailThree)).speed; // Third Snail's Speed
}


// Updates the Title of the Race to Equal the Name Property of the Race Object
const displayRaceName = () => {

    let DOMRaceName = document.getElementById('raceName'); // Race Name that is displayed
    let raceName = raceObject.name; // Get Name of Race
    DOMRaceName.innerHTML = raceName // Set Title to Race Name
};

// Retrieves the Data of the Participants from Localstorage
const getSnails = () => {

    let localStorageKeys = Object.keys(window.localStorage); // Get all Keys stored in localStorage
    let snailKeys = localStorageKeys.filter((key) => { key.includes('snail_') }); // Get all Snail Keys

    // Get the Snail Objects to retrieve speed and name
    snails.forEach((snail) => {
        let snailObject = JSON.parse(localStorage.getItem((snail)));
    })

};

// Gets the Names of the Participating Snails and sets the Track-Name equal to that name
const loadNames = () => {

    let DOMFirstParticipant = document.getElementById('snailOne'); // Track Number One
    let DOMSecondParticipant = document.getElementById('snailTwo'); // Track Number Two
    let DOMThirdParticipant = document.getElementById('snailThree'); // Track Number Three

    // Get the Values from the Keys stored in "snails"
    let snailOneValue = JSON.parse(localStorage.getItem(snailOne));
    let snailTwoValue = JSON.parse(localStorage.getItem(snailTwo));
    let snailThreeValue = JSON.parse(localStorage.getItem(snailThree));

    DOMFirstParticipant.innerHTML = snailOneValue.name; // Get Name Property
    DOMSecondParticipant.innerHTML = snailTwoValue.name; // Get Name Property

    // If a third participant was added
    if (snails.length == 3) {
        DOMThirdParticipant.innerHTML = snailThreeValue.name; // Get Name Property
    }

};

//#endregion DATA

//#region RACE
let trackOne = document.getElementById('raceTrackOne');
let trackTwo = document.getElementById('raceTrackTwo');
let trackThree = document.getElementById('raceTrackThree');
let startRaceBtn = document.getElementById('startRaceBtn');

startRaceBtn.addEventListener('click', () => {
    startRaceBtn.classList.add('disabled');

    if (startRaceBtn.classList.contains('disabled')) {

        var raceInterval = setInterval(() => {

            let snailOneStep = Math.floor(Math.random() * snailOneSpeed); // Random Integer Value between 0 and Max Speed of the Snail

            let snailTwoStep = Math.floor(Math.random() * snailTwoSpeed); // Random Integer Value between 0 and Max Speed of the Snail

            if (snails.length == 3) {

                var snailThreeStep = Math.floor(Math.random() * snailThreeSpeed + 1); // Random Integer Value between 0 and Max Speed of the Snail

            }

            let updatedPositionSnailOne = parseInt(trackOne.value) + snailOneStep;
            trackOne.value = updatedPositionSnailOne;

            let updatedPositionSnailTwo = parseInt(trackTwo.value) + snailTwoStep;
            trackTwo.value = updatedPositionSnailTwo;

            if (snails.length == 3) {

                let updatedPositionSnailThree = parseInt(trackThree.value) + snailThreeStep;
                trackThree.value = updatedPositionSnailThree;

            }

            if (trackOne.value == 5000) {

                clearInterval(raceInterval);
                startRaceBtn.classList.remove('disabled');
                console.log(snailOneName + ' hat das Rennen gewonnen!');
                confetti.start();

                let confettiStop = setInterval(() => {

                    confetti.stop();
                    clearInterval();

                }, 500)

                swal(snailOneName + " hat das Rennen gewonnen", 'Die Schnecke hat das Rennen soeben für sich entschieden!', 'success', {
                    buttons: {
                        Okay: true
                    },
                })
                    .then((value) => {
                        switch (value) {

                            case "Okay":
                                trackOne.value = 0;
                                trackTwo.value = 0;
                                trackThree.value = 0;
                                break;

                        }

                        let bet = JSON.parse(localStorage.getItem('currentBet'));
                        if (bet.snail == 'snail_' + snailOneName) {
                            swal('Gewinn! 🤑', 'Du hast richtig gewettet und soeben ' + bet.possibleWin + '€ gewonnen!', 'success', {
                                buttons: {
                                    Okay: true
                                },
                            })

                                .then((value) => {
                                    switch (value) {
                                        case "Okay":
                                            localStorage.removeItem('currentBet');
                                            let removeBetMarker = document.getElementById('betMarker');
                                            removeBetMarker.remove();
                                            break;
                                    }
                                })
                        }
                    });


            } else if (trackTwo.value == 5000) {

                clearInterval(raceInterval);
                startRaceBtn.classList.remove('disabled');
                console.log(snailTwoName + ' hat das Rennen gewonnen!');
                confetti.start();

                let confettiStop = setInterval(() => {

                    confetti.stop();
                    clearInterval();

                }, 500)

                swal(snailTwoName + " hat das Rennen gewonnen", 'Die Schnecke hat das Rennen soeben für sich entschieden!', 'success', {
                    buttons: {
                        Okay: true
                    },
                })
                    .then((value) => {
                        switch (value) {

                            case "Okay":
                                trackOne.value = 0;
                                trackTwo.value = 0;
                                trackThree.value = 0;
                                let removeBetMarker = document.getElementById('betMarker');
                                removeBetMarker.remove();
                                break;

                        }

                        let bet = JSON.parse(localStorage.getItem('currentBet'));
                        if (bet.snail == 'snail_' + snailTwoName) {
                            swal('Gewinn! 🤑', 'Du hast richtig gewettet und soeben ' + bet.possibleWin + '€ gewonnen!', 'success', {
                                buttons: {
                                    Okay: true
                                },
                            })

                                .then((value) => {
                                    switch (value) {
                                        case "Okay":
                                            localStorage.removeItem('currentBet');
                                            break;
                                    }
                                })
                        }
                    });



            } else if (trackThree.value == 5000) {

                clearInterval(raceInterval);
                startRaceBtn.classList.remove('disabled');
                console.log(snailThreeName + ' hat das Rennen gewonnen!');
                confetti.start();
                let confettiStop = setInterval(() => {
                    confetti.stop();
                    clearInterval();
                }, 500)

                swal(snailThreeName + " hat das Rennen gewonnen", 'Die Schnecke hat das Rennen soeben für sich entschieden!', 'success', {
                    buttons: {
                        Okay: true
                    },
                })
                    .then((value) => {
                        switch (value) {

                            case "Okay":
                                trackOne.value = 0;
                                trackTwo.value = 0;
                                trackThree.value = 0;
                                l   et removeBetMarker = document.getElementById('betMarker');
                                removeBetMarker.remove();
                                break;



                        }

                        let bet = JSON.parse(localStorage.getItem('currentBet'));
                        if (bet.snail == 'snail_' + snailThreeName) {
                            swal('Gewinn! 🤑', 'Du hast richtig gewettet und soeben ' + bet.possibleWin + '€ gewonnen!', 'success', {
                                buttons: {
                                    Okay: true
                                },
                            })

                                .then((value) => {
                                    switch (value) {
                                        case "Okay":
                                            localStorage.removeItem('currentBet');
                                            break;
                                    }
                                })
                        }

                    });


            }

        }, 30)
    }
})


//#endregion RACE

//#region BETTING OFFICE

// Open and Close Modal
const openBettingOfficeBtn = document.getElementById('openBettingOfficeBtn');
const modal = document.getElementById('bettingOfficeModal');

openBettingOfficeBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

const closeBettingOfficeBtn = document.getElementById('closeBettingOfficeModal');
closeBettingOfficeBtn.addEventListener('click', () => {
    modal.style.display = 'none'
});

// Load Snails Dropdown Menu
let dropdown = document.getElementById('snailsDropdown');
const loadSelectValues = () => {
    snails.forEach((snail) => {
        let newOption = document.createElement('option');
        dropdown.appendChild(newOption);
        let snailName = JSON.parse(localStorage.getItem((snail))).name;
        newOption.innerHTML = snailName;
    })
};

// Bet Helper Object
function Bet(snail, amount, possibleWin) {
    this.snail = snail;
    this.amount = amount;
    this.possibleWin = possibleWin;
};

const submitBetBtn = document.getElementById('submitBetBtn');
submitBetBtn.addEventListener('click', () => {
    let selectedSnail = dropdown.options[dropdown.selectedIndex].value;
    let betAmount = document.getElementById('betAmount').value;

    console.log('Deine Wette: ' + betAmount + '€ auf ' + selectedSnail);
    console.log('Dein möglicher Gewinn beträgt somit ' + (betAmount * 7) + '€');

    if (betAmount != 0) {

        let removeBetMarker = document.getElementById('betMarker');

        if (removeBetMarker) {
            removeBetMarker.remove;
        }

        // Create Bet Helper Object
        var newBet = new Bet('snail_' + selectedSnail, parseInt(betAmount), (betAmount * 7));
        console.log(newBet)
        localStorage.setItem('currentBet', JSON.stringify(newBet)); // Save Bet in localStorage

        // Get the Race Tracks to display the Bet Marker
        let snailOneTrackVal = document.getElementById('snailOne');
        let snailTwoTrackVal = document.getElementById('snailTwo');
        let snailThreeTrackVal = document.getElementById('snailThree');
        let trackVals = [
            snailOneTrackVal,
            snailTwoTrackVal,
            snailThreeTrackVal
        ]

        console.log(trackVals)

        // Display Bet Marker on the Right Snail
        for (let i = 0; i < trackVals.length; i++) {
            if (trackVals[i].innerHTML == selectedSnail) {
                let bettedSnail = trackVals[i];
                console.log(bettedSnail)
                let newBetMark = document.createElement('span');
                newBetMark.classList.add('bet-marker');
                newBetMark.id = 'betMarker'
                newBetMark.innerHTML = 'Wette'
                let betMarkParent = bettedSnail.parentNode.appendChild(newBetMark);
            }
        }

        let bet = JSON.parse(localStorage.getItem('currentBet'));

        modal.style.display = 'none';

    } else {
        swal('Ungültige Wette!', 'Um eine Wette abzuschließen musst du einen Betrag über 0€ setzen.', 'error');
    }

});

// Change Display Value if Input Value changes
let betAmount = document.getElementById('betAmount');
betAmount.addEventListener('input', () => {

    let display = document.getElementById('possibleWinDisplay');
    let inputVal = (betAmount.value * 7)

    // Change Value to new one
    display.innerHTML = inputVal;
    // Set Display Value to Zero if Input is empty
    if (inputVal == 0) {
        display.innerHTML = '0';
    }

})


//#endregion BETTING OFFICE

//#region DOM
// Style Changes for the Case of only two participants
if (raceObject.participantCount == 2) {

    let DOMThirdParticipant = document.getElementById('snailThree'); // Track Number Three
    DOMThirdParticipant.style.opacity = '0';

    let trackNumThree = document.getElementById('trackNumThree');
    trackNumThree.style.opacity = '0';

    let sliderThree = document.getElementById('raceTrackThree');
    sliderThree.style.opacity = '0';
    sliderThree.setAttribute('disabled', '');

    let containerTrackThree = document.querySelector('.track-three-container');
    containerTrackThree.style.backgroundColor = '#B6DFBA';

    let goalMarkTrackThree = document.getElementById('gM-3');
    goalMarkTrackThree.style.color = '#A8C7AB';

    let rankingTrackThree = document.getElementById('rankingThree');
    rankingTrackThree.style.opacity = '0';

}

//#endregion DOM

window.addEventListener('beforeunload', () => {
    localStorage.removeItem('currentBet')
});

window.onload = function () {
    displayRaceName();
    getSnails();
    loadNames();
    loadSelectValues();
}  