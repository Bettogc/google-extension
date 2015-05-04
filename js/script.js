function SearchProject(NumberTable){
    var button = tables[NumberTable].getElementsByClassName('btn');
    if (button.length >0) { /*Verificar si el arreglo tiene botones*/
        for (var i = 0; i < button.length; i++) {
            console.log(i);
            console.log(button[i]);
            button[i].click();
            getElementsByClassName(".hanging-close").click();
            setTimeout(function(){window.history.back()}, 1000);
        };
    } else {
        window.location.reload();
    };
};

try {
    var tables = document.getElementsByClassName("dashboard table borderless");
    if (tables.length > 1) {
        SearchProject(1);
    } else {
        SearchProject(0);
    };
} catch(err) {
    window.location.reload();
};
