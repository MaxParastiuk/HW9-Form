let input = document.getElementById('task');
let form = document.getElementById('form');
let ul = document.getElementById('list');

function checkValid() {
    let myRe = /^[a-z0-9]{2,15}$/i
    let inputVal = input.value;
    return myRe.test(inputVal);
}

function create() {
    let ul = document.getElementById('list');
    let list = ul.innerHTML;
    let task = document.getElementById('task').value;
    list += `<li class="task-to-do">${task}<button>Delete</button></li>`
    ul.innerHTML = list;
}

input.addEventListener('change', function () {
    if (checkValid()) {
        input.classList.remove("inputError")
        input.classList.add("inputСorrect")
    } else {
        input.classList.remove("inputСorrect")
        input.classList.add("inputError")
    }
});

form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (checkValid()) {
        create();
    }
    let refresh = document.getElementById('task');
    refresh.value = '';
});

ul.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('done');
    }
    if (event.target.tagName === 'BUTTON') {
        event.target.closest('li').remove();
    }
});