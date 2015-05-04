var Slack = require('node-slackr');
var slack = new Slack('https://hooks.slack.com/services/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');

messages = {
    text: "Prueba Udacity",
    channel: "#general",
    username: "serch--project-bot",
    icon_url: "https://cdn4.iconfinder.com/data/icons/simplicio/128x128/folder_search.png"
}



function clickHandler(e) {
    chrome.extension.sendMessage({directive: "popup-click"}, function(response) {
        this.close(); // close the popup when the background finishes processing request
    });
}


function Reload(){
    chrome.tabs.getSelected(null, function(tab) {
        chrome.tabs.executeScript(tab.id, {file: "js/script.js"});
    });
};

/* Este evento permite tomar los elementos del DOM en Index.htmlm */
document.addEventListener('DOMContentLoaded', function() {

    /* Guardamos el boton start */
    var CheckStartButton = document.getElementById('start');
    var CheckStopButton = document.getElementById('stop');
    var TimeRefresh = document.getElementById('time-refresh');
    /* creamos el evento si se clickea el boton start*/

    CheckStartButton.addEventListener('click', function() {
        if (TimeRefresh.value < 1) {
            slack.notify(messages);
            alert("Porfavor ingrese segundos mayores a 0");
        } else {
            setInterval(function(){Reload()}, TimeRefresh.value*1000);
        };
    }, false);

    CheckStopButton.addEventListener('click', function() {
        clickHandler();
    }, false);

}, false);

