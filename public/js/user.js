window.addEventListener("load", function () {

});

function printAllUsers(user, lev, thisUser) {
    var users = user;
    var levels = lev;

    var table = document.getElementById("user_table");

    table.innerHTML = "<tbody id='tBody'><tr> <td class='users_table_names'><b>Email</b></td> <td class='users_table_levels'><b>Level</b></td> <td class='users_table_actions'><b>Ändra</b></td> </tr> </tbody>";

    for (var i = 0; i < users.length; i++) {
        var new_user = document.createElement('tr');
        var user_name = document.createElement("td");
        var user_level = document.createElement("td");
        var user_action = document.createElement("td");

        user_name.className = "users_table_names";
        user_level.className = "users_table_levels";
        user_action.className = "users_table_actions";

        var name = document.createElement('p');
        name.className = "user_table_pg";
        name.innerHTML = users[i];

        var level = document.createElement('p');
        level.className = "user_table_pg";
        level.innerHTML = levels[i];

        var chgPassAction = document.createElement("a");
        var imgChgPass = document.createElement("img");
        chgPassAction.setAttribute("href", "javascript:void(0)");
        chgPassAction.setAttribute("onclick", "openPasswordBox('" + users[i] + "')");
        imgChgPass.setAttribute("src", "/icons/chg_pass_icon_white.svg");
        imgChgPass.className = "chg_pass_user_icon";
        chgPassAction.appendChild(imgChgPass);

        var deleteAction = document.createElement("a");
        var imgDelete = document.createElement("img");
        deleteAction.setAttribute("href", "javascript:void(0)");
        imgDelete.setAttribute("src", "/icons/delete_icon_white.svg");
        imgDelete.className = "delete_user_icon";
        deleteAction.setAttribute("onclick", "deleteUser('" + users[i] + "', ' " + thisUser + "')");
        deleteAction.appendChild(imgDelete);

        user_level.appendChild(level);
        user_name.appendChild(name);
        user_action.appendChild(chgPassAction);
        if (thisUser != users[i] ) {
            user_action.appendChild(deleteAction);
        }
        new_user.appendChild(user_name);
        new_user.appendChild(user_level);
        new_user.appendChild(user_action);
        table.appendChild(new_user);
    }
}

function deleteUser(username, thisUser) {
    var data = new FormData();
    data.append("username", username);

    newServerCall("/delete-user", data, function () {
        newServerCall("/get-user-db", null, function (textResponse) {
            var userinfo = textResponse.split(':');
            printAllUsers(userinfo[0].split(','), userinfo[1].split(','), thisUser);

        });
    });
}

function openPasswordBox(user) {
    /*var data = new FormData();
    data.append("user", user);

    var w = 300;
    var h = 210;

    var dualScreenLeft = window.screenLeft;
    var dualScreenTop = window.screenTop;

    var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    var left = ((width / 2) - (w / 2)) + dualScreenLeft;
    var top = ((height / 2) - (h / 2)) + dualScreenTop;

    window.open('', 'TheWindow', "width=" + w + ",height=" + h + ",top=" + top + ",left=" + left);
    */
    document.getElementById("form_dimmer").style.display = "flex";
    document.getElementById("change_password_form").style.display = "flex";
    document.getElementById("add_user_email_field").value = "";
    document.getElementById("add_user_pass_field").value = "";
    document.getElementById("change_password_form_title").innerHTML = "Ändra " + user + "'s lösenord";
}

function closePasswordBox() {
    document.getElementById("form_dimmer").style.display = "none";
    document.getElementById("change_password_form").style.display = "none";
}

function openAddUserForm() {
    document.getElementById("form_dimmer").style.display = "flex";
    document.getElementById("add_user_form").style.display = "flex";
    document.getElementById("add_user_email_field").value = "";
    document.getElementById("add_user_pass_field").value = "";
}

function closeAddUserForm() {
    document.getElementById("form_dimmer").style.display = "none";
    document.getElementById("add_user_form").style.display = "none";
}

function addUser() {
    
}