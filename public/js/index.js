function login() {
    var email_field = document.getElementById("email_field");
    var password_field = document.getElementById("password_field");
    if (email_field.value == "" || password_field.value == "") {
        error("Du måste fylla i båda fälten nedan för att logga in!");
    } else {
        newIndexServerCall("/check-user", new FormData(document.getElementById("login_form")), function (response) {
           if (response == "false") {
               error("Lösenord eller email är fel!");
           } else {
               document.getElementById("login_form").submit();
           }
        });
    }
}