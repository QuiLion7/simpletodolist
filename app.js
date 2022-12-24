const formAddList = document.querySelector('.form-add-todo')
const listContainer = document.querySelector('.list-container')
// const formSearch = document.querySelector('.form-search')
const inputSearchInList = document.querySelector('.form-search input')

const createItemList = inputValue => {
    if(inputValue.length) {
        listContainer.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center" data-list="${inputValue}">
                <span>${inputValue}</span>
                <div class="icons d-flex justify-content-between align-items-center">
                    <i class="fa-regular fa-trash-can" data-trash="${inputValue}"></i>
                </div>
            </li>
        `
    }
}

const removeItemList = (valueDataTrash) => {
    const itemInList = document.querySelector(`[data-list="${valueDataTrash}"]`)

    if(valueDataTrash) {
        itemInList.remove()
        remove(valueDataTrash)
    }
}

const filterCompleteList = (completeList, inputValueSearch) => {
    completeList.filter((itemInList => {
        const findList = itemInList.textContent.toLocaleLowerCase().includes(inputValueSearch)
        const show = 'd-flex'
        const hidden = 'hidden'
        
        !findList ? showItemInList(itemInList, hidden, show) : showItemInList(itemInList, show, hidden)
    }))
}

const showItemInList = (itemInList, show, hidden) => {
    itemInList.classList.add(show)
    itemInList.classList.remove(hidden)
}

formAddList.addEventListener('submit', event => {
    event.preventDefault()
    
    const inputValue = event.target.add.value.trim()

    createItemList(inputValue)
    save(inputValue)

    event.target.reset()
})

listContainer.addEventListener('click', event => {
    const clickedElement = event.target
    const valueDataTrash = clickedElement.dataset.trash

    removeItemList(valueDataTrash)
})

// formSearch.addEventListener('submit', event => {
//     event.preventDefault()
// })

inputSearchInList.addEventListener('input', event => {
    const inputValueSearch = event.target.value.trim().toLowerCase()
    const completeList = Array.from(listContainer.children)

    filterCompleteList(completeList, inputValueSearch)
})