const delForm = new bootstrap.Modal(document.getElementById('deleteModal'))
const deleteModal = document.querySelector('.delete-form')

const one = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}

let idFormDel = 0;
one(document, 'click','.btnDelete', e => {
    console.log('Delete')
    const lineDel = e.target.parentNode.parentNode
    idFormDel = lineDel.children[0].innerHTML
    const nameFormDel = lineDel.children[1].innerHTML
    const surnameFormDel = lineDel.children[2].innerHTML
    const emailFormDel = lineDel.children[3].innerHTML
    const usernameFormDel = lineDel.children[4].innerHTML

    idDelete.value = idFormDel
    nameDelete.value = nameFormDel
    surnameDelete.value = surnameFormDel
    emailDelete.value = emailFormDel
    usernameDelete.value = usernameFormDel

    delForm.show()

})

deleteModal.addEventListener('submit',e => {
    e.preventDefault()
    fetch(url+'/'+idFormDel, {
        method: 'DELETE',
    }).then(response => response.json())
        // .then(()=> location.reload())
    delForm.hide()
    location.reload()

})