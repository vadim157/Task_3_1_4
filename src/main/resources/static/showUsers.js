const url = 'http://localhost:8080/api/users'
const container = document.querySelector('tbody')
let result = ''

const showUsers = (users) => {
    users.forEach(user => {
        result += `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.surname}</td>
                <td>${user.email}</td>
                <td>${user.username}</td>
                <td>${user.roles?.map(roles => roles.name === 'ROLE_USER' ? ' USER' : ' ADMIN')}</td>
                <td></td>
                <td></td></tr>`



        //     <td><a class="btnEdit btn btn-secondary" id="editButton">Edit</a></td>
        //     <td><a class="btn btn-danger" id="deleteButton">Delete</a></td>
        // </tr>`
    })
    container.innerHTML = result
}

fetch(url)
    .then(response => response.json())
    // .then(data => console.log(data))
    .then(data => showUsers(data))
    .catch(error => console.log(error))


//////////вывод////
