const input = document.getElementById('task-input')
const addBtn = document.getElementById('submit-btn')
const clearBtn = document.getElementById('clear-btn')
const itemTemplate = document.getElementById('item-template')
const taskList = document.querySelector('ul')

console.log(input)

const createTask = function () {
    const newTask = itemTemplate.content.cloneNode(true)
    const paragraph = newTask.querySelector('.paragraph')
    const doneBtn = newTask.querySelector('button')
    taskList.append(newTask)
    paragraph.textContent = `${taskList.childElementCount}. ${input.value}`
    input.value = ''
    doneBtn.addEventListener('click',() => {
        const p = doneBtn.closest('li')
        p.parentElement.removeChild(p)
        updateText()
    })
}

const updateText = function () {
    let i = 0
    for (li of taskList.children) {
        i++
        const paragraph = li.querySelector('.paragraph')
        array = paragraph.textContent.split('.')
        paragraph.textContent = `${i}. ${array.splice(1)}`
    }
}

const clearList = function () {
    taskList.innerHTML = ''
}

addBtn.addEventListener('click',createTask)
clearBtn.addEventListener('click',clearList)