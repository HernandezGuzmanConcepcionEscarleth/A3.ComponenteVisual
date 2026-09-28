// esta funcion muestra una notificacion
// cuando los datos se guardaron correctamente
function mostrarExito() {

    RoseNotify.mostrar(
        "Datos guardados",
        "El registro se realizó correctamente.",
        "exito",
        "btnExito"
    );

}


// esta funcion muestra una notificacion
// cuando ocurre un error
function mostrarError() {

    RoseNotify.mostrar(
        "Error de registro",
        "Faltan datos por completar.",
        "error",
        "btnError"
    );

}


// esta funcion muestra una notificacion
// de advertencia
function mostrarAdvertencia() {

    RoseNotify.mostrar(
        "¡Cuidado!",
        "Verifica tus datos antes de continuar.",
        "advertencia",
        "btnAdvertencia"
    );

}


// esta funcion muestra una notificacion
// informativa
function mostrarInformacion() {

    RoseNotify.mostrar(
        "Nuevo mensaje",
        "Tienes una nueva notificación.",
        "informacion",
        "btnInformacion"
    );

}