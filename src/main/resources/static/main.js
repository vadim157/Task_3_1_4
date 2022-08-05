$('document').ready(function () {

    $('.table .btn-secondary').on('click', function(event){

        event.preventDefault();

        var href= $(this).attr('href');

        $.get(href, function (user,status){
            $('#idEdit').val(user.id);
            $('#nameEdit').val(user.name);
            $('#surnameEdit').val(user.surname);
            $('#emailEdit').val(user.email);
            $('#usernameEdit').val(user.username);
            $('#passwordEdit').val(user.password);
            $('#rolesEdit').val(user.roles.id);
        });

        $('#editModal').modal();
    });

    $('.table #deleteButton').on('click', function(event){

        event.preventDefault();

        var href= $(this).attr('href');

        $.get(href, function (user,status){
            $('#idDelete').val(user.id);
            $('#nameDelete').val(user.name);
            $('#surnameDelete').val(user.surname);
            $('#emailDelete').val(user.email);
            $('#usernameDelete').val(user.username);
            $('#passwordDelete').val(user.password);
            $('#rolesDelete').val(user.roles.id);
        });

        $('#deleteModal').modal();
    });


});


