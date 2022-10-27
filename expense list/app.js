const nameInput = document.getElementById('name')
const dateInput = document.getElementById('date')
const amountInput = document.getElementById('item-amount')
const table = document.querySelector('table')
const template = document.getElementById('row')
const btnTemplate = document.getElementById('delete')
const addBtn = document.getElementById('add')
const total = document.getElementById('total')
const clearBtn = document.getElementById('clear-list-btn')

const addExpenseHandler = () => {
    const name = nameInput.value
    const date = dateInput.value
    const price = amountInput.value
    if (isNaN.price || price === '') {
        alert('Insert proper amount!')
        return
    }
    const row = template.content.cloneNode(true)
    const btnCell = row.querySelectorAll('th')[3]
    const delButton = btnTemplate.content.cloneNode(true)
    row.querySelectorAll('th')[0].textContent = name
    row.querySelectorAll('th')[1].textContent = date
    row.querySelectorAll('th')[2].textContent = price
    btnCell.appendChild(delButton)
    deleteBtn = btnCell.querySelector('button')
    deleteBtn.addEventListener('click',(e) => {
        const row = e.target.closest('tbody')
        row.parentElement.removeChild(row)
        updateTotalAmount()
    })
    table.appendChild(row)
    nameInput.value = ''
    dateInput.value = ''
    amountInput.value = ''
    updateTotalAmount()
}

const updateTotalAmount = () => {
    let totalAmount = 0
    const tableBody = document.querySelectorAll('tbody')
    for (row of tableBody) {
        const cells = row.querySelectorAll('th')
        totalAmount += +cells[2].textContent
    }
    total.textContent = `${totalAmount}$`
}

const clearList = () => {
    const rows = document.querySelectorAll('tbody')
    for (row of rows) {
        row.parentElement.removeChild(row)
    }
    total.textContent = '0$'
}

addBtn.addEventListener('click',addExpenseHandler)
clearBtn.addEventListener('click',clearList)