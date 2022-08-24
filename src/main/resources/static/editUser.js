const edit = new bootstrap.Modal(document.getElementById('editModal'))
const editModal = document.querySelector('.edit-form')
const passwordEditValue = document.getElementById('passwordEdit')
const roleEditValue = document.getElementById('rolesEdit')
const UserOrAdminEdit = roleEditValue === 1? 'ROLE_USER':'ROLE_ADMIN'

const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}

let idForm = 0;
on(document, 'click','.btnEdit', e => {
    const line = e.target.parentNode.parentNode
    idForm = line.children[0].innerHTML
    const nameForm = line.children[1].innerHTML
    const surnameForm = line.children[2].innerHTML
    const emailForm = line.children[3].innerHTML
    const usernameForm = line.children[4].innerHTML
    const rolesForm = line.children[5].innerHTML

    console.log(`${idForm}  ${nameForm} ${surnameForm} ${emailForm} ${usernameForm} `)

    idEdit.value = idForm
    nameEdit.value = nameForm
    surnameEdit.value = surnameForm
    emailEdit.value = emailForm
    usernameEdit.value = usernameForm

    edit.show()

})

editModal.addEventListener('submit',e => {
    e.preventDefault()
    fetch('api/users',{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( user = {
            id:idEdit.value,
            name: nameEdit.value,
            surname: surnameEdit.value,
            email: emailEdit.value,
            username: usernameEdit.value,
            password: passwordEditValue.value,
            roles: [
                {
                    id: roleEditValue.value,
                    name: UserOrAdminEdit.value
                }
            ]
        })

    })
        .then(response => response.json())
        .then( response => location.reload())
    console.log(passwordEditValue)
    edit.hide()

})
