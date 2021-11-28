document.getElementById('task').focus();

let input = document.getElementById('task');

function checkValid() {
    let myRe = /^[a-z0-9]{2,15}$/i
    let inputVal = input.value;
    return myRe.test(inputVal);
}

input.addEventListener('change', function () {
    if (checkValid()) {
        input.classList.remove("inputError")
        input.classList.add("inputСorrect")
    } else {
        input.classList.remove("inputСorrect")
        input.classList.add("inputError")
    }
})

let btn = document.getElementById('add')
btn.addEventListener('click', function (event) {
    create(event);

    let refresh = document.getElementById('task');
    refresh.value = '';
});

function create(event) {

    if (checkValid()) {
        let ul = document.getElementById('list');
        let list = ul.innerHTML;
        let task = document.getElementById('task').value;
        list += `<li class="task-to-do">${task}<button>Delete</button></li>`
        ul.innerHTML = list;
    } else {
        event.preventDefault();
    }
}

let ul = document.getElementById('list');
ul.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('done');
    }
    if (event.target.tagName === 'BUTTON') {
        event.target.closest('li').remove();
    }
});