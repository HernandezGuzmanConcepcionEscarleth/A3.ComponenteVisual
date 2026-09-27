Actividad 3 Componente Visual Librería JavaScript de componentes visuales 
Hernández Guzmán Concepción Escarleth    Programación Web
# Demo en vivo: 
https://github.com/HernandezGuzmanConcepcionEscarleth/A3.ComponenteVisual
# RoseNotify - Componente Visual de Notificaciones

## ¿Qué es RoseNotify?

RoseNotify es un componente visual que realicé utilizando HTML, CSS y JavaScript.

La idea de este componente es poder mostrar notificaciones dentro de una página web de una forma sencilla y sin utilizar frameworks.

Cuenta con cuatro tipos de notificaciones: éxito, error, advertencia e información.

---

## ¿Qué problema resuelve?

En una página web muchas veces necesitamos avisarle al usuario que algo pasó, por ejemplo, que sus datos se guardaron correctamente o que ocurrió algún error.

Normalmente podemos utilizar un `alert()`, pero este aparece como una ventana y no se puede personalizar mucho.

Por eso realicé RoseNotify, para poder mostrar estos mensajes directamente dentro de la página y darles un diseño diferente dependiendo del tipo de mensaje.

Con mi componente puedo:

- mostrar mensajes de éxito, error, advertencia e información.
- cambiar el título y el mensaje.
- cambiar la posición de la notificación.
- cambiar el tiempo que dura en pantalla.

---

## Instalación

Para utilizar RoseNotify en un proyecto web se deben agregar los archivos CSS y JavaScript del componente.

Primero se agrega la hoja de estilos dentro de la etiqueta <head>:

<link rel="stylesheet" href="css/componente.css">

Después se agrega el archivo JavaScript antes de cerrar la etiqueta </body>:

<script src="js/componente.js"></script>

Un ejemplo completo sería:

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>RoseNotify</title>

    <link rel="stylesheet" href="css/componente.css">
</head>

<body>

    <h1>Prueba de RoseNotify</h1>

    <script src="js/componente.js"></script>

</body>

</html>

Uso con ejemplos de código

1. Mostrar una notificación

La función principal de mi componente es:

RoseNotify.mostrar(titulo, mensaje, tipo, opciones);

Con esta función puedo indicar el título de la notificación, el mensaje que quiero mostrar y el tipo de notificación.

Por ejemplo:

RoseNotify.mostrar(
    "¡Todo salió bien!",
    "La información se guardó correctamente.",
    "exito"
);

Esto mostrará una notificación de éxito dentro de la página.

2. Tipos de notificaciones

RoseNotify cuenta con cuatro tipos diferentes de notificaciones.

Éxito

Se utiliza cuando una acción se realizó correctamente.

RoseNotify.mostrar(
    "¡Todo salió bien!",
    "La información se guardó correctamente.",
    "exito"
);

Error

Se utiliza cuando ocurre algún problema.

RoseNotify.mostrar(
    "Ocurrió un error",
    "No fue posible completar la operación.",
    "error"
);

Advertencia

Se utiliza para mostrar un aviso importante al usuario.

RoseNotify.mostrar(
    "Advertencia",
    "Revisa la información antes de continuar.",
    "advertencia"
);

Información

Se utiliza para mostrar información general.

RoseNotify.mostrar(
    "Información",
    "Tienes una nueva notificación.",
    "informacion"
);

3. Personalización de la notificación

También puedo agregar opciones para modificar algunas características de la notificación, como su duración y posición.

Por ejemplo:

RoseNotify.mostrar(
    "Registro completado",
    "Los datos fueron guardados correctamente.",
    "exito",
    {
        duracion: 5000,
        posicion: "superior-derecha"
    }
);

En este caso:

duracion indica cuánto tiempo permanecerá visible la notificación.

posicion indica en qué parte de la pantalla aparecerá.

Si no se especifica una duración, el componente utiliza de manera predeterminada 4000 milisegundos.

4. Funciones de prueba

Para facilitar las pruebas de mi componente también utilicé funciones que muestran cada uno de los tipos de notificación.

function mostrarExito() {
    RoseNotify.mostrar(
        "¡Todo salió bien!",
        "La información se guardó correctamente.",
        "exito"
    );
}

También se pueden utilizar funciones similares para los demás tipos:

mostrarExito();
mostrarError();
mostrarAdvertencia();
mostrarInformacion();

Estas funciones pueden ser llamadas desde botones para comprobar fácilmente el funcionamiento de cada notificación.

## Capturas
Componente Exito:
<img width="2528" height="1150" alt="Captura de pantalla 2026-09-27 163806" src="https://github.com/user-attachments/assets/b787afe4-ade7-490c-8c1b-e23c290e9c72" />

Componente Error:
<img width="2538" height="1212" alt="Captura de pantalla 2026-09-27 163827" src="https://github.com/user-attachments/assets/dae1371c-2783-4b2f-ab26-eac46af96eda" />

Componente Advertencia:
<img width="2530" height="1172" alt="Captura de pantalla 2026-09-27 163842" src="https://github.com/user-attachments/assets/defa4ba0-23d3-4c80-9848-1555cdff807d" />

Componente Información: 
<img width="2560" height="1168" alt="Captura de pantalla 2026-09-27 163857" src="https://github.com/user-attachments/assets/e5e36843-06bc-4173-9194-35dbbeb9e20e" />

Componentes funcionando con distintos mensajes:
<img width="2558" height="1168" alt="Captura de pantalla 2026-09-27 164046" src="https://github.com/user-attachments/assets/ffaf1daa-3f05-4a69-b7a7-71087aa33db1" />









