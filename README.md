Actividad 3 Componente Visual Librería JavaScript de componentes visuales 

# Hernández Guzmán Concepción Escarleth    Programación Web
# Demo en vivo: 
https://hernandezguzmanconcepcionescarleth.github.io/A3.ComponenteVisual/
# RoseNotify - Componente Visual de Notificaciones

## ¿Qué es RoseNotify?

RoseNotify es un componente visual que realicé utilizando HTML, CSS y JavaScript.

La idea de este componente es poder mostrar notificaciones dentro de una página web de una forma sencilla y sin utilizar frameworks.

Cuenta con cuatro tipos de notificaciones: éxito, error, advertencia e información.

---
## Instalación

Para utilizar **RoseNotify** en mi proyecto primero tengo que agregar los archivos CSS y JavaScript del componente.

El archivo CSS lo agrego dentro de la etiqueta `<head>`:

```html
<link rel="stylesheet" href="css/componente.css">
```

Después agrego el archivo JavaScript antes de cerrar la etiqueta `</body>`:

```html
<script src="js/componente.js"></script>
```

Un ejemplo de cómo quedaría en una página HTML es el siguiente:

```html
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Componente Visual</title>

    <link rel="stylesheet" href="css/componente.css">
</head>

<body>

    <h1>Componente Visual de Notificaciones</h1>

    <script src="js/componente.js"></script>

</body>

</html>
```

---

## Uso del componente

Para mostrar las notificaciones utilizo la función `RoseNotify.mostrar()`.

Su estructura es la siguiente:

```javascript
RoseNotify.mostrar("titulo", "mensaje", "tipo");
```

En esta función puedo cambiar el título, el mensaje y el tipo de notificación dependiendo de lo que necesite mostrar.

---

## Tipos de notificaciones

Mi componente cuenta con **4 tipos de notificaciones**: éxito, error, advertencia e información.

### 1. Notificación de éxito

La utilizo para indicar que una acción se realizó correctamente.

```javascript
RoseNotify.mostrar(
    "Datos guardados",
    "El registro se realizó correctamente.",
    "exito"
);
```

Al ejecutarla aparece una notificación de color verde indicando que los datos fueron guardados correctamente.

### 2. Notificación de error

La utilizo cuando ocurre algún error o cuando una operación no puede realizarse correctamente.

```javascript
RoseNotify.mostrar(
    "Error de registro",
    "Faltan datos por completar.",
    "error"
);
```

Esta notificación aparece en color rojo para indicar que existe un problema.

### 3. Notificación de advertencia

La utilizo cuando quiero avisarle al usuario que debe revisar algo antes de continuar.

```javascript
RoseNotify.mostrar(
    "¡Cuidado!",
    "Verifica tus datos antes de continuar.",
    "advertencia"
);
```

La notificación aparece en color amarillo para diferenciarla de los demás mensajes.

### 4. Notificación de información

La utilizo para mostrar información o algún mensaje general al usuario.

```javascript
RoseNotify.mostrar(
    "Nuevo mensaje",
    "Tienes una nueva notificación.",
    "informacion"
);
```

Esta notificación aparece en color morado.

---

## Prueba desde la consola

También probé mi componente directamente desde la consola del navegador para comprobar que las notificaciones pueden ejecutarse utilizando JavaScript y no solamente mediante los botones de la página.

Para realizar la prueba utilicé las siguientes instrucciones:

```javascript
RoseNotify.mostrar("Datos guardados", "El registro se realizó correctamente.", "exito");

RoseNotify.mostrar("Error de registro", "Faltan datos por completar.", "error");

RoseNotify.mostrar("¡Cuidado!", "Verifica tus datos antes de continuar.", "advertencia");

RoseNotify.mostrar("Nuevo mensaje", "Tienes una nueva notificación.", "informacion");
```

Al ejecutar las instrucciones se muestran las cuatro notificaciones al mismo tiempo, cada una con su propio color, icono, título y mensaje.

---

## Funcionamiento con botones

En mi página principal también agregué cuatro botones para poder probar fácilmente cada tipo de notificación:

- ✓ Éxito
- × Error
- ! Advertencia
- i Información

Cada botón llama una función de JavaScript que utiliza `RoseNotify.mostrar()`.

Por ejemplo, para la notificación de éxito:

```javascript
function mostrarExito() {
    RoseNotify.mostrar(
        "Datos guardados",
        "El registro se realizó correctamente.",
        "exito"
    );
}
```

De la misma manera se pueden crear las funciones para los demás botones:

```javascript
mostrarExito();
mostrarError();
mostrarAdvertencia();
mostrarInformacion();
```

De esta forma puedo probar cada notificación desde la interfaz de mi página o directamente desde la consola del navegador.

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

## Autor: 
https://github.com/HernandezGuzmanConcepcionEscarleth/A3.ComponenteVisual

## Video Demostrativo:










