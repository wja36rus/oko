$(document).ready(function () {
    $('#send-btn').click(function (e) {
        e.preventDefault();
        var name = $('#form-name').val();
        var mail = $('#form-mail').val();
        var tel = $('#form-tel').val();
        var check = $('#check').prop("checked");

        const reg = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (!name) {
            $("#form-error").empty().text("Введите имя").addClass('text-danger');
            $('#form-name').css("border-bottom", "2px solid red");
        } else if (!mail) {
            $("#form-error").empty().text("Введите электронную почту").addClass('text-danger');
            $('#form-name').css("border-bottom", "1px solid black");
            $('#form-mail').css("border-bottom", "2px solid red");
        } else if (!reg.test(mail)) {
            $("#form-error").empty().text("Введите корректный адрес почты").addClass('text-danger');
            $('#form-name').css("border-bottom", "1px solid black");
            $('#form-mail').css("border-bottom", "2px solid red");
        } else if (!tel) {
            $("#form-error").empty().text("Введите телефон").addClass('text-danger');
            $('#form-name').css("border-bottom", "1px solid black");
            $('#form-mail').css("border-bottom", "1px solid black");
            $('#form-tel').css("border-bottom", "2px solid red");
        } else if (!check) {
            $("#form-error").empty().text("Требуется согласие на обработку персональных данных").addClass('text-danger');
            $('#form-name').css("border-bottom", "1px solid black");
            $('#form-mail').css("border-bottom", "1px solid black");
            $('#form-tel').css("border-bottom", "1px solid black");
        } else {
            $("#form-error").empty().removeClass('text-danger').addClass('text-success');
            $('#form-name').css("border-bottom", "1px solid black");
            $('#form-mail').css("border-bottom", "1px solid black");
            $('#form-tel').css("border-bottom", "1px solid black");


$("#form-error").empty().text("Сообщение отправлено");
                        setTimeout(() => {
                            $("#form-error").empty().removeClass('text-success');
                            $('#form-name').val('');
                            $('#form-mail').val('');
                            $('#form-tel').val('');
                        }, 2500);

                        /*
            $.ajax({
                type: "post",
                url: "send.php",
                data: {
                    name: name,
                    mail: mail,
                    tel: tel
                },
                dataType: "text",
                success: function (response) {
                    if (response === "success") {
                        $("#form-error").empty().text("Сообщение отправлено");
                        setTimeout(() => {
                            $("#form-error").empty().removeClass('text-success');
                            $('#form-name').val('');
                            $('#form-mail').val('');
                            $('#form-tel').val('');
                        }, 2500);
                    } else {
                        $("#form-error").empty().removeClass('text-success').adddClass('text-danger').text("Ошибка отправки сообщения");
                    }
                }
            });
            */
        }
    });

    $('#send-btns').click(function (e) {
        e.preventDefault();
        var name = $('#form-names').val();
        var mail = $('#form-mails').val();
        var tel = $('#form-tels').val();
        var check = $('#checks').prop("checked");

        const reg = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (!name) {
            $("#form-errors").empty().text("Введите имя").addClass('text-danger');
            $('#form-names').css("border-bottom", "2px solid red");
        } else if (!mail) {
            $("#form-errors").empty().text("Введите электронную почту").addClass('text-danger');
            $('#form-names').css("border-bottom", "1px solid white");
            $('#form-mails').css("border-bottom", "2px solid red");
        } else if (!reg.test(mail)) {
            $("#form-errors").empty().text("Введите корректный адрес почты").addClass('text-danger');
            $('#form-names').css("border-bottom", "1px solid white");
            $('#form-mails').css("border-bottom", "2px solid red");
        } else if (!tel) {
            $("#form-errors").empty().text("Введите телефон").addClass('text-danger');
            $('#form-names').css("border-bottom", "1px solid white");
            $('#form-mails').css("border-bottom", "1px solid white");
            $('#form-tels').css("border-bottom", "2px solid red");
        } else if (!check) {
            $("#form-errors").empty().text("Требуется согласие на обработку персональных данных").addClass('text-danger');
            $('#form-names').css("border-bottom", "1px solid white");
            $('#form-mails').css("border-bottom", "1px solid white");
            $('#form-tels').css("border-bottom", "1px solid white");
        } else {
            $("#form-errors").empty().removeClass('text-danger').addClass('text-white');
            $('#form-names').css("border-bottom", "1px solid white");
            $('#form-mails').css("border-bottom", "1px solid white");
            $('#form-tels').css("border-bottom", "1px solid white");

            $("#form-errors").empty().text("Сообщение отправлено");
                        setTimeout(() => {
                            $("#form-errors").empty().removeClass('text-white');
                            $('#form-names').val('');
                            $('#form-mails').val('');
                            $('#form-tels').val('');
                        }, 2500);

/*
            $.ajax({
                type: "post",
                url: "send.php",
                data: {
                    name: name,
                    mail: mail,
                    tel: tel
                },
                dataType: "text",
                success: function (response) {
                    if (response === "success") {
                        $("#form-errors").empty().text("Сообщение отправлено");
                        setTimeout(() => {
                            $("#form-errors").empty().removeClass('text-white');
                            $('#form-names').val('');
                            $('#form-mails').val('');
                            $('#form-tels').val('');
                        }, 2500);
                    } else {
                        $("#form-errors").empty().removeClass('text-success').adddClass('text-danger').text("Ошибка отправки сообщения");
                    }
                }
            });
            */
        }
    });
});