"use strict";
const input = document.querySelector('#inputTask');
const ulList = document.querySelector('.list');
input.addEventListener('keyup', createList);
function createList(e) {
    if (e.code === 'Enter' || e.code === 'NumpadEnter') {
        const taskList = document.createElement('li');
        const task = input.value;
        taskList.innerHTML = task;
        ulList.appendChild(taskList);
        input.value = '';
    }
}
