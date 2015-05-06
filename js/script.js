function AlertSlack() {
    var urlSlack = "https://slack.com/api/chat.postMessage?token=xoxp-2715349875-2952772808-4748588007-7dbb57&channel=C02M1A9SF&text=Prueba&username=Udacity%20Bot&icon_url=https%3A%2F%2Fslack.com%2Fimg%2Ficons%2Fapp-57.png&icon_emoji=%3Atada%3A&pretty=1"
    $.ajax({
        url : urlSlack + "&callback=?",
        type : "POST",
        success : function(parsed_json) {
            console.log(parsed_json);
        }
    });
    /*
    var ventana = window.open("https://slack.com/api/chat.postMessage?token=xoxp-2715349875-2952772808-4748588007-7dbb57&channel=C02M1A9SF&text=Prueba&username=Udacity%20Bot&icon_url=https%3A%2F%2Fslack.com%2Fimg%2Ficons%2Fapp-57.png&icon_emoji=%3Atada%3A&pretty=1","nom_page", "features")
    ventana.close();*/
};


function SearchProject(NumberTable){
    /* Creo un arreglo con los botones de nuevo proyecto */
    var button = tables[NumberTable].getElementsByClassName('btn');

    if (button.length >0) { /*Verificar si el arreglo tiene botones*/
        for (var i = 0; i < button.length; i++) {
            button[i].click(); /* Da click a los botones de los proyectos*/
            if( $('.modal-dialog').is(":visible") ){
                /* Da click en la alerta de peridida del proyecto */
                var popup = document.getElementsByClassName("hanging-close")
            }else{
                /* regresa al Dachboard para seguir buscando proyectos */
                setTimeout(function(){window.history.back()},1000); 
            };
        };
    } else { /* Si no hay botones de proyectos recarga */
        AlertSlack();
        window.location.reload();
    };
};

/* permite que la app siga corriendo */
try {
    /* Seleccionamos las tablas de proyectos */
    var tables = document.getElementsByClassName("dashboard table borderless");

    /* verifico las tablas existentes */
    if (tables.length > 1) {
        /* Si hay dos solo uso la tab de proyectos nuevos */
        SearchProject(1);
    } else {
        /* Solo envio la tabla de nuevos proyectos porque no
        exista la de los review que se estan realizando */
        SearchProject(0);
    };
} catch(err) {
    /* En caso de error recargo la pagina */
    window.location.reload();
};
