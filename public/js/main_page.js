var isPort = false;

var user_email = "";
var user_theme = "1";
var user_level = "1";
var access_token = "";

function createUser(m, t, l, a) {
    user_email = m.toString();
    user_theme = t.toString();
    user_level = l.toString();
    access_token = a.toString();
}

function area_tab_height() {
    var h = document.getElementById("nav_logo_div").offsetHeight;
    var h2 = document.getElementsByClassName("nav_item")[0].offsetHeight;
    var tabs_titles = document.getElementsByClassName("area_tabs_title");
    for (var i = 0; i < tabs_titles.length; i++) {
        tabs_titles[i].style.height = h.toString() + "px";
    }

    var editor_tabs = document.getElementsByClassName("area_tab_item_editor");
    for (var i = 0; i < editor_tabs.length; i++) {
        editor_tabs[i].style.height = h2.toString() + "px";
    }
}

if (window.matchMedia("(min-device-width: 415px)").matches || window.matchMedia("(max-device-width: 414) and (orientation: landscape)").matches ) {
    window.addEventListener("resize", area_tab_height);
    window.addEventListener("load", area_tab_height);
}

window.addEventListener("resize", function () {
    if (window.matchMedia("(min-device-width: 415px) and (max-resolution: 2dppx)").matches || window.matchMedia("(max-device-height: 414px) and (orientation: landscape)").matches) {
        document.getElementById("nav").style.display = "flex";
        document.getElementById("menu_dimmer").style.display = "none";
        isPort = false;
    } else {
        if (!isPort) {
            document.getElementById("nav").style.display = "none";
            document.getElementById("menu_dimmer").style.display = "none";
            isPort = true;
        }
    }
});

window.addEventListener("load", function () {
    if (window.matchMedia("(max-device-width: 414px) and (orientation: portrait)").matches) {
        isPort = true;
    }
});

function openPage(event, area, tab_button_id, tab_content_id) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName(tab_content_id);
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName(tab_button_id);
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active_button", "");
    }
    document.getElementById(area).style.display = "flex";
    event.currentTarget.className += " active_button";

    if (area == "area_omoss") {
        open_editor_tab = "about";
    } else if (area == "area_historia") {
        open_editor_tab = "history";
    } else if (area == "area_projekt") {
        open_editor_tab = "project";
    } else if (area == "area_kontakt") {
        open_editor_tab = "contact";
    }

    if (tab_button_id == "nav_item" && window.matchMedia("(max-device-width: 415px) and (orientation: portrait)").matches) {
        document.getElementById("nav").style.display = "none";
        document.getElementById("menu_dimmer").style.display = "none";

        var nav_title = document.getElementById("mobile_nav_title");

        if (area == "area_statistik") {
            nav_title.innerHTML = "Statistik";
        } else if (area == "area_files") {
            nav_title.innerHTML = "Filer";
        } else if (area == "area_editor") {
            nav_title.innerHTML = "Editor";
        } else if (area == "area_user") {
            nav_title.innerHTML = "Användar Inst.";
        }
    }
}