function clickHandler(e) {
    chrome.extension.sendMessage({directive: "popup-click"}, function(response) {
        this.close(); // close the popup when the background finishes processing request
    });
};

function Reload(){
    /* Este procedmiento llama y ejecuta el codigo de script.js */
    chrome.tabs.getSelected(null, function(tab) {
        chrome.tabs.executeScript(tab.id, {file: "js/script.js"});
    });
};

/* Este evento permite tomar los elementos del DOM en Index.html*/
document.addEventListener('DOMContentLoaded', function() {

    /* Guardamos el boton start */
    var CheckStartButton = document.getElementById('start');
    var CheckStopButton = document.getElementById('stop');
    var TimeRefresh = document.getElementById('time-refresh');

    /* creamos el evento si se clickea el boton start*/
    CheckStartButton.addEventListener('click', function() {
        if (TimeRefresh.value < 1) {
            alert("Ingreso Erroneo");
        } else {
            setInterval(function(){Reload()}, TimeRefresh.value*1000);
        };
    }, false);

    /* creamos el evento si se clickea el boton false*/
    CheckStopButton.addEventListener('click', function() {
        clickHandler();
    }, false);

}, false);

