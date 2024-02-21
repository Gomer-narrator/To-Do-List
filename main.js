const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
    if(inputBox.value === '') {
        alert('Please enter a task');
    } else {
        const li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }

    inputBox.value = '';
    saveData()
}

listContainer.addEventListener('click', (e) => {
    if(e.target.tagName === 'LI') {
        //  переключает (добавляет или удаляет) класс CSS 'checked' для элемента
        e.target.classList.toggle('checked');
        saveData()
    } else if(e.target.tagName === 'SPAN') {
        //  удаляет родительский элемент (или контейнер)
        e.target.parentElement.remove()
        saveData()
    }
}, false)

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML)
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem('data');
}
showTask()