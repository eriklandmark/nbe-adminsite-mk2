function newAjaxCall(url, method,  data, onSuccess) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (this.readyState == 4) {
            if ( this.status == 200) {
                onSuccess(this.responseText);
            } else {
                console.log("Error for new ajax call: '" + url + "'");
            }
        }
    };

    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    request.open(method.toLocaleUpperCase(), "http://" + url, true);
    if (data == null) {
        request.send();
    } else {
        request.send(data);
    }
}

function newServerCall(url, data, onSuccess) {
    var request = new XMLHttpRequest();
    var newData = new FormData();
    if (data != null) {
        newData = data;
    }
    newData.append("requesting_user", user_email);

    request.onreadystatechange = function() {
        if (this.readyState == 4) {
            if ( this.status == 200) {
                onSuccess(this.responseText);
            } else {
                console.log("Error for server call: '" + url + "'");
            }
        }
    };

    request.open("POST", url + "?n=" + Date.now(), true);
    request.send(newData);
}

function newIndexServerCall(url, data, onSuccess) {
    var request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if (this.readyState == 4) {
            if ( this.status == 200) {
                onSuccess(this.responseText);
            } else {
                console.log("Error for server call: '" + url + "'");
            }
        }
    };

    request.open("POST", url + "?n=" + Date.now(), true);
    if (data != null) {
        request.send(data);
    }else {
        request.send();
    }
}

function sendFileToServer(url, fileID, onSuccess) {
    var data = new FormData();
    var file = document.getElementById(fileID).files[0];

    var request = new XMLHttpRequest();
    data.append("fileInput", file);
    request.onreadystatechange = function() {
        if (this.readyState == 4) {
            if ( this.status == 200) {
                onSuccess(this.responseText);
            } else {
                console.log("Error for transfering file: '" + url + "'");
            }
        }
    };
    request.setRequestHeader("Content-type", file.type);
    request.open("POST", url + '?_=' + new Date().getTime(), true);
    if (data == null) {
        request.send();
    } else {
        request.send(data);
    }
}