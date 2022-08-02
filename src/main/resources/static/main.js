$('document').ready(function () {

    $('.table .btn').on('click', function(event){

        event.preventDefault();

        var href= $(this).attr('href');

        $.get(href, function (user,status){
            $('#idEdit').val(user.id);
            $('#nameEdit').val(user.name);
            $('#surnameEdit').val(user.surname);
            $('#emailEdit').val(user.email);
            $('#usernameEdit').val(user.username);
            $('#passwordEdit').val(user.password);
        });


        $('#editModal').modal();

    });

})