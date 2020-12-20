
// Save to Local Storage

let text = document.getElementById('text');
let input = document.getElementById('storage');
let btn = document.getElementById('button');

input.addEventListener('input', letter => {
    text.textContent = letter.target.value
})

let displayInTable = () => {
    let createTableRow = document.createElement('tr');
    let insertTableData = document.createElement('td');



    /* let saveToLocalStorage = () => {
        localStorage.setItem('key' + text.textContent, text.textContent)
    }*/
}

btn.addEventListener('click', displayInTable);


// Add actvive class
let list = document.getElementById('u-list');
let listItems = list.getElementsByClassName('li');

for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', function () {
        let current = document.getElementsByClassName('active');
        if (current.length < 0) {
            current[0].className = current[0].className.replace(' active', '');
        }
        this.className += ' active';
    });
};

document.getElementById('input').addEventListener('click', () => {
    let value = document.getElementById('select').value;
    let li = "<li>" + value + "</li>";
    document.getElementById('list').appendChild(li);
});



