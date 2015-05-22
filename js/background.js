var tabId = 0 /*Guardara el id del tab de udacity*/
var ValueFirstTime = true /*Verifica si es primera vez que se ejecuta el script*/

function Reload(FistTime){
    /* Este procedmiento llama y ejecuta el codigo de script.js */
    if (FistTime === true) {
        chrome.tabs.getSelected(null, function(tab) {
            tabId = tab.id
            ValueFirstTime = false
            chrome.tabs.executeScript(tab.id, {file: "js/script.js"});
        });
    } else if (FistTime === false){ /*Si ya no es la primera vez 
    mantiene ejecutando el script en el tab que se ejecuto por primera vez */
        chrome.tabs.executeScript(tabId, {file: "js/script.js"});
    };
};

/*Funcion que permite parar el plugin al cerrar el tab*/
function Stop(CloseTabID) {
    if (CloseTabID === tabId) {
        alert("Search Projects Stop")
        tabId = 0
        ValueFirstTime = true
        clearInterval(SearchProjects);
    }
}


/* Chrome commands permite tomar los comandos mandados desde el teclado
a chrome */
chrome.commands.onCommand.addListener(function(command) {
    if(command == "Play"){
        alert("Search Projects Start")
        SearchProjects = setInterval(function(){Reload(ValueFirstTime)}, 3000);
    }else if(command == "Stop"){
        //stop function here
        alert("Search Projects Stop")
        tabId = 0
        ValueFirstTime = true
        clearInterval(SearchProjects);
    }
 });

/* Metodo que controla las tab que se cierran*/
chrome.tabs.onRemoved.addListener(function(CloseTabID) {
    Stop(CloseTabID);
});