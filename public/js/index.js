function login() {
    var email_field = document.getElementById("email_field");
    var password_field = document.getElementById("password_field");
    if (email_field.value == "" || password_field.value == "") {
        error("Du måste fylla i båda fälten nedan för att logga in!");
    } else {
        window.open("main_page.html","_self")
    }
}