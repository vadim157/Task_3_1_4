const addPostForm = document.querySelector('.add-post-form');
const nameValue = document.getElementById('nameAdd')
const surnameValue = document.getElementById('surnameAdd')
const emailValue = document.getElementById('emailAdd')
const usernameValue = document.getElementById('usernameAdd')
const passwordValue = document.getElementById('passwordAdd')
const roleValue = document.getElementById('rolesAdd')
const UserOrAdmin = roleValue === 1? 'ROLE_USER':'ROLE_ADMIN'


addPostForm.addEventListener('submit', (e) => {
    e.preventDefault()
console.log(roleValue.value)
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( user = {
            name: nameValue.value,
            surname: surnameValue.value,
            email: emailValue.value,
            username: usernameValue.value,
            password: passwordValue.value,
            roles: [
                {
                    id: roleValue.value,
                    name: UserOrAdmin.value
                }
            ]
        })

    })
        .then(res => res.json())
        .then(data => {
            const dataArr =[];
            dataArr.push(data);
            showUsers(dataArr);
            console.log(user);
        }).then(()=>location.reload())
    e.target.reset();

})