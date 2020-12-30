# CSI Snailrace
Test Project by Neo Mohr using OOP JavaScript.
### Project Description
A Snail Race Simulation based on HTML, CSS and JavaScript using technologies like the Web Storage API.
_The main objective of this project was to get an Introduction on working with Objects and Databases in JavaScript_

Racing Snails can be created and managed. In addition, races can be created and managed in which the snails can also participate.
For every race, a bet can be made that will be paid out if the snail wins.

## Functionality
### Add Snails
You can add Snails by assigning a name and a speed value to them.
By adding a snail, you create a Snail Object that is then converted to a JSON String and stored in the localStorage.
### Edit Snails
You can edit the name and speed values you previously assigned to them.
### Delete Snails
You can also permanently delete your snails. This will also remove the localStorage entry.
### Add Races
You can add a Race and add your created snails as participants.
Your Race Object is also stored in the localStorage as a JSON String to guarantee easy access to the data on multiple pages.
### Edit Races
You can change the name of your race, remove participants, and add new ones.
### Delete Races
You can also permanently delete your race.

## The Actual Race
Before starting your race, you can place a bet on a snail of your choice.
When you click the button to start the Race, a function with an interval of 500ms will make the snails move. How fast the snails will move depends on the speed you assigned to them. Logically, a snail with a speed of 10 will move faster than a snail with a speed of 1.
If a snail reaches the destination, the race ends and the bet will be paid out.


