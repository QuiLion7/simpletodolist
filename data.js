const load = () => {
    let data = JSON.parse(localStorage.getItem('todoList'))
    if (!Array.isArray(data)) return

    data.forEach(item => createItemList(item))
}

const save = (todo) => {
    let data = JSON.parse(localStorage.getItem('todoList'))
    if (!Array.isArray(data)) data = []

    data.push(todo)
    localStorage.setItem('todoList', JSON.stringify(data))
}

const remove = (todo) => {
    let data = JSON.parse(localStorage.getItem('todoList'))
    if (!Array.isArray(data)) return

    data.splice(data.indexOf(todo), 1)
    localStorage.setItem('todoList', JSON.stringify(data))
}

window.addEventListener('load', load)