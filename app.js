const formAddList = document.querySelector('.form-add-todo')
const listContainer = document.querySelector('.list-container')
const inputSearchInList = document.querySelector('.form-search input')

formAddList.addEventListener('submit', event => {
    event.preventDefault()
    
    const inputValue = event.target.add.value.trim()

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

    event.target.reset()
})

listContainer.addEventListener('click', event => {
    const clickedElement = event.target
    
    const dataTrashValue = clickedElement.dataset.trash
    const trashItemInList = document.querySelector(`[data-list="${dataTrashValue}"]`)

    if(dataTrashValue) {
        trashItemInList.remove()
    }
    
})

inputSearchInList.addEventListener('input', event => {
    const inputValueSearch = event.target.value.trim().toLowerCase()
    const completeList = Array.from(listContainer.children)

    completeList.filter((itemList => {
        if(!itemList.textContent.toLocaleLowerCase().includes(inputValueSearch)) {
            console.log(itemList)
            itemList.classList.add('hidden')
            itemList.classList.remove('d-flex')
        }else {
            itemList.classList.add('d-flex')
            itemList.classList.remove('hidden')
        }

    }))

})