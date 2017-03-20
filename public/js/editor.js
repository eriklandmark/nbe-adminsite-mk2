/**
 * Created by erikl on 2017-03-20.
 */
var open_editor_tab = "about";

document.addEventListener("keydown", function(e) {
    if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
        if (document.getElementById("area_editor").style.display == "flex") {
            saveSiteInfo(open_editor_tab, 'ta_' + open_editor_tab);
            e.preventDefault();
        }
    }
}, false);

function saveSiteInfo(name_id, ta_id) {
    var texteditor = document.getElementById(ta_id);
    var data = new FormData();
    data.append("name_id", name_id);
    data.append("text", textToHTML(texteditor.value));
    newServerCall("/save-site-text", data, function (response) {
        if (response == "done") {
            msg("Sidan " + getSwedishName(open_editor_tab) + " har sparats!");
        }
    });
}

function updateTextEditor(name_id, ta_id) {
    var data = new FormData();
    data.append("name_id", name_id);
    newServerCall("/update-text-editor", data, function (response) {
        var texteditor = document.getElementById(ta_id);
        texteditor.value = response;
    });
}

function getSwedishName(name) {
    switch (name) {
        case "about": return "Om Oss";
        case "history": return "Historia";
        case "project": return "Projekt";
        case "contact": return "Kontakt";
        default: return "Wrong Name!";
    }
}

function textToHTML(text) {
    text = text.replaceAll("\n", "<br>");
    text = text.replaceAll("<script", "");
    text = text.replaceAll("</script>", "");
    return text;
}

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};