// esta funcion muestra una notificacion cuando algo salio correctamente
function mostrarExito() {

    // llamo a rosenotify para mostrar la notificacion
    // primero pongo el titulo, despues el mensaje y al final el tipo
    RoseNotify.mostrar(
        "¡Todo salió bien!",
        "La información se guardó correctamente.",
        "exito"
    );

}


// esta funcion muestra una notificacion cuando ocurre un error
function mostrarError() {

    // llamo a rosenotify y le paso los datos que quiero mostrar
    RoseNotify.mostrar(
        "Ocurrió un error",
        "No fue posible completar la operación.",
        "error",
        {
            // aqui indico que quiero que aparezca arriba a la izquierda
            posicion: "superior-izquierda"
        }
    );

}


// esta funcion muestra una notificacion de advertencia
function mostrarAdvertencia() {

    // uso rosenotify para mostrar el titulo, mensaje y tipo de notificacion
    RoseNotify.mostrar(
        "Ten cuidado",
        "Revisa la información antes de continuar.",
        "advertencia",
        {
            // aqui cambio la duracion a 6000 milisegundos que son 6 segundos
            duracion: 6000
        }
    );

}


// esta funcion muestra una notificacion informativa
function mostrarInformacion() {

    // llamo a rosenotify para mostrar la informacion
    RoseNotify.mostrar(
        "Información",
        "Hay una nueva actualización disponible.",
        "informacion",
        {
            // aqui hago que la notificacion aparezca abajo a la derecha
            posicion: "inferior-derecha"
        }
    );

}
