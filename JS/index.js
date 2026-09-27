// esta funcion muestra una notificacion cuando los datos se guardaron correctamente
function mostrarExito() {

    // llamo a rosenotify para mostrar la notificacion
    // primero pongo el titulo, despues el mensaje y al final el tipo
    RoseNotify.mostrar(
        "Datos guardados",
        "El registro se realizó correctamente.",
        "exito"
    );

}


// esta funcion muestra una notificacion cuando ocurre un error
function mostrarError() {

    // llamo a rosenotify y le paso los datos que quiero mostrar
    RoseNotify.mostrar(
        "Error de registro",
        "Faltan datos por completar.",
        "error"
    );

}


// esta funcion muestra una notificacion de advertencia
function mostrarAdvertencia() {

    // uso rosenotify para mostrar un aviso antes de continuar
    RoseNotify.mostrar(
        "¡Cuidado!",
        "Verifica tus datos antes de continuar.",
        "advertencia"
    );

}


// esta funcion muestra una notificacion informativa
function mostrarInformacion() {

    // llamo a rosenotify para mostrar informacion al usuario
    RoseNotify.mostrar(
        "Nuevo mensaje",
        "Tienes una nueva notificación.",
        "informacion"
    );

}