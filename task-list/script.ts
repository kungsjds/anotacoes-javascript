const input = document.querySelector('#inputTask') as HTMLInputElement;
const ulList = document.querySelector('.list') as HTMLUListElement;

input.addEventListener('keyup', createList);

function createList(e: KeyboardEvent) {

    if (e.code === 'Enter' || e.code === 'NumpadEnter'){

        const taskList: HTMLLIElement = document.createElement('li');
        const task: string = input.value;

        // taskList.appendChild(document.createTextNode(task));
        taskList.innerHTML = task;

        ulList.appendChild(taskList);

        input.value = '';
    }

}